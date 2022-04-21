import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from "react";
import UserContext from "../UserContext/UserContext";
import "./Login.css";
const logo = require("../../imgs/Multi-gym.png");

export const Login = () => {
  const user = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center loginform">
      <div className="card-login align-items-center d-flex">
        <div className="row">
          <div className="row justify-content-center p-0 m-0">
            <img
              src={logo}
              style={{ height: "15rem", width: "15rem", padding: "0px" }}
            />
          </div>
          <div className="row justify-content-center m-2">
            <div className="form-group col-md-6">
              <input
                value={username}
                type="text"
                className="form-control inpLogin"
                placeholder="Usuario"
                onChange={handleChangeUsername}
              />
            </div>
          </div>
          <div className="row justify-content-center m-2">
            <div className="form-group col-md-6">
              <input
                value={password}
                type="password"
                className="form-control inpLogin"
                placeholder="Contraseña"
                onChange={handleChangePassword}
              />
            </div>
          </div>
          <div className="row justify-content-center m-2">
            <div className="form-group col-auto ">
              <button
                className="btn btn-dark btnLogin"
                onClick={() => {
                  user.login(username, password);
                }}
              >
                Ingresar
              </button>
            </div>
          </div>
          <div className="row m-2">
            <a
              href="#"
              className="text-center text-decoration-none text-dark aLogin"
            >
              ¿Olvidaste tu contraseña?
            </a>
            {user.username}
          </div>
        </div>
      </div>
    </div>
  );
};
