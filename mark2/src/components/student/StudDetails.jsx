import React, { useContext,useState } from 'react';
import './StudDetails.css'; // Import CSS file for styling
import { useNavigate } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

const StudDetails = () => {
  // State variable to hold form data
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    studentID: '',
    consentForm: '',
    collegeName: '',
    contactNumber: '',
    email: '',
    Toggle:'T'
  });
  console.log(formData)
  const addSDetails = async () => {
    if (formData.studentName == "" || formData.studentID == "" || formData.consentForm == "" || formData.collegeName == "" || formData.contactNumber == "" || formData.email == "") {
        return toast.error("all fields are required")
    }
  
    
    try {
        const detRef = collection(fireDB, 'SDetails');
        await addDoc(detRef, formData)
        toast.success("Add product successfully");
        navigate('/student-dashboard')
       
    } catch (error) {
        console.log(error);
        
        toast.error("Add product failed");
    }
  
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For demonstration, log form data to console
  };



  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Name Input */}
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} />
        </div>
        {/* Student ID Input */}
        <div className="form-group">
          <label htmlFor="studentID">Student ID:</label>
          <input type="text" id="studentID" name="studentID" value={formData.studentID} onChange={handleChange} />
        </div>
        {/* Consent Form Input */}
        <div className="form-group">
          <label htmlFor="consentForm">Consent Form (Image URL):</label>
          <input type="text" id="consentForm" name="consentForm" value={formData.consentForm} onChange={handleChange} />
        </div>
        {/* College Name Input */}
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input type="text" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} />
        </div>
        {/* Contact Number Input */}
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </div>
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        {/* Submit Button */}
        <button 
        onClick={addSDetails}
        type="submit">
            Submit</button>
      </form>
    </div>
  );
};

export default StudDetails;