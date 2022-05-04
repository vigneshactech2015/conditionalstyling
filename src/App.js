import './App.css';
import {useState} from 'react';
import ColorBox from './ColorBox';
function App() {
const[color,setColor]=useState("");


const Initial_colors=["crimson","orange","skyblue"];

const[colors,setColors]=useState(Initial_colors);
const changecolor=(event)=>{
  setColor(event.target.value);
}
  const styles={backgroundColor:color}
  return (
    <div className="App">
  <input type="text" placeholder="Enter the color" onChange={changecolor} style={styles}/>&nbsp;&nbsp;&nbsp;
  <button onClick={()=>setColors([...colors,color])}>Add Color</button>
  {colors.map((clr,index)=>(
    <ColorBox colors={clr} key={index}/>
  ))}
    </div>
  );
}

export default App;
