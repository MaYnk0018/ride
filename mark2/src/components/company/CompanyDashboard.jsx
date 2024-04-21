// Import React and other necessary modules
import React from 'react';
import Layout from '../layout/Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import './CompanyDashboard.css'
const CompanyDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));

  return (
    <Layout>
      <div className="container mt-5 d-flex flex-column align-items-center">
        {/* Top */}
        <div className="top mb-5 px-5">
          <div className="bg-light py-5 border border-secondary rounded-lg">
            <h1 className="text-center text-2xl font-bold text-primary">Company Dashboard</h1>
          </div>
        </div>

        {/* Mid */}
        <div className="mid mb-5 w-50">
          <div className="bg-light py-5 rounded-xl border border-secondary d-flex flex-column align-items-center">
            <div className="text-center mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-center text-lg text-primary"><span className="font-weight-bold">Name :</span> {user?.name}</h1>
              <h1 className="text-center text-lg text-primary"><span className="font-weight-bold">Email :</span> {user?.email}</h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-50">
          <Tabs>
            <TabList className="nav nav-pills nav-fill">
              {/* Total Products */}
              <Tab className="nav-item">
                <div className="border bg-light border-secondary px-4 py-3 rounded-xl text-center">
                  <div className="text-primary w-12 h-12 mb-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                      <path d="M5 11L9 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V11zM9 11V21" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-primary font-weight-bold">--</h2>
                  <Link to="/updateCDetail"><p className="text-primary font-weight-bold">UPDATE DETAILS</p></Link>
                </div>
              </Tab>

              {/* Total User */}
              <Tab className="nav-item">
                <div className="border bg-light border-secondary px-4 py-3 rounded-xl text-center">
                  <div className="text-primary w-12 h-12 mb-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-primary font-weight-bold">--</h2>
                  <p className="text-primary font-weight-bold">STATUS</p>
                </div>
              </Tab>
            </TabList>

            {/* Tab Panels */}
            <div className="tab-panels">
              <TabPanel className="tab-panel">
                {/* Content of Tab Panel 1 */}
              </TabPanel>
              <TabPanel className="tab-panel">
                {/* Content of Tab Panel 2 */}
              </TabPanel>
            </div>

          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default CompanyDashboard;
