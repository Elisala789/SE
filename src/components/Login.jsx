import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email.endsWith("@nitc.ac.in")) {
            alert("Only NITC Emails are allowed!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8081/api/auth/login", { 
                email: email,
                password: password
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                const role = response.data.role;
                if (role === "STUDENT") {
                    window.location.href = "/student-dashboard";
                } else if (role === "FACULTY") {
                    window.location.href = "/faculty-dashboard";
                } else if (role === "RESEARCHER") {
                    window.location.href = "/researcher-dashboard";
                } else if (role === "GENERALADMIN") {
                    window.location.href = "/generaladmin-dashboard";
                }
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="p-5 shadow rounded bg-white">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" 
                            className="form-control" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password"
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password" 
                            required
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <a href="#" className="text-danger">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-danger w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
