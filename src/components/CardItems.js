import React from 'react';
import img2 from "../components/images/img2.jpg";
import img3 from "../components/images/img3.jpg";
import img4 from "../components/images/img4.jpg";
import img5 from "../components/images/img5.jpg";
import img11 from "../components/images/img11.jpg";
import img12 from "../components/images/img12.jpg";
import img13 from "../components/images/img13.jpg";
import img14 from "../components/images/img14.jpg";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/actionCreaters/index";

const CardItems = () => {

  const dispatch = useDispatch();

  const handleCart =(item)=>{
    dispatch(addToCart(item));
  }


  const cardsData = [
    { name: "Sandles", price: 200, img: img2 },
    { name: "Oxer Company", price: 500, img: img3 },
    { name: "Lofers", price: 400, img: img4 },
    { name: "Sneakers", price: 300, img: img5 },
    { name: "Nike", price: 400, img: img11 },
     { name: "Wood Land", price: 200, img: img12 },
      { name: "Campus", price: 200, img: img13 },
       { name: "Killer", price: 200, img: img14 },
        
  ];

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {cardsData.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center text-muted fs-5">
                  ₹{item.price}
                </Card.Text>
                <div className="d-grid">
                  <button className="btn btn-primary rounded-pill" onClick={()=>handleCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardItems;
