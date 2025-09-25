import React from 'react';
import SelectedPlayerData from '../SelectedPlayerData/SelectedPlayerData';

const SelectedPlayer = ({ purchasedPlayers,removePlayerData,setToggle}) => {
    return (
        <div className='max-w-5/6 mx-auto mt-8 mb-10'>
            {
                purchasedPlayers.map(selectedPlayerData => <SelectedPlayerData
                    key={selectedPlayerData.id}
                    removePlayerData={removePlayerData}
                    selectedPlayerData={selectedPlayerData}>
                    </SelectedPlayerData>)
            }
            <button onClick={() => setToggle(true)} className='border-1 py-3 px-2 rounded-lg mt-5'><span className='bg-[#E7FE29] text-black font-bold py-2 px-2 rounded-lg'>Add More Player</span></button>
        </div>

        
    );
};

export default SelectedPlayer;