import React, { useEffect, useState } from 'react'
import galaxy from "../assets/galaxy.jpg"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Sidebar from '../components/nav/SideBar'

const Dashboard = () => {
    const { user, verifyUser} = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        verifyUser
    }, [])

    
    return (
      <div
        className="p-10 bg-purple-200 h-screen"
        style={{
          backgroundImage: `url(${galaxy})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white w-full h-full rounded-xl shadow-xl overflow-hidden flex">
          <Sidebar />
        </div>
      </div>
    );
}

export default Dashboard