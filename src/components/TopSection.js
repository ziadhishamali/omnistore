import React from 'react';
import star from '../icons/star-3.svg';

const TopSection = ({featuredItems, topSellingBrands}) => {

    const showItems = featuredItems ? (
        featuredItems.map((item, idx) => {
            return (
                <div key={idx} className="featured-item">
                    <div className="featured-item-image">
                        <img src={item.image} alt="img"/>
                        <div className="top-right-triangle"></div>
                        <img src={star} alt="star"/>
                    </div>
                    <span className="item-name">{item.name}</span>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    const showBrands = topSellingBrands ? (
        topSellingBrands.map((brand, idx) => {
            return (
                <div key={idx} className="brand-item">
                    <img src={brand.image} alt="img"/>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div className="top-section">
            <div className="featured-items">
                <div className="title">
                    <div className="title-container-left">
                        <span>Featured items</span>
                    </div>
                    <div className="title-container-right">
                        <a href="/#">{"+ view all items"}</a>
                    </div>
                </div>
                <div className="featured-items-container">
                    {showItems}
                </div>
            </div>

            <div className="top-selling-brands">
                <div className="title-container-left">
                    <span>Top selling brands</span>
                </div>
                <div className="brand-items-container">
                    {showBrands}
                </div>
                <div className="title-container-left">
                    <a href="/#">{"+ view all items"}</a>
                </div>
            </div>
            
        </div>
    )
}

export default TopSection;