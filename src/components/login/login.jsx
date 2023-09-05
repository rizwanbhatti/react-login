import react from 'react'

import { app, auth, signInWithEmailAndPassword, doc, setDoc, db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate() 
  const Login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert("Login Succesfull")
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });


  }
  return (

    <>


      <label htmlFor="">Email</label>
      <input type='email' id='email' />
      <label htmlFor="">password</label>
      <input type='password' id='password' />
      <button onClick={Login} >Submit</button>

    </>


  );


}


