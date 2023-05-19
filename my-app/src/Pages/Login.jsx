import "../Styles/loginn.css";
import { React, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import logo from "../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const onChange = () => {
    console.log("changed");
    setCaptchaDone(true);
  };

  const navigateToLogin = () => {
    window.location.href = "/SignUp";
  };

  const navigateTomain = () => {
    window.location.href = "/";
  };

  const [captchaIsDone, setCaptchaDone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("current user", user.uid);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div className="wrapper">
      <div>
        <div className="button-groupe">
          <button className="cta" onClick={navigateToLogin}>
            Sign Up
          </button>
          <button className="cta" onClick={navigateTomain}>
            Home
          </button>
        </div>
          <div className="login-card">
            <img src={logo} />
            <h2>Log In</h2>
            <form action="">
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
              {captchaIsDone && (
                <button
                  className="ui-btn"
                  type="submit"
                  onClick={(e) => submitLogin(e)}
                >
                  Enter
                </button>
              )}
            </form>
            <div>
              <ReCAPTCHA
                sitekey="6LfaSRgmAAAAALmDD1g8ej0pTjlsDkb6MX-kUKX9"
                onChange={onChange}
              />
              ,
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
