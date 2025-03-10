import React from "react";
import './ResumeTemplate.css'; // Import your CSS file

const ResumeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, field) => {
    const newArray = e.target.value.split("\n"); // Split textarea values into an array
    setFormData({ ...formData, [field]: newArray });
  };

  // Function to add a new education entry
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { school: "", level: "", startYear: "", endYear: "" },
      ],
    });
  };

  // Function to update education fields
  const updateEducation = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  // Function to add a new experience entry
  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { title: "", company: "", startDate: "", endDate: "" },
      ],
    });
  };

  // Function to update experience fields
  const updateExperience = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    setFormData({ ...formData, experience: updatedExperience });
  };

  return (
    <div className="container p-4 border rounded bg-light">
      <h3 className="text-center">Resume Form</h3>

      {/* Name */}
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Contact Info */}
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* Summary */}
      <div className="mb-3">
        <label className="form-label">Summary</label>
        <textarea
          className="form-control"
          name="summary"
          rows="3"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>

      {/* Education Section */}
      <div className="mb-3">
        <label className="form-label">Education</label>
        {(formData.education || []).map((edu, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="School Name"
              value={edu.school}
              onChange={(e) => updateEducation(index, "school", e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Level (e.g., Bachelor's, High School)"
              value={edu.level}
              onChange={(e) => updateEducation(index, "level", e.target.value)}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Start Year"
              value={edu.startYear}
              onChange={(e) =>
                updateEducation(index, "startYear", e.target.value)
              }
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="End Year"
              value={edu.endYear}
              onChange={(e) => updateEducation(index, "endYear", e.target.value)}
            />
          </div>
        ))}<br />
        <button className="btn btn-primary mt-2 responsive-button" onClick={addEducation}>
          Add Education
        </button>
      </div>

      {/* Achievements */}
      <div className="mb-3">
        <label className="form-label">Achievements (one per line)</label>
        <textarea
          className="form-control"
          rows="3"
          value={formData.achievements.join("\n")}
          onChange={(e) => handleArrayChange(e, "achievements")}
        />
      </div>

      {/* Skills */}
      <div className="mb-3">
        <label className="form-label">Skills (one per line)</label>
        <textarea
          className="form-control"
          rows="3"
          value={formData.skills.join("\n")}
          onChange={(e) => handleArrayChange(e, "skills")}
        />
      </div>

      {/* Experience Section */}
      <div className="mb-3">
        <label className="form-label">Experience</label>
        {(formData.experience || []).map((exp, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Job Title"
              value={exp.title}
              onChange={(e) =>
                updateExperience(index, "title", e.target.value)
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Company"
              value={exp.company}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                updateExperience(index, "startDate", e.target.value)
              }
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => updateExperience(index, "endDate", e.target.value)}
            />
          </div>
        ))}<br />
        <button className="btn btn-primary mt-2" onClick={addExperience}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;