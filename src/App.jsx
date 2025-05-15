import { useState } from 'react';
import PersonList from './Employees/Personlist';
import AddEmployee from './pages/AddEmployee'
import About from './pages/About';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router';
import Root from './pages/Root';
import {employeesData} from './Employees/employeesData';

function App() {
  const [employees, setEmployees] = useState(employeesData);

  const addEmployeeHandler = (newEmployee) =>{
    const updatedEmployee = [...employees, {...newEmployee, id:Date.now() } ];
    setEmployees(updatedEmployee);
    console.log(updatedEmployee);
  }

  const router = createBrowserRouter([
    { path: '/' , 
      element:<Root />,
      children:[
        {path: '/add' , element:<AddEmployee onAddEmployee={addEmployeeHandler}/>},
        {path: '/about' , element:<About />},
        {path: '/' , element:<PersonList employees={employees} setEmployees = {setEmployees} />}
      ]},
    
  ]);

  return (
    <>
    <main>
        <RouterProvider router={router} />
      </main>
   </>
  )
}

export default App;