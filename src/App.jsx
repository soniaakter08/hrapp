import { useState } from 'react';
import Header from './Header/Header';
import PersonCard from './Employees/PersonCard';
import PersonList from './Employees/PersonList';
import Footer from './Footer/Footer';
import './App.css';
 
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div>
      <header><Header appName="HR app"/></header>
      <main>
      <PersonList />
      </main>
 
      <Footer name='REACT25K'/>
     
    </div>
     
     
   )
 }
 
export default App