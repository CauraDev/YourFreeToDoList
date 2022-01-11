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
  const [activeState, setActiveState] = useState(true);

// FUNCTIONS
function changeActiveState() {
  setActiveState(!activeState);
}

  return (
    <div className="App">
      <Title />
      <MainList />
      <TextForm showForm={activeState} change={changeActiveState}/>
      <AddButton showButton={activeState} change={changeActiveState}/>
    </div>
  );
}

export default App;
