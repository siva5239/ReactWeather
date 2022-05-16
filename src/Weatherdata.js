import axios from 'axios';
import React, { useState } from 'react'

const Weatherdata = () => {
    const [city,setCity]=useState("");
    const [result,setResult]=useState("");

 const   changeHandler=(e)=>{
        setCity(e.target.value);
       
    }

 const   submitHandler=(e)=>{
       e.preventDefault();
        console.log(city);
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(res=>{
          console.log(res.data)  
         const kelvin=res.data.main.temp
         const temp_min=res.data.main.temp_min
         const temp_max=res.data.main.temp_max;
        
         const celcius=kelvin-273.15
         const max_temp=temp_max-273.15
         const min_temp= temp_min-273.15
         console.log(max_temp)
         setResult("Temparature at"+" "+city+"\n"+Math.round(celcius)+"°C"+"\n"+"Max-temp:"+Math.round(max_temp)+"\n"+"Min-temp:"+Math.round(min_temp));
         setCity("")

       }
      )
     }
  return (
    <div>
        <center>
            <div className='card'>
                <div className='card-body'>
                   <h4 className='card-title'>weather app</h4>
                   <form onSubmit={submitHandler}>
                       <input type="text" name="city"  value={city}onChange={changeHandler}/><br/><br/>
                       <input type="submit" className='btn btn-info' value="Get temparature"/>
                   </form>
                   <h5>{result}</h5>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Weatherdata