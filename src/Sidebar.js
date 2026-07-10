import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';
export default function Sidebar() {
    const user=useSelector(selectUser);
    
    const recentItem=(topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
            {
               user?.email[0]
            }
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who Viewed you</p>
                <p className="sidebar_statNumber">2,457</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,324</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('React js')}
            {recentItem('software')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}
