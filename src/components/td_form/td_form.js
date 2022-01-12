import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './td_form.css'


function TextForm({showForm, change}) {



    const addTask = e => {
      e.preventDefault();
      change();


    }

  return (

        !showForm ? 

        <div className="formDiv">

        <Form className='mainForm rounded' onSubmit={addTask}>
        <Form.Group className="mb-3" controlId="tdText">
          <Form.Label>New Task</Form.Label>
          <Form.Control type="text" placeholder="TESTMODE" />
        </Form.Group>
      
        <Button variant="primary" type="submit" size='sm' >
          Submit
        </Button>
      </Form>
      
      </div>

      : null


    );
}   


export default TextForm
