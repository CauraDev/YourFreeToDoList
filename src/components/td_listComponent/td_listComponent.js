import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./td_listComponent.css";
import { FaTrashAlt, FaRegThumbsUp } from 'react-icons/fa';

function ListComponent({props, allowSpan, deleteTasksLC}) {
   
   
   const [completedTask, setCompletedTask] = useState(false); 
   
   
   
   
    return (


        <Container fluid="xs">
        <Row className={`listItemContainer ${completedTask ? "completedTask" : ""}`}>
            <Col md={10} sm={9} xs={8} className="spanContainer">
                
                <span contentEditable={`${allowSpan ? "true" : "false"}`} suppressContentEditableWarning= "true"
                 className={`taskSpan bg-transparent ${completedTask ? "completedSpan" : ""} `}>
                    {props.text}
                </span>

            </Col>
            <Col md={2} sm={3} xs={4} className='list_ButtonContainer'>
                
                    <Button onClick={() => setCompletedTask(!completedTask)} className={`taskButton ${completedTask ? "completedButton" : ""}`} size='sm'><FaRegThumbsUp /></Button>
                    <Button onClick={() => deleteTasksLC(props.id)} className={`taskButton ${completedTask ? "completedButton" : ""}`} size='sm'><FaTrashAlt /></Button>
                
            </Col>
         </Row>
        </Container>


    )
}

export default ListComponent




// ${completedTask ? "completedSpan" : ""}