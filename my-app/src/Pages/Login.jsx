import {React, useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("current user",user.uid);
            window.location.href = '/';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
    };
  return (
    <div>
        <form action="">
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' onClick={(e) => submitLogin(e)}>Login</button>
        </form>
    </div>
  )
}

export default Login