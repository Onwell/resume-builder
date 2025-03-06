import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { saveAs } from "file-saver";
import ResumePreview from "./ResumePreview"; // ✅ Import this

const ResumeDownload = ({ formData }) => {
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
    saveAs(blob, "resume.doc");
  };

  return (
    <div className="container text-center mt-4">
      <ResumePreview ref={resumeRef} formData={formData} /> {/* ✅ Now it works */}
      <button className="btn btn-success m-2" onClick={handlePrint}>Download PDF</button>
      <button className="btn btn-info m-2" onClick={handleDownload}>Download Word</button>
    </div>
  );
};

export default ResumeDownload;
