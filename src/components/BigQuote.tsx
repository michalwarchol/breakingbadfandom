import React from 'react'

interface Props {
    author: string;
    content: string;
}

const BigQuote: React.FC<Props> = ({ author, content }) => {
    return (
        <div className="bigquote d-flex col-12 justify-content-center">
            <div className="d-flex col-12 col-md-6 flex-column">
                <div className="bigquote_content">
                    <cite>{content}</cite>
                </div>
                <div className="bigquote_author d-flex justify-content-end">
                    <h5>{author}</h5>
                </div>
            </div>
        </div>
    )
}

export default BigQuote;