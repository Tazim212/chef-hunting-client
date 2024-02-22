import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GithubAuthProvider, updateCurrentUser, updateProfile, onAuthStateChanged, signOut} from 'firebase/auth';
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)


// --------------------google and githubprovider --------------------

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

    const Registered = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const SignedIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const githubSigned = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    
    const userProfile = () =>{
        return updateProfile(auth.currentUser);
    }
    
    const SigningOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (LooggedInUser) =>{
            setUser(LooggedInUser)
        });
        return () =>{
            return unsubscribe;
        }
    }, [])
    
    const authInfo = {
        Registered,
        SignedIn,
        googleSignIn,
        githubSigned,
        userProfile,
        user,
        SigningOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;