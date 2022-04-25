import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import facebook from "../../../Assets/Images/social/facebook.png";
import github from "../../../Assets/Images/social/github.png";
import google from "../../../Assets/Images/social/google.png";
import auth from "../../../Firebase.init";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user1 || user2 || user3) {
      navigate(from, { replace: true });
    }
  }, [user1, user2, user3]);

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {(error1 || error2 || error3) && (
        <p className="text-center text-danger">
          {error1?.message}
          {error2?.message}
          {error3?.message}
        </p>
      )}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 mx-auto d-block my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-info w-50 mx-auto d-block my-2"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 mx-auto d-block my-2"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
