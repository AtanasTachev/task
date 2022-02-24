import './logout.css';

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.googleusecontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}
export default Logout;