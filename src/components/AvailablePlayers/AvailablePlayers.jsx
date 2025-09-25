import React, { use } from 'react';

const AvailablePlayers = ({playerPromise}) => {
    const playersData = use(playerPromise);
    console.log(playersData);
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayers;