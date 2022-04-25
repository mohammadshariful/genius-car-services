import React from "react";
import { Container } from "react-bootstrap";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";

const VerifyEmail = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <Container
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <h2>Your email is not verify</h2>
        <p>please verify your email</p>
      </div>
      <button
        onClick={async () => {
          await sendEmailVerification();
          alert("Sent email");
        }}
      >
        Verify email
      </button>
    </Container>
  );
};

export default VerifyEmail;
