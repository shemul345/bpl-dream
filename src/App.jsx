import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/Header/Header'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { ToastContainer } from 'react-toastify';
import subImg from './assets/bg-shadow.png';
import frameImg from './assets/frame.png';
import logoFooter from './assets/logo-footer.png';

const fetchPlayers = async() => {
  const res = await fetch('/players.json')
  return res.json()
} 
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(11500000);
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


{/* Subscriber section start */}
      <section  className='mt-20 mb-20'>
        <div className='absolute lg:left-36 z-10 border-1 border-white lg:max-w-5/6 mx-auto w-full p-1 lg:p-4 rounded-xl'>
           <div style={{
                backgroundImage: `url(${subImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
              }}
          className='text-center py-16 lg:py-24 rounded-xl shadow-2xl bg-white'>
          <h3 className='text-2xl lg:text-3xl font-bold mb-3'>Subscribe to our Newsletter</h3>
        <p>Get the latest updates and news right in your inbox!</p>
          <div className='mt-5 flex justify-center items-center'>
              <input className='border-1 py-2 lg:py-3 px-8 lg:px-18 text-lg rounded-xl' type="email" placeholder='Enter Your E-mail' />
              <p style={{
                backgroundImage: `url(${frameImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
              }}
              className='ml-1 lg:ml-2 py-2.5 lg:py-3.5 px-3 lg:px-5 text-xl font-bold rounded-xl'>Subscribe</p>
         </div>
        </div>
         </div>
        
      </section>
      {/* Subscriber section end */}

      <footer className='relative top-36 lg:top-48 bg-black pt-60 pb-10'>
        <div className='lg:max-w-5/6 mx-auto'>
          <div>
            <img className='mx-auto' src={logoFooter} alt="" />
          </div>
          <div className='flex flex-col lg:flex-row justify-around ml-16 lg:ml-0 gap-10 lg:gap-48 mt-16'>
            <div className='flex-1'>
            <h2 className='text-white text-xl font-semibold mb-5'>About Us</h2>
            <p className='text-gray-400 text-xl'>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className='flex-1'>
              <h2 className='text-white text-xl font-semibold mb-5'>Quick Links</h2>
              <ul className='text-gray-400 ml-5 text-xl space-y-2' style={{listStyleType:'disc'}}>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='flex-1'>
              <h2 className='text-white text-xl font-semibold mb-5'>Subscribe</h2>
              <p className='text-gray-400 text-xl'>Subscribe to our newsletter for the latest updates.</p>
              <div className='mt-5 flex justify-center items-center'>
              <input className='border-1 py-3 px-10 text-lg rounded-xl rounded-r-none bg-white' type="email" placeholder='Enter Your E-mail' />
              <p style={{
                backgroundImage: `url(${frameImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
              }}
              className='mr-12 py-3 px-5 text-xl font-bold rounded-xl rounded-l-none'>Subscribe</p>
         </div>
            </div>
          </div>
        </div>

        <div className='border-t-1 border-gray-500 mt-16'>
              <p className='text-center text-gray-400 text-xl mt-5'>&copy; 2024 Your Company All Rights Reserved.</p>
        </div>
              </footer>
      <ToastContainer />
      
    </>
  )
}

export default App
