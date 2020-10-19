import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import successIcon from "../assets/images/success.png";

const SuccessModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body closeButton className="text-center">
        <img
          className="img-fluid"
          width="100px"
          src={successIcon}
          alt="compra exitosa"
        ></img>
        <h4>Tu orden #{props.orderId} fue procesada exitosamente</h4>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={props.onHide}>Ir a Home</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
