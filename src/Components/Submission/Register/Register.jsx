import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FirebaseError } from 'firebase/app';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {

    const {Registered, userProfile,googleSignIn, githubSigned} = useContext(AuthContext)
    const [users, setUsers] = useState(null)
    const [errors, setErrors] = useState(null)
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');


    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            setErrors("password should be more than 6 characters")
        }

        Registered(email,password)
        .then(result =>{
            const logged = result.user;
            setUsers(logged)
            form.reset()
        })
        .catch(error =>{
            console.log(error.message)
            form.reset()
        })

        userProfile({
            displayName: displayName, 
            photoUrl: photoURL
        })
        .then(result =>{
            const profile = result.currentUser;
            console.log(profile)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const GoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const googleLogged = result.user;
            setUsers(googleLogged);
        })
        .catch(error =>{
            setErrors(error.message)
        })
    }

    const GithubSignIn = () =>{
        githubSigned()
        .then(result =>{
            const githubLogged = result.user;
            setUsers(githubLogged);
        })
        .catch(error =>{
            setErrors(error.message)
        })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col mt-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-orange-600">Register now!</h1>
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl shadow-orange-100 bg-sky-900">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-200">Name</span>
                            </label>
                            <input onChange={(event) => setDisplayName(event.target.value)} type="text" name={displayName} placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-200">Photo Url</span>
                            </label>
                            <input onChange={(event) => setPhotoURL(event.target.value)} type="text" name={photoURL} placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-200">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-200">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                        <p><small className='text-slate-50'>{errors}</small></p>
                            <label className='pt-3'>
                                <strong className="text-slate-200">Already Have an account? <Link to='/login'>
                                    <span className='text-lg underline text-purple-400 font-semibold'>Log In </span>
                                    </Link> Now</strong>
                            </label>
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

export default Register;