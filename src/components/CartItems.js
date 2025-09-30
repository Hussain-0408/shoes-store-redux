import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CartItems() {
    const navigate = useNavigate("/PaymentPage")
    const handlenavigate = ()=>{
        navigate("/PaymentPage")
    }
  return (
    <div>
        <Container>
            <Row> 
                <Col xs={12} md={6} lg={12}>

                 <div className='bg-white border w-100 justify-content-center d-flex py-2 mb-0 '>
                    <div className='py-2 d-flex  gap-3 '>
                        <h2>Total:$</h2>
                        <button className='btn btn-success btn-outline-danger text-white' onClick={handlenavigate}> Proced to Payment</button>
                    </div>

                 </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartItems