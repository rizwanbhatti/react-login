import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {

    } else {
      navigate("/")
    }
  })
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}

export default Dashboard    