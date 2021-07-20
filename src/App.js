import React, { useState } from 'react'
import {Cards} from './Components/Cards';


const App = () => {
  const [show, setShow] = useState(true);
  return ( <div>
    {/* <Cards /> */}
    <button onClick={() => setShow(!show)} >Show/Hide</button>
    {show ? <Cards /> : ""}
  </div> );
}

 

export default App;
