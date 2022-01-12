import React from 'react'
import './td_title.css'
import {Container, Row, Col} from "react-bootstrap"



function Title() {
    return (
        <Container>
        <Row>
          <Col><h1 className="text-center todoTitle">Your free To do List</h1></Col>
        </Row>
      </Container>
    )
}

export default Title
