import * as React from "react"
import { NavLink } from "react-router-dom"

const Footer: React.FC<FooterProps>= props => {

	return (
		<footer className="navbar navbar-default navbar-static-bottom">
            <div className="container-fluid">
                        <h1><NavLink className="m-3 text-dark btn-link logo-nav" to="/">SkinGlo</NavLink></h1>
                        <span className="navlinks">
                        </span>
                    </div>
        </footer>
	)
}

interface FooterProps {}

export default Footer