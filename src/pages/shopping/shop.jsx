import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
    return (
        <div className='shop'>
            
            <div className='shopTitle'>
                <h1>Tech Hunter Shop</h1>
            </div>
            {""}
            <div className='products'>
                {PRODUCTS.map((products) => {
                    // console.log(products);
                    return (
                        <Product 
                            key={products.id} 
                            data={products} 
                        />
                    )
                    })}
            </div>

        </div>
    )
}
