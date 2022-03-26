import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Items = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('MOCK_DATA.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    const handleAddToCart = cars => {
        let newCart;
        const existedInCart = cart.find(item => item.id === cars.id);
        if (!existedInCart && cart.length <4) {
            newCart = [...cart, cars];
            setCart(newCart);
        }
        else if(cart.length >=4){
            alert('Cannot add more than 4!');
        }
        else {
            newCart = [...cart];
            alert('already added');
            setCart(newCart);
        }
    };
    const chooseOne = () => {
        let newCart;
        const random = Math.round(Math.random() * cart.length);
        {
            const randomCars = cart[random];
            if (randomCars) {
                newCart = [randomCars];
                setCart(newCart);
            }
        }
        console.log(random);
    }
    return (
        <div className='conatiner'>
            <div className="row m-0 p-0">
                <div className=" order-sm-2 col-lg-4">
                    <div className="cart shadow-lg">
                        <h2 className='mb-4'>Selected Cars</h2>
                        {
                            cart.map(item => <Cart key={item.id} cart={item} />)
                        }
                        <button className='btn btn-outline-success btn-lg me-2 mt-4' onClick={chooseOne}>Choose 1 for me</button>
                        <button onClick={() => {
                            setCart([]);
                        }} className='btn btn-lg btn-outline-danger mt-4'>Choose again</button>
                    </div>
                </div>
                <div className="order-sm-1 col-lg-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">{
                        cars.map(car =>
                            <Product key={car.id} car={car} handleAddToCart={handleAddToCart} />)
                    }</div>

                </div>

            </div>
        </div>
    );
};

export default Items;