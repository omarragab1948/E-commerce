import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { AddToCart, Delete, DeleteProduct, Clear } from '../../../Redux/Cart/CartAction'
import { Link } from 'react-router-dom'

const Cart = () => {
  const Mode = useSelector((state) => state.Theme.mode)
  const carts = useSelector(state => state.Cart)
  const dispatch = useDispatch()
  const totalPrice = carts.reduce((acc, product)=>{
    acc += product.price * product.quantity
    return acc
  }, 0)

  const [log, setLog] = useState(false)
  const Log = () => {
      setLog(!log)
  }
  console.log(localStorage.getItem('log'))
  return (
      <>
      <Navbar />
      <section className='py-5'>
        <div className='container'>
          <h2 className={`fs-1 text-center ${Mode ? `text-dark-primary` : `text-black`} col-12`}>The Cart</h2>
          <div className='d-flex justify-content-between align-items-center'>
            {carts.length === 0 ? <h2 className={`m-auto mt-3 ${Mode ? `text-dark-primary` : `text-black`}`}>Your Cart is Empty</h2> :
              <>
                <h3 className={`fs-3 mt-4 text-start ${Mode ? `text-dark-primary` : `text-black`}`}><span className={` ${Mode ? `text-light` : ``}`}>Total Price:</span> {totalPrice.toFixed(3)} $</h3>
                <button onClick={()=> dispatch(Clear())} className='btn btn-danger mt-4'>Clear Cart</button>
            </>}
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
                          <div className='buttons ms-5 mt-5'>
                            <button onClick={() => dispatch(AddToCart(product))} className='btn btn-primary'>+</button>
                            <button onClick={() => dispatch(Delete(product))} className='btn btn-primary'>-</button>
                            <button className='btn btn-danger' onClick={()=>dispatch(DeleteProduct(product))}>Delete Product</button>
                          </div>
                      </div>
                  </div>
              )
    })}
          </div>
        </div>
      </section>
      </>
  )
}

export default Cart