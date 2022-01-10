import Title from "./components/td_title/td_title.js";
import MainList from "./components/td_mainList/td_mainList.js";
import AddButton from "./components/td_addButton/td_addButton.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <MainList />
      <AddButton />
    </div>
  );
}

export default App;
