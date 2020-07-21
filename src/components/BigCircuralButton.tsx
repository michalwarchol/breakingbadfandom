import React from "react"
import {Link} from 'react-router-dom'

interface Props {
    image: string;
    text: string;
    link: string;
}

const BigCircuralButton: React.FC <Props> = ({image, text, link}) => {
    return(
        <Link to={link}>
        <div className="bigcircuralbutton d-flex justify-content-center">
            <div className="bigcircuralbutton_image">
                <img src={image} alt="not found" />
                <h1 className="d-flex align-items-center justify-content-center">{text}</h1>
            </div>
        </div>
        </Link>
    )
}

export default BigCircuralButton;