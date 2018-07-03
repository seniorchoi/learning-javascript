import React from 'react';
import logo from '../logo.svg';

const CoolLogo =()=>{
    return(
        <div>
            <header className="App-header">
                <p>
                <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-title">ReacTube</span>
                <img src={logo} className="App-logo" alt="logo" />
                </p>
            </header>
            <p className="App-intro">
            </p>
        </div>
    )

}

export default CoolLogo;
