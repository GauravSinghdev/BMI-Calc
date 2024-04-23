import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState("");

  function calc()
  {
    let div = height/100;
    let BMI = weight/(div*div);
    // console.log("Hey " + BMI);
    if(isNaN(BMI)) 
    setResult("Enter your inputs correctly.");

    else
    setResult(`Your BMI result is: ${Math.floor(BMI)}`);
    
    
  }
  return (
    <>
      <div className='border-solid border-white-500 border-4 w-1/3 mx-auto p-10 mt-40 text-center rounded-3xl shadow-xl shadow-red-500/100'>
        <h1 className='text-3xl font-bold text-white font-cursive underline'>BMI Calculator</h1>
        <br />
        <br />
        <div>
          <h2 className='text-lg font-weight:semi-bold text-white'>Enter Your Height</h2>
          <input className='border-solid border-black border-2 p-2 rounded-md mb-5 w-1/2' type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Enter your lambai in cm . . .'/>
          <br />
          <h2 className='text-lg font-weight:semi-bold text-white'>Enter Your Weight</h2>    
          <input className='border-solid  border-black border-2 p-2 rounded-md w-1/2' type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter your wajan in kg . . .'/>
          <br /><br />
          <button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded' onClick={calc}>Calculate BMI</button>

          <div className= { result === "Enter your inputs correctly." ? 'text-red-500 mt-5 font-bold text-lg' : 'text-blue-600 mt-5 font-bold text-lg'}>{result}</div>

         </div>
      </div>
      
    </>
  )
}

export default App
