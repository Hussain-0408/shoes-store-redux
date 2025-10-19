import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { IncreaseCart, DecreaseCart } from "../redux/actionTypes";
import '../styles/Cartitems.css';
import { FaArrowLeft } from "react-icons/fa";





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
        <div >
            <button
                className="btn btn-outline-primary fw-bold rounded-circle d-flex align-items-center justify-content-center position-absolute ms-5 mt-3"
                style={{
                    width: "40px",
                    height: "40px",
                    // top: "20px",
                    // left: "20px",
                    // backgroundColor:"red"

                }}
                onClick={handleback}
            >
                <FaArrowLeft size={100} />
            </button>

            <Container fluid>
                <Row>
                    <div xs={12} className='d-flex flex-column text-center'>
                        <h2 className='fs-1 text-center p-3'>Cart</h2>
                    </div>

                    <Col xs={12} md={6} lg={6}>
                        <div className="mt-3 d-flex flex-column align-items-center rounded-1 ">

                            {items.length === 0 ? (
                                <div className='text-center py-5'>
                                    <p className='fs-4'>Your cart is empty</p>
                                </div>
                            ) :
                                (
                                    items.map((item, index) => (

                                        <div key={index} className=" card mb-4   shadow-md  " >
                                            <div className=" p-4 d-flex bg-white flex-wrap  ">
                                                <div className='d-flex p-2 align-items-center flex-column justify-content-center gap-4'>
                                                    <img src={item.img} alt='' style={{ width: "200px ", height: '200px' }} />
                                                    <div className=' d-flex gap-3 align-items-center '>
                                                        <button onClick={() => handledecrease(item.name)} className=' btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "0.2rem" }}> - </button>
                                                        <span> {item.quantity}</span>
                                                        <button onClick={() => handleincrease(item.name)} className='btn btn-primary p-1 d-flex text-center justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "0.2rem" }}> + </button>
                                                    </div>
                                                </div>

                                                <div className='d-flex flex-column  justify-content-start ms-3 fs-5 mt-3'>
                                                    <p className='fs-5 lh-1'>{item.name}</p>
                                                    <p>Price : ₹{item.price}</p>
                                                    <p> Subtotal :₹ {item.price * item.quantity} </p>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                            }

                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='border mt-3 p-3 bg-white shadow-md  rounded-1 ' style={{ maxWidth: "400px ", margin: "0 auto" }} >
                            <h1 className='fs-3 fw-bold p-2'> Total Price : ₹ {totalAmount} </h1>
                            <div className='text-center mt-4'>
                                <button className='btn btn-primary btn-outline-success  text-white p-2 ' onClick={handlenavigate}> Proceed To Payment </button>
                            </div>
                        </div>
                    </Col>




                    {/* <Col>
                        <div className='cart-container d-flex flex-row gap-5'>
                            <div className="  px-2 w-25 bg-white shadow ms-4 text-white">
                                <h3>Cart</h3>
                                {items.length === 0 ? (
                                    <p>No items in cart</p>
                                ) : (
                                    <div  >
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="d-flex justify-content-between   align-items-center  mt-2   "   >
                                                <div className='d-flex  p-1 buttons flex-column gap-4 '>
                                                    <img src={item.img} alt={item.name} className='image ' style={{ width: "150px", height: "150px" }} />
                                                    <div className=' d-flex gap-4 align-items-center justify-content-center text-center  '>
                                                        <button onClick={() => handledecrease(item.name)} className='border rounded-2 '>-</button>
                                                        <span className="mx-2 text-dark">{item.quantity}</span>
                                                        <button onClick={() => handleincrease(item.name)} className='border rounded-2'>+</button>
                                                    </div>

                                                </div>
                                                <div className='d-flex text-dark fs-5 ms-3  border image-name  flex-column rounded-3 w-100 align-items-start' style={{ height: "200px" }}>
                                                    <p className='mt-2 '>{item.name}</p>
                                                    <p className='mt-2'>{item.price}</p>
                                                </div>

                                            </div>
                                        ))}


                                    </div>
                                )}
                            </div>
                            <div className='border bg-white h-25 w-25 p-3  shadow'>
                                <h1>Total Amount : $ </h1>

                            </div>

                        </div>
                    </Col> */}
                </Row>
            </Container>

        </div>
    )
}

export default CartItems