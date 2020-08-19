import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
} from "reactstrap";


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
             <div className="btn-wrapper text-center">
                          <Button 
                            className="btn-neutral btn-icon"
                            color="default"
                            href="#pablo"
                            onClick={() => loginWithRedirect()}>
                              <span className="btn-inner--text">SIGN-IN</span>
                          </Button>
                        </div>
                        
    )
  )
}

export default LoginButton