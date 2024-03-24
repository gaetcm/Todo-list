import { useState } from "react";
import Task from "./assets/components/Task";
import Header from "../src/assets/components/Header";
import Form from "../src/assets/components/Form";
import Pic from "../src/assets/img/8476676.png";
import Footer from "../src/assets/components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [style, setStyle] = useState([]);

  const newTask = [...task];
  const newStyle = [...style];

  return (
    <>
      <Header src={Pic} />

      <div className="container">
        <Task task={task} setTask={setTask} style={style} setStyle={setStyle} />

        <Form
          task={newTask}
          setTask={setTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
          style={newStyle}
          setStyle={setStyle}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
