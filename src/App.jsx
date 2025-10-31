import React from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import FastFood from "./components/Pages/FastFood";
import Beverages from "./components/Pages/Beverages";
import CasualDining from "./components/Pages/CasualDining";
import Desserts from "./components/Pages/Desserts";
import Starts from "./components/Pages/Starts";
import Mains from "./components/Pages/Mains";
import Bakery from "./components/Pages/Bakery";
import Footer from "./components/Footer";
import About from "./components/Ourstory";
import Gallery from "./components/Pages/FoodGalary";
import Chefs from "./components/Pages/OurChefs";
import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";

// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ✅ NEW SMART LAYOUT - HIDES NAVBAR/FOOTER FOR ADMIN!
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      {/* ✅ NAVBAR - HIDE FOR ADMIN */}
      {!hideLayout && (
        <div className="pt-10 px-10 pb-0 flex-shrink-0">
          <Navbar />
        </div>
      )}
      
      {/* ✅ CONTENT */}
      <div className="pt-10 px-10 pb-0 flex-1">
        {children}
      </div>
      
      {/* ✅ FOOTER - HIDE FOR ADMIN */}
      {!hideLayout && (
        <div className="pt-0 pb-10 px-10 flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ CUSTOMER PAGES - WITH LAYOUT */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/fast-food" element={<Layout><FastFood /></Layout>} />
        <Route path="/beverages" element={<Layout><Beverages /></Layout>} />
        <Route path="/casual-dining" element={<Layout><CasualDining /></Layout>} />
        <Route path="/desserts" element={<Layout><Desserts /></Layout>} />
        <Route path="/starts" element={<Layout><Starts /></Layout>} />
        <Route path="/mains" element={<Layout><Mains /></Layout>} />
        <Route path="/cafes-bakeries" element={<Layout><Bakery /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/chefs" element={<Layout><Chefs /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/FAQ" element={<Layout><FAQ /></Layout>} />
        
        {/* ✅ ADMIN PAGES - NO LAYOUT! */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
        
        {/* ✅ 404 */}
        <Route path="*" element={
          <Layout>
            <div className="text-center py-12 font-sans">
              404: Page Not Found
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;