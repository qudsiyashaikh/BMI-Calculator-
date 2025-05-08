import React, { useState, UseState } from 'react'
import Img from './Components/BMI img.jpg'
import './App.css'
function App() {
  const [weight, Setweight] = useState('');
  const [height, Setheight] = useState('');
  const [bmi, Setbmi] = useState('');
  const [message, Setmessage] = useState('');


  let CalcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (height * height) * 703)
      Setbmi(bmi.toFixed(1))

      if (bmi < 25) {
        Setmessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        Setmessage('You are a healthy weight')
      } else {
        Setmessage('You are overweight')
      }
    }
  }
  let reload = () => {
    window.location.reload()
  }


  return (



    <div className="min-h-screen  bg-cover flex items-center w-full overflow-hidden" style={{
      backgroundImage: `url(${Img})`,
    }}>
      <div className='App'>
        <div className=' Container'>
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-18">
            <h1 className='text-center font-semibold'>BMI Calculator</h1>
            <form onSubmit={CalcBmi}>
              <div>
                <label>Weight (ibs)</label>
                <input  value={weight} onChange={(e) => Setweight(e.target.value)} />
              </div>

              <div>
                <label>
                  Height (in)</label>
                <input value={height} onChange={(event) => Setheight(event.target.value)} />
              </div>

              <div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
              </div>

              <div className='center'>
                <h3>Your BMI is :{bmi}</h3>
                <p>{message}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App