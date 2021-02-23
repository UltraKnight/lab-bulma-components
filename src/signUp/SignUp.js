import React from 'react';
import NavBar from '../navbar/Navbar';
import FormField from '../formField/FormField';
import CoolButton from '../coolButton/CoolButton';
import 'bulma/css/bulma.css';
import './SignUp.css';

const SignUp = () => {
    return(
        <React.Fragment>
            <NavBar />
            <form action="" method="POST">
                <FormField label="Name" type="text" placeholder="Your Name" />
                <FormField label="Email" type="email" placeholder="Your Email" />
                <FormField label="Password" type="password" placeholder="Your Password" />
                <CoolButton isSuccess className="is-rounded">Create Account</CoolButton>
            </form>
        </React.Fragment>
    )
}

export default SignUp;