import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      // navigate(from, { replace: true });
    }
  }, [user]);

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const url = "http://localhost:5000/login";
    const { data } = await axios.post(url, { email });
    localStorage.setItem("accessItem", data.accessToken);
    navigate(from, { replace: true });
  };

  const forgetPasswordHandle = async () => {
    const email = emailRef.current.value;

    await sendPasswordResetEmail(email);
    alert("email sent");
  };

  return (
    <div className="container w-50 mx-auto mt-3">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {error && <p>{error.message}</p>}
        <Button
          variant="primary"
          type="submit"
          className="mx-auto d-block w-50 mb-2"
        >
          Login
        </Button>
      </Form>
      <p>
        New to genius car?
        <span
          style={{ cursor: "pointer" }}
          className="text-danger"
          onClick={() => navigate("/register")}
        >
          Please register
        </span>
      </p>
      <p>
        Forget password?
        <span
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={forgetPasswordHandle}
        >
          Reset password
        </span>
      </p>
      <SocialLogin />
      <PageTitle title="login" />
    </div>
  );
};

export default Login;
