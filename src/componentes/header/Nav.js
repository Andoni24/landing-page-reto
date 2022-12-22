import React from 'react';
import toggleIcon from '../../img/toggle.png'
import { Nav } from 'react-bootstrap';
import NavOffCanvas from './NavOffCanvas';
import logo from '../../img/logo.png'

class Navegador extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.offcanvasToggle = this.offcanvasToggle.bind(this);
    this.toggleElements = this.toggleElements.bind(this);
};

componentDidMount(){

let button = document.getElementById('toggleButton');
let containerOffCanvas = document.getElementById('offCanvas');
let toggleIcon = document.getElementById('togglerIcon');

button.onclick = this.offcanvasToggle;
window.onresize = this.toggleElements;

}

offcanvasToggle(event){
let button = document.getElementById('toggleButton');
let containerOffCanvas = document.getElementById('offCanvas');
let toggleIcon = document.getElementById('togglerIcon');

    if(containerOffCanvas.style.width == 0+'px'){
        button.style.marginLeft = '250px'
        containerOffCanvas.style.width = '250px';
        toggleIcon.style.transform = 'rotate(45deg)';
    }else{
        containerOffCanvas.style.width ='0';
        button.style.marginLeft = '0px'
        toggleIcon.style.transform = 'rotate(0deg)';
    }
    event.stopPropagation();
}

toggleElements(event){
    let button = document.getElementById('toggleButton');
    let containerOffCanvas = document.getElementById('offCanvas');
    if(window.innerWidth >= 768  && containerOffCanvas.style.width > '0px'){
        containerOffCanvas.style.width ='0';
        button.style.marginLeft = '0'
    }
}
    render() {
        return (
          <>
          <NavOffCanvas />
            <div className="container-fluid p-0 megamenu">
                <nav className="navbar navbar-expand-md custom-nav">
                 <button id="toggleButton" type="button" className="navbar-toggler" onClick={this.offCanvasToggle}>
                         <img id="togglerIcon" src={toggleIcon} style={{width: 50+'px',height: 'auto'}} alt={"logo"}></img>
                 </button>
                 <a href="#" alt="logo" className="navbar navbar-brand d-none d-md-block"><img src={logo}></img></a>
                 <div className="d-none d-md-block collapse navbar-collapse justify-content-end" id="navbarNav">
                     <ul className="navbar-nav">
                     <Nav.Item>
                        <Nav.Link className= 'active'>
                         INICIO
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='#nosotros'>
                         NOSOTROS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  href='#servicios'>
                         SERVICIOS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  href='#contactanos'>
                         CONTACTANOS
                        </Nav.Link>
                      </Nav.Item>
                     </ul>
                 </div>
             </nav>
         </div>
         </>
        );
    }
  }

export default Navegador;