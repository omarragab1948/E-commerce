import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavSign from '../../Navbar/NavSign'
import  {  useState } from 'react'

const Register = () => {
    const Mode = useSelector((state) => state.Theme.mode)
    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        const fName = form.fname.value
        const lName = form.lname.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
       localStorage.setItem('firstname', fName)
       localStorage.setItem('lastname', lName)
       localStorage.setItem('email', email)
       localStorage.setItem('password', password)
       localStorage.setItem('username', username)
       const FN =  localStorage.getItem('firstname')
       const LN =  localStorage.getItem('lastname')
       const Email = localStorage.getItem('email')
       const user = localStorage.getItem('username')
       const pass = localStorage.getItem('password')
       if(FN && LN && Email && user && pass){
        setLink(true)
      }else {
        setLink(false)
      }
    }
      const [link, setLink] = useState(false)

   const sign = <Link to='/sign-in' className={`${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`} btn btn-primary`}>Sign in</Link>
  return (
    <>
        <NavSign />  
        <section className='container d-flex align-items-center'>
        <div className={`si-content d-flex flex-column mt-5 p-3 m-auto ${Mode ? `product-dark bg-light-black text-light` : `product-light bg-light`} col-md-6 col-lg-4 col-sm-8 align-items-center`}>
            <h2 className={`${Mode ? `text-dark-primary product-dark` : ``}`}>Create Account</h2>
                  <form onSubmit={handleSubmit} className={`d-flex flex-column w-100 mt-3 ${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>
                        <label for='fname' className={`${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>First name :</label>
                      <input id='fname' name='firstname' type='text' required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                      <label for='lname' className={`${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>Last name :</label>
                      <input id='lname' name='lastname' type='text' required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                      <label for='email' className={`${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>E-mail :</label>
                      <input id='email' name='email' type='email'  required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                      <label for='username' className={`${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>User name :</label>
                      <input id='username' name='username' type='text' required maxLength='10' className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                      <label for='password' className={`${Mode ? ` bg-light-black text-light` : ` bg-light`}`}>Password :</label>
                        <input name='password' type='password' required className={`mb-3 ${Mode ? `product-dark bg-light-black text-dark-primary pc` : `product-light bg-light`}`} />
                        <button type='submit'  className={`mb-3 m-auto ${Mode ? `bg-dark-primary text-light-black btn btn-primary border-btn-dark` : `btn btn-primary`} btn btn-primary`}>Create Account</button>
                  </form>
                  {link ? <a>{sign}</a> : ''}
        </div>  
       </section>
    </>
  )
}

export default Register