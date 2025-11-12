const FetchButton = ({ fetchJoke, disabled }) => {
  return (
    <button className="fetch-button" onClick={fetchJoke} disabled={disabled}>
      Get a New Joke
    </button>
  )
}

export default FetchButton
