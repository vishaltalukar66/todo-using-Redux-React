import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Redux/store/Store'
import { setState } from './Redux/states/TodoSlice'
import { useEffect } from 'react';
import { Display } from './components/Display';
import { AddToDo } from './components/AddTodo';

function App() {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    //get data from localstorage
    const dataFromLocalStorage = localStorage.getItem('todo');

    if (dataFromLocalStorage === null) {
      //if null create Set Item in localStorage
      localStorage.setItem('todo', JSON.stringify({ "todo": [] }));
    }
    else {
      const dataJson = JSON.parse(dataFromLocalStorage);
      //If data found in localstorage, then push into State using Dispatch
      dataJson.todo.forEach((element: { id: string; value: string }) => {
        dispatch(setState(element));
      });

    }
  }, []);
  return (
    <>

      <div className="p-5">
        <AddToDo />
        {todo.map((elements) => (
          <Display key={elements.id} id={elements.id} value={elements.value} mark={elements.mark} />
        ))}

      </div>




      <br />

    </>
  )
}

export default App
