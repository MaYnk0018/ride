// Login.js

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import './Login.css'; // Import the CSS file

const Login = () => {
    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            try {
                const q = query(
                    collection(fireDB, "student"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user))
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");

                    navigate('/student-dashboard');

                });
                return () => data;
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
            toast.error("Login Failed");
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            {/* Login Form  */}
            <div className="login_Form">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-weight-bold'>
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='form-control'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='form-control'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='btn btn-primary btn-block'
                    >
                        Login
                    </button>
                </div>

                <div>
                <div>
                       <h2 className='text-black' style={{ fontSize: '15px' }}>Don't Have an account <br /> <Link className='text-secondary font-weight-bold' to={'/signup'}>Signup</Link></h2>
                </div>
             </div>

            </div>
        </div>
    );
}

export default Login;
