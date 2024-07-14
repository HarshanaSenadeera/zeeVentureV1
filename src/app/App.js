import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Topper} from "../component/Topper";
import {Navbar} from "../component/Navbar";
import React from "react";
import {About} from "../pages/About";
import {Home} from "../pages/Home";
import {Footer} from "../component/Footer";
import {Service} from "../pages/Service";
import {Contact} from "../pages/Contact";
import {Member} from "../component/Member";



function App() {
  return (

      <div className="app">


          <BrowserRouter>
              <Topper/>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/service' element={<Service/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/member' element={<Member/>}/>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
