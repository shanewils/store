import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from '../actions/userActions';


const SigninScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin)
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  useEffect(() => {
      if (userInfo) {
          props.history.push(redirect);
      }
   
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(email, password))
  }

  return <div className="form">
      <form onSubmit={submitHandler} >
          <ul className="form-container">
              <li>
                  <h2>Sign in</h2>
              </li>
              <li>
                  {loading && <div>Loading...</div>}
                  {error && <div>{error}</div>}
              </li>
              <li>
                    <label htmlfor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
              </li>
              <li>
                    <label htmlfor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
              </li>
              <li>
                  <button type="submit" className="button-primary">Sign in</button>
              </li>
              <li>
                  New to The Fungeon?
              </li>
              <li>
                  <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button">Create a new account</Link>
              </li>
          </ul>
      </form>
  </div>
}

export default SigninScreen;


