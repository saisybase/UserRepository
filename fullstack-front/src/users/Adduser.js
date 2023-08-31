import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Adduser() {
  const [users, setusers] = useState({
    username: " ",
    name: " ",
    email: " ",
  });

  const { username, name, email } = users;

  let navigate = useNavigate();

  const onInputChange = (e) => {
    //const { username, name, email } = e.target;
    //console.log("I am sai krishna");
    //document.write("SAIKRISHNA VALLABHAJOSYULA");
    setusers({ ...users, [e.target.name]: e.target.value });
    console.log(
      "onInputChange " + users.username + "" + users.name + " " + users.email
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/adduser", users);
    console.log(users.username + " " + users.name + " " + users.email);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center n-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                UserName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your UserName"
                name="username"
                defaultValue={username}
                //value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                defaultValue={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email address "
                name="email"
                defaultValue={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
