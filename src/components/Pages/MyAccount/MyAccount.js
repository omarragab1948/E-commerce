import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MyAccount.css'
import NavLog from '../../Navbar/NavLog'

const MyAccount = () => {
  const Mode = useSelector((state) => state.Theme.mode)
  const carts = useSelector(state => state.Cart)
  const dispatch = useDispatch()
  const totalPrice = carts.reduce((acc, product)=>{
    acc += product.price * product.quantity
    return acc
  }, 0)

  return (
      <>
      <NavLog />
      <section className='py-5'>
        <div className='container d-flex flex-column'>
          <div className='col-12'>
            <h2 className={` fs-1 text-center ${Mode ? `text-dark-primary` : `text-black`} col-12`}>My Account</h2>
          </div>
          <div className='d-flex align-items-center justify-content-around'>
          <div className='col-9'>
            <div className='d-flex justify-content-between align-items-center'>
              {carts.length === 0 ? <h2 className={`m-auto mt-3 ${Mode ? `text-dark-primary` : `text-black`}`}>You didn't choose any product yet.</h2> : ""}
            </div>
            <div className={`d-flex row justify-content-around align-items-center mt-5 `}>
              {carts.map((product) => {
                return (
                    <div key={product.id} className={`cart-product d-flex  text-center ${Mode ? `product-dark bg-light-black text-light` : `product-light bg-light`} m-1 py-1`}>
                        <div className='grand-image'>
                            <div className='parent-image'>
                            <img src={`${product.image}`} className='w-100 mb-1'/>
                            </div>
                        </div>
                        <div className='content d-flex'>
                            <div className='ms-3 mt-5'>
                              <h6 >Product Name: <span className={`fs-6 ${Mode ? `text-dark-primary` : ``}`}>{product.title.substring(0, 16)}</span></h6>
                              <h6 >Product Price: <span className={`fs-6 ${Mode ? `text-dark-primary` : ``}`}>{product.price}$</span></h6>
                              <h6 >Product rating: <span className={`fs-6 ${Mode ? `text-dark-primary` : ``}`}>{product.rating.rate}</span></h6>
                            </div>
                            <div className=' mx-5 mt-5'>
                              <h6>Quantity: <span className={`fs-6 ${Mode ? `text-dark-primary` : ``}`}>{product.quantity}</span></h6>
                              <h6>Total Price: <span className={`fs-6 ${Mode ? `text-dark-primary` : ``}`}>{(product.price * product.quantity).toFixed(3)} $</span></h6>
                              <Link to={`/product/${product.id}`}>More Details</Link>
                            </div>
                        </div>
                    </div>
                )
      })}
            </div>
          </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default MyAccount