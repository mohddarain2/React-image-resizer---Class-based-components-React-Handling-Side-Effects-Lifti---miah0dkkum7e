import React, { useState } from 'react'
import '../styles/App.css';
import image from '../image.jpeg'
const App = () => {
  const [heights, setHeight] = useState("320")
  const [widths, setWidth] = useState("320")
  return (
    <div id="main">
      Height:<input type="range" min="100" max="800" id="height-slider" onChange={(e) => setHeight(e.target.value)} />
      Width:<input type="range" min="100" max="800" id="width-slider" onChange={(e) => setWidth(e.target.value)} />
      <br />
     
        <img src={image} alt="" id="resizable-img" height={heights+"px"} width={widths+"px"} />
      
    </div>
  )
}


export default App;
