import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./td_listComponent.css";


function ListComponent({props, allowSpan}) {
    return (

        // <div className='listComponentDiv'>
        // <Stack direction='horizontal' gap={5} className='listStack'>

        //     <div>
        //     <span contentEditable={`${allowSpan ? "true" : "false"}`} className="taskSpan bg-transparent " >{props.text}</span>
        //     </div>

        //     <Stack direction='horizontal' gap={3}>
        //         <Button variant="outline-danger" className ='ms-auto' size='sm'>X</Button>
        //         <Button variant="outline-success" className ='ms-auto' size='sm' >C</Button>

        //     </Stack>

        // </Stack>
        // </div>
        <Container fluid="xs">
        <Row className="listItemContainer">
            <Col md={10} sm={9} xs={8} className="spanContainer">
                <span contentEditable={`${allowSpan ? "true" : "false"}`} className="taskSpan bg-transparent text-white-50 ">
                    {props.text}
                </span>

            </Col>
            <Col md={2} sm={3} xs={4} className='list_ButtonContainer'>
                
                    <Button variant='success' size='sm'>C</Button>
                    <Button variant='danger' size='sm'>X</Button>
                
            </Col>
         </Row>
        </Container>


    )
}

export default ListComponent
