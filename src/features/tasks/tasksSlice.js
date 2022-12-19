import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Take out the trash",
    completed: false,
  },
  {
    id: "2",
    title: "Grocery shopping",
    completed: false,
  },
  {
    id: "3",
    title: "Clean gecko tank",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // add new task to the start of the array
      state.unshift(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    toggleCompleteTask: (state, action) => {
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    editTask: (state, action) => {
      //console.log(state, action.payload);
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task
      );
    },
  },
});

export const { addTask, deleteTask, toggleCompleteTask, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
