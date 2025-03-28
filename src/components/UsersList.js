import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../api";
import { Container, Card, CardContent, Typography, Avatar, Button, Grid } from "@mui/material";
import "../styles/users.css";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers().then(data => setUsers(data.data));
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <Container>
            <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
                Users List
            </Typography>
            <Grid container spacing={2}>
                {users.map(user => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Card className="user-card">
                            <CardContent>
                                <Avatar src={user.avatar} alt={user.first_name} className="user-avatar" />
                                <Typography variant="h6">{user.first_name} {user.last_name}</Typography>
                                <Typography color="textSecondary">{user.email}</Typography>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={{ margin: "10px" }}
                                    onClick={() => navigate(`/edit/${user.id}`, { state: { user } })}
                                >
                                    Edit
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default UsersList;
