import './App.css';
import ToDoList, { ToDoItemProps } from './features/ToDoList/ToDoList';

const ToDoInitItemList: Array<ToDoItemProps> = [
  {
    id: 1,
    title: 'Wash car',
    complete: false
  },
  {
    id: 2,
    title: 'Food shop',
    complete: true
  },
  {
    id: 3,
    title: 'School run',
    complete: false
  }
]

function App() {
  return (
    <div className="App">
      <h1>To-Do Test Demo</h1>
      <ToDoList todos={ToDoInitItemList} />
    </div>
  );
}

export default App;
