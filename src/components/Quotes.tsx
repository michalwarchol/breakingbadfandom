import React, { useEffect, useState } from 'react'
import Quote from './Quote'

const Quotes: React.FC = () => {

    const [quotes, setQuotes] = useState<Array<any>>([])

    useEffect(()=>{
        fetch("https://www.breakingbadapi.com/api/quotes")
        .then(response=>response.json())
        .then(res=>{
            setQuotes(res)
        })
    }, [])

    const buildQuotes = () => {
        let localQuotes: Array<any> = quotes.map((element, index)=>{
            return <Quote {...element} key={index} />
        })
        return localQuotes;
    }

    return (
        <div className="quotes d-flex col-12 flex-column">
            {buildQuotes()}
        </div>
    )
}

export default Quotes;