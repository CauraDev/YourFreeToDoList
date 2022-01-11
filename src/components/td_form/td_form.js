import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './td_form.css'


function TextForm({showForm, change}) {

    const submitChange = e => (
        e.preventDefault(),
        change()                        //////////////////// IT WORKS WITH PARENTHESIS BECAUSE I'M CALLING THE ACTUAL FUNCTION, NOT IT'S REFERENCE
    )

  return (

        showForm ? <Form className='mainForm rounded' onSubmit={submitChange}>
        <Form.Group className="mb-3" controlId="tdText">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="TESTMODE" />
        </Form.Group>
      
        <Button variant="primary" type="submit" size='sm' >
          Submit
        </Button>
      </Form>
      
      : null


    );
}   


export default TextForm
