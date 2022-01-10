import React from 'react'
import './td_title.css'
import {Container, Row, Col} from "react-bootstrap"



function Title() {
    return (
        <Container>
        <Row>
          <Col><h2 className="text-center todoTitle">Your <span className="titleSpan">free </span>
           <span className='titleSpan2'> To do List</span></h2></Col>
        </Row>
      </Container>
    )
}

export default Title
