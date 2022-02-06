import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ value, setTodolist, isDone, indexTask, todolist }) => {
  // ===> fonction lorsqu'on clique sur un checkbox
  const handleClickCheckbox = () => {
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

  return (
    <div className="checkbox_div">
      {/* <input type="checkbox" onClick={() => (isDone = false)} /> */}
      <input type="checkbox" onClick={handleClickCheckbox} />

      <p
        className={isDone === true ? "scratched-text_p" : "notscratched-text_p"}
      >
        {value}
      </p>
      <FontAwesomeIcon icon="trash" />
    </div>
  );
};

export default Task;
