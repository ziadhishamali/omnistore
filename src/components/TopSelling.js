import React from 'react';
import star from '../icons/star-3.svg';
import search from '../icons/search.svg';
import heart from '../icons/heart-2.svg';
import shoppingCart from '../icons/shopping-cart-2.svg';

const TopSelling = ({topSellingItems}) => {

    const getStar = (idx) => {
        if (idx === 0) {
            return (
                <div>
                    <div className="top-right-triangle"></div>
                    <img src={star} alt="star"/>
                </div>
            )
        }
    }

    const showItems = topSellingItems ? (
        topSellingItems.map((item, idx) => {
            return (
                <div key={idx} className="top-selling-item clickable">
                    <div className="image-container">
                        <img src={item.image} alt="img"/>
                        <div className="top-selling-price">{"$ " + item.price}</div>
                        {getStar(idx)}
                    </div>
                    <div className="top-selling-details">
                        <div className="top-right-triangle"></div>
                        <img className="details-star" src={star} alt="star"/>
                        <div className="details-div-1">
                            <img className="details-search-img" src={search} alt="search"/>
                        </div>
                        <div className="details-div-2">
                            <div className="top-selling-price-2">{"$ " + item.price}</div>
                            <div className="image-container-2">
                                <img className="details-img" src={shoppingCart} alt="shopping"/>
                            </div>

                            <div className="image-container-2 active">
                                <img className="details-img" src={heart} alt="heart"/>
                            </div>
                            <span className="details-text">View Details</span>
                        </div>
                    </div>
                    <div className="title title-container-left top-selling-name">
                        <span>{item.name}</span>
                    </div>
                    <div className="title title-container-left top-selling-description">
                        <span>{item.description}</span>
                    </div>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div className="top-selling-items">
            {showItems}
        </div>
    )
}

export default TopSelling;