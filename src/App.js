/* ------------- IMPORTS */

// styles :
import "./App.css";
// packages pour initialiser les states :
import { useState } from "react";
// composants :
import Task from "./components/Task";
// libraire d'icons :
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  /*  ----------- SETTING UP INITIALS STATES */

  /* here, "input" is the value of the input's form, the setInput is the function to modify the state : */
  const [input, setInput] = useState("");

  /* here, "todolist" is the tab of the tasks entered in the form, the setInput is the function to modify the tab :  */
  const [todolist, setTodolist] = useState([
    { label: "Boire de l'eau", isDone: false },
    { label: "Lire 30 pages d'un livre", isDone: false },
  ]);

  /*  ------------ SETTING UP THE FUNCTION TO HANDLE THE FORM'S SUBMIT */

  const handleSubmit = (event) => {
    event.preventDefault(); // to not allow the refresh of the page during the submit to not lose the differents inputs of the todolist.

    // console.log({ input.label });

    /* WARNING : we can't modify the state directly. We need a copy of the tab, to modificate it: */
    const newTodolist = [...todolist];
    newTodolist.push({ label: input, isDone: false });
    setTodolist(newTodolist);
    setInput(""); // vider le cache input pour pouvoir entrer une nouvelle valeur
  };

  /*  ------------ WHAT APP.JS DO, WRITTEN IN JSX */
  return (
    <>
      {/* display : todolist */}
      <div className="todolist_div">
        {todolist.map((elem, index) => {
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

      {/* display : the form */}
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
