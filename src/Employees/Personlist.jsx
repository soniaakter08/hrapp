import PersonCard from "./PersonCard";

const PersonList = ({ employees }) => {
  return (
    <>
      <h2>Employee Details</h2>
      <div className="employeeList">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <PersonCard
              key={employee.id}
              {...employee}
              skills={Array.isArray(employee.skills) ? employee.skills.join(', ') : employee.skills}
            />
          ))
        ) : (
          <p>No employees to show. Please add one.</p>
        )}
      </div>
    </>
  );
};

export default PersonList;
