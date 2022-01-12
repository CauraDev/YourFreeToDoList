import Title from "./components/td_title/td_title.js";
import React, {useState} from 'react';
import MainList from "./components/td_mainList/td_mainList.js";
import AddButton from "./components/td_addButton/td_addButton.js";
import TextForm from './components/td_form/td_form.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {


 // STATES
  const [editMode, setEditMode] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [availableTasks, setAvailable] = useState([]);


// FUNCTIONS
function changeShowForm() {
  setShowForm(!showForm);
}

// function changeAvailableTasks() {
//   setAvailableTasks(
//     [...availableTasks, {

//     }]
//   )
// }


  return (
    <div className="App">
      <Title />

      <div className="containerDiv">
      <MainList activateClick={showForm} />
      <AddButton showButton={showForm} change={changeShowForm}/>
      </div>

      <TextForm showForm={showForm} change={changeShowForm}/>

    </div>
  );
}

export default App;
