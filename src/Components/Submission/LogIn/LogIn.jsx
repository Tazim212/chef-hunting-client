import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const LogIn = () => {

    const [signed, setSigned] = useState(null);
    const [errors, setErrors] = useState(null)

    const {SignedIn, googleSignIn, githubSigned} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleSignIn = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length< 6){
            setErrors("password should be more than 6 characters")
        }

        SignedIn(email,password)
        .then(result =>{
            const signedUser = result.user;
            setSigned(signedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
            form.reset()
        })
    }

    const GoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const googleLogged = result.user;
            setSigned(googleLogged);
        })
        .catch(error =>{
            setErrors(error.message)
        })
    }

    const GithubSignIn = () =>{
        githubSigned()
        .then(result =>{
            const githubLogged = result.user;
            setSigned(githubLogged);
        })
        .catch(error =>{
            setErrors(error.message)
        })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col mt-16">
                <div className="text-center">
                    <h1 className="text-5xl text-violet-950 font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSignIn} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl shadow-slate-500 bg-green-900">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-zinc-200 font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-zinc-200 font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <div className='flex justify-between'>
                            <label className="pt-4">
                                <a href="/register" className="text-zinc-200 hover:text-blue-700 underline">Forgot password?</a>
                            </label>
                            <label className="pt-4">
                                <a href="/register" className="text-zinc-200 hover:text-blue-700 underline">Don't have an account?</a>
                            </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-lg text-red-400 pt-3'>{errors}</p>

                        <div className='flex justify-center align-middle mt-5'>
                            <hr className='w-32 mt-1.5 border-amber-300' />
                            <small className='px-4 text-zinc-200'>Or</small>
                            <hr className='w-32 mt-1.5 border-amber-300' />
                        </div>
                        
                    </div>
                    <div className='flex gap-5 mx-auto mb-5
                    '>
                        <button onClick={GoogleSignIn} className='bg-sky-200 py-3 px-5 rounded-md flex'><FaGoogle className='mt-1 mr-2 te'></FaGoogle> Google Sign In</button>

                        <button onClick={GithubSignIn} className='bg-sky-200 py-4 px-5 rounded-md flex'> <FaGithub className='mt-1 mr-2'></FaGithub> Github Sign In</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LogIn;