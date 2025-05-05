import PersonCard from "./PersonCard"
import { employees } from "./employeesData"
 
const PersonList = () =>{
    return(
        <>
        <h2>Employees Details</h2>
       <div className="employeeList">
        {employees.map(employee => (
            <PersonCard key={employee.id} {...employee} skills={employee.skills.flat().join(', ')}/>
 
            ))}
        
       </div>
       </>
    )
}
 
export default PersonList;