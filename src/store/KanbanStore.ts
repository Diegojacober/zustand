import { create } from "zustand";
import { Status } from "../enums/Status";
import Store from "../types/Store";

export const useKanbanStore = create<Store>((set) => {
  return {
    tasks: [{  title: "TestTask", status: Status.PLANNED }],
    draggedTask: null,
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    deleteTask: (title) =>
      set((state) => ({ tasks: state.tasks.filter((task) => task.title !== title) })),
    setDraggedTask: (task) => set({ draggedTask: task }),
    moveTask: (title, status) => set((store) => ({ tasks: store.tasks.map((task) => task.title === title ? { title, status} : task),
      })),
  };
});
