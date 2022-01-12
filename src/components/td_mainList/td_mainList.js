import React, {useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListComponent from "../td_listComponent/td_listComponent.js";
import "./td_mainList.css"

function MainList({activateClick}) {


    const [taskList, setTaskList] = useState([
        {id: 1, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id: 2, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {id: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ]);

    return (
           <div className={`listContainer ${!activateClick ? "blockClick" : "" }`}> 
           
           <ListGroup >
                {taskList.map(
                 (value) => (
                    <ListComponent allowSpan={activateClick} props={value} />
                    )
                )}
            </ListGroup>
            </div>
)

}
export default MainList
