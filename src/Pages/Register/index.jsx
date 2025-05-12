import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom';

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Register with a new account</h3>

                    <form className='w-full mt-5'>
                    <div className='form-group w-full mb-5'>
                            <TextField
                                id='name'
                                label='Full Name'
                                type='text'
                                variant='outlined'
                                className='w-full'
                            />
                        </div>
                        <div className='form-group w-full mb-5'>
                            <TextField
                                id='email'
                                label='Email Id'
                                type='text'
                                variant='outlined'
                                className='w-full'
                            />
                        </div>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                id='password'
                                label='Password'
                                type={isShowPassword ? 'text' : 'password'}
                                variant='outlined'
                                className='w-full'
                            />

                            <Button 
                                className='!absolute top-[10px] right-[10px] !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {
                                    !isShowPassword ? 
                                    (
                                        <IoMdEye className='text-[20px] opacity-75' />
                                    ) 
                                    :
                                    (
                                        <IoMdEyeOff className='text-[20px] opacity-75' />
                                    )
                                }
                            </Button>
                        </div>
                        
                        <div className='flex items-center w-full mt-3 mb-3'>
                            <Button className='btn-org btn-lg w-full'>Register</Button>
                        </div>

                        <p className='text-center'>Already have an account? <Link className='link text-[14px] font-[600] text-primary' to="/login">Login</Link>  </p>
                    
                        <p className='text-center font-[500]'>Or continue with social account</p>
                        
                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                            <FcGoogle className='text-[20px]' /> Sign up with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register