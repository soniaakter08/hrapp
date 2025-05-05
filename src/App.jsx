import { useState } from 'react'
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Person from './Person';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <header><Header appName="HR app"/></header>
     <main>
     <Person name ="Sonia Akter" title= "Worker" age = "29" salary= "2000€" phone= "04123456" email="asonia3308@gmail.com" animal="Fox"/>
     </main>

     <Footer name='REACT25K'/>
    
   </div>
    
    
  )
}

export default App