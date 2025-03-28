import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { Container, TextField, Button, Typography } from "@mui/material";
import "../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await loginUser({ email, password });
            localStorage.setItem("token", response.token);
            navigate("/users");
        } catch (err) {
            setError("Invalid credentials!");
        }
    };

    return (
        <Container className="login-container">
            <Typography variant="h4">Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Container>
    );
};

export default Login;
