import "./App.css";
import About from "./components/About/About";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home"
import Product from "./components/Product/Product";
import Platform from "./components/Platform/Platform";
import Contact from "./components/Contacts/Contact";
import Career from "./components/Career/Career";
import ResponsiveWebDesign from './components/ResponsiveWeb/ResponsiveWebDesign';
import BusinessSolution from './components/Business/BusinessSolution';
import CloudSolution from './components/CloudSolution/CloudSolution'
import DigitalMarketingService from './components/DigitalMarketingService/DigitalMarketingService'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./components/Home/WhatsppIcon";
import TermsAndPrivacyPage from "./components/TermsPrivacy/TermsAndPrivacyPage";
import { ThemeProviders } from "./components/Theme/ThemeProvider";
import "./components/Theme/theme.css";
import { createContext, useState, useEffect } from "react";

import Dashboard from "./layouts/dashboard";
import Team from "./components/Admin/Team";
import ProfileView from "./components/Admin/Profileview";
import ResetPassword from "./components/Admin/ResetPassword";
import Geography from "./pages/Geography";
import Line from "./pages/Line";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Form from "./components/Admin/Form";
import ContactInformation from "./components/Admin/Contact";
import Invoice from "./components/Admin/Inovice";
import CalendarComponent from "./layouts/Calendar/Calender";
import Faq from "./components/Admin/Faq/Faq";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./layouts/NotFound";
import JobForm from "./components/Admin/JobForm";
import JobManagement from "./components/Admin/Job/JobManagement";
import FeedbackInformation from "./components/Admin/FeedbackInformatio";
import TeamForm from "./components/Admin/TeamForm";
import EmployeeDataGrid from "./components/Admin/EmployeeTable";
import EmployeeForm from "./components/Admin/EmployeeForm";
import EmployeeInvoiceForm from "./components/Admin/InvoiceForm";
import HomeUpdated from "./components/Home/HomeUpdated";
import ServicePage from "./components/Service/ServicePage";
import ChangePassword from "./components/Admin/ChangePassword";
import { useSelector } from "react-redux";
import 'aos/dist/aos.css'; // AOS animations CSS
import AOS from 'aos';
export const MyContext = createContext();

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/invoice-form" element={<EmployeeInvoiceForm />} />
    <Route path="/team" element={<Team />} />
    <Route path="/contacts" element={<ContactInformation />} />
    <Route path="/invoices" element={<Invoice />} />
    <Route path="/form" element={<Form />} />
    <Route path="/emp-view" element={<EmployeeDataGrid />} />
    <Route path="/emp-form" element={<EmployeeForm />} />
    <Route path="/team-form" element={<TeamForm />} />
    <Route path="/job-view" element={<JobManagement />} />
    <Route path="/feedback-view" element={<FeedbackInformation />} />
    <Route path="/job-form" element={<JobForm />} />
    <Route path="/calendar" element={<CalendarComponent />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/line" element={<Line />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/profile" element={<ProfileView />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeUpdated />} />
    <Route path="/services/web-app-development" element={<ServicePage />} />
    <Route path="/aboutus" element={<About />} />
    <Route path="/product" element={<Product />} />
    <Route path="/platform" element={<Platform />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/career" element={<Career />} />
    <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />
    <Route path="/responsiv-web" element={<ResponsiveWebDesign />} />
    <Route path="/business-solution" element={<BusinessSolution /> } />
    <Route path="/cloud-solution" element={<CloudSolution />} />
    <Route path="/digi-mar-service" element={<DigitalMarketingService />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, error: authError, loading: authLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,
      easing: 'ease-in-out', // Easing for animations
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : (
          <ThemeProviders>
            <Header isScrolled={isScrolled} />
            <WhatsappIcon />
            <PublicRoutes />
            <Footer />
          </ThemeProviders>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
