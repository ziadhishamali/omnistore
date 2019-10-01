import React from 'react';
import star from '../icons/star-3.svg';

const TopSelling = ({topSellingItems}) => {

    const showItems = topSellingItems ? (
        topSellingItems.map((item, idx) => {
            return (
                <div key={idx} className="top-selling-item clickable">
                    <div className="image-container">
                        <img src={item.image} alt="img"/>
                        <div className="top-right-triangle"></div>
                        <div className="top-selling-price">{"$ " + item.price}</div>
                        <img src={star} alt="star"/>
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