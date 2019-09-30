import React from 'react';
import langUk from '../icons/lang-uk.svg';
import chat from '../icons/chat-2.svg';
import star from '../icons/star-3.svg';
import heart from '../icons/heart-2.svg';
import shoppingCart from '../icons/shopping-cart-2.svg';
import locked from '../icons/lock-2.svg';
import sunflower from '../icons/sunflower.svg';

const UpperNav = () => {
    return (
        <div className="upper-nav">
            <div className="brand">
                <img src={sunflower} alt="brand" className="brand-image clickable"/>
                <span className="brand-name"><span className="bold">OMNI</span>STORE</span>
            </div>
            <img src={langUk} alt="lang-uk" className="upper-nav-icon lang clickable"/>
            <span className="greeting">Good Evening. <span className="greeting-name">versesdesign</span></span>
            <img src={chat} alt="chat" className="upper-nav-icon clickable"/>
            <img src={star} alt="star" className="upper-nav-icon clickable"/>
            <img src={heart} alt="heart" className="upper-nav-icon clickable"/>
            <img src={shoppingCart} alt="shopping-cart" className="upper-nav-icon clickable active"/>
            <img src={locked} alt="locked" className="upper-nav-icon clickable"/>
        </div>
    )
}

export default UpperNav;