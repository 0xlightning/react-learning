import {useState} from 'react';
import './App.css';


function App() {
  const [color, setcolor] = useState('olive')

  function changeColor(color) {
    setcolor(color)
  }

  return (
    <div className="App flex flex-wrap">
      <div className="w-full duration-200 p-20" style={{backgroundColor: color}}>
        <h3 className='p-5 bg-white text-black'>function in a new function</h3>
        <button onClick={()=>changeColor('green')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-green-600">green</button>
        <button onClick={()=>changeColor('orange')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-orange-600">orange</button>
        <button onClick={()=>changeColor('red')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-red-600">red</button>
      </div>
      <div className="w-full duration-200 p-20 h-screen" style={{backgroundColor: color}}>
        <h3 className='p-5 bg-white text-black'> Usestate in a method</h3>
        <button onClick={()=>setcolor('yellow')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-yellow-600">yellow</button>
        <button onClick={()=>setcolor('aqua')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-blue-400">aqua</button>
        <button onClick={()=>setcolor('maroon')} className="outline-none m-1 px-4 py-1 rounded-full bg-white shadow-lg text-red-800">maroon</button>
      </div>
    </div>
  );
}

export default App;
