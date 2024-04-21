import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const StudentInfo = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  const getStudentData = async () => {
    
    try {
      const studTemp = await getDoc(doc(fireDB, "SDetails", id));
      setProduct(studTemp.data());
      setProduct({...studTemp.data(), id : studTemp.id})
      console.log(studTemp.data());
      
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <Layout>
      <section className="product-info-container">
        {
          <div className="product-details">
            <div className="product-image">
              <img src={product?.StudentInfo} alt="" />
            </div>
            <div className="product-info">
              <h2>{product?.collegeName}</h2>
              <p>{product?.contact}</p>
              <p>₹ {product?.email}</p>
              <button className="connect-button">Connect</button>
            </div>
          </div>
        }
      </section>
    </Layout>
  );
};

export default StudentInfo;