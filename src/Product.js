import React from 'react'
import "./css/product.css"

function Product() {
    return (
        <div className="products_wrap">
            <div className="product">
                <img src ="/images/phone.jpeg"/>
                <h3>Product Name</h3>
                <p>Product Price</p>
                <button>Add to Cart</button>
            </div>
            <div className="product">
                <img src ="/images/phone.jpeg"/>
                <h3>Product Name</h3>
                <p>Product Price</p>
                <button>Add to Cart</button>
            </div>
            <div className="product">
                <img src ="/images/phone.jpeg"/>
                <h3>Product Name</h3>
                <p>Product Price</p>
                <button>Add to Cart</button>
            </div>
            <div className="product">
                <img src ="/images/phone.jpeg"/>
                <h3>Product Name</h3>
                <p>Product Price</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
