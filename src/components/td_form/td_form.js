import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './td_form.css'


function TextForm({showForm, change}) {



    const addTask = e => {
      e.preventDefault();
      change();


    }

    

  return (

        !showForm ? 
<Form className='mainForm' onSubmit={addTask}>
        <Container className='formContainer' fluid="xs">
          <Row className='justify-content-center'>
          <Col md={11} sm={10} xs={10}>
          <Form.Group className="mb-3 groupForm" controlId="tdText">
          <Form.Control className="inputForm" type="text" placeholder="New Task" />
        </Form.Group>

          </Col>
          </Row>


          <Row className='justify-content-center'>
            <Col md={4} sm={4} xs={4}>
            <Button type="submit" className='taskButton' size='sm' >
          Submit
        </Button>

          </Col>
            <Col md={4} sm={4} xs={4}>
            <Button className='taskButton' size='sm' onClick={change} >
          Cancel
        </Button>

          </Col>
          </Row>
        </Container>
              </Form>

      : null


    );
}   

{/* <Form className='mainForm' onSubmit={addTask}>
        <Form.Group className="mb-3 groupForm" controlId="tdText">
          <Form.Control className="inputForm" type="text" placeholder="New Task" />
        </Form.Group>
      
        <Button type="submit" className='formButton' size='sm' >
          Submit
        </Button>
        <Button className='formButton' size='sm' onClick={change} >
          Cancel
        </Button>
      </Form>
 */}
export default TextForm
