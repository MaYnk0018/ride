import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
// import "./UpdateProductPage.css"; // Import CSS file for styling

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    // navigate 
    const navigate = useNavigate();
    const { id } = useParams()

    // product state
    const [product, setProduct] = useState({
        companyDomain: '',
        companyName: '',
        companyLogo: null,
        identificationDocument: null,
        shareCapital: '',
        businessAddress: '',
        companyEmail:'',
        status: 'active' // Default status is set to 'active'
    });

    // Get Single Product Function
    const getUpdateFunction = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "Cdetails", id))
            const productData = productTemp.data();
            setProduct({
                companyDomain: productData?.companyDomain || '',
                companyName: productData?.companyName || '',
                companyLogo: productData?.companyLogo || null,
                identificationDocument: productData?.identificationDocument || null,
                shareCapital: productData?.shareCapital || '',
                businessAddress: productData?.businessAddress || '',
                status: productData?.status || 'active',
                companyEmail: productData?.companyEmail || ''
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'Cdetail', id), product);
            toast.success("Product Updated successfully");
            getAllProductFunction();
            setLoading(false);
            navigate('/company-dashboard');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to update product");
        }
    }

    useEffect(() => {
        getUpdateFunction();
    }, []);

    return (
        <div>
            <div className='form-container'>
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login-form">
                    {/* Top Heading  */}
                    <div className="form-heading">
                        <h2 className='form-title'>
                            Update Product
                        </h2>
                    </div>

                    {/* Input Fields */}
                    <div className="form-inputs">
                        <input
                            type="text"
                            name="companyDomain"
                            value={product.companyDomain}
                            onChange={(e) => setProduct({ ...product, companyDomain: e.target.value })}
                            className='input-field'
                            placeholder='Company Domain'
                        />
                        <input
                            type="text"
                            value={product.companyName}
                            onChange={(e) => setProduct({ ...product, companyName: e.target.value })}
                            name="companyName"
                            placeholder='Company name'
                            rows="5"
                            className="input-field"
                        ></input>
                        <input
                            type="text"
                            value={product.shareCapital}
                            onChange={(e) => setProduct({ ...product, shareCapital: e.target.value })}
                            name="shareCapital"
                            placeholder='Company capital'
                            rows="5"
                            className="input-field"
                        ></input>
                        <input
                            type="text"
                            name="companyEmail"
                            value={product.companyEmail}
                            onChange={(e) => setProduct({ ...product, companyEmail: e.target.value })}
                            className='input-field'
                            placeholder='Company email'
                        />

                        <select
                            value={product.status}
                            onChange={(e) => setProduct({ ...product, status: e.target.value })}
                            className="input-field"
                        >
                            <option value="active">Active</option>
                            <option value="nonactive">Non-Active</option>
                        </select>

                        {/* Description Textarea */}
                        <textarea
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            name="description"
                            placeholder="Product Description"
                            rows="5"
                            className="input-field"
                        ></textarea>


                        {/* Update Product Button  */}
                        <button
                            onClick={updateProduct}
                            type='button'
                            className='submit-button'
                        >
                            Update Product
                        </button>

                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductPage;
