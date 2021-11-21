import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <>
        <div className="header">

            <img src="/images/logo.png" className="header_logo" className="header__logo"/>

            <div className="header__search">
                <input type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionone">Hello Sam</span>
                    <span className="header__optiontwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionone">Return</span>
                    <span className="header__optiontwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionone">Your</span>
                    <span className="header__optiontwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingCartIcon/>
                    <span>
                        2
                    </span>
                </div>
            </div>
        </div>
        
        <div className="header__bottom">
            <ul>
                <li>All</li>
                <li>Appliances</li>
                <li>Electronics</li>
                <li>Essentials</li>
                <li>Fashion</li>
                <li>Home</li>
                <li>Mobiles</li>
                <li>
                    <img src="https://www.tomshw.it/images/images/2021/06/amazon-prime-169380.jpg"
                    className="amazonprime__image"/>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Header
