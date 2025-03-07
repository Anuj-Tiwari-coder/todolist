import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./components/About";
import Addtodos from "./components/Addtodos";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, setTodos] = useState(
    initTodo
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let sr;
    if (todos.length == 0) {
      sr = 1;
    }
    else {
      sr = todos.length > 0 ? todos[todos.length - 1].sr + 1 : 1;
    }
    const myTodo = {
      sr: sr,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log("Added:", myTodo);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Todo List" searchBar={false} />
        <hr />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Addtodos addTodo={addTodo} />
                <hr />
                <Todos todos={todos} onDelete={onDelete} />
                <hr />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
