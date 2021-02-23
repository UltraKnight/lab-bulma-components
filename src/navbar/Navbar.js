import React from 'react';
import Button from '../coolButton/CoolButton';
// import 'bulma/css/bulma.css';
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="">
                        Home
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        <p className="control">
                            <Button isInfo>
                                <span>
                                    Login
                                </span>
                            </Button>
                        </p>
                        <p className="control">
                            <Button isPrimary>
                                <span>Sign up</span>
                            </Button>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;