import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark py-4 ">
            <Container>
                <Row>
                    <Col xs={6} md={4} lg={3} className="mb-3">
                        <div className="p-3   text-white ">
                            <h2 className='ms-4'>Company</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Our Services</li>
                                <li>Privacy Policy</li>
                                <li>Affiliate Program</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-3">
                        <div className="p-3  text-white ">
                            <h2 className='ms-4'>Get Help</h2>
                            <ul>
                                <li>FAQ</li>
                                <li>Shipping</li>
                                <li>Returns</li>
                                <li>Order Status</li>
                                <li>Payment Options</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-3">
                        <div className="p-3   text-white ">
                            <h2 className='ms-4'>Online Shop</h2>
                            <ul>
                                <li>Watch</li>
                                <li>Bag</li>
                                <li>Shoes</li>
                                <li>Dress</li>

                            </ul>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-1 ">
                        <div className="p-3  mt-3 text-center gap-4 d-flex  ">
                            
                                <div><Link to="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                                    <FaFacebookF />
                                </Link></div>
                                <div><Link Link to="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                                    <FaTwitter />
                                </Link></div>
                                <div><Link to="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                                    <FaInstagram />
                                </Link></div>
                                <div><Link to="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                                    <FaLinkedinIn />
                                </Link></div> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
