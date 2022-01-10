import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./td_addButton.css"

function AddButton() {
    return (
        <Container className='buttonContainer'>
        <Row>
          <Col className="d-flex justify-content-center align-items-center"><Button className='myButton'>+</Button></Col>
        </Row>
      </Container>

    )
}

export default AddButton
