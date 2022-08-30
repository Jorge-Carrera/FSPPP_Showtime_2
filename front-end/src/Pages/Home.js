import Movies from '../Components/Movies'

function Home({ selected}) {
  return (
    <div>
      <Movies selected={selected}/>
    </div>
  )
}

export default Home