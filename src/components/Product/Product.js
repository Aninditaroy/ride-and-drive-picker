import React from 'react';
import './Product.css';
const Product = ({car}) => {
    const {img,car_model,price} = car;
    return (
        <div className='container-fluid mt-5'>
            <div className="card shadow-lg border-secondary mb-3 ">
                <img src={img} alt="" />
                <div className="card-body text-secondary">
                    <h1>{car_model}</h1>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;