import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const Header = () => {
  const Mode = useSelector((state) => state.mode)
  return (
      <header className={`${Mode ? `bg-black` : `bg-light-2`} vh-100`}>
          <Navbar />
      </header>
  )
}
export default Header