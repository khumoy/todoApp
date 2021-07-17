import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-7 col-lg-5">
          <div className='todo-app'>
            <TodoList />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
