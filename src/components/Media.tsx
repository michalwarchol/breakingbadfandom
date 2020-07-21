import React from 'react'

interface Props {
    link: string;
    image: string;
}

const Media: React.FC<Props> = ({link, image}) => {
    return(
        <a href={link}>
            <i className={image}></i>
        </a>
    )
}

export default Media;