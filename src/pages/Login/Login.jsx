import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from '../../components/card';
import { adminLogin, storeToken } from './Api';
import { checkApiStatus } from '../../utils/checkStatus';
import { setLocalStore } from '../../utils';
import { useSnackbar } from 'notistack';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCredentials({ ...credentials, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await adminLogin(credentials);
            if (checkApiStatus(data)) {
                const token = data.accessToken;
                setLocalStore('username', credentials.username);
                storeToken(token);
                enqueueSnackbar(data.msg, {
                    variant: 'success',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                });
                setTimeout(() => {
                    window.location.href = '/';
                }, 300);
            } else {
                setErrorMessage("Login failed, please check your credentials.");
            }
        } catch (error) {
            console.error("An error occurred during handleSubmit:", error);
            setErrorMessage("An unexpected error occurred.");
        }
    };




    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[50%] overflow-auto my-5 mx-5 p-5">
                <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center gap-10 p-10">
                            <h4 className="mb-4 text-4xl font-bold text-center text-navy-700">Login</h4>
                            <div className="flex flex-col gap-3 w-[425px]">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    placeholder="Enter your username"
                                    type="text"
                                    value={credentials.username}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    placeholder="Enter your magic spell"
                                    type={showPassword ? 'text' : 'password'}
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={togglePasswordVisibility}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="mt-2"
                                >
                                    Log In
                                </Button>
                            </div>
                            {errorMessage && (
                                <p className="text-center text-red-500">{errorMessage}</p>
                            )}
                            <div className="flex justify-center">
                                <p>Don't have an account? <a href='' className='pointer'>Signup</a></p>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
