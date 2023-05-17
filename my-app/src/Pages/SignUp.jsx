import { React, useState } from "react";
import auth from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import login from "../Styles/login.css";
import logo from "../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {

  const onChange = () => {
    console.log("changed");
    setCaptchaDone(true);
  };

  const [captchaIsDone, setCaptchaDone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(email);
  console.log(password);
  const signIn = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          const userId = user.uid;
          localStorage.setItem("current user", user.uid);
        })

        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: lastName + " " + firstName,
            email: email,
          });
          window.location.href = "/";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
        });
    } else {
      alert("check your password");
    }
  };

  return (
  
    <div className="wrapper">
      <div className="login-card">
      <img className="logo" src={logo} />
        <h2>Sign Up</h2>
        <form action="">
          <input
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {captchaIsDone && (
            <button className="control" type="submit" onClick={signIn}>
              Join Now
            </button>
          )}
          <div>
            <ReCAPTCHA
              sitekey="6LfaSRgmAAAAALmDD1g8ej0pTjlsDkb6MX-kUKX9"
              onChange={onChange}
            />
            ,
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
