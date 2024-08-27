import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
// import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/contact"  element={<Form />}/>
          <Route path="/services" element={<Services />}/>
          {/* <Route path="/our-work" element={<Work />}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
