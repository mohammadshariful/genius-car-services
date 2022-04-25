import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile] = useUpdateProfile(auth);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="name" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms and Condition
        </label>

        <input
          disabled={!agree}
          className="mx-auto mt-2 btn btn-primary  w-50"
          type="submit"
          value="Register"
        />
      </form>
      {error && <p>{error.message}</p>}
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={() => navigate("/login")}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
