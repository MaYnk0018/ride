import React from 'react';
import './CompanyInfo.css'; // Import your CSS file

const CompanyInfo = () => {
  return (
    <div className="product-info-container">
      <h2 className="product-title">Product Name</h2>
      <div className="product-details">
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam vel turpis ultricies scelerisque
          at non magna. Mauris ultricies urna vitae libero cursus, ut vestibulum eros ultrices.
        </p>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Business Address:</span>
            <span className="info-value">123 Main St, City, Country</span>
          </div>
          <div className="info-item">
            <span className="info-label">Start Date:</span>
            <span className="info-value">January 1, 2025</span>
          </div>
          <div className="info-item">
            <span className="info-label">End Date:</span>
            <span className="info-value">December 31, 2025</span>
          </div>
          <div className="info-item">
            <span className="info-label">Budget:</span>
            <span className="info-value">$10,000</span>
          </div>
        </div>
        <div className="organization-info">
          <h3>About the Organization:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam vel turpis ultricies scelerisque
            at non magna. Mauris ultricies urna vitae libero cursus, ut vestibulum eros ultrices.
          </p>
        </div>
        <button className="connect-btn">Connect</button>
      </div>
    </div>
  );
};

export default CompanyInfo;

// import { useContext, useEffect, useState } from "react";
// import Layout from "../../components/layout/Layout";
// import myContext from "../../context/myContext";
// import { useParams } from "react-router";
// import { fireDB } from "../../firebase/FirebaseConfig";
// import { doc, getDoc } from "firebase/firestore";


// const CompanyInfo = () => {

  

//   const [product, setProduct] = useState("");

//   const { id } = useParams();

//   const getcompanyData = async () => {
    
//     try {
//       const companyTemp = await getDoc(doc(fireDB, "CDetails", id));
//       setProduct(companyTemp.data());
//       setProduct({...companyTemp.data(), id : companyTemp.id})
//       console.log(companyTemp.data());
      
//     } catch (error) {
//       console.log(error);
      
//     }
//   };

//   useEffect(() => {
//     getcompanyData();
//   }, []);

//   return (
//     <Layout>
//       <section className="product-info-container">
//         {
//           <div className="product-details">
//             <div className="product-image">
//               <img src={product?.companyName} alt="" />
//             </div>
//             <div className="product-info">
//               <h2>{product?.companyDomain}</h2>
//               <p>{product?.businessAddress}</p>
//               <p>₹ {product?.companyEmail}</p>
//               <button className="connect-button">Connect</button>
//             </div>
//           </div>
//         }
//       </section>
//     </Layout>
//   );
// };

// export default CompanyInfo;