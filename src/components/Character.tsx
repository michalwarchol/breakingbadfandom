import React from 'react'

interface Props {
    appearance?: string[];
    better_call_saul_appearance?: Array<number>;
    birthday?: string;
    category?: string;
    char_id?: number;
    img?: string;
    name?: string;
    nickname?: string;
    occupation?: Array<string>;
    portrated?: string;
    status?: string;
}

const Character: React.FC<Props> = ({name, nickname, birthday, occupation, status, img}) => {
    return(
        <div className="character d-flex col-12 col-sm-10 col-md-6 col-lg-3 flex-column">
            <div className="photo">
                <img src={img} alt="not found" />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="info">
                <h4>nickname: {nickname}</h4>
                <h4>birthday: {birthday}</h4>
                <h4>occupation: {occupation?.join(", ")}</h4>
                <h4>status: {status}</h4>
            </div>
        </div>
    )
}

export default Character