import React from 'react';
import { useNavigate } from "react-router";
import { useContext } from "react";
import MyContext from "../../context/myContext";

const CompanyCard = () => {
    const navigate = useNavigate();
    const { getAllCDetail } = useContext(MyContext);

    return (
        <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="row">
                {getAllCDetail.map((item, index) => {
                    const { companyName, companyDomain, companyLogo, Toggle } = item;
                    // Conditionally render the card based on the value of Toggle
                    if (Toggle === 'T') {
                        return (
                            <div key={index} className="col-md-3 mb-4">
                                <div className="card">
                                    <img
                                        src={companyLogo}
                                        className="card-img-top"
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{companyName}</h5>
                                        <h6 className="card-title">{companyDomain}</h6>
                                        <button
                                            onClick={() => navigate(`/companyinfo/${item.id}`)}
                                            className="btn btn-primary"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        // Return null if Toggle is not 'T'
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default CompanyCard;
