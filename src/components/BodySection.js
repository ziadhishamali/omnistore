import React from 'react';
import ShowCategory from './ShowCategory';
import ShowWhats from './ShowWhats';

const BodySection = ({popularCategories, whatsHot, topSellingItems}) => {

    return (
        <div className="body-section">
            <div className="left-section">
                <div className="title title-container-left">
                    <span>Popular categories</span>
                </div>
                <ShowCategory popularCategories={popularCategories} />

                <div className="title title-container-left">
                    <span>What's hot</span>
                </div>
                <ShowWhats whatsHot={whatsHot} />

                <div className="title title-container-left">
                    <span>Promotions</span>
                </div>
                <div className="promotions">NO PROMOTIONS A.T.M</div>
                <div className="promotions-2">NO PROMOTIONS A.T.M</div>
            </div>

            <div className="right-section">

            </div>
        </div>
    )
}

export default BodySection;