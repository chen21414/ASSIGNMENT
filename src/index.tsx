import React, {useState} from 'react';
import './index.css';
import { render } from "react-dom";

export function TakeHome() {

  interface IState {
    currentTime: {curTime: string},
    developers: {
      names: string
      numbers: number[]
    },
    isShown: boolean
  }

  const [currentTime, setTime] = useState<IState["currentTime"]>({
    curTime: new Date().toLocaleString()
  });

  const [isShown, setIsShown] = useState<IState["isShown"]>(false)

  let developers: IState["developers"] = {
    names: "React Developer Name",
    numbers: [2345678900, 23456]
  };

  const updateTime = () => {
    return ():void => {
      setTime({curTime: new Date().toLocaleString()});
    }
  }

  
  let timeout: any;
  let clicked: number = 0;
  const trueFalse = (): void => {
    clicked++;

    if(clicked >= 2) {
      clearTimeout(timeout)
      clicked = 0;
      return;
    }

    clearTimeout(timeout)

    timeout = setTimeout(() => {
    if(isShown===true){
    setIsShown(false);
    } else {
    setIsShown(true)
    }
    clicked = 0;
    }, 1000)
  
  }
  
  return (
    <div style={{border:'3px solid gray'}}>
    <div style={{backgroundColor:"#008000", display:'flex', justifyContent: 'space-between'}}>
      <h1 style={{color:'white'}}>{currentTime.curTime}</h1>
      <button style={{backgroundColor:"black", 
      color:"white", height:45, 
      width:150, marginTop:20, fontSize:20, border:'none', cursor:'pointer'}} onClick={updateTime()}>Update date</button>
      <button style={{backgroundColor:'rgba(0,0,0,0)', border:'none', 
      color:'white', fontStyle:'bold', fontSize:25, marginRight:15, cursor:'pointer'}} onClick={()=>trueFalse()}>+</button>
    </div>
    {isShown && 
      <div style={{backgroundColor:"lightBlue", marginTop:-25, marginBottom:-22}}>
        <h1>{developers.names}</h1>
        {
          developers.numbers.map((phone, index) => <h1 className={(index===0?"red":"black")} key={index}>• {phone}</h1>)
        }
      </div>
    }
    </div>
  );
}
const rootElement = document.getElementById("root");
render(<TakeHome />, rootElement);
