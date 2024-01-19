import React from "react";
// import "./SignupFormStyle.css";

function SignUpForm() {
  return (
    <div>
      <div className="form-container">
        <h1>Registration Form</h1>
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="message" rows="4"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
