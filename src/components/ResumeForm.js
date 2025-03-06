import React from "react";

const ResumeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, field) => {
    const newArray = e.target.value.split("\n"); // Split textarea values into an array
    setFormData({ ...formData, [field]: newArray });
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

      {/* Education */}
      <div className="mb-3">
        <label className="form-label">Education</label>
        <input
          type="text"
          className="form-control"
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">GPA</label>
        <input
          type="text"
          className="form-control"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
        />
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
        {formData.experience.map((exp, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <div className="mb-2">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                value={exp.title}
                onChange={(e) => updateExperience(index, "title", e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                value={exp.company}
                onChange={(e) => updateExperience(index, "company", e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, "startDate", e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, "endDate", e.target.value)}
              />
            </div>
          </div>
        ))}
        <button className="btn btn-primary mt-2" onClick={addExperience}>
          Add Experience
        </button>
      </div>

      {/* References */}
      <div className="mb-3">
        <label className="form-label">References (one per line: Name - Contact)</label>
        <textarea
          className="form-control"
          rows="3"
          value={formData.references.map((ref) => `${ref.name} - ${ref.contact}`).join("\n")}
          onChange={(e) => handleArrayChange(e, "references")}
        />
      </div>
    </div>
  );
};

export default ResumeForm;
