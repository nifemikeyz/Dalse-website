import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./pages/Contact";
import Hometwo from "./pages/Hometwo";
import Services from "./pages/Services";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Newsone from "./pages/Newsone";
import Newstwo from "./pages/Newstwo";
import Typography from "./pages/Typography";
import Buttonreact from "./pages/Buttonreact";
import Doc from "./pages/Doc";
import DocComponent from "./pages/DocComponent";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/home-2" element={<Hometwo />}/>
          {/* For Pages */}
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/alumni" element={<Alumni />}/>
          {/* For News */}
          <Route path="/news-grid" element={<Newsone />}/>
          <Route path="/news-list" element={<Newstwo />}/>
          {/* For Element */}
          <Route path="/typography" element={<Typography />}/>
          <Route path="/buttons" element={<Buttonreact />}/>
          {/* For Docs */}
          <Route path="/docs/getting-started" element={<Doc />}/>
          <Route path="/docs/components" element={<DocComponent />}/>
          {/* For purchase */}
          <Route path="/purchase" element={<Purchase />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
