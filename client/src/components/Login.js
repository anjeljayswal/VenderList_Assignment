import React from 'react'
// import "./login.css"

const Login = () => {

    const loginwithgoogle = ()=>{
        window.open("http://localhost:6005/auth/google/callback","_self")
    }
  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                {/* <form className='login-form'>
                    <input type="text" name="" id="" placeholder='username' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
                </form> */}
                <button 
                // className='login-with-google-btn' 
                className="login-with-google-btn transition duration-300 ease-in-out cursor-pointer bg-white border border-neutral-50 p-3 mt-4 hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
         
                onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </>
  )
}

export default Login