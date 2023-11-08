import { create } from "zustand";
import { persist } from "zustand/middleware";
import Store from "../types/Store";

export const useKanbanStore = create(
  persist<Store>(
    (set) => {
      return {
        tasks: [],
        draggedTask: null,
        addTask: (task) => set((store) => ({ tasks: [...store.tasks, task] })),
        deleteTask: (title) =>
          set((store) => ({
            tasks: store.tasks.filter((task) => task.title !== title),
          })),
        setDraggedTask: (task) => set({ draggedTask: task }),
        moveTask: (title, status) =>
          set((store) => ({
            tasks: store.tasks.map((task) =>
              task.title === title ? { title, status } : task
            ),
          })),
      };
    },
    {
      name: "store",
    }
  )
);
