import classNames from "classnames";
import "./Task.css";
import { Status } from "../../enums/Status";
import { useKanbanStore } from "../../store/KanbanStore";
import { BsFillTrash3Fill } from "react-icons/bs";

type TaskProps = {
  title: string;
  status: Status;
};

export default function Task({ title, status }: TaskProps) {
  const [task, deleteTask, setDraggedTask] = useKanbanStore((store) => [
    store.tasks.find((task) => task.title === title),
    store.deleteTask,
    store.setDraggedTask
  ]);

  return (
    <div className="task" draggable onDragStart={() => setDraggedTask(task.title)}>
      <div>{task?.title}</div>
      <div className="bottomWrapper">
        <div>
          <BsFillTrash3Fill
            size={15}
            color="#f00"
            onClick={() => deleteTask(task.title)}
          />
        </div>
        <div className={classNames("status", Status[status])}>
          {Status[status]}
        </div>
      </div>
    </div>
  );
}
