import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { IncreaseCart, DecreaseCart } from "../redux/actionTypes";


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
                    <Col xs={12} className='d-flex flex-column border text-center'>
                        <h2 className='fs-1 text-center'>Cart</h2>

                        <Row className="mt-3">
                            {items.length === 0 ? (
                                <Col>
                                    <p>Your cart is empty</p>
                                </Col>
                            ) : (
                                items.map((item, index) => (
                                    <Col xs={12} md={6} lg={6} key={index} className="mb-3">
                                        <div className="shadow-lg p-4 d-flex flex-row justify-content-between">
                                            <Col className='d-flex flex-column align-items-start'>
                                                <h4>{item.name}</h4>
                                                <p>₹{item.price}</p>
                                            </Col>
                                            <Col className='d-flex p-2 align-items-center  justify-content-center gap-4'>
                                                <button onClick={()=>handleincrease(item.name)} className=' btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "20px", height: "25px", borderRadius: "0.2rem" }}> - </button>
                                                <span> {item.quantity}</span>
                                                <button onClick={()=>handleincrease(item.name)} className='btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "20px", height: "25px", borderRadius: "0.2rem" }}> + </button>
                                            </Col>
                                        </div>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12} xs={12} className='border'>
                        <div className='bg-white w-100 justify-content-center d-flex  mb-0 '>
                            <div className='p-3 d-flex  gap-5 '>
                                <h2>Total:${totalAmount}</h2>
                                {shop ? (<button className='btn btn-success btn-outline-danger text-white' onClick={handlenavigate}> Proced to Payment</button>) :
                                    (<button className='btn btn-success btn-outline-danger text-white' onClick={handleback}> Back to Shopping</button>)}
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartItems