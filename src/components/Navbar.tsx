import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LocationState {
    from: {
        pathname: string;
    };
}

const activeState: React.CSSProperties = {
    backgroundColor: "rgb(69, 176, 108)"
}

const Navbar: React.FC = () => {

    const location = useLocation<LocationState>()


    console.log(location)
    return (
        <nav className="navbar">
            <Link to="/" className="d-flex col-6 col-sm-3 justify-content-center" style={location.pathname==="/" ? activeState : undefined}>
                <div className="navbar_option">
                    Home
                </div>
            </Link>
            <Link to="/characters" className="d-flex col-6 col-sm-3 justify-content-center" style={location.pathname==="/characters" ? activeState : undefined}>
                <div className="navbar_option">
                    Characters
                </div>
            </Link>
            <Link to="/episodes" className="d-flex col-6 col-sm-3 justify-content-center" style={location.pathname==="/episodes" ? activeState : undefined}>
                <div className="navbar_option">
                    Episodes
                </div>
            </Link>
            <Link to="/quotes" className="d-flex col-6 col-sm-3 justify-content-center" style={location.pathname==="/quotes" ? activeState : undefined}>
                <div className="navbar_option">
                    Quotes
                </div>
            </Link>
        </nav>
    )
}

export default Navbar;