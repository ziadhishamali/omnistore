import React from 'react';
import TopSection from './TopSection';

const Content = ({featuredItems, topSellingBrands, popularCategories, whatsHot, topSellingItems}) => {
    return (
        <div className="content">
            <TopSection featuredItems={featuredItems} topSellingBrands={topSellingBrands}/>
        </div>
    )
}

export default Content;