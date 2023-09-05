import react from 'react'
import { app, auth, createUserWithEmailAndPassword, doc, setDoc, db, signInWithEmailAndPassword } from '../src/config/firebase';
import { useNavigate } from 'react-router-dom';
export default function App() {


  const navigate = useNavigate()
  const SignUp = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          await setDoc(doc(db, "users", user.uid), {
            name: name,
            phone: phone,
            email: email,
          });
          alert("SignUp Successfull")
          navigate("/login")
        } catch (e) {
          console.error("Error adding document: ", e);
        }


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });


  }
  return (

    <>

      <label htmlFor="">Name</label>
      <input type='text' id='name' />

      <label htmlFor="">Phone</label>
      <input type='tel' id='phone' />

      <label htmlFor="">Email</label>
      <input type='email' id='email' />
      <label htmlFor="">password</label>
      <input type='password' id='password' />
      <button onClick={SignUp} >Submit</button>

    </>


  );


}


