import * as React from "react"
import { NavLink } from "react-router-dom"

const NavBar: React.FC<NavbarProps>= props => {

	return (
		<nav className="d-flex justify-content-between align-items-center bg-white p-3 nav">
            <h4><NavLink className="m-3 logo-nav" to="/">SkinGlo</NavLink></h4>
            <span className="navlinks">
                <NavLink className="mx-3" to="/compare">Compare!!</NavLink>
                <NavLink className="mx-3" to="/about">About!!!!!</NavLink>
            </span>
        </nav>
	)
}

interface NavbarProps {}

export default NavBar;