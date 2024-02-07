import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [Color, setColor] = useState("Grey")

  return (
    <>
        <div className="w-full bg-slate-800 h-screen" style={{backgroundColor:Color}}>
        <div className="flex flex-wrap bg-slate-400 w-fit m-auto">
          <button onClick={()=>setColor("rgb(239 68 68 / var(--tw-bg-opacity))")} className='bg-red-500 m-3 px-4 text-2xl rounded-xl'>Red</button>
          <button onClick={()=>setColor("rgb(34 197 94 / var(--tw-bg-opacity))")} className='bg-green-500 m-3 px-4 text-2xl rounded-xl'>green</button>
          <button onClick={()=>setColor("rgb(253 186 116 / var(--tw-bg-opacity))")} className='bg-orange-300 m-3 px-4 text-2xl rounded-xl'>orange</button>
          <button onClick={()=>setColor("rgb(147 197 253 / var(--tw-bg-opacity))")} className='bg-blue-300 m-3 px-4 text-2xl rounded-xl'>blue</button>
        </div>
        </div>
    </>
  )
}


export default App
