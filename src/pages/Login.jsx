import Card from '../components/card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleForgotPassword = () => {
        // Handle forgot password action
    };

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[50%] overflow-auto my-5 mx-5 p-5">
                <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className='flex flex-col items-center gap-10 p-10'>
                        <div className="">
                            <h4 className="mb-12 text-4xl font-bold text-center text-navy-700">
                                Login
                            </h4>

                            <h4 className="mb-4 text-4xl font-400 text-navy-700">
                                Login and Explore
                            </h4>

                            <div className='flex flex-col gap-3 w-[425px]'>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Username"
                                    placeholder="Username"
                                    sx={{ width: '100%' }}
                                    type="text"
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    placeholder="Enter your magic spell"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handlePasswordVisibility}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <div className='flex '>
                                    <p>
                                        <a onClick={handleForgotPassword}>Forgot password?</a>
                                    </p>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="mt-2"
                                    onClick={handleSubmit}
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <p>Don't have an account? <a>Signup</a></p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
