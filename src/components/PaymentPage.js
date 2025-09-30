import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

    return (
        <Container className="mt-2 gap-3 d-flex justify-content-center">
            <Row className="w-100 justify-content-center d-flex      ">
                <Col xs={12} md={8} lg={6}>

                    <Formik
                        initialValues={{
                            paymentMethod: "",
                            cardNumber: "",
                            expiry: "",
                            cvv: "",
                        }}
                        validationSchema={validationSchema}  >
                        <Form className="p-4 border w-75 d-flex justify-content-center flex-column rounded shadow">
                            {/* Payment Method */}
                            <div className="mb-3">
                                <div className="p-2 ms-3  fs-5">
                                    <label className="me-3">
                                        <Field
                                            type="radio"
                                            name="paymentMethod"
                                            value="cash"
                                            className="me-1"
                                        />
                                        Cash on Delivery
                                    </label>
                                    <label>
                                        <Field
                                            type="radio"
                                            name="paymentMethod"
                                            value="credit"
                                            className="me-1"
                                        />
                                        Credit Card
                                    </label>
                                </div>
                                <h3 className="mt-4 fs-2 p-1">Payment Details:</h3>

                                <ErrorMessage
                                    name="paymentMethod"
                                    component="div"
                                    className="text-danger small"
                                />
                            </div>

                            <div className="mb-3">
                                <label>Card Number</label>
                                <Field
                                    type="text"
                                    name="cardNumber"
                                    className="form-control"
                                    placeholder="Enter card number"
                                />
                                <ErrorMessage
                                    name="cardNumber"
                                    component="div"
                                    className="text-danger small"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Expiry Date</label>
                                    <Field
                                        type="date"
                                        name="expiry"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="expiry"
                                        component="div"
                                        className="text-danger small"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>CVV</label>
                                    <Field
                                        type="password"
                                        name="cvv"
                                        className="form-control"
                                        placeholder="123"
                                        maxLength="3"
                                    />
                                    <ErrorMessage
                                        name="cvv"
                                        component="div"
                                        className="text-danger small"
                                    />
                                </div>
                            </div>

                            <div className="text-center my-3">
                                <h4>Total Amount: $</h4>
                            </div>

                            <div className="d-grid">
                                <Button type="submit" variant="success" className=" btn border-danger">
                                    Complete Payment
                                </Button>
                            </div>
                        </Form>

                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default PaymentPage;
