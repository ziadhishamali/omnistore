import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <a className="nav-bar-item" href="/#">Home</a>
            <div className="drop-down">
                <a className="nav-bar-item" href="/#">Kids</a>
                <div className="drop-down-content">
                    <a className="drop-down-item" href="/#">shoes</a>
                    <a className="drop-down-item" href="/#">jeans</a>
                    <a className="drop-down-item" href="/#">shirts</a>
                    <a className="drop-down-item" href="/#">shorts</a>
                    <a className="drop-down-item" href="/#">dress shoes</a>
                    <a className="drop-down-item" href="/#">trainings</a>
                </div>
            </div>
            <div className="drop-down">
                <a className="nav-bar-item active" href="/#">Men</a>
                <div className="drop-down-content">
                    <a className="drop-down-item" href="/#">shoes</a>
                    <a className="drop-down-item" href="/#">jeans</a>
                    <a className="drop-down-item" href="/#">shirts</a>
                    <a className="drop-down-item" href="/#">shorts</a>
                    <a className="drop-down-item" href="/#">dress shoes</a>
                    <a className="drop-down-item" href="/#">trainings</a>
                </div>
            </div>
            <div className="drop-down">
                <a className="nav-bar-item" href="/#">Women</a>
                <div className="drop-down-content">
                    <a className="drop-down-item" href="/#">shoes</a>
                    <a className="drop-down-item" href="/#">jeans</a>
                    <a className="drop-down-item" href="/#">shirts</a>
                    <a className="drop-down-item" href="/#">shorts</a>
                    <a className="drop-down-item" href="/#">dress shoes</a>
                    <a className="drop-down-item" href="/#">trainings</a>
                </div>
            </div>
            <a className="nav-bar-item" href="/#">Brands</a>
            <a className="nav-bar-item" href="/#">Blog</a>
            <a className="nav-bar-item" href="/#">Community</a>
            <a className="nav-bar-item" href="/#">Delivery</a>
            <a className="nav-bar-item" href="/#">Stores</a>
            <a className="nav-bar-item" href="/#">Contacts</a>
        </div>
    )
}

export default NavBar;