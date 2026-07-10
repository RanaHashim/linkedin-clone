import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './Firebase';
import './Login.css'
function Login() {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();

    const LoginToApp=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,pass).then(
            (userAuth)=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.uid,
                    displayName:name,
                    photoUrl:profilePic
                }
                ));
            }
        ).catch((error)=>alert(error));
    }
    const Register=()=>{
        if(!name){
            return alert("Please enter Full name!");
        }
        createUserWithEmailAndPassword(auth,email,pass)
        .then((userAuth)=>{
            dispatch(login({
                email:email,
                uid:userAuth.user.uid,
                displayName:name,
                photoUrl:profilePic          
            }))
        }).catch((error)=>{
            alert(
            error.message
            )
        
        }
            );
        alert("Registered Successfully!")
    };

  return (
    <div className='login'>
        <img src="https://denverdata.com/sites/default/files/linkedin-branding-CONTENT-2019.jpg" alt="" />
        <form>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                placeholder="Full name (required if registering)"
                type="text" />

            <input
                value={profilePic}
                onChange={(e)=>setProfilePic(e.target.value)}
                placeholder="Profile pic URL (optional)"
                type="text" />
            
            <input
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                type="email"
             />
            
            <input
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                placeholder="password"
                type="password" />
            
            <button type="submit" onClick={LoginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className='login_register' onClick={Register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login