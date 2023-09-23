import React, { useContext, useState } from "react";
import { When } from "react-if";

import { LoginContext } from "../../Context/Settings/context.jsx";

import "./signup.scss";

export default function SignUp(props) {
  const login = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  let handleUsername = (e) => {
    setUsername(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleRole = (e) => {
    setRole(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    login.signup(username, password, role);
    e.target.reset()
  };
  return (
    <div className="mainSignup">
    <div className={"singUp"}>

      <When condition={!login.loggedIn}>
        <form onSubmit={handleSubmit}>
          <p><b>SignUp</b></p>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleUsername}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={handlePassword}
          />
          <input
            placeholder="user , writer , editor , admin"
            name="role"
            onChange={handleRole}
          />
          <input type="submit" value="Signup" />
        </form>
      </When>
    </div>
    </div>
  );
}
