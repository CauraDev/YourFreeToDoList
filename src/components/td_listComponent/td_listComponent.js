import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import "./td_listComponent.css";


function ListComponent({props}) {
    return (


        <Stack direction='horizontal' gap={3} className='listStack'>

            <span className="bg-transparent text-white-50" >{props.text}</span>
            <Button variant="outline-danger" className='ms-auto'>Delete</Button>
            <Button variant="outline-warning"  >Edit</Button>
            <Button variant="outline-success" size='small' >Complete</Button>


        </Stack>

    )
}

export default ListComponent
