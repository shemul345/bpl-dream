import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/Header/Header'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'

const fetchPlayers = async() => {
  const res = await fetch('/players.json')
  return res.json()
} 

function App() {

  const playerPromise = fetchPlayers();

  return (
    <>
      <Header></Header>

      <Suspense fallback={<p className='mt-5 ml-32 text-xl font-semibold'>Players are coming soon <span className="loading loading-dots loading-xl"></span></p>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
