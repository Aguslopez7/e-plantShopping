
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { PiPlant } from "react-icons/pi";

function App() {

    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
    };

    return (
        <div className="app-container">
            <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                <div className="background-image"></div>
                <div className="content">
                    <div className="landing_content">
                        <PiPlant fontSize={100} color='#88a65e'/>
                        <h1>Welcome To Paradise Nursery</h1>
                        <div className="divider"></div>
                        <p className='slogan'>Where <span style={{color:'#88a65e', fontWeight:'bold'}}>Green</span> Meets Serenity</p>

                        <button className="get-started-button" onClick={handleGetStartedClick}>
                            Get Started
                        </button>
                    </div>
                    <div className="aboutus_container">
                        <AboutUs />
                    </div>
                </div>

            </div>
            <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
                <ProductList />
            </div>
        </div>
    );
}

export default App;