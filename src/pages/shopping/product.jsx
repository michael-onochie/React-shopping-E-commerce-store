import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';


export const Product = ({ data }) => {
    const {cartItems, addToCart} = useContext(ShopContext);

    const cartItemAmount = cartItems[data.id];
    return (
        <div className='product'>
            <img src={data.productImage} alt="Product Image" />
            <div className='description'>
                <p>
                    <b>{data.productName}</b>
                </p>
                <p>${data.price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(data.id)}>
                Add to cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
            </button>

        </div>
    )
}
