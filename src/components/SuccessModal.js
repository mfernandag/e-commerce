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
      <Modal.Body className="text-center">
        <img
          className="img-fluid mb-4"
          width="90px"
          src={successIcon}
          alt="compra exitosa"
        ></img>
        <h4 className="mb-4">¡Gracias por elegirnos, {props.name}!</h4>
        <h4>Tu orden #{props.orderId} fue procesada exitosamente</h4>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={props.clearState}>Ir a Home</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
