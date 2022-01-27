import { useState, useEffect } from 'react'
import './App.css';
import './reset-css.css'
import { Wine } from './interfaces/wine_interface'
import { WineList } from './components/WinesList/WineList'
import { Loading } from './components/Loading/Loading'
import { Error } from './components/Error/Error'
import { Title } from './components/Title/Title'
import { fetchAllWines } from './api/wine_api'

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

  // const renderComponentOrError = () => {
  //   if (error) {
  //     return <h2 data-testid='error' className='error-style'>{error}</h2>
  //   }
  //   return <WineList winesList={wines} />
  // }
  
  return (
    <div className="App">
      <Title />
      {isLoading ? ( <Loading /> ) : ( <WineList winesList={wines} error={error} /> )}
    </div>
  );
}

export default App
