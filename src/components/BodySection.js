import React, { Component } from 'react';
import ShowCategory from './ShowCategory';
import ShowWhats from './ShowWhats';
import SearchBar from './SearchBar';
import TopSelling from './TopSelling';
import Paging from './Paging';

class BodySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        }
    }

    changeCurrentPage = (currentPage) => {
        if (currentPage < 0) {
            currentPage = 0;
        }

        if (currentPage > 5) {
            currentPage = 5;
        }
        this.setState({currentPage});
    }

    render() { 
        return (
            <div className="body-section">
                <div className="left-section">
                    <div className="title title-container-left">
                        <span>Popular categories</span>
                    </div>
                    <ShowCategory popularCategories={this.props.popularCategories} />
    
                    <div className="title title-container-left">
                        <span>What's hot</span>
                    </div>
                    <ShowWhats whatsHot={this.props.whatsHot} />
    
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
                    <TopSelling topSellingItems={this.props.topSellingItems} />
                    <Paging current={this.state.currentPage} changeCurrentPage={this.changeCurrentPage}/>
                </div>
            </div>
        );
    }
}
 
export default BodySection;