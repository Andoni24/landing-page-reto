import React from 'react';
import logo from '../../img/logo.png'
        
    function NavOffCanvas() {
        return (
            <div id="offCanvas" style={{width: 0+'px'}}>
            <div className="content-offCanvas">
                <a href="#" alt="logo"className="navbar navbar-brand d-block d-md-none"><img src={logo}></img></a>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link active text-light">INICO</a>
                    </li>
                    <li className="nav-item">
                        <a href="#nosotros" className="nav-link text-light">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                        <a href="#servicios" className="nav-link text-light">SERVICIOS</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contactanos" className="nav-link text-light">CONTACTANOS</a>
                    </li>
                </ul>
            </div>
            </div>
        );
    };

export default NavOffCanvas;