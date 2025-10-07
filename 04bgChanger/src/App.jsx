import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  // function changeColor(color) {  // You can set the useState(setColor) in this way by creating a function 
  //   setColor(color);                 and passing it as a callback in the onClick method
  // } 

  return ( 
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor('tomato')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{backgroundColor: 'tomato', color: 'white'}}>Test</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{backgroundColor: 'green', color:'white'}}>Test 2</button>
          <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer" style={{backgroundColor: 'purple', color: 'white'}}>Test 3</button>
        </div>
      </div>
    </div>
  )
}

export default App
