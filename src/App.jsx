import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/Header/Header'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

const fetchPlayers = async() => {
  const res = await fetch('/players.json')
  return res.json()
} 
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(965562);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayerData = (removePlayer) => {
    const filteredData = purchasedPlayers.filter(playerData => playerData.id !== removePlayer.id);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + removePlayer.price);
  }

  return (
    <>
      <Header availableBalance={availableBalance}></Header>

      <div className='max-w-5/6 mx-auto flex justify-between items-center mt-20'>
        <h3 className='text-2xl font-bold'>{toggle === true?'Available Players':`Selected Player (${purchasedPlayers.length}/6)`}</h3>
        <div className='flex font-semibold'>
          <button onClick={() =>setToggle(true)} className={`border-1 border-gray-400 py-2 px-3 border-r-0 rounded-l-xl ${toggle === true?"bg-[#E7FE29]":""}`}>Available</button>
          <button onClick={() =>setToggle(false)} className={`border-1 border-gray-400 py-2 px-3 border-l-0 rounded-r-xl ${toggle === false?"bg-[#E7FE29]":""}`}>Selected<span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true?<Suspense fallback={<p className='mt-5 ml-32 text-xl font-semibold'>Players are coming soon <span className="loading loading-dots loading-xl"></span></p>}>
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            playerPromise={playerPromise}>
            </AvailablePlayers>
        </Suspense> : <SelectedPlayer
            removePlayerData={removePlayerData}
            setToggle ={setToggle}
            purchasedPlayers={purchasedPlayers}></SelectedPlayer>
      }

      <Footer></Footer>

      <ToastContainer />
      
    </>
  )
}

export default App
