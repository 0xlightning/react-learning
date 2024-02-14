import { useState } from "react";
import './index.css'
function App() {
  const [count, setCount] = useState(15)

  const AddValue = () => {
    setCount(count+1)
  }
  const RemoveValue = () => {
    setCount(count-1)
  }
// value will not be added because it is considered as single method operation
  const AddValue2 = () => {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }
// for prallel-ly adding multiple times
  const RemoveValue2 = () => {
    setCount((precount) => precount-1)
    setCount((precount) => precount-1)
    setCount((precount) => precount-1)
    setCount((precount) => precount-1)
  }
  
  return (
    <div className="Container">
      <h1>Counter : {count}</h1>
      <button onClick={AddValue}>Add Button</button>
      <button onClick={RemoveValue}>Remove Button</button>
      see the code for better understanding why 
      <button onClick={AddValue2}>Add Button2</button> 
      <button onClick={RemoveValue2}>Remove Button2</button>
    </div>
  );
}

export default App;
