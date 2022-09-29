import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../images/logo512.png';
import Player from '../Player/Player';
import './Header.css';
const Header = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) => {
        console.log(player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    // for cart
    let total = 0;
    for (const player of cart) {
        total = total + player.time;
    }

    // for cart
    return (
        <div className='main-section'>
            <div className='left-part'>
                <nav className='header'>
                    <img src={logo} alt="" />
                    <h1>Players Club</h1>
                </nav>
                <p className='text-select'>Select today's exercise</p>
                <div className='players-container'>
                    {
                        players.map(player => <Player
                            key={player.id}
                            player={player}
                            handleAddToCart={handleAddToCart}
                        ></Player>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <div className='timer'>
                    <div className='author'>
                        <div className='author-img'>
                            <img src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/mushy_43.jpg" alt="" />
                        </div>
                        <div className='author-name'>
                            <h3>Easin Ali</h3>
                            <p className='author-address'>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                    <div className='author-info'>
                        <div className='weight'>
                            <p>62<small>kg</small></p>
                            <p className='under-weight'>Weight</p>
                        </div>
                        <div className='weight'>
                            <p>5.7</p>
                            <p className='under-weight'>Height</p>
                        </div>
                        <div className='weight'>
                            <p className='age'>25<small>yrs</small></p>
                            <p className='under-weight'>Age</p>
                        </div>

                    </div>
                    <h3>Add a Break Time</h3>
                    <div className='break-time'>
                        <p className='break-one'>10s</p>
                        <p className='break-two'>20s</p>
                        <p className='break-three'>30s</p>
                        <p className='break-four'>40s</p>
                    </div>

                    <h3>Exercise Details</h3>
                    <p>Exercise Time :{total}</p>
                    <p>Break Time :</p>
                    <h3 className='activity-text'>Activity Completed</h3>

                </div>

            </div>
        </div>


    );
};

export default Header;