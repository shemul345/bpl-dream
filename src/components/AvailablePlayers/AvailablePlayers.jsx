import React, { use } from 'react';
import Player from '../Player/Player';


const AvailablePlayers = ({playerPromise,setAvailableBalance,availableBalance}) => {
    const playersData = use(playerPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-around max-w-5/6 mx-auto '>
            {
                playersData.map(player => <Player
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance}
                    key={player.id}
                    player={player}></Player>)
            }
            
        </div>
    );
};

export default AvailablePlayers;