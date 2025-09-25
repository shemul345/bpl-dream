import React, { useState } from 'react';

import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';

const Player = ({ player, setAvailableBalance,availableBalance}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
            <div>
            <div className="card bg-base-100 shadow-xl p-4">
        <figure>
        <img className='h-[250px] w-[350px] rounded-2xl' src={player.image} alt="Shoes" />
    </figure>
    <div className="">
        <div className='flex gap-3 mt-4'>
            <img src={userImg} alt="" />
                        <h3 className='font-bold text-2xl'>{player.name}</h3>            
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-300 pb-3'>
                        <div className='flex gap-3 items-center'>
                            <img src={flagImg} alt="" />
                            <p className='text-gray-400'>{player.country}</p>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>
                    <div className='font-bold flex justify-between mt-3'>
                        <p>Rating</p>
                        <p>{player.rating}</p>
                    </div>
                    <div className='font-semibold flex justify-between mt-3'>
                        <p>{player.batting_style}</p>
                        <p className='text-gray-500'>{player.bowling_style}</p>
                    </div>
    
                    <div className="card-actions flex justify-between items-center mt-4">
                        <p className='font-semibold'>Price: $<span>{player.price}</span></p>
                        <button disabled={isSelected} onClick={() => {
                            if (availableBalance < player.price) {
                                alert('You have no enough balance')
                                return;
                            }
                            setIsSelected(true)
                            setAvailableBalance(availableBalance-player.price)
                        }} className="btn">{isSelected===true?"Selected":"Choose Player"}</button>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Player;