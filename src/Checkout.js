import { Input } from '@material-ui/core'
import React from 'react'
import "./css/checkout.css"

function Checkout() {
    return (
        <div className="checkout_wrap">
            <h2>Shipping Details</h2>
            <br/>

            <form>
                <div className="checkout__form">

                    <div className="checkout__column">
                        <label>First Name*</label>
                        <Input required name="firstname" />
                    </div>

                    <div className="checkout__column">
                        <label>Last Name*</label>
                        <Input required name="lastname" />
                    </div>

                    <div className="checkout__column">
                        <label>Address*</label>
                        <Input required name="address" />
                    </div>

                    <div className="checkout__column">
                        <label>Email*</label>
                        <Input required name="email" />
                    </div>

                    <div className="checkout__column">
                        <label>City</label>
                        <Input required name="city" />
                    </div>

                    <div className="checkout__column">
                        <label>Zip Code</label>
                        <Input required name="zipcode" />
                    </div>

                    <div className="checkout__column">
                        <label>Shipping Country</label>
                        <select name="country">
                            <option>India</option>
                        </select>
                    </div>

                    <div className="checkout__column">
                        <label>Shipping Subdivision</label>
                        <select name="subdivision">
                            <option>Delhi</option>
                        </select>
                    </div>

                    <div className="checkout__column">
                        <label>&nbsp;</label>
                        <button>Pay Now</button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Checkout
