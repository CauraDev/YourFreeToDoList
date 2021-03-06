import React, {useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListComponent from "../td_listComponent/td_listComponent.js";
import "./td_mainList.css"

function MainList({activateClick, availableTasks, deleteTasks}) {

    console.log(availableTasks, "FROM MAINLIST");

    return (
           <div className={`listContainer ${!activateClick ? "blockClick" : "" }`}> 
           
           <ListGroup >
                {availableTasks.map(
                 (value) => (
                    <ListComponent allowSpan={activateClick} props={value} key={value.id} deleteTasksLC={deleteTasks}/>
                    )
                )}
            </ListGroup>
            </div>
)

}
export default MainList
