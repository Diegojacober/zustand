import { Status } from "../enums/Status";
import Task from "./Task";

type Store = {
  tasks: Task[];
  draggedTask: string;
  addTask: (task: Task) => void;
  deleteTask: (title: string) => void;
  setDraggedTask: (title: string) => void;
  moveTask: (title: string, state: Status) => void;
};

export default Store;
