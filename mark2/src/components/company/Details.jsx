import React, { useState } from 'react';
import './Details.css'; // Import CSS file for styling
import { fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const Details = () => {
  const navigate = useNavigate();
  // State variable to hold form data
  const [formData, setFormData] = useState({
    companyDomain: '',
    companyName: '',
    companyEmail:'',
    companyLogo: null,
    identificationDocument: null,
    shareCapital: '',
    businessAddress: '',
    Toggle:'T'
  });

  console.log(formData)
  const addCDetails = async () => {

    if (formData.companyDomain == "" || formData.companyName == "" || formData.companyLogo == "" || formData.companyEmail == ""|| formData.identificationDocument == "" || formData.shareCapital == "" || formData.businessAddress == "") {
        return toast.error("all fields are required")
    }
  
    
    try {
        const detRef = collection(fireDB, 'CDetails');
        await addDoc(detRef, formData)
        toast.success("Add product successfully");
        navigate('/company-dashboard')
       
    } catch (error) {
        console.log(error);
        
        toast.error("Add product failed");
    }
  
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to your server, for example
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value // Check if it's a file input or regular input
    });
  };

  return (
    <div className="form-container">
      <h2>Company Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Company Domain Dropdown */}
        <div className="form-group">
          <label htmlFor="companyDomain">Company Domain:</label>
          <select id="companyDomain" name="companyDomain" value={formData.companyDomain} onChange={handleChange}>
            <option value="">Select Domain</option>
            <option value="Tech">Tech</option>
            <option value="Marketing Agency">Marketing Agency</option>
            <option value="Fund Raiser">Fund Raiser</option>
            <option value="NGO">NGO</option>
            <option value="Medical">Medical</option>
            <option value="Education">Education</option>
            <option value="Environmental">Environmental</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Company Name Input */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="companyEmail">Company Email:</label>
          <input type="text" id="companyEmail" name="companyEmail" value={formData.companyEmail} onChange={handleChange} />
        </div>
        {/* Company Logo Input */}
        <div className="form-group">
          <label htmlFor="companyLogo">Company Logo:</label>
          <input type="text" id="companyLogo" name="companyLogo"  onChange={handleChange} />
        </div>
        {/* Identification Document Input */}
        <div className="form-group">
          <label htmlFor="identificationDocument">Identification Document:</label>
          <input type="text" id="identificationDocument" name="identificationDocument"  onChange={handleChange} />
        </div>
        {/* Share Capital Input */}
        <div className="form-group">
          <label htmlFor="shareCapital">Share Capital:</label>
          <input type="text" id="shareCapital" name="shareCapital" value={formData.shareCapital} onChange={handleChange} />
        </div>
        {/* Business Address Input */}
        <div className="form-group">
          <label htmlFor="businessAddress">Business Address:</label>
          <textarea id="businessAddress" name="businessAddress" value={formData.businessAddress} onChange={handleChange} />
        </div>
       
        {/* Submit Button */}
        <button
        onClick={addCDetails} 
        type="submit">
          Submit</button>
      </form>
    </div>
  );
};

export default Details;