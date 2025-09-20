import React from 'react'
import SignUpForm from "../dev/SignUpForm.jsx"
import LoginForm from "../dev/LoginForm.jsx"
import joshuaImage from "../assets/joshua.png"
import galaxy from "../assets/galaxy.jpg"
import Sidebar from './sidebarStuff/Sidebar.jsx'

const Dashboard = () => {
  return (
    <div className="p-10 bg-purple-200 h-screen" style={{backgroundImage: `url(${galaxy})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-white w-full h-full rounded-xl shadow-xl overflow-hidden flex">
            <Sidebar />
        </div>
    </div>
  )
}

export default Dashboard