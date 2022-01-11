import React, {useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListComponent from "../td_listComponent/td_listComponent.js";


function MainList() {


    const [taskList, setTaskList] = useState([]);

    return (

        <ListGroup>
            {taskList.map(
                (value) => (
                    <ListComponent props={value} />
                )
            )}
        </ListGroup>
)

}
export default MainList
