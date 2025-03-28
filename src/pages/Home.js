import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h4">Welcome to User Management App</Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate("/login")}
                style={{ marginTop: "20px" }}
            >
                Login
            </Button>
        </Container>
    );
};

export default Home;
