import React from 'react';
import './HeaderOptions.css';
import {useSelector} from 'react-redux';
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
export default function HeaderOptions({onClick,avatar,Icon,title}) {
  const user=useSelector(selectUser);
  
  return (
    <div onClick={onClick}className='headerOptions'>
      {Icon && <Icon className="headerOption_icon"/>}
      
      {user && avatar && <Avatar className='headerOption_icon'>{user?.email[0]}</Avatar>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}
