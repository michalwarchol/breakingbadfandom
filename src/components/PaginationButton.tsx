import React, { CSSProperties } from 'react'

interface Props {
    number: number;
    active: boolean;
    handleClick: () => void;
}

const Styles: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
}

const PaginationButton: React.FC<Props> = ({number, active, handleClick}) => {
    return(
        <div 
            className="paginationbutton d-none d-md-flex" 
            onClick={handleClick} 
            style={active
                    ?Styles
                    :undefined
                }>
            <h3>{number}</h3>
        </div>
    )
}

export default PaginationButton;