import React from 'react';
import ShowCategory from './ShowCategory';
import ShowWhats from './ShowWhats';
import SearchBar from './SearchBar';
import TopSelling from './TopSelling';
import Paging from './Paging';

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
                <div className="title">
                    <div className="title-container-left">
                        <span>Top selling items</span>
                    </div>
                    <div className="title-container-right">
                        <a href="/#">{"+ view all items"}</a>
                    </div>
                </div>
                <SearchBar />
                <TopSelling topSellingItems={topSellingItems} />
                <Paging />
            </div>
        </div>
    )
}

export default BodySection;