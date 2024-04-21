import React, { useState } from 'react';
import './Details.css'; // Import CSS file for styling

const Details = () => {
  // State variable to hold form data
  const [formData, setFormData] = useState({
    companyDomain: '',
    companyName: '',
    companyLogo: null,
    identificationDocument: null,
    shareCapital: '',
    businessAddress: '',
    companyEmail:''
  });

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
  console.log("jj", formData);

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
        {/* Company Logo Input */}
        <div className="form-group">
          <label htmlFor="companyLogo">Company Logo:</label>
          <input type="file" id="companyLogo" name="companyLogo" accept="image/*" onChange={handleChange} />
        </div>
        {/* Identification Document Input */}
        <div className="form-group">
          <label htmlFor="identificationDocument">Identification Document:</label>
          <input type="file" id="identificationDocument" name="identificationDocument" accept=".pdf" onChange={handleChange} />
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
        <div className="form-group">
          <label htmlFor="companyEmail">Company Email:</label>
          <input type="email" id="companyEmail" name="companyEmail"  onChange={handleChange} />
        </div>
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Details;


