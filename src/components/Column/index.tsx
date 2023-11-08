import { useState } from "react";
import { Status } from "../../enums/Status";
import { useKanbanStore } from "../../store/KanbanStore";
import Task from "../Task";
import "./Column.css";
import classNames from "classnames";

type ColumnProps = {
  state: Status;
};

export default function Column({ state }: ColumnProps) {
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
  const [tasks, addTask, setDraggedTask, draggedTask, moveTask] =
    useKanbanStore((store) => [
      store.tasks.filter((task) => task.status === state),
      store.addTask,
      store.setDraggedTask,
      store.draggedTask,
      store.moveTask,
    ]);

  const handleAddTask = (): void => {
    addTask({
      title: text,
      status: Status.PLANNED,
    });
    setText("");
    setOpen(false);
  };

  return (
    <div
      className={classNames("column", {drop: drop})}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDrop={(e) => {
        moveTask(draggedTask, state);
        setDrop(false)
        setDraggedTask(null);
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
    >
      <div className="titleWrapper">
        <p>{Status[state]}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>

      {tasks.map((task) => (
        <Task key={task.title} title={task.title} status={task.status} />
      ))}

      {open && (
        <div className="modal">
          <div className="modalContent">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />

            <button onClick={() => handleAddTask()}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
