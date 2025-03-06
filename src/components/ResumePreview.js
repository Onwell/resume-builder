import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ formData }, ref) => {
  return (
    <div ref={ref} className="container mt-4 p-4 border bg-white">
      <h2 className="text-center">{formData.name}</h2>
      <p className="text-center">{formData.email} | {formData.phone}</p>
      <p className="text-center">{formData.address}</p>
      <hr />
      <h4>Education</h4>
      <p>{formData.education}</p>
      <h4>Experience</h4>
      <p>{formData.experience}</p>
      <h4>Skills</h4>
      <p>{formData.skills}</p>
    </div>
  );
});

export default ResumePreview;
