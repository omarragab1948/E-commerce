import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsCartPlus } from "react-icons/bs";
import './Products.css'
import { AddToCart } from '../../Redux/Cart/CartAction'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState(products)
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            setProducts(await res.clone().json())
            setFilter(await res.json())
        }
        getProducts()
    },[])

    const filterProducts = (cat) => {
        const updatedList = products.filter((x)=>x.category === cat)
        setFilter(updatedList)
    }
    const Mode = useSelector((state) => state.Theme.mode)
    const dispatch = useDispatch()
    
    const Products = filter.map((product) => {
        product.quantity = 1
        return (
              <div key={product.id} className={`product ${Mode ? `product-dark bg-light-black text-light` : `product-light bg-light`} m-1 py-4`}>
                <Link to={`/product/${product.id}`}>
                    <div className='grand-image'>
                        <div className='parent-image'>
                        <img src={`${product.image}`} className='w-100 mb-4' alt='img'/>
                        </div>
                    </div>
                    <div className='content'>
                        <h6 className={`${Mode ? `text-dark-primary` : `text-black`} col-12`}>{product.title.substring(0, 25)}</h6>  
                        <span className={`${Mode ? `text-dark-primary` : `text-black`} col-12`}>Price: {product.price}$</span>
                        <h6 className={`${Mode ? `text-dark-primary` : `text-black`} col-12`}>rating: {product.rating.rate}</h6>
                    </div>    
                </Link>             
                        <button className={`fs-6 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`}
                        onClick={()=>dispatch(AddToCart(product))}
                        ><BsCartPlus size='1.3rem' /> Add to cart</button>
              </div>
        )
    })
    return (
        <>
        <div className='buttons mt-5'>
            <button className={`mx-2 mb-1 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`} onClick={()=>setFilter(products)}>All</button>
            <button className={`mx-2 mb-1 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`} onClick={()=>filterProducts("men's clothing")}>Men</button>
            <button className={`mx-2 mb-1 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`} onClick={()=>filterProducts("women's clothing")}>Women</button>
            <button className={`mx-2 mb-1 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`} onClick={()=>filterProducts("electronics")}>Electronics</button>
            <button className={`mx-2 mb-1 ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`} onClick={()=>filterProducts("jewelery")}>jewelry</button>
       </div>
       <div className='products d-flex justify-content-around row mt-5 container mx-auto'>
          {Products}
       </div>
        </>
  )
}

export default Products