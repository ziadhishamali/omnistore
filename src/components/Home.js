import React, { Component } from 'react';
import UpperNav from './UpperNav';
import Cover from './Cover';
import NavBar from './NavBar';
import { db } from './firebase';
import Content from './Content';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let featuredItems = [];
        let topSellingBrands = [];
        let popularCategories = [];
        let whatsHot = [];
        let topSellingItems = [];
        db.collection("featured-items").limit(4).onSnapshot(snapshotQuery => {
            snapshotQuery.forEach(doc => {
                featuredItems.push(doc.data());
            })
            this.setState({featuredItems})
        });

        db.collection("top-selling-brands").limit(1).onSnapshot(snapshotQuery => {
            snapshotQuery.forEach(doc => {
                topSellingBrands.push(doc.data());
            })
            this.setState({topSellingBrands})
        });

        db.collection("popular-categories").onSnapshot(snapshotQuery => {
            snapshotQuery.forEach(doc => {
                popularCategories.push(doc.data());
            })
            this.setState({popularCategories})
        });

        db.collection("whats-hot").onSnapshot(snapshotQuery => {
            snapshotQuery.forEach(doc => {
                whatsHot.push(doc.data());
            })
            this.setState({whatsHot})
        });

        db.collection("top-selling-items").orderBy("priority", "asc").onSnapshot(snapshotQuery => {
            snapshotQuery.forEach(doc => {
                topSellingItems.push(doc.data());
            })
            this.setState({topSellingItems})
        });
    }

    render() { 
        return (
            <div>
                <UpperNav />
                <Cover />
                <NavBar />
                <Content
                    featuredItems={this.state.featuredItems}
                    topSellingBrands={this.state.topSellingBrands}
                    popularCategories={this.state.popularCategories}
                    whatsHot={this.state.whatsHot}
                    topSellingItems={this.state.topSellingItems}
                />
            </div>
        );
    }
}
 
export default Home;