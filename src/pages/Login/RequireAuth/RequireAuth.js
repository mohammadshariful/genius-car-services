import React from "react";
import { Container } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";
const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user?.emailVerified) {
    return (
      <Container
        style={{ height: "50vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <h2>Your email is not verify</h2>
          <p>please verify your email</p>
          <button
            className="btn btn-primary"
            onClick={async () => {
              await sendEmailVerification();
              alert("Sent email");
            }}
          >
            Verify email again
          </button>
        </div>
      </Container>
    );
  }

  return children;
};

export default RequireAuth;
