import React from 'react';
import './pagination.css';

const PagesComp = ({ setcurrentPage, productList ,currentPage}) => {
  const productsPerPage = 12;

  const handlePageClick = (index) => {
    setcurrentPage(index + 1);
  };

  return (
    <div className="parent-container">
      {Array.from({ length: Math.ceil(productList.length / productsPerPage) }, (_, index) => (
        <button key={index} onClick={() => handlePageClick(index)} style={currentPage==index+1?{backgroundColor:'#2874F0',color:'white'}:{backgroundColor:'white'}}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PagesComp;
