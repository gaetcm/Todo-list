const Form = (props) => {
  function handleTaskChange(e) {
    props.setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setTask([...props.task, props.inputValue]);
    props.setInputValue("");
  }

  return (
    <>
      <form className="formdiv" onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.inputValue}
          name="addTask"
          id="addTaskId"
          placeholder="New task"
          onChange={handleTaskChange}
        />
        <button onClick={handleSubmit}>Add task</button>
      </form>
    </>
  );
};

export default Form;
