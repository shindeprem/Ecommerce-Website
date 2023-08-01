import React, { useState,useRef,useEffect } from "react"
import './productCarousel.css'
import shirt1 from '../../assets/images/blue-striped-shirt.jpg'
import shirt2 from '../../assets/images/white-btn-shirt.jpg'
import shirt3 from '../../assets/images/red-plaid-shirt.jpg'
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'

const ProductsCarousel=(prop)=>{
    //console.log(prop);

    const productsContainerRef = useRef(null);

    const ProductsList = [
        {
          id: 1,
          name: "Blue Striped Shirt",
          price: 29.99,
          size: "M",
          color: "Blue",
          image: shirt1,
          description: "A stylish blue striped shirt perfect for any occasion.",
          stock: 10,
          category:"shirt"
        },
        {
          id: 2,
          name: "White Button-Up Shirt",
          price: 34.99,
          size: "L",
          color: "White",
          image: shirt2,
          description: "A classic white button-up shirt for a clean and sophisticated look.",
          stock: 5,
          category:"shirt"
        },
        {
          id: 3,
          name: "Red Plaid Shirt",
          price: 27.99,
          size: "XL",
          color: "Red",
          image: shirt3,
          description: "A trendy red plaid shirt for a casual yet stylish outfit.",
          stock: 15,
          category:"shirt"
        },
        {
          id: 4,
          name: "Black V-Neck Shirt",
          price: 21.99,
          size: "S",
          color: "Black",
          image: "black_v_neck_shirt.jpg",
          description: "A versatile black V-neck shirt suitable for various occasions.",
          stock: 8,
          category:"shirt"
        },
        {
          id: 5,
          name: "Green Polo Shirt",
          price: 32.99,
          size: "M",
          color: "Green",
          image: "green_polo_shirt.jpg",
          description: "A comfortable and stylish green polo shirt.",
          stock: 12,
          category:"shirt"
        },
        {
          id: 6,
          name: "Yellow Graphic Tee",
          price: 19.99,
          size: "L",
          color: "Yellow",
          image: "yellow_graphic_tee.jpg",
          description: "A vibrant yellow graphic tee with a unique design.",
          stock: 20,
          category:"shirt"
        },
        {
          id: 7,
          name: "Navy Blue Henley Shirt",
          price: 25.99,
          size: "XL",
          color: "Navy Blue",
          image: "navy_blue_henley_shirt.jpg",
          description: "A comfortable navy blue henley shirt for a casual look.",
          stock: 18,
          category:"shirt"
        },
        {
          id: 8,
          name: "Pink Oxford Shirt",
          price: 28.99,
          size: "M",
          color: "Pink",
          image: "pink_oxford_shirt.jpg",
          description: "A charming pink oxford shirt perfect for semi-formal events.",
          stock: 7,
          category:"shirt"
        },
        {
            id: 9,
            name: "Elegant Silk Saree",
            price: 899.99,
            color: "Red",
            image: "elegant_silk_saree.jpg",
            description: "An exquisite silk saree with intricate designs, perfect for special occasions.",
            stock: 10,
            category:"saree"
          },
          {
            id: 10,
            name: "Cotton Casual Saree",
            price: 599.99,
            color: "Blue",
            image: "cotton_casual_saree.jpg",
            description: "A comfortable and stylish cotton saree for casual wear.",
            stock: 5,
            category:"saree"
          },
          {
            id: 11,
            name: "Banarasi Silk Saree",
            price: 1299.99,
            color: "Gold",
            image: "banarasi_silk_saree.jpg",
            description: "A mesmerizing Banarasi silk saree with intricate golden patterns.",
            stock: 15,
            category:"saree"
          },
          {
            id: 12,
            name: "Georgette Party Saree",
            price: 799.99,
            color: "Pink",
            image: "georgette_party_saree.jpg",
            description: "A stunning georgette saree for parties and celebrations.",
            stock: 8,
            category:"saree"
          },
          {
            id: 13,
            name: "Chiffon Designer Saree",
            price: 899.99,
            color: "Green",
            image: "chiffon_designer_saree.jpg",
            description: "A fashionable chiffon saree with designer motifs for a trendy look.",
            stock: 12,
            category:"saree"
          },
          {
            id: 14,
            name: "Embroidered Net Saree",
            price: 1099.99,
            color: "Black",
            image: "embroidered_net_saree.jpg",
            description: "An elegant net saree with intricate embroidery for special occasions.",
            stock: 20,
            category:"saree"
          },
          {
            id: 15,
            name: "Traditional Cotton Silk Saree",
            price: 999.99,
            color: "Yellow",
            image: "traditional_cotton_silk_saree.jpg",
            description: "A traditional cotton silk saree for a timeless ethnic look.",
            stock: 18,
            category:"saree"
          },
          {
            id: 16,
            name: "Printed Linen Saree",
            price: 699.99,
            color: "Orange",
            image: "printed_linen_saree.jpg",
            description: "A comfortable and stylish printed linen saree for everyday wear.",
            stock: 7,
            category:"saree"
          },
    ];

    const [carouselList,setCarouselList] = useState([])

    useEffect(() => {
        setCarouselList(ProductsList.filter((product) => product.category.includes(prop.category)));
    }, [prop.category]);

    const handleScrollRight = () =>{
        const scrollAmount = 260; 
        productsContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }

    const handleScrollLeft = () =>{
        const scrollAmount = 260; 
        productsContainerRef.current.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    }
      
    return(
        <div className="products-carousel">
            <div className="scrollDiv">

                <button className="move-left-btn move-products-btn" onClick={handleScrollLeft}><AiFillCaretLeft/></button>

                <div className="itemsContainer" ref={productsContainerRef}>
                    {carouselList.map((product)=>{
                        return(
                            <div className="item-card" key={product.id}>
                                <div className="img-container">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="info-container">
                                    <div className="card-heading">
                                    {product.name}
                                    </div>
                                    <div className="product-price">
                                    ${product.price}
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>

                <button className="move-right-btn move-products-btn" onClick={handleScrollRight}><AiFillCaretRight/></button>
            </div>
        </div>
    )
}
export default ProductsCarousel;