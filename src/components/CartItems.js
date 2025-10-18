import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { IncreaseCart, DecreaseCart } from "../redux/actionTypes";
import  '../styles/Cartitems.css';


function CartItems() {
    const [shop, setShop] = useState(true)
    const navigate = useNavigate();
    const { items = [], totalAmount = 0 } = useSelector((state) => state.cart ? state.cart : { items: [], totalAmount: 0 });

    const dispatch = useDispatch();

    const handleincrease = (itemName) => {
        dispatch({ type: IncreaseCart, payload: itemName });

    };


    const handledecrease = (itemName) => {
        dispatch({ type: DecreaseCart, payload: itemName });
    };

    const handlenavigate = () => {
        navigate("/PaymentPage")
        setShop(false)
    }

    const handleback = () => {
        navigate("/");
        setShop(true)
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} className='d-flex flex-column text-center'>
                        <h2 className='fs-1 text-center p-3'>Cart</h2>

                        <Row className="mt-3">
                            {items.length === 0 ? (
                                <Col>
                                    <p className='fs-4'>Your cart is empty</p>
                                </Col>
                            ) : (
                                items.map((item, index) => (
                                    <Col xs={12} md={6} lg={4} key={index} className="mb-3 border ">
                                        <div className="shadow-lg p-4 d-flex bg-white flex-wrap  justify-content-between">
                                            <Col className='d-flex flex-row align-items-start'>
                                                <Col className='border'>
                                                    <img src={item.img} alt='' className='w-25' />
                                                </Col>
                                                <Col className='d-flex flex-column align-items-start'>
                                                    <p className='fs-5 lh-1'>{item.name}</p>
                                                    <p>₹{item.price}</p>
                                                </Col>
                                            </Col>
                                            <Col className='d-flex p-2 align-items-center  justify-content-center gap-4'>
                                                <button onClick={() => handledecrease(item.name)} className=' btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "20px", height: "25px", borderRadius: "0.2rem" }}> - </button>
                                                <span> {item.quantity}</span>
                                                <button onClick={() => handleincrease(item.name)} className='btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "20px", height: "25px", borderRadius: "0.2rem" }}> + </button>
                                            </Col>
                                            

                                        </div>

                                    </Col>
                                ))
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartItems