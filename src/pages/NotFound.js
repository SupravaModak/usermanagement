import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Container style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h4" color="error">404 - Page Not Found</Typography>
            <Typography>The page you are looking for does not exist.</Typography>
        </Container>
    );
};

export default NotFound;
