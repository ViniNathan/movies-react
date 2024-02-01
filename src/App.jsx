import {useState, useEffect} from 'react'
import { fetchDataFromApi } from './utils/api'
import './App.css'

function App() {

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div className="App">
      App
    </div>
  )
}

export default App
