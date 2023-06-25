import  React from 'react'
import Navbar from '../../Navbar/Navbar'
import './Home.css'
import Products from '../../Products/Products'

const Home = () => {
  return (
      <>
          <Navbar />
          <section className={`text-center pt-3`}>
              <div className='content-1'>
                <Products />
              </div>
          </section>
      </>
  )
}

export default Home