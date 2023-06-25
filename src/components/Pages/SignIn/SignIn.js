import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavSign from '../../Navbar/NavSign'
import './SignIn.css'
import { Link } from 'react-router-dom'
import LogOutNavAction from '../../../Redux/LogOut/LogOutNavAction'
import LogOutAction from '../../../Redux/LogOut/LogOutAction'


const SignIn = () => {
  const Mode = useSelector((state) => state.Theme.mode)
  const log = useSelector(state => state.LogOut)
  const logNav = useSelector(state => state.LogOutNav)
    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
  }
      const [user, setUser] = useState(false)
      const [pass, setPass] = useState(false)
      const dispatch = useDispatch()
      const username = user === localStorage.getItem('username')
      const password = pass === localStorage.getItem('password')  
      
    return (
      <>
        <NavSign />  
        <section className='container d-flex align-items-center flex-column'>
          <div className={`si-content d-flex flex-column mt-5 p-3 m-auto ${Mode ? `product-dark bg-light-black text-light` : `product-light bg-light`} col-md-6 col-lg-4 col-sm-8 align-items-center`}>
            <h2 className={`${Mode ? `text-dark-primary product-dark` : ``}`}>Sign in</h2>
                    <form onSubmit={handleSubmit} className={`d-flex flex-column w-100 mt-3 ${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>
                        <input name='username' type='text' placeholder='User Name' onChange={(e)=>setUser(e.target.value)} required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                        <input name='password' type='password' placeholder='Password' onChange={(e)=>setPass(e.target.value)} required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                        <Link to={username && password ? "/" : ""} className={`m-auto  ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`} btn btn-primary`}>
                          <button type='submit' onClick={()=>dispatch(LogOutNavAction())}  className={` m-auto btn btn-primary ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`}`}>Sign in</button>
                        </Link>
                        
                    </form>
                    <h5 className='my-3 fs-6'>New to E-commerce ?</h5>
            <Link to='/register' className='btn btn-primary'>Create your E-commerce account</Link>
          </div>  
      </section>
      </>

  )
}

export default SignIn