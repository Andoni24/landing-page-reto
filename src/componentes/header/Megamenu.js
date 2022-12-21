import React from 'react';
import Nav from './Nav';

class Megamenu extends React.Component {
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
            button.marginLeft = '250px'
            containerOffCanvas.style.width = '250px';
            toggleIcon.style.transform = 'rotate(0deg)';
        }else{
            this.style.marginLeft = '0'
            toggleIcon.style.transform = 'rotate(45deg)';
            containerOffCanvas.style.width = '0';
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
                <Nav/>
            </>
        );
    };
}

export default Megamenu;