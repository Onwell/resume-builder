import React, { useState } from "react";
import ResumeTemplate from "./components/ResumeTemplate";
import ResumeForm from "./components/ResumeForm";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import logo from "./assets/logo.png"; // Ensure this path is correct!

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    summary: "",
    education: "",
    gpa: "",
    skills: [],
    achievements: [],
    experience: [],
    references: [],
  });

  return (
    <div className="container my-4">
      {/* Logo Section */}
      <div className="text-center mb-3">
        <img src={logo} alt="Company Logo" style={{ height: "80px" }} />
      </div>

      <h2 className="text-center mb-4">Resume Builder</h2>

      <div className="row">
        {/* Left Side - Form */}
        <div className="col-md-6">
          <ResumeForm formData={formData} setFormData={setFormData} />
        </div>

        {/* Right Side - Resume Preview */}
        <div className="col-md-6">
          <ResumeTemplate formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
