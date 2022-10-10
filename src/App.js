import { fetchRecipe} from './redux/actions/counter.action'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from './redux/actionType';

function App() {


  let {counter} = useSelector(state => state)
  console.log(counter)

  const dispatch = useDispatch()

  let increaseCounter = ()=>{
    dispatch(incrementCounter());
  }

  let decreaseCounter = ()=>{
    dispatch(decrementCounter());
  }

  let resettheCounter = ()=>{
    dispatch(resetCounter());
  }


  function incrementCounter() {
    dispatch({
      type: INCREMENT_COUNTER
    })
  }
  function decrementCounter() {
    dispatch({
      type:DECREMENT_COUNTER
    })
  }

  let resetCounter = (() => {
    dispatch({
      type:RESET_COUNTER
    })
  })

  let fetchData = ()=>{
    dispatch(fetchRecipe("chicken"));
  }
  return (
    <div style={{ margin: "0 auto", width: "400px" }}>
      <div style={{ display: "flex", justifyContent: "space-between",margin:"0 auto" }}>
        <button onClick={incrementCounter}>Increment Counter</button>
        <h1>{counter.counter}</h1>
        <button onClick={decrementCounter}>Decrement Counter</button>
      </div>
      <button onClick={resetCounter} style={{ width: "100%", marginTop: "40px" }}>Reset Counter</button>
    
    <button onClick={fetchData}>Fetch recipe</button>
    <div>
      {counter.recipe.map((meal)=>{
        return(
          <div>
            <h1>{meal.strMeal}</h1>
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
