import * as React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./views/About"
import Compare from "./views/Compare"
import Home from "./views/Home"

function App () {

return (
	<>
	<div className="min-vh-100">
	<Navbar />
	<Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/compare" element={<Compare/>} />
		<Route path="/about" element={<About/>} />	
	</Routes>
	</div>
	<div className="container-fluid bg-info">
	<Footer />
	</div>
</>
)}
export default App;
