import React from 'react'
import logo from './logo.svg'
import './App.css'
import { db } from './firebase'

function App() {
  const onPress = () => {
    db.ref('/test').set({ name: 'chad', age: 29 })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> HERE WE ARE.
        </p>
        <button onClick={onPress}>SET DATA</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
