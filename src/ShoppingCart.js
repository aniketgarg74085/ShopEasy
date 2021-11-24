import React from 'react'

function ShoppingCart() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="./images/perfume.jpg" />
                <div>
                    <h2 classNam="checkout__title">Your Shopping Basket</h2>
                    <div className="checkoutProduct">
                        <img src="./images/phone.jpeg" className="checkoutProduct__img"/>
                        <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">Product Name </p>
                            <p className="checkoutProduct__price">
                                <strong>₹599.00 * 2 = ₹599.00</strong>
                            </p>
                            <button>Remove from Basket</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal (2 items): <strong>₹1298.00</strong> </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCart
