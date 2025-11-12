import { useState, useEffect, useCallback } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )
      if (response.ok === false) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setJoke(data.joke ?? '')
    } catch (error) {
      console.error('Failed to fetch joke:', error)
      setJoke('Oops! Unable to load a joke right now.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJoke()
  }, [fetchJoke])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} disabled={loading} />
    </div>
  )
}

export default App
