import { useContext } from "react";

import { AuthContext } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

const Auth = () => {
  const { userName, setUserName, secret, setSecret } = useContext(AuthContext);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (userName.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: userName, secret },
        { headers: { "Private-Key": "d3844e4f-4218-4e4b-b86a-5486cd99ebd8" } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
