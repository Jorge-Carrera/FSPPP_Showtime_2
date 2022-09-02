const KEY = process.env.REACT_APP_API_KEY


export default {
  fetchTrending: {
    title: 'Trending', 
    url: `/trending/movie/week?api_key=${KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated', 
    url: `/movie/top_rated?api_key=${KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: 'Action', 
    url: `/discover/movie?api_key=${KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${KEY}&with_genres=35`
  }, 
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${KEY}&with_genres=10749`
  },
  fetchMystery : {
    title: 'Mystery',
    url: `/discover/movie?api_key=${KEY}&with_genres=9648`
  },
  fetchSciFi : {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${KEY}&with_genres=878`
  },
  fetchAnimation : {
    title: 'Animation',
    url: `/discover/movie?api_key=${KEY}&with_genres=16`
  },
  fetchWestern : {
    title: 'Western',
    url: `/discover/movie?api_key=${KEY}&with_genres=37`
  },
  fetchTv : {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${KEY}&with_genres=10770`
  },
  fetchDocumentaries : {
    title: 'Documentary',
    url: `/discover/movie?api_key=${KEY}&with_genres=99`
  },
}



