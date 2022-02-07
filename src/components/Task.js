import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// [nota-bene] destructuring : props.value === {value}
const Task = ({ value, setTodolist, isDone, indexTask, todolist }) => {
  /*  ------------ SETTING UP THE FUNCTION TO HANDLE THE CLICK ON THE CHECKBOXS */ const handleClickCheckbox =
    () => {
      const newTodolistChecked = [...todolist];
      newTodolistChecked.map(() => {
        if (isDone === false) {
          return (newTodolistChecked[indexTask].isDone = true);
        } else {
          return (newTodolistChecked[indexTask].isDone = false);
        }
      });
      setTodolist(newTodolistChecked);
    };

  // ===> fonction lorsqu'on clique sur l'icon trash
  // const handleClickTrashIcon = () => {
  //   const newTodolistWithoutTask = [...todolist];
  //   newTodolistWithoutTask.remove(newTodolistWithoutTask[indexTask]);
  //   setTodolist(newTodolistWithoutTask);
  // };

  // ===> fonction lorsqu'on clique sur l'icon trash
  const handleClickTrashIcon = () => {
    const newTodolistWithoutTask = [...todolist];
    newTodolistWithoutTask.splice(indexTask, 1);
    setTodolist(newTodolistWithoutTask);
  };

  return (
    <div className="checkbox_div">
      {/* <input type="checkbox" onClick={() => (isDone = false)} /> */}
      <input type="checkbox" onClick={handleClickCheckbox} />

      <p
        className={isDone === true ? "scratched-text_p" : "notscratched-text_p"}
      >
        {value}
      </p>
      <FontAwesomeIcon icon="trash" onClick={handleClickTrashIcon} />
    </div>
  );
};

export default Task;
