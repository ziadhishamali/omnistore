import React from 'react';
import TopSection from './TopSection';
import BodySection from './BodySection';
import BottomSection from './BottomSection';

const Content = ({featuredItems, topSellingBrands, popularCategories, whatsHot, topSellingItems}) => {
    return (
        <div className="content">
            <TopSection featuredItems={featuredItems} topSellingBrands={topSellingBrands} />
            <BodySection popularCategories={popularCategories} whatsHot={whatsHot} topSellingItems={topSellingItems} />
            <BottomSection />
        </div>
    )
}

export default Content;