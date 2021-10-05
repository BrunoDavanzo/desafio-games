import React from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = cartItems.qty * 10;
    console.log(parseInt(cartItems.qty))
    const totalShippingPrice = itemsPrice > 250 ? 0 : shippingPrice;
    const totalPrice = itemsPrice + totalShippingPrice;
 
    return (
        <aside>
            <h1>Cart Items</h1>
            {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="name">{item.name}</div>
                        <div className="button">
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                        </div>
                        <div className="text-right">
                            {item.qty} x R${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className="row">
                        <div>Items Price</div>
                        <div>R${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div>Shipping Price</div>
                        <div>R${totalShippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div><strong> Total Price </strong></div>
                        <div><strong> R${totalPrice.toFixed(2)} </strong></div>
                    </div>
                    </>
                )}
        </aside>
    )
}