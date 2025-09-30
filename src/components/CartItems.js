import React, { useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CartItems() {
    const[shop , setShop] = useState(false)
    const navigate = useNavigate();
    const handlenavigate = ()=>{
        navigate("/PaymentPage")
        setShop(false)

    }
    const handleback =()=>{
        navigate("/");
        setShop(true)
    };
    
  return (
    <div>
        <Container>
            <Row> 
                <Col xs={12} md={6} lg={12}>

                 <div className='bg-white border w-100 justify-content-center d-flex  mb-0 '>
                    <div className='p-3 d-flex  gap-5 '>
                        <h2>Total:$</h2>
                     {shop ? (   <button className='btn btn-success btn-outline-danger text-white' onClick={handlenavigate}> Proced to Payment</button>) :
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