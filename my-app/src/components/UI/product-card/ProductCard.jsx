import React from 'react'
import { Link } from "react-router-dom";




import "../../../styles/product-card.css";



const ProductCard = () => {
  return (
    <div className="product__item">
    <div className="product__img">
      <img src='' alt="product-img" className="w-50" />
    </div>

    <div className="product__content">
      <h5>
        <Link>Burger</Link>
      </h5>
      <div className=" d-flex align-items-center justify-content-between ">
        <span className="product__price">$24.00</span>
        <button className="addTOCart__btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard