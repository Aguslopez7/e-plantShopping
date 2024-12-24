import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaList } from "react-icons/fa";

// Define the Navbar component
const Navbar = ({ handlePlantsClick, handleCartClick, itemsCount = 0 }) => {
    const styleObj = {
        backgroundColor: '#1e8449',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '25px',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
        display: 'flex',
        alignIems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className="navbar" style={styleObj}>
            <div className="tag">
                <div className="luxury">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                        alt="Paradise Nursery Logo"
                    />
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </a>
                </div>
            </div>
            <div style={styleObjUl}>
                <div>
                    <a
                        href="#"
                        onClick={(e) => handlePlantsClick(e)}
                        style={styleA}
                    >
                        <FaList style={{ marginRight: '10px' }} />
                        Plants Catalog
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a
                        href="#"
                        onClick={(e) => handleCartClick(e)}
                        style={styleA}
                    >
                        <h1 className="cart">
                            <TiShoppingCart />
                        </h1>
                    </a>
                    <h2>{itemsCount}</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
