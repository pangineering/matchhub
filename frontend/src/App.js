import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from './screens/Home';
import VendorScreen from './screens/VendorScreen';
import CompanyScreen from './screens/CompanyScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';
import VendorDetailScreen from './screens/VendorDetailScreen';
import CompanyDetailScreen from './screens/CompanyDetailScreen';
import CompareScreen from './screens/CompareScreen';
import Register from './screens/Register'
import Login from './screens/Login'


function App() {
  return (
    <>
      <Router>
          <Header />
          <Container>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route path="/vendors" element={<VendorScreen />} />
            <Route path="/companies" element={<CompanyScreen />} />
            <Route path="/project/:id" element={<ProjectDetailScreen />} />
            <Route path="/company/:id" element={<CompanyDetailScreen />} />
            <Route path="/vendor/:id" element={<VendorDetailScreen />} />
            <Route path="/compare" element={<CompareScreen />} />
          </Routes>
          </Container>
      </Router>
    </>
  );
}

export default App;
