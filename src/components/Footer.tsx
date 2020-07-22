import React from 'react'
import Media from "./Media"

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="info d-flex flex-column flex-md-row">
                <div className="contact d-flex col-12 col-md-6 flex-column align-items-center">
                    <h4>Michał Warchoł</h4>
                    <h5>tel.: 785 333 253</h5>
                    <h5>email: mwarchol33@gmail.com</h5>
                </div>
                <div className="socials d-flex col-12 col-md-6 align-items-center justify-content-center">
                    <Media link="https://github.com/michalwarchol" image="icon-github-circled" />
                    <Media link="https://www.linkedin.com/in/micha%C5%82-warcho%C5%82-2033a51a0/" image="icon-linkedin" />
                </div>
            </div>
            <div className="copyright d-flex col-12 justify-content-center">
                <small>Copyright &copy; {new Date().getFullYear()} Michał Warchoł</small>
            </div>
        </footer>
    )
}

export default Footer