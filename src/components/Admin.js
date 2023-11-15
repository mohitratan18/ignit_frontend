import {React,useState,} from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    let url = "http://localhost:5000/api/auth/admin/login";
    const handleclick= async()=>{
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      const json = await response.json();
      console.log(json)
      if(json.status === true){
        localStorage.setItem("webtoken",json.webtoken);
        navigate('/dashboard')
      }
    }
  return (
    <div className="Meeting h-screen w-screen flex justify-center items-center">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleclick}>
            Submit
          </button>
        </form>
      </div>
  );
};

export default Admin;
