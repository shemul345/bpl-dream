import React from 'react';

const SelectedPlayerData = ({selectedPlayerData,removePlayerData}) => {
    
    const handleRemove = () => {
        removePlayerData(selectedPlayerData);
}

    return (
        <div className='mt-3'>
            <div className='flex justify-between items-center border-1 border-gray-300 rounded-2xl p-2'>
                <div className='flex items-center'>
                    <img src={selectedPlayerData.image} className='h-[80px] w-[80px] rounded-2xl' alt="" />
                    <div className='ml-2'>
                        <h2 className='text-xl font-bold'>{selectedPlayerData.name}</h2>
                        <p className='text-xs mt-2'>{selectedPlayerData.playing_role}</p>
                    </div>
                </div>
                <div>
                    <img onClick={handleRemove} src="https://i.ibb.co.com/Z6ZKSJx0/Frame-48.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayerData;