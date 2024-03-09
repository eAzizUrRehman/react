import AddTodo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="no-scrollbar h-[99.99dvh] overflow-y-auto bg-black">
      <div className="mx-auto max-w-md py-12">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
