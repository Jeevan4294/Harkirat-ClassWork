
import React from 'react';
import './App.css'

function useTodos() {
  const [todos,setTodos] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((res) => {
      res.json().then((data) =>  {
        console.log(data);
        setTodos(data)
      })
    })
  }, []);

  setInterval(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((res) => {
      res.json().then((data) =>  {
        console.log(data);
        setTodos(data)
      })
    })
  }, 5000)

  return todos;
}

function App() {

  const todos = useTodos();


  return (
    <div>
      {todos.map(todo => {
      return <div>
        {todo.id}
        <Todo title={todo.title} description={todo.description}></Todo>
        <button>Delete</button>
        <br/>
        </div>
      })}
    </div>
  )
}

function Todo(props){
  return <div>{props.title} {props.description}</div>
}

function PersonName(props){
  return <div>{props.fName} {props.lName}</div>
}

export default App
