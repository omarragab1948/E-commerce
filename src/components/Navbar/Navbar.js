import React, { useState } from 'react'
import './navbar.css'
import { BiSun, BiMoon, BiCart } from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import ThemeAction from '../../Redux/Theme/ThemeAction'
import LogOutAction from '../../Redux/LogOut/LogOutAction'
import LogOutNavAction from '../../Redux/LogOut/LogOutNavAction'
import { Link } from 'react-router-dom'

function Navbar() {
    const Mode = useSelector((state) => state.Theme.mode)
    const carts = useSelector(state => state.Cart)
    const log = useSelector(state => state.LogOut)
    const logNav = useSelector(state => state.LogOutNav)

    const dispatch = useDispatch()
    if (Mode == true) {
        document.body.style.backgroundColor = "#000"
      } else {
        document.body.style.backgroundColor = "#dadcde"
    }
    const user = localStorage.getItem('username')
    const [Log, setLog] = useState(false)
    const handleLog = () => {
        setLog(true)
    }
    return (

            <nav class={`navbar navbar-expand-lg bg-body-tertiary ${Mode ? 'bg-light-black' : 'bg-light'}`}>
                <div class="container">
                    <div className='logo'>
                        <Link to='/'><h1 className={`${Mode ? `text-dark-primary` : `text-light-black`}`}>E-commerce </h1></Link>
                    </div><button  class={`navbar-toggler ${Mode ? 'bg-dark-primary' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mt-1 align-items-center justify-content-end" id="navbarNav">
                        <div className={`${Mode ? `bg-light-black` : `bg-light`} py-1 d-flex`}>          
                            { log || !logNav ? 
                                <>
                                <div className='d-flex justify-content-between align-items-center container'>
                                    <div className='d-flex align-items-center content'>
                                        <Link to='/sign-in' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-4 me-3 mt-1`}>Sign in</Link>
                                        <a className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 me-3`} onClick={() => dispatch(ThemeAction())}>
                                            {Mode ? <BiSun /> : <BiMoon />}
                                        </a>
                                        <Link to='/cart' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 d-flex mt-3`}>{<BiCart />}<h5>{carts.length}</h5></Link>
                                    </div>
                                </div>  
                                </>
                            :
                            <>
                                {log || !logNav ?
                                    <>
                                    <div className='d-flex justify-content-between container'>
                                        <div className='d-flex align-items-center content'>
                                            <Link to='/sign-in' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-4 me-3 mt-1`}>Sign in</Link>
                                            <a className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 me-3`} onClick={() => dispatch(ThemeAction())}>
                                                {Mode ? <BiSun /> : <BiMoon />}
                                            </a>
                                            <Link to='/cart' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 d-flex mt-3`}>{<BiCart />}<h5>{carts.length}</h5></Link>
                                        </div>
                                    </div>  
                                    </> :
                                    <>      
                                    <div className='nav d-flex justify-content-end container'>
                                        <div className='d-flex align-items-center content'>
                                            <a className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 me-2 mt-2`} onClick={() => dispatch(ThemeAction())}>
                                                {Mode ? <BiSun /> : <BiMoon />}
                                            </a>
                                            <Link to='/cart' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-2 d-flex mt-4`}>{<BiCart />}<h5>{carts.length}</h5></Link>
                                            <Link to='/my-account' className={`${Mode ? `text-dark-primary` : `text-light-black`} fs-4 d-flex mt-3 ms-2`}>{user}</Link> 
                                            <button onClick={()=>dispatch( LogOutAction())}  className={`btn btn-danger mt-3 ms-3 ${Mode ? `bg-dark-primary text-black  border-btn-dark` : ``}`}><Link to='/' className={`${Mode ? `text-black` : `text-light-black`} fs-6`}>Log out</Link></button> 
                                        </div>
                                    </div>
                                    </>}
                            </>    
                            }
                        </div>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar
