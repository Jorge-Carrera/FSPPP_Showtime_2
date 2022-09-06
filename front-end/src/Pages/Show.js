import MovieDetails from '../Components/MovieDetails'

function Show({watchlistArr}) {
  return (
    <div>
      <MovieDetails watchlistArr={watchlistArr}/>
    </div>
  )
}

export default Show