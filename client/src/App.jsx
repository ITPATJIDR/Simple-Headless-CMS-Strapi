import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [Data, setData] = useState([])
  const [Data2, setData2] = useState([])
  console.log(Data)
  console.log(Data.length)

  useEffect(() =>{
    fetch('http://localhost:1337/api/restaurants')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  useEffect(() =>{
    fetch('http://localhost:1337/api/categories')
    .then(res => res.json())
    .then(data => setData2(data))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {Data.data ? 
          Data.data.map((item) =>{
            return (
              <div>
                <div>{item.attributes.Name}</div>
                <br/>
                <div>{item.attributes.Description}</div>
                {Data2.data.map((item) =>{
                  return(
                    <div>
                      <p>{item.attributes.Name}</p>
                    </div>
                  )
                })}
              </div>
            )
          })
         : 
          <div>2</div> }
      </header>
    </div>
  )
}

export default App
