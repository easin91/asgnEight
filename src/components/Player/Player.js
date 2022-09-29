import React from 'react';
import './Player.css';

const Player = ({ player, handleAddToCart }) => {
    // console.log(props.player)
    // const { player, handleAddToCart } = props;
    // const { name, img, time, age, details } = props.player;
    const { name, img, time, age, details } = player;
    // const handleAddToCart = () => {
    //     console.log('clicked');
    // }
    // console.log(props)

    return (
        <div className='player'>
            <img src={img} alt="" />
            <div className='players-info'>
                <h4>{name}</h4>
                <small>{details}</small>
                <p>For Age : {age}</p>
                <p>Time required : {time}s</p>
            </div>
            {/* <button onClick={() => props.handleAddToCart(props.player)} className='btn-cart'> */}
            <button onClick={() => handleAddToCart(player)} className='btn-cart'>
                <p className='add-btn-text'>Add To List</p>
            </button>

        </div>

    );
};

export default Player;