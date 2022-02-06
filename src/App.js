import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  // ===> créer un état pour faire fonctionner le champs du form
  const [input, setInput] = useState("");

  // ===> créer un état pour initialiser notre list todo
  const [todolist, setTodolist] = useState([
    { label: "manger", isDone: false },
    { label: "dormir", isDone: false },
  ]);

  // ===> fonction lorsqu'on submit le form
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ input.label });
    const newTodolist = [...todolist];
    // newTodolist.push(<Task value={input.label} />);
    newTodolist.push({ label: input, isDone: false });
    setTodolist(newTodolist);
    setInput(""); // vider le cache input pour pouvoir entrer une nouvelle valeur
  };

  return (
    <>
      {/* ===>affichage de la todo */}
      <div className="todolist_div">
        {todolist.map((elem, index) => {
          // return <p>{elem.label}</p>;
          return (
            <div>
              <Task
                key={index}
                value={elem.label}
                isDone={elem.isDone}
                indexTask={index}
                setTodolist={setTodolist}
                todolist={todolist}
              />
            </div>
          );
        })}
      </div>

      {/* ===> à propos du form */}
      <div className="form_div">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="new task"
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />

          <button type="submit">Add task</button>
        </form>
      </div>
    </>
  );
}

export default App;
