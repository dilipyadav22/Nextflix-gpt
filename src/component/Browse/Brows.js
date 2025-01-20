import React from 'react'
import Header from '../Header/Header'
import useAddNowPlayingMovie from '../../hooks/useNowPlayingMovie'
import Main from '../Maincontainer/Main'
import AllList from '../Secondarycontainer/AllList'


const Brows = () => {


  useAddNowPlayingMovie();




  return (
    <div>
      <Header />
      <Main/>
      <AllList/>
    </div>
  )
}

export default Brows