import React from 'react'

interface Props {
    author: string;
    quote: string;
    quote_id: number;
    series: string;
}

const Quote: React.FC<Props> = ({author, quote}) => {
    return(
        <div className="quote col-12">
            <div className="content">
                <h5>
                    "{quote}"
                </h5>
            </div>
            <div className="author">
                <h3>
                    {author}
                </h3>
            </div>
        </div>
    )
}

export default Quote;