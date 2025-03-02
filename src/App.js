import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';


function App() {
  const onDelete = () => {
    console.log("I am onDelete of todo", "todo")
  }
  const todos =
    [
      { sr: 1, Title: 'Hello', Description: "todo list working", completed: true },
      { sr: 2, Title: 'market', Description: "Go to market", completed: false },
      { sr: 3, Title: 'grocery', Description: "get the grocery", completed: false },
    ]

  return (
    <div className="App">
      <Navbar title="Todo List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
