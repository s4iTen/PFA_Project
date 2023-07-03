import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Password reset email sent successfully.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <button type="submit" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
