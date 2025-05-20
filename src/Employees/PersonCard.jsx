import React, { useState, useEffect } from 'react';
import './PersonCard.css';

const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills = [],
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formState, setFormState] = useState({
    salary: salary.toString(),
    location,
    department,
    skills: Array.isArray(skills) ? skills.join(', ') : skills,
  });

  useEffect(() => {
    setFormState({
      salary: salary.toString(),
      location,
      department,
      skills: Array.isArray(skills) ? skills.join(', ') : skills,
    });
  }, [salary, location, department, skills]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const updated = {
      salary: Number(formState.salary),
      location: formState.location,
      department: formState.department,
      skills: formState.skills.split(',').map((s) => s.trim()),
    };

    await onUpdate(id, updated);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormState({
      salary: salary.toString(),
      location,
      department,
      skills: Array.isArray(skills) ? skills.join(', ') : skills,
    });
    setIsEditing(false);
  };

  return (
    <div className="person-card">
      {isEditing ? (
        <>
          {Object.entries(formState).map(([key, value]) => (
            <div key={key} className="field">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="buttons">
            <button className="save" onClick={handleSave}>Save</button>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Salary:</strong> {salary}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Animal:</strong> {animal}</p>
          <p><strong>Start Date:</strong> {startDate}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Department:</strong> {department}</p>
          <p><strong>Skills:</strong> {Array.isArray(skills) ? skills.join(', ') : skills}</p>
          <div className="button">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonCard;
