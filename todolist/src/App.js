import React, {useRef, useState,useCallback} from 'react'
import './App.css';
import TodoTemplate from "./components/todoTemplate/todoTemplate";
import TodoInsert from "./components/todoInsert/todoInsert";
import TodoList from "./components/todoList/todoList";

function App() {
    const [todos, setTodo] = useState([
        {
            id:1,
            text: '리엑트 기초 알아보기',
            checked:true,
        },
        {
            id:2,
            text: '컴포넌트 스타일링해 보기',
            checked:true,
        },
        {
            id:3,
            text: '일정 관리 앱 만들어 보기',
            checked:false,
        }
    ])
    const nextId = useRef(4)

    const onInsert = useCallback(text => {
        const todo={
            id: nextId.current,
            text:text,
            checked:false,
        }
        setTodo(todos.concat(todo))
        nextId.current +=1
    },[todos])

    const onRemove = useCallback(id=>{
        setTodo(todos.filter(todo => todo.id !==id))
    },[todos])

    const onToggle = useCallback(id=>{
        console.log(id)
            setTodo(
                todos.map(todo=> todo.id === id ? {...todo,checked:!todo.checked}: todo)
            )
        }
    ,[todos])

  return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove ={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
  );
}

export default App;
