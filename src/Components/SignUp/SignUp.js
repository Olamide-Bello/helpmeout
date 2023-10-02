import React from 'react'
import { useForm } from 'react-hook-form';
import logo from '../Assets/logo.png'
import Facebook from '../Assets/Facebook.png'
import Google from '../Assets/Google.png'
import './SignUp.css'

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const OnSubmit = async (data) => {
        console.log(data)

    }

    return (
        <div className='wrapper'>
            <div className='header-logo'>
                <img src={logo} alt='logo' />
                <p>HelpMeOut</p>
            </div>
            <div className='sign'>
                <div className='sign-hd'>
                    <h3>Log in or Sign up</h3>
                    <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
                </div>
                <div className='alt'>
                    <p>OR</p>
                    <button className='alt-login'><img src={Google} alt='google icon' />&nbsp; &nbsp;<span>Continue with Google</span></button>
                    <button className='alt-login'><img src={Facebook} alt='facebook icon' />&nbsp; &nbsp;<span>Continue with Facebook</span></button>
                </div>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your mail address"
                            {...register("email",
                                {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid."
                                    }
                                })
                            }
                        />
                        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password",
                                {
                                    required: true, minLength: {
                                        value: 6,
                                        message: "Password should be at-least 6 characters."
                                    }
                                })
                            }
                        />
                        {errors.password?.type === "required" && (<p className="errorMsg">Password is required.</p>)}
                        {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}
                    </div>
                    <button className='submit-btn' type='submit' id='submit-btn'><strong>Sign In</strong></button>
                </form>
            </div>

        </div>
    )
}

export default SignUp