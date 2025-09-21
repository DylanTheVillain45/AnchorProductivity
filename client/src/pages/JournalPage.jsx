import React from 'react'
import Sidebar from '../components/nav/SideBar'
import JournalEntry from '../components/journals/JournalEntry'

const JournalPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <JournalEntry />
    </div>
  )
}

export default JournalPage