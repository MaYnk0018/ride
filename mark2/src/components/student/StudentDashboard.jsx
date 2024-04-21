import Layout from '../layout/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  return (
    <Layout>
      <div className="container mt-5">
            {/* Top */}
            <div className="top mb-5 px-5">
                <div className="bg-light py-5 border border-secondary rounded-lg">
                    <h1 className="text-center text-2xl font-bold text-primary">Organiser Dashboard</h1>
                </div>
            </div>

            <div className="px-5">
                {/* Mid  */}
                <div className="mid mb-5">
                    {/* main  */}
                    <div className="bg-light py-5 rounded-xl border border-secondary">
                        {/* image  */}
                        <div className="text-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className="text-center text-lg text-primary"><span className="font-weight-bold">Name :</span> {user?.name}</h1>
                            <h1 className="text-center text-lg text-primary"><span className="font-weight-bold">Email :</span> {user?.email}</h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="nav nav-pills nav-fill">
                            {/* Total Products */}
                            <Tab className="nav-item">
                                <div className="border bg-light border-secondary px-4 py-3 rounded-xl">
                                    <div className="text-primary w-12 h-12 mb-3 mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                                            <path d="M5 11L9 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V11zM9 11V21" />
                                        </svg>
                                    </div>
                                    <h2 className="text-center font-weight-bold text-xl text-primary">--</h2>
                                    <p className="text-center text-primary font-weight-bold">STATUS</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="nav-item">
                                <div className="border bg-light border-secondary px-4 py-3 rounded-xl">
                                    <div className="text-primary w-12 h-12 mb-3 mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <h2 className="text-center font-weight-bold text-xl text-primary">--</h2>
                                    <p className="text-center text-primary font-weight-bold">UPDATE DETAILS</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel className="text-center font-weight-bold text-xl text-primary">
                            <h4>YOUR STATUS IS SHOWN HERE</h4>
                        </TabPanel>

                        <TabPanel className="text-center font-weight-bold text-xl text-primary">
                            <h4>UPDATE YOUR DETAILS HERE</h4>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default StudentDashboard