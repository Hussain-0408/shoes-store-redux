import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const validationSchema = Yup.object({
    paymentMethod: Yup.string().required("Please select a payment method"),
    cardNumber: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) =>
        schema.required("Card number is required").min(16, "Must be 16 digits"),
    }),
    expiry: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) => schema.required("Expiry date is required"),
    }),
    cvv: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) =>
        schema.required("CVV is required").length(3, "Must be 3 digits"),
    }),
  });

  const {  totalAmount = 0 } = useSelector(
    (state) => state.cart ?? { items: [], totalAmount: 0 }
  );

  const navigate = useNavigate();
  const handleBackCart = () => {
    navigate(-1);
  };

  return (
    <div className="position-relative" style={{ minHeight: "100vh" }}>
      <Button
        variant="outline-primary"
        className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px", top: "20px", left: "20px", zIndex: 10 }}
        onClick={handleBackCart}
      >
        <FaArrowLeft size={16} />
      </Button>

      <Container className="d-flex justify-content-center align-items-center" style={{ paddingTop: "80px" }}>
        <Row className="justify-content-center w-100">
          <Col xs={12} md={6}>
            <Formik
              initialValues={{
                paymentMethod: "",
                cardNumber: "",
                expiry: "",
                cvv: "",
              }}
              validationSchema={validationSchema}
            >
              <Form className="bg-white p-4 rounded shadow-sm">
                <h3 className="mb-4 text-center">Payment Information</h3>
                <div className="mb-3">
                  <label className="fw-bold d-block mb-2">Select Payment Method:</label>
                  <div className="d-flex gap-3">
                    <label className="form-check-label">
                      <Field type="radio" name="paymentMethod" value="cash" className="form-check-input me-1" />
                      Cash on Delivery
                    </label>
                    <label className="form-check-label">
                      <Field type="radio" name="paymentMethod" value="credit" className="form-check-input me-1" />
                      Credit Card
                    </label>
                  </div>
                  <ErrorMessage name="paymentMethod" component="div" className="text-danger small mt-1" />
                </div>

               
                <div className="mb-3">
                  <label className="fw-bold">Card Number</label>
                  <Field type="text" name="cardNumber" className="form-control" placeholder="Enter card number" />
                  <ErrorMessage name="cardNumber"  className="text-danger small" />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="fw-bold">Expiry Date</label>
                    <Field type="date" name="expiry" className="form-control" />
                    <ErrorMessage name="expiry" component="div" className="text-danger small" />
                  </div>
                  <div className="col-md-6">
                    <label className="fw-bold">CVV</label>
                    <Field type="password" name="cvv" className="form-control" placeholder="123" maxLength="3" />
                    <ErrorMessage name="cvv" component="div" className="text-danger " />
                  </div>
                </div>

                
                <div className="text-center mb-3">
                  <h5>Total Amount: <span className="fw-bold">${totalAmount}</span></h5>
                </div>

              
                <div className="w-100 text-center d-grid">
                  <Button type="submit" variant="success" className="fw-bold">
                    Complete Payment
                  </Button>
                </div>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentPage;
