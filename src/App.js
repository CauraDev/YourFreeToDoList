import Title from "./components/td_title/td_title.js";
import React, {useState, useEffect, useRef} from 'react';
import MainList from "./components/td_mainList/td_mainList.js";
import AddButton from "./components/td_addButton/td_addButton.js";
import TextForm from './components/td_form/td_form.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {


 // STATES
  const [editMode, setEditMode] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [availableTasks, setAvailableTasks] = useState([]);


// FUNCTIONS
function changeShowForm() {
  setShowForm(!showForm);
}

const updateTasks = (taskId, taskText) => {

   setAvailableTasks([...availableTasks, {id: taskId, text: taskText
  }]);
  console.log(availableTasks);
}

const deleteTask = (taskKeyToDelete) => {

  const filteredArray = availableTasks.filter((value) => 
    value.id !== taskKeyToDelete);

  setAvailableTasks(filteredArray);  
}






  return (
    <div className="App">
      <Title />

      <div className="containerDiv">
      <MainList activateClick={showForm} availableTasks={availableTasks} deleteTasks={deleteTask} />
      <AddButton showButton={showForm} change={changeShowForm}/>
      </div>

      <TextForm showForm={showForm} change={changeShowForm} updateTasks={updateTasks}/>

    </div>
  );

}
export default App;
