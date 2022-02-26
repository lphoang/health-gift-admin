import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Diseases from "./components/Disease/Diseases";
import Certificates from "./components/Certificate/Certificates";
import Blogs from "./components/Blog/Blogs";
import Specialists from "./components/Specialist/Specialists";
import Doctors from "./components/Doctor/Doctors";
import CreateBlog from "./components/Blog/CreateBlog";
import CreateDisease from "./components/Disease/CreateDisease";
import Login from "./components/Login";
import CreateSpecialist from "./components/Specialist/CreateSpecialist";
import EditDisease from "./components/Disease/EditDisease";
import EditBlog from "./components/Blog/EditBlog";
import EditSpecialist from "./components/Specialist/EditSpecialist";
import Certificate from "./components/Certificate/Certificate";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <div className="h-screen min-h-screen flex flex-col md:flex-col justify-between">
          <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
            <div className="mx-auto py-6 sm:px-6 lg:px-1 min-h-screen">
              <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                <div className="container my-12 mx-auto px-4 md:px-12">
                  <Routes>
                    <Route path="/" element={<Dashboard />}>
                      <Route path="/doctors" element={<Doctors />} />
                      <Route path="/diseases" element={<Diseases />} />
                      <Route
                        path="/diseases/:id/edit"
                        element={<EditDisease />}
                      />
                      <Route
                        path="/diseases/create"
                        element={<CreateDisease />}
                      />
                      <Route path="/blogs" element={<Blogs />} />
                      <Route path="/blogs/:id/edit" element={<EditBlog />} />
                      <Route path="/blogs/create" element={<CreateBlog />} />
                      <Route path="/certificates" element={<Certificates />} />
                      <Route
                        path="/certificates/:id"
                        element={<Certificate />}
                      />
                      <Route path="/specialists" element={<Specialists />} />

                      <Route
                        path="/specialists/:id/edit"
                        element={<EditSpecialist />}
                      />
                      <Route
                        path="/specialists/create"
                        element={<CreateSpecialist />}
                      />
                    </Route>
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
