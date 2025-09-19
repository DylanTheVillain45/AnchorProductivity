import React from 'react'
import SignUpForm from "../dev/SignUpForm.jsx"
import LoginForm from "../dev/LoginForm.jsx"
import joshuaImage from "../assets/joshua.png"
import starrynight from "../assets/starrynight.jpg"

const LoginPage = () => {
  return (
    <div className="flex justify-center p-10 bg-purple-200 min-h-screen items-center" style={{backgroundImage: `url(${starrynight})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-white h-1/2 p-10 max-w-5xl max-h-5xl flex justify-center gap-5 rounded-xl shadow-xl">
            <div className="w-1/2 h-5/6 flex flex-col justify-center items-center">
              <LoginForm />
              <button className="btn btn-primary w-3/4">Don't Have an Account? Sign Up Here</button>
            </div>
            
            <img src={joshuaImage} className="rounded-xl shadow-xl w-1/2 h-full object-cover transition-transform duration-500 overflow-hidden grayscale" />
        </div>
    </div>
  )
}

export default LoginPage