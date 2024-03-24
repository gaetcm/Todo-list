import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const tabTask = props.task;

  const tabTask2 = [...tabTask];
  const styleDisplay = [...props.style];

  return tabTask2.map((elem, index) => {
    return (
      <>
        <div className="taskdiv">
          <input
            type="checkbox"
            name="checkbox"
            id={index}
            onClick={(event) => {
              if (event.target.checked === true) {
                styleDisplay.splice(index, 1, true);
                props.setStyle(styleDisplay);
              } else {
                styleDisplay.splice(index, 1, false);
                props;
                props.setStyle(styleDisplay);
              }
            }}
          />
          <p className={styleDisplay[index] === true ? "check" : "uncheck"}>
            {elem}
          </p>
          <span
            onClick={() => {
              tabTask2.splice(index, 1);
              props.setTask(tabTask2);
            }}
          >
            <FontAwesomeIcon className="trashicon" icon="trash" />
          </span>
        </div>
      </>
    );
  });
};
export default Task;
