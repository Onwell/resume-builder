import React from "react";
import "./ResumeTemplate.css"; // Ensure styling is applied

const ResumeTemplate = ({ formData }) => {
  return (
    <div className="container resume-template border p-4">
      {/* Logo */}
      <div className="text-center">
        <h1 className="fw-bold">{formData.name || "Your Name"}</h1>
        <h5 className="text-uppercase text-muted">High School Student</h5>
      </div>

      <div className="row mt-4">
        {/* Left Section */}
        <div className="col-md-4 bg-light p-3">
          <h5 className="fw-bold">Contact</h5>
          <p>📞 {formData.phone || "123-456-7890"}</p>
          <p>📧 {formData.email || "your@email.com"}</p>
          <p>🏠 {formData.address || "Your Address"}</p>

          {/* Achievements */}
          <h5 className="fw-bold mt-3">Achievements</h5>
          <ul>
            {formData.achievements?.length > 0
              ? formData.achievements.map((ach, index) => <li key={index}>{ach}</li>)
              : <li>National Society - 2022</li>}
          </ul>

          {/* Skills */}
          <h5 className="fw-bold mt-3">Technical Skills</h5>
          <ul>
            {formData.skills?.length > 0
              ? formData.skills.map((skill, index) => <li key={index}>{skill}</li>)
              : <li>Computer, Math, Microsoft Office</li>}
          </ul>

          {/* Activities */}
          <h5 className="fw-bold mt-3">Activities</h5>
          <ul>
            {formData.activities?.length > 0
              ? formData.activities.map((activity, index) => <li key={index}>{activity}</li>)
              : <li>High School Tennis Team - 2021</li>}
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-md-8 p-3">
          <h5 className="fw-bold">Summary</h5>
          <p>{formData.summary || "A brief description about yourself..."}</p>

          {/* Education */}
          <h5 className="fw-bold mt-3">Education</h5>
          <p><strong>{formData.education || "Your School Name"}</strong></p>
          <p>2022 - Present | GPA: {formData.gpa || "3.75"}</p>

          {/* Experience - Multiple */}
          <h5 className="fw-bold mt-3">Experience</h5>
          {formData.experience?.length > 0 ? (
            formData.experience.map((exp, index) => (
              <div key={index}>
                <p><strong>{exp.title || "Job Title"}</strong></p>
                <p>{exp.years || "2021 - Present"}</p>
                <ul>
                  {exp.details?.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
            ))
          ) : (
            <p>No Experience Added</p>
          )}

          {/* References - Multiple */}
          <h5 className="fw-bold mt-3">References</h5>
          {formData.references?.length > 0 ? (
            formData.references.map((ref, index) => (
              <div key={index}>
                <p><strong>{ref.name}</strong></p>
                <p>{ref.contact}</p>
              </div>
            ))
          ) : (
            <p>No References Added</p>
          )}
        </div>
      </div>

      {/* Footer - Developed By */}
      <div className="text-center mt-4">
        <p className="text-muted">Developed by Smug Solutions</p>
      </div>
    </div>
  );
};

export default ResumeTemplate;
