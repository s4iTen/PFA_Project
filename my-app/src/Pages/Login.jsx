import {React, useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notify = (msg) => toast(msg);

    const submitLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            notify("Success !");
            const user = userCredential.user;
            localStorage.setItem("current user",user.uid);
            window.location.href = '/';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            notify("Incorrect password/email !");
            console.log(error);
        });
    };
  return (
    <>
    <ToastContainer />
    <div>
        <form action="">
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' onClick={(e) => submitLogin(e)}>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login