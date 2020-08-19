import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
} from "reactstrap";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
         <div className="card-profile-actions py-4 mt-lg-0">
             <Button
                 className="mr-4"
                 color="info"
                  href="#pablo"   
                  size="sm"
                  onClick={() => logout()}>
                <span className="btn-inner--text">Logout</span>
             </Button>
       </div>
    )
  )
}

export default LogoutButton