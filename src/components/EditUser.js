import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../api";
import { Container, TextField, Button, Typography } from "@mui/material";
import "../styles/editUser.css";

const EditUser = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state?.user) {
            setFirstName(location.state.user.first_name);
            setLastName(location.state.user.last_name);
            setEmail(location.state.user.email);
        }
    }, [location]);

    const handleUpdate = async () => {
        await updateUser(id, { first_name: firstName, last_name: lastName });
        navigate("/users");
    };

    return (
        <Container className="edit-container">
            <Typography variant="h4">Edit User</Typography>
            <TextField label="First Name" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Last Name" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <TextField label="Email" fullWidth disabled value={email} />
            <Button variant="contained" color="primary" onClick={handleUpdate}>Save Changes</Button>
        </Container>
    );
};

export default EditUser;
