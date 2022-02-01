import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
const [state,dispatch] = useStateValue();


    const signIn = () => {
        //sign in...
        auth.signInWithPopup(provider)
          .then((result) => {
                dispatch({
                   type: actionTypes.SET_USER,
                   user:result.user,
              })
              console.log(result.user);

          })
          .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"alt=""/>

                    
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" width="150px" alt=""/>

                <Button  type="submit" onClick={signIn}>
                    Sign In
                </Button>

            </div>
        </div>
    );
}

export default Login;
