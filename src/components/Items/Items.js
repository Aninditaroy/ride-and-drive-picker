import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Items = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = cars =>{
        const newCart = [...cart,cars];
        setCart(newCart);
    };
    useEffect(() => {
        fetch('MOCK_DATA.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    
    return (
        <div className='conatiner'>
            <div className="row m-0 p-0">
                <div className=" order-sm-2 col-lg-4">
                   <div className="cart shadow-lg">
                   <h2 className='mb-4'>Selected Cars</h2>
                    {
                        cart.map(item => <Cart key={item.id} cart={item}/>)
                    }
                   </div>
                </div>
                <div className="order-sm-1 col-lg-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">{
                        cars.map(car => 
                        <Product key={car.id} car={car} handleAddToCart={handleAddToCart}/>)
                    }</div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Items;