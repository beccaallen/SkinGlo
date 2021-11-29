import * as React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./views/About"
import Compare from "./views/Compare"
import Home from "./views/Home"

function App () {

return (
	<div>
	<Navbar />
	<Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/compare" element={<Compare/>} />
		<Route path="/about" element={<About/>} />	
	</Routes>
	<Footer />
</div>
)}
export default App;
