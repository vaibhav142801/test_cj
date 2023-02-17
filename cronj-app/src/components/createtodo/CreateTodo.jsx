import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateTodo = ({
  showModel,
  handleModel,
  istodotext,
  setistodotext,
  createTodo,
}) => {
  return (
    <>
      <Modal show={showModel} onHide={handleModel} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Your task"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={istodotext}
              onChange={(e) => setistodotext(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModel}>
            Close
          </Button>
          <Button variant="primary" onClick={createTodo}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTodo;
