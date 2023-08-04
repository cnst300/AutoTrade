import React, { useState } from "react";
import "../style/ForgottenPassword.css";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the forgot password email using your custom email sending logic function
    sendForgotPasswordEmail(email)
      .then(() => {
        // Email sent successfully, show a success message or redirect to a confirmation page
        console.log("Forgot password email sent!");
      })
      .catch((error) => {
        // Error occurred while sending the email, handle the error appropriately
        console.error("Error sending forgot password email:", error);
      });
  };

  const sendForgotPasswordEmail = (email) => {
    // Replace this with your actual email sending logic function
    return new Promise((resolve, reject) => {
      // Simulating a delay for demonstration purposes
      setTimeout(() => {
        // Your custom email sending logic goes here
        // For example, using a fetch request to a backend API
        fetch("/forgottenPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((response) => {
            if (response.ok) {
              resolve();
            } else {
              reject(new Error("Failed to send forgot password email."));
            }
          })
          .catch((error) => {
            reject(error);
          });
      }, 2000);
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label className="labelResetPassword">
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgottenPassword;
