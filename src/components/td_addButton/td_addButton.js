import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./td_addButton.css"

function AddButton({change, showButton}) {

    return (

        !showButton ? 
        
        <Container className='buttonContainer'>
        <Row>
          <Col className="d-flex justify-content-center align-items-center"><Button onClick={change} className='myButton'>+</Button></Col>
        </Row>
      </Container>

      : null
    )
}

export default AddButton
