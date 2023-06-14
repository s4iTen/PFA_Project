import "../Styles/login.css";
import { React, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import logo from "../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const savedData = location.state && location.state.savedData;

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
  const [error, setError] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("current user", user.uid);
        if (savedData) {
          // Navigate back to the Design page with the saved data
          window.location.href = "/Design";
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        if(errorMessage == 'Firebase: Error (auth/wrong-password).'){
          setError('wrong password');
        }else if (errorMessage == 'Firebase: Error (auth/user-not-found).'){
          setError('verify your email');
        }
      });
  };

  return (
    <div class="login-page">
      <div>
        <div className="home-button-container">
          <button className="button b1" onClick={navigateTomain}>
            Home
          </button>
        </div>
        <div className="login-box">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="content">
            <h2 className="title">Log In</h2>
            <form action="">
              <div className="user-box">
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <div className="alert">{error}</div>}
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {captchaIsDone && (
                  <button
                    className="button"
                    type="submit"
                    onClick={(e) => submitLogin(e)}
                  >
                    Enter
                  </button>
                )}
              </div>
            </form>
            <div>
              <ReCAPTCHA
                sitekey="6LfaSRgmAAAAALmDD1g8ej0pTjlsDkb6MX-kUKX9"
                onChange={onChange}
              />
              <div className="p">
                Don't have an account?{" "}
                <a href="/SignUp" className="a2">
                  Sign up!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
