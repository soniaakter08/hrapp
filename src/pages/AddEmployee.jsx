import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";  // Import axios
import './AddEmployee.css';

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    salary: '',
    phone: '',
    email: '',
    animal: '',
    startDate: '',
    location: '',
    department: '',
    skills: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'salary' ? Number(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim())  // Split and trim skills
    };

    // Use axios to post data to the server
    axios
      .post("http://localhost:3002/employees", newEmployee)
      .then((response) => {
        // After successfully adding the employee, pass the new employee to the parent
        onAddEmployee(response.data);

        // Redirect to the home page
        navigate('/person');

        // Clear the form
        setFormData({
          name: '',
          title: '',
          salary: '',
          phone: '',
          email: '',
          animal: '',
          startDate: '',
          location: '',
          department: '',
          skills: ''
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <>
      <h1>Add new Employee</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <input
          type="number"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          name="salary"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Animal"
          value={formData.animal}
          onChange={handleChange}
          name="animal"
        />
        <input
          type="text"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          name="startDate"
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          name="location"
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          name="department"
        />
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={formData.skills}
          onChange={handleChange}
          name="skills"
        />

        <button type="submit">Add Employee</button>
      </form>
    </>
  );
};

export default AddEmployee;
