import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import {TodoItem, Todoform} from './components/index'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev ])
  } 
  // console.log(Date.now())
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) =>
    (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.lenght > 0) {
      setTodos(todos)
    } 
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleCompleted}}>
      <div className="w-1/2 m-auto p-20">
        <Todoform />
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))
        }
      </div>
    </TodoProvider>
  );
}

export default App;