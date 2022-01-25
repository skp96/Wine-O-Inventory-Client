import React, { useState, useEffect } from 'react';
import './App.css';
import { Wine } from './interfaces/wine_interface';
import { WineList } from './components/WinesList/WineList';
import { fetchAllWines } from './api/wine_api';

const App = () => {
  const [wines, setWines] = useState<Wine[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    
    (async () => {try {
      const wines = await fetchAllWines()
      setWines(wines)
      setIsLoading(false)
    } catch (error) {
      setError("Unable to fetch data, please try again later!")
      setWines([])
      setIsLoading(false)
      }
    })()

    return () => {
      setWines([])
      setIsLoading(true)
      setError("")
    }
  }, [])

  const renderComponentOrError = () => {
    if (error) {
      return <h2 role='error'>{error}</h2>
    }
    return <WineList winesList={wines} />
  }
  
  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
          renderComponentOrError()
      )}
    </div>
  );
}

export default App
