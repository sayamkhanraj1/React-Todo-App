import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";
import "./Login.css";

initializeAuthentication();

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);

  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogIn = (e) => {
    setIsLogIn(e.target.checked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must Be At least 6 Characters.");
      return;
    }

    if (isLogIn) {
      logIn(email, password);
    } else {
      createNewUser(email, password);
    }
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        setUserName();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return (
    <div className="login-section">
      <form onSubmit={handleRegistration}>
        <div className="login-body d-flex justify-content-center align-items-center">
          <div className=" login-form my-5">
            <h2 className="mb-4 fw-bold fs-2 text-white text-center">
              {isLogIn ? "Login" : "Registration"}
            </h2>
            {!isLogIn && (
              <div className="form-floating mb-3">
                <input
                  onBlur={handleNameChange}
                  className="form-control"
                  placeholder="nameexample"
                  required
                />
                <label htmlFor="floatingInput">Your Name</label>
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check">
              <input
                onChange={toggleLogIn}
                className="me-2"
                type="checkbox"
                id="gridCheck1"
              />
              <label
                className="form-check-label mt-3 fw-bold text-white"
                htmlFor="gridCheck1"
              >
                Already Registered ?
              </label>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <button className="sing-in">
                  {isLogIn ? "Sing In" : "Sing Up"}
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
