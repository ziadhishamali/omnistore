import React from 'react';
import facebook from '../icons/facebook.png';
import twitter from '../icons/twitter.svg';
import rss from '../icons/rss.svg';

const BottomSection = () => {
    return (
        <div className="bottom-section">
            <div className="bottom-bar">
                <div className="bottom-bar-section-1">
                    <a className="nav-bar-item" href="/#">Blog</a>
                    <a className="nav-bar-item" href="/#">About</a>
                    <a className="nav-bar-item" href="/#">Contact</a>
                    <a className="nav-bar-item" href="/#">Press</a>
                    <a className="nav-bar-item" href="/#">Developers</a>
                    <a className="nav-bar-item" href="/#">Careers</a>
                    <a className="nav-bar-item" href="/#">Terms</a>
                    <a className="nav-bar-item" href="/#">Privacy</a>
                    <a className="nav-bar-item" href="/#">Copyright</a>
                </div>
                <div className="bottom-bar-section-2">
                    <span className="bottom-connect">Connect with us</span>
                    <div className="image-container-bottom main">
                        <img src={facebook} alt="facebook"/>
                    </div>
                    <div className="image-container-bottom">
                        <img src={twitter} alt="twitter"/>
                    </div>
                    <div className="image-container-bottom">
                        <img src={rss} alt="RSS"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="copyright">&copy; 2019 Omnistore Inc.</div>
            </div>
        </div>
    )
}

export default BottomSection;