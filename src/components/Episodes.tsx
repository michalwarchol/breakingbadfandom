import React, { useEffect, useState } from 'react'
import Episode from './Episode';

const Episodes: React.FC = () => {

    const [episodes, setEpisodes] = useState<Array<any>>([]);

    useEffect(()=>{
        fetch("https://www.breakingbadapi.com/api/episodes")
        .then(response=>response.json())
        .then(res=>{
            setEpisodes(res)
        })
    }, [])

    const buildEpisodes = () => {
        let localEpisodes = episodes.map((element, index) => {
            return <Episode {...element} key={index} />
        })
        return localEpisodes
    }

    return(
        <div className="episodes d-flex flex-column">
            {buildEpisodes()}
        </div>
    )
}

export default Episodes;