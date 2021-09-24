import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Card sx={{ width: '35%', margin: '100px auto 0 auto' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Welcome to Ecommerce Platform!
                </Typography>
            </CardContent>
            <CardActions>
                <TextField
                    required
                    id="standard-required"
                    label="Enter Email"
                    variant="standard"
                />
                <br/>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <br/>
                <Button size="small">Login</Button>
            </CardActions>
        </Card>
    );
}

export default Login;