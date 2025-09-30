import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

function CartItems() {
    const [shop, setShop] = useState(false)
    const navigate = useNavigate();
     const { items=[], totalAmount=0 } = useSelector((state) => state.cart ? state.cart:{items:[], totalAmount:0});


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
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={12}>
                    <h2>Cart</h2>
                        {items.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            items.map((item, idx) => (
                                <Row key={idx} className="align-items-center mb-2 border p-2">
                                    
                                    <Col>{item.name}</Col>
                                    <Col>₹{item.price}</Col>
                                    <Col>Qty: {item.quantity}</Col>
                                </Row>
                            ))
                        )}
                      

                        <div className='bg-white border w-100 justify-content-center d-flex  mb-0 '>
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