import React, { useState } from "react";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="이거 보면 나뽑아주세요 열심히 할게요 빠끄 ㅋㅋ"
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
