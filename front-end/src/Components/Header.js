import HeaderItem from "./HeaderItem"
import {
  RectangleStackIcon, 
  HomeIcon, 
  BoltIcon,
  MagnifyingGlassIcon, 
  UserIcon,
} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title={'HOME'} Icon={HomeIcon}/>
        <HeaderItem title={'TRENDING'} Icon={BoltIcon}/>
        <HeaderItem title={'WATCHLIST'} Icon={RectangleStackIcon}/>
        <HeaderItem title={'SEARCH'} Icon={MagnifyingGlassIcon}/>
        <HeaderItem title={'ACCOUNT'} Icon={UserIcon}/>
      </div>
      <img className="object-contain" src='https://logodownload.org/wp-content/uploads/2021/05/showtime-logo-1.png' alt="showtime logo" height={100} width={150}></img>
    </header>
  )
}

export default Header


