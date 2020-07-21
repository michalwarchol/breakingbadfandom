import React from 'react'

interface Props {
    text: string;
    handleClick: () => void;
}

const PaginationTextButton: React.FC<Props> = ({text, handleClick}) => {
    return(
        <div className={"paginationtextbutton"} onClick={handleClick}>
            <h3>{text}</h3>
        </div>
    )
}

export default PaginationTextButton