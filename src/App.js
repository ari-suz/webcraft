import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/contact"  element={<Form />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
