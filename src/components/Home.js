import React, { Component } from 'react';
import UpperNav from './UpperNav';
import Cover from './Cover';
import NavBar from './NavBar';
import { db, storage } from './firebase';
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
        let coverImages = [];
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

        storage.ref('images/suit-1.png').getDownloadURL().then(url => {
            coverImages.push(url);
            storage.ref('images/suit-2.png').getDownloadURL().then(url => {
                coverImages.push(url);
                storage.ref('images/suit-3.png').getDownloadURL().then(url => {
                    coverImages.push(url);
                    this.setState({coverImages});
                });
            });
        });
    }

    render() { 
        return (
            <div className="home">
                <UpperNav />
                <Cover coverImages={this.state.coverImages} />
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