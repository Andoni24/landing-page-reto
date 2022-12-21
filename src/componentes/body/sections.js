import React from 'react';
import doc from '../../img/doctor.png';
import rob from '../../img/robot.png';
import secr from '../../img/secretaria.png';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
    function Sections() {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
            <div className="content-container mx-auto">
                <div className="content">
                <section className="sec-nosotros d-flex flex-column flex-lg-row p-5 p-lg-4" id="nosotros">
                <div className="info info-nosotros w-100 w-md-50">
                    <h2>Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odit voluptatem unde cupiditate alias, velit placeat iure sunt hic 
                    voluptas blanditiis optio. Voluptate, commodi autem. Rerum laudantium possimus nam fugit. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Repudiandae illum repellendus consequuntur, </p>
                    <p>ad labore et. Itaque, explicabo. Consequatur doloremque expedita unde, 
                    porro facilis, maxime ipsum possimus corrupti at aut repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odit voluptatem unde cupiditate alias, velit placeat iure sunt hic 
                        voluptas blanditiis optio. Voluptate, commodi autem. Rerum laudantium possimus nam fugit. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Repudiandae illum repellendus consequuntur, </p>
                </div>
                <div className="sec-img mx-auto p-0 p-lg-2">
                    <img src={doc}/>
                </div>
                </section>
                <hr/>
                <section className="sec-servicios d-flex flex-column-reverse flex-lg-row p-5 p-lg-4" id="servicios">
                <div className="sec-img mx-auto p-0 p-lg-2">
                    <img src={rob}/>
                </div>
                <div className="info info-servicios w-100 w-md-50">
                    <h2>Servicios</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odit voluptatem unde cupiditate alias, velit placeat iure sunt hic 
                    voluptas blanditiis optio. Voluptate, commodi autem. Rerum laudantium possimus nam fugit. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Repudiandae illum repellendus consequuntur, </p>
                    <div className="row servicios-card mb-2">
                        <div className="col-sm-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">SERVICIO NORMAL</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary custom-button" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal">ADQUIRIR</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">SERVICIO PREMIUM</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary custom-button" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal">ADQUIRIR</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
                <hr/>
                <section className="sec-contacto d-flex flex-column flex-lg-row p-5 p-lg-4" id="contactanos">
                <div className="info info-contacto w-100 w-md-50">
                    <h2>Contactanos</h2>
                    <form>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Preguntanos</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" onClick={handleShow} className="btn btn-primary custom-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                    </form>
                </div>
                <div className="sec-img mx-auto p-0 p-lg-2">
                    <img src={secr}/>
                </div>
                </section>
            </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
            );
    }


export default Sections;