import { useEffect, useState } from 'react'
import './App.css'

const url="https://dog.ceo/api/breeds/image/random"


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(()=>{
    const fetchdata=async()=>{
      const fetching=await (await fetch(url)).json()
      setData(fetching)
    };
    if(count>0)
      fetchdata()
  },[count])

  const handleReset=()=>{
    setCount(0)
    setData(null)
  }

  return (
    <>
      <h2>Dog Image to make your day</h2>
      <button onClick={()=>setCount(count+1)}>New Dog</button>
      <button onClick={handleReset}>Bye Bye Dog</button>
      {
        (data)&&(
          <div>
            <p>A<strong> cutie </strong> for you</p>
            <img src={data.message} alt="Doggo"></img>
            {(count%5==0||count%7==0)?(<h3>Doggy style is for beginners</h3>):<></>}
          </div>
        )
      }  
    </>
  )
}

export default App
