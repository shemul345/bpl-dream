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

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
