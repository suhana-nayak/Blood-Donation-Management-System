import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Homemain from "./components/Homemain";
import Tips from "./pages/Tips";
import Footer from "./components/Footer";
import TermsService from "./components/TermsServices";
import FAQs from "./components/FAQs";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Home />
             </ProtectedPage>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedPage>
                <Profile />
              </ProtectedPage>
            }
          />
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homemain" element={<Homemain />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/termsservices" element={<TermsService />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
