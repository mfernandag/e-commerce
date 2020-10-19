import React from "react";
import { Modal, Button } from "react-bootstrap";

const SuccessModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Orden exitosa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Número de orden: {props.orderId}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
