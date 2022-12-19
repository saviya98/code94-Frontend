import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteProduct } from "../../api/api";

export default function DeletePopup({ isShow }) {
  const [show, setShow] = useState(false);
  setShow(isShow);
  const handleClose = () => setShow(false);

  const handleDelete = async() =>{
    const response = await deleteProduct();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ARE YOU SURE?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will not be able to undo this action if you proceed!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
