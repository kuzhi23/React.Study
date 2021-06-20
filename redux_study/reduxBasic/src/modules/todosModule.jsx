const ADD_TODO = "todosModule/ADD_TODO";
const TOGGLE_TODO = "todosModule/TOGGLE_TODO";

let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text: text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id,
});

const initialState = [];

export default function todosModule(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
