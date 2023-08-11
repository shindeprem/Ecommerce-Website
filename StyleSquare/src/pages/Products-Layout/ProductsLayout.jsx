import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

const ProductsLayout = ()=>{
    return(
        <>
            <Header className="header-section"/>
            <Outlet/>
            <Footer className="footer-section"/>
        </>
    )
}

export default ProductsLayout;