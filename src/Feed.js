import React,{useEffect, useState} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import {db} from './Firebase';
import { addDoc, serverTimestamp,query,orderBy,onSnapshot, collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user =useSelector(selectUser);

  const [input,setInput]=useState('');
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const q=query(collection(db,'posts'),orderBy('timestamp','desc'));
    onSnapshot(q,(snapshot)=>{
      setPosts(snapshot.docs.map(doc=>{
        return{
        id:doc.id,
        data:doc.data()
        }
      }))
    })
  },[]);
  
    const sendPost=async (e) => {
    e.preventDefault();
    try {
      const DocRef= await addDoc(collection(db, 'posts'), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      
    } catch (err) {
      alert(err)
    }
    setInput('');
  };

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form onSubmit={sendPost}>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"  />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
             <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/> 
             <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/> 
             <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/> 
             <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/> 
            </div>
        </div>
        <FlipMove>
        {posts.map((post) => (

          <Posts
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photoUrl={post.data.photoUrl}
          />
        ))}
        </FlipMove>
        {/* <Posts name='Hashim Khan' description='This is a test' message='Wow This works finally'/> */}
    </div>
  )
}

export default Feed