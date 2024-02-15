import './App.css';
import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setlength] = useState(9)
  const [password, setpassword] = useState('')
  const [numbers, setnumbers] = useState(false)
  const [characters, setcharacters] = useState(false)

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

 const passwordRef = useRef(null)
  
  const generatePassword = useCallback(()=> {
    let pass =''
    let str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
    if(numbers) str += '0123456789'
    if(characters) str += '!@#$%^&*()_+' 
    for (let i = 1; i < length; i++) {
      const element = Math.floor(Math.random() * str.length)
      pass += str.charAt(element)
    }

    setpassword(pass)

  }, [length, numbers, characters])

  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters, generatePassword])
  

  return (
    <div className='w-full max-w-md bg-gray-800 rounded-lg text-orange-500 mx-auto px-4 py-3 my-8'>
      <h1 className="text-center my-3 text-white">generates passwords automatically</h1>
      <div className="rounded-lg shadow flex overflow-hidden mb-4">
        <input 
        type="text" 
        className='outline-none w-full bg-white py-1 px-3'
        placeholder='Password'
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
        className='bg-blue-600 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={7}
              max={51}
              className='cursor-pointer'
              value={length}
              onChange={(e)=>setlength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Length: {length -1}</label>
        </div>
        <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={()=>setnumbers((prev)=>!prev)}
              className='cursor-pointer'
              name="" 
              id="" 
            />
            <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              onChange={()=>setcharacters((prev)=>!prev)}
              defaultChecked={characters}
              className='cursor-pointer'
              name="" 
              id="" 
            />
            <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
