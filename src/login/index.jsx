import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
const Login = () => {
  let history = useHistory();
  const { isAuth, setCurrentUser } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (isAuth) {
      history.push("/admin");
    }
  }, [isAuth, history]);
  const login = (e) => {
    e.preventDefault();
    if (!name.trim().length || !password.trim().length) {
      alert("Please fill all the fields");
      return false;
    }
    if (name === "admin" && password === "admin") {
      let user = {
        name: name,
        password: password,
        admin: true,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      history.push("/admin");
    } else {
      alert("Sorry user not found !");
      return false;
    }
  };
  return (
    <div className="wrapper">
      <div className="login-page">
        <form onSubmit={login}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={name.length < 1 || password.length < 1}
          >
            Login here !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
