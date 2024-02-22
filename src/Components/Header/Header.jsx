import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, SigningOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        SigningOut()
        .then(result =>{
            const logOut = result.user;
            setUser(logOut)
            form.reset()
        })
        .catch(error =>{
            console.log(error)
        })
    }
    // console.log(user.email)
    return (
        <div className="navbar bg-cyan-300">
            <div className="flex-1">
                <a className="normal-case text-base md:text-lg text-violet-950 font-extrabold mx-10">BD Chef Hub</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 mr-5 md:mr-28">
                    <li><NavLink className='hover:bg-lime-700 font-semibold text-center' to='/home'>Home</NavLink></li>

                    <li><NavLink className='hover:bg-lime-700 font-semibold text-center' to='/blog'>Blog</NavLink></li>
                    
                    { user ? <button onClick={handleSignOut} className='hover:bg-lime-700 font-semibold px-5 rounded-lg'>Log out</button>: <li><NavLink className='hover:bg-lime-700 font-semibold text-center' to='/login'>Log In</NavLink></li>

                    }
                    {
                        user ?
                        <li className='pt-3 pl-4'>{user?.email}</li>: ''
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
