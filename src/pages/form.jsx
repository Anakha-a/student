import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function MyForm() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formFieldName">
          <Form.Label>Field Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Field Name" />
        </Form.Group>
        <Form.Group controlId="formDesignation">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Designation" />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Location" />
        </Form.Group>
        <Form.Group controlId="formSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Salary" />
        </Form.Group>
        <Form.Group controlId="formCheck">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default MyForm;
