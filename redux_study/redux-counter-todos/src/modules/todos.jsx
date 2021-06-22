const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input: input,
});

let nexId = 1;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: nexId++,
    text: text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id: id,
});

export const remove = (id) => ({
  type: REMOVE,
  id: id,
});

const initialState = {
  input: "",
  todos: [],
};

export default function todos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
