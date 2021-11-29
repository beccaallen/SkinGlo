import * as React from "react"
import { NavLink } from "react-router-dom"

const NavBar: React.FC<NavbarProps>= props => {

	return (
		<nav className="d-flex justify-content-between align-items-center bg-white shadow p-3 nav">
            <h1><NavLink className="m-3 text-dark btn-link type-logo" to="/">SkinGlo</NavLink></h1>
            <span className="navlinks">
                <NavLink className="mx-3" to="/compare">Compare</NavLink>
                <NavLink className="mx-3" to="/about">About</NavLink>
            </span>
        </nav>
	)
}

interface NavbarProps {}

export default NavBar;