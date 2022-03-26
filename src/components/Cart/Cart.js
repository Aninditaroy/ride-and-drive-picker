import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    const { car_model, img } = cart;
    console.log(car_model);
    return (
            <div className='col-12 d-flex align-items-center mb-3'>
                <img src={img} alt="" className='w-25 rounded-pill' />
                <h4 className='ps-5'>{car_model}</h4>
            </div>
    );
};

export default Cart;