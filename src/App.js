import React,{useState} from 'react'
import './App.css';

function App() {
  const [weather,setWeather]=useState()
  let apiKey=process.env.REACT_APP_API_KEY
  let search = 'london';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
  .then(response=> response.json())
  .then(data=>{
     setWeather(data.weather[0].main)
 });
  return (
    <div className="App">
      <h1>{weather}</h1> 
      <h1>{weather}</h1> 
      <h1>{weather}</h1> 
    </div>
  );
}

export default App;
