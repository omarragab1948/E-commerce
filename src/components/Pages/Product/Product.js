import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { useParams } from 'react-router'
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart } from '../../../Redux/Cart/CartAction'
import './Product.css'

const ProductDetails = () => {
    const {id} = useParams()
    const [productData, setProductData] = useState([])
    useEffect(() => {
        const getResponse = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProductData(await res.json())
          }
        getResponse()
    }, [id])
    const Mode = useSelector((state) => state.Theme.mode)
    const dispatch = useDispatch()
    productData.quantity = 1

    return (
        <>
            <Navbar />
            <section className='py-5 vh-100 container'>
                <div className={`pro container p-4 ${Mode ? `product-dark bg-light-black text-light` : `product-light bg-light`}`}>
                    <div className='f-i col-6'>
                        <img src={productData.image} className='w-100' />
                    </div>
                    <div className='p-c flex-column col-lg-6'>
                        <h2 className={`mb-3 ${Mode ? `text-dark-primary` : `text-black`}`}>{productData.title}</h2>
                        <button className={`fs-6 mb-5 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`}
                        onClick={()=>dispatch(AddToCart(productData))}
                        ><BsCartPlus size='1.3rem' /> Add to cart</button>
                        <h6 className={`${Mode ? `text-light` : `text-black`}`}>Price: <span className={`mb-5 ${Mode ? `text-dark-primary` : `text-black`}`}>{productData.price} $</span></h6>
                        <h6 className={`${Mode ? `text-light` : `text-black`}`}>Rate: <span className={`mb-5 ${Mode ? `text-dark-primary` : `text-black`}`}>{}</span></h6>
                        <p className={`${Mode ? `text-light` : `text-black`}`}>Description:  <span className={`mb-5 ${Mode ? `text-dark-primary` : `text-black`}`}>{productData.description}</span></p>
                    </div>     
               </div>
            </section>

        </>
  )
}

export default ProductDetails