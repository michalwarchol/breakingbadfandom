import React, { useState } from 'react'

interface Props {
    air_date: string;
    characters: Array<string>;
    episode: string;
    episode_id: number;
    season: string;
    series: string;
    title: string;
}

const arrowStyles: React.CSSProperties = {
    transform: 'rotate(90deg)',
}

const infoStyles: React.CSSProperties = {
    paddingTop: "10px",
    height: "260px"
}

const Episode: React.FC<Props> = ({title, series, season, episode, air_date, characters}) => {
    const [click, setClick] = useState<boolean>(false)
    const handleClick = () => {
        setClick(!click)

    }
    return (
        <div 
            className="episode d-flex col-12 flex-column" 
            onClick={handleClick}>
            <div className="head d-flex flex-row">
                <div 
                    className="arrow d-flex justify-content-center align-items-center"
                    style={click ? arrowStyles : undefined}
                >
                    <i className="icon-right-open"></i>
                </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
            </div>
            <div 
                className="info"
                style={click ? infoStyles : undefined}
            >
                <ul>
                    <li>Series: {series}</li>
                    <li>Season: {season}</li>
                    <li>Episode: {episode}</li>
                    <li>Air Date: {air_date}</li>
                    <li>Characters: {characters.join(", ")}</li>
                </ul>
            </div>
        </div>
    )
}

export default Episode;