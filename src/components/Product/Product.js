import React from 'react';
import './Product.css';
import {BsCartPlus} from 'react-icons/bs';
const Product = ({ car,handleAddToCart }) => {
    const { img, car_model, price } = car;
    return (
       <div className=''>
            <div className='container mt-5 h-100'>
            <div className="card shadow-lg border-secondary mb-3 h-100">
                <img src={img} alt="" className='h-75'/>
                <div className="card-body text-secondary">
                    <h1>{car_model}</h1>
                    <h2>{price}</h2>
                </div>
                <div className="card-footer mb-3">
                    <button onClick={() =>handleAddToCart(car)} className='btn cart-btn'><span className='btn-text'>ADD TO CART </span><BsCartPlus className="icon"/></button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Product;