import React, { useState,useRef,useEffect } from "react"
import './productCarousel.css'
import shirt1 from '../../assets/images/blue-striped-shirt.jpg'
import shirt2 from '../../assets/images/white-btn-shirt.jpg'
import shirt3 from '../../assets/images/red-plaid-shirt.jpg'
import saree1 from '../../assets/images/saree.jpg'
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
            image: saree1,
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
          {
            id: 17,
            name: "Cute Cartoon T-Shirt",
            price: 14.99,
            size: "M",
            color: "Blue",
            image: "cute_cartoon_tshirt.jpg",
            description: "A cute cartoon-themed t-shirt for kids.",
            stock: 10,
            category: "kids",
          },
          {
            id: 18,
            name: "Colorful Summer Dress",
            price: 19.99,
            size: "S",
            color: "Pink",
            image: "colorful_summer_dress.jpg",
            description: "A vibrant and colorful summer dress for girls.",
            stock: 8,
            category: "kids",
          },
          {
            id: 19,
            name: "Cool Denim Shorts",
            price: 17.99,
            size: "L",
            color: "Blue",
            image: "cool_denim_shorts.jpg",
            description: "Stylish denim shorts for boys, perfect for summer.",
            stock: 12,
            category: "kids",
          },
          {
            id: 20,
            name: "Elegant Party Dress",
            price: 24.99,
            size: "M",
            color: "Red",
            image: "elegant_party_dress.jpg",
            description: "An elegant and charming party dress for girls.",
            stock: 6,
            category: "kids",
          },
          {
            id: 21,
            name: "Sporty Jogging Set",
            price: 22.99,
            size: "L",
            color: "Gray",
            image: "sporty_jogging_set.jpg",
            description: "A comfortable and sporty jogging set for active kids.",
            stock: 15,
            category: "kids",
          },
          {
            id: 22,
            name: "Casual Striped T-Shirt",
            price: 12.99,
            size: "S",
            color: "Green",
            image: "casual_striped_tshirt.jpg",
            description: "A casual striped t-shirt for boys, great for everyday wear.",
            stock: 20,
            category: "kids",
          },
          {
            id: 23,
            name: "Party Wear Bowtie",
            price: 9.99,
            color: "Black",
            image: "party_wear_bowtie.jpg",
            description: "A cute and stylish bowtie for kids to wear at parties.",
            stock: 10,
            category: "kids",
          },
          {
            id: 24,
            name: "Floral Skirt",
            price: 16.99,
            size: "M",
            color: "Yellow",
            image: "floral_skirt.jpg",
            description: "A lovely floral skirt for girls, perfect for spring.",
            stock: 18,
            category: "kids",
          },
          {
            id: 25,
            name: "Stylish Leather Handbag",
            price: 49.99,
            color: "Brown",
            image: "stylish_leather_handbag.jpg",
            description: "A stylish and spacious leather handbag for everyday use.",
            stock: 20,
            category: "accessories",
          },
          {
            id: 26,
            name: "Classic Aviator Sunglasses",
            price: 29.99,
            color: "Black",
            image: "classic_aviator_sunglasses.jpg",
            description: "Classic aviator sunglasses for a timeless look.",
            stock: 15,
            category: "accessories",
          },
          {
            id: 27,
            name: "Elegant Pearl Necklace",
            price: 39.99,
            color: "White",
            image: "elegant_pearl_necklace.jpg",
            description: "An elegant pearl necklace to add sophistication to any outfit.",
            stock: 12,
            category: "accessories",
          },
          {
            id: 28,
            name: "Stylish Leather Belt",
            price: 24.99,
            color: "Black",
            image: "stylish_leather_belt.jpg",
            description: "A stylish leather belt to complement any attire.",
            stock: 18,
            category: "accessories",
          },
          {
            id: 29,
            name: "Chic Beanie Hat",
            price: 14.99,
            color: "Gray",
            image: "chic_beanie_hat.jpg",
            description: "A chic and cozy beanie hat for the winter season.",
            stock: 25,
            category: "accessories",
          },
          {
            id: 30,
            name: "Trendy Crossbody Bag",
            price: 34.99,
            color: "Pink",
            image: "trendy_crossbody_bag.jpg",
            description: "A trendy and versatile crossbody bag for everyday use.",
            stock: 20,
            category: "accessories",
          },
          {
            id: 31,
            name: "Fashionable Scarf",
            price: 19.99,
            color: "Blue",
            image: "fashionable_scarf.jpg",
            description: "A fashionable scarf to elevate your style in any season.",
            stock: 15,
            category: "accessories",
          },
          {
            id: 32,
            name: "Elegant Pearl Earrings",
            price: 27.99,
            color: "White",
            image: "elegant_pearl_earrings.jpg",
            description: "Elegant pearl earrings to add a touch of glamour to your look.",
            stock: 18,
            category: "accessories",
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