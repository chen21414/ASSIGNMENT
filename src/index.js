import React, {useState, useEffect} from 'react';
import './index.css';
import { render } from "react-dom";

export function TakeHome() {
  const [currentTime, setTime] = useState({
    curTime: new Date().toLocaleString()
  });

  const [isShown, setIsShown] = useState(false)

  let developers = {
    names: "React Developer Name",
    numbers: [2345678900, 23456]
  };

  const updateTime = () => {
    return () => {
      setTime({curTime: new Date().toLocaleString()});
      console.log("clicked")
    }
  }

  const trueFalse = () => {
    if(isShown===true){
      setIsShown(false);
    } else {
      setIsShown(true)
    }
  }

  return (
    <div>
    <div style={{backgroundColor:"#008000", display:'flex', justifyContent: 'space-between'}}>
      <h1 style={{color:'white'}}>{currentTime.curTime}</h1>
      <button style={{backgroundColor:"black", 
      color:"white", height:45, 
      width:150, marginTop:20, fontSize:20, border:'none', cursor:'pointer'}} onClick={updateTime()}>Update date</button>
      <button style={{backgroundColor:'rgba(0,0,0,0)', border:'none', 
      color:'white', fontStyle:'bold', fontSize:25, marginRight:15, cursor:'pointer'}} onClick={()=>trueFalse()}>+</button>
    </div>
    {isShown && 
      <div style={{backgroundColor:"lightBlue", marginTop:-25}}>
        <h1>{developers.names}</h1>
        {
          developers.numbers.map((phone) => <h1 key={phone.index}>• {phone}</h1>)
        }
      </div>
    }
    </div>
  );
}
const rootElement = document.getElementById("root");
render(<TakeHome />, rootElement);


//https://stackoverflow.com/questions/39426083/update-react-component-every-second