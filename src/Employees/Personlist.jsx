import PersonCard from "./PersonCard";
import { useState } from "react";
 
const PersonList = ({employeeData}) =>{
   
    
    
    return(
        <>
        <h1>Employees Details</h1>
 
       <div className="employeeList">
       {employeeData.length > 0 ? (
 
        employeeData.map(employee => (
        <PersonCard key={employee.id} {...employee} skills={employee.skills.join(', ')}/>
 
        ))
       ) : (
 
        <p>No matching found. Try another search.</p>
 
       )}
        
        
       </div>
       </>
    )
}
 
export default PersonList;
 ;
