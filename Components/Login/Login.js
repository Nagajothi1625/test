import { useState, useEffect, useContext } from 'react'

import FoodServices from '../../Services/FoodServices';
import { useNavigate, useParams } from 'react-router-dom';

import './Login.css'
import { StoreContext } from '../../Context/StoreContext';

const Login = () => {

  const [currState, setCurrState] = useState("Login");
  const [role, setRole] = useState("USER");
  const {user, setUser} = useContext(StoreContext)

  const navigate = useNavigate();
  
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  }
  const changeNameHandler = (event) => {
    setUname(event.target.value);
  }
  const submitHandler  = async (e) => {
    e.preventDefault();

    try {

      if (currState === "Sign Up") {

        const person = { uname, email, password, role  };
        console.log(person);

        await FoodServices.registerUser(person);
        setMessage("user registered successfully");
        
        // Clear form
        setUname("");
        setEmail("");
        setPassword("");
        setRole("USER");

        setCurrState("Login");
        return;
      }
       // LOGIN
            const person = { uname,email, password  };
            const response = await FoodServices.loginUser(person);

            if (response.data.message === "success") {

                const userData = {
                     uname: response.data.uname,
                     email: response.data.email,
                     role: response.data.role

                };

               // const userData = response.data.user;
                console.log("User Data:", userData);

           localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);

                setMessage("Login successful");

                // ROLE BASED REDIRECT
               const role = response.data.role?.toUpperCase();
               console.log("Login Response:", response.data);
                  
                if (role === "ADMIN") {
    
                  console.log("Role:", response.data.role);
                    navigate("/admin");
                } else {
                    navigate("/");
                }

            } else {
                setMessage("Invalid credentials");
            }

        } catch (err) {
            console.log(err);
            setMessage("Something went wrong");
        }
    };

    useEffect(() => {
  localStorage.removeItem("user"); // optional safety if you want fresh login always
}, []);

useEffect(() => {
  if (currState === "Login") {
    setRole("USER");
  }
}, [currState]);
 

useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
        return;
    }

    try {
        setUser(JSON.parse(storedUser));
    } catch (err) {
        console.error("Invalid user in localStorage", err);
        localStorage.removeItem("user");
    }
}, []);

  return (
      <div className="login-container" style={{ marginTop: "4rem", textAlign: 'left' }}>
        <form className='form-control' onSubmit={submitHandler}>



          <h2 >{currState}</h2>


          <div className="form-group">
            {
              currState === 'Sign Up' && (  <>
    
              <label>Select Role</label>
              <select
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </>
            )}

             <label>Enter your Name :</label>
            <input type='text'
              className="form-control"
              name='Name'
              placeholder='Enter your Name:'
              value={uname}
              onChange={changeNameHandler}
            >
            </input>

  
            <label>Enter your Email :</label>
            <input type='email'
              className="form-control"
              name='email'
              placeholder='Enter your Email:'
              value={email}
              onChange={changeEmailHandler}
            >
            </input>

            <label >Enter the password</label>
            <input type='password'
              className="form-control"
              name='password'
              placeholder='Enter the Password:'
              value={password}
              onChange={changePasswordHandler}
            ></input>
          </div>
          < div>
            <br />
            <center><button type='submit' className="btn btn-success ">{currState === 'Sign Up' ? 'Register' : 'Sign In'}</button> </center>
          </div>

          <div className='login_pop_condition mt-3' >
            <p><input type="checkbox" required /> By clicking, I agree to the terms of use and privacy policy..</p>

            {currState === 'Login' ?
              <p>Create a new account?
                  <span 
                      style={{ cursor: "pointer", color: "blue" }}
                     onClick={() => setCurrState("Sign Up")}>click here</span></p>
              : <p>Already hava an account? 
                     <span 
                         style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => setCurrState("Login")}>Login here</span></p>
            } </div>
          {message && (
          <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
        )}


        </form>
      </div>
    );
  };

  export default Login  
