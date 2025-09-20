import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Dashboard = () => {
    const { user, verifyUser} = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        verifyUser
    }, [])

    
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard