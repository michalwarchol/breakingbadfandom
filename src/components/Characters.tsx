import React, {useState, useEffect} from 'react'
import Character from './Character'
import PaginationButton from './PaginationButton'
import PaginationTextButton from './PaginationTextButton'
import CharacterEmpty from './CharacterEmpty'

const Characters: React.FC = () => {
    const [condition, setCondition] = useState<number>(1);
    const [characters, setCharacters] = useState<Array<any>>([])

    useEffect(()=>{
        fetch("https://www.breakingbadapi.com/api/characters")
            .then(response=>response.json())
            .then(res=>{
                let objects = res.map((element, index) => {
                    return (<Character {...element} key={index} />)
                });
                setCharacters(objects)
            })
    }, [])

    const buildEmptySlots = () => {
        let slots: Array<any> = [];
        for(let i=0; i<12; i++){
            slots.push(<CharacterEmpty key={i} />);
        }
        return slots
    }

    const buildCharacters = () => {
        let localCharacters = characters.filter(element=>condition*12>=element.props.char_id && (condition-1)*12<element.props.char_id)
        return localCharacters
    }

    const buildPagination = () => {
        let buttons_amount = Math.floor(characters.length/12);
        let buttons: Array<any> = [];
        for(let i = 1; i<=buttons_amount; i++){
            buttons.push(<PaginationButton number={i} active={condition===i} handleClick={()=>setCondition(i)} key={i} />);
        }
        return buttons
    }

    const switchPagination = (type) => {
        switch(type){
            case 0: 
                if(condition>1){
                    setCondition(condition-1)
                }
                break;
            case 1:
                if(condition<Math.floor(characters.length/12)){
                    setCondition(condition+1)
                }
            break;
        }
    }

    return(
        <div className="characters">
            <div className="content d-flex justify-content-center flex-row flex-wrap">
                {characters.length!==0 ? buildCharacters() : buildEmptySlots()}
            </div>
            <div className="pagination d-flex flex-row justify-content-center">
                <PaginationTextButton text="Previous"  handleClick={()=>switchPagination(0)} />
                {buildPagination()}
                <PaginationTextButton text="Next"  handleClick={()=>switchPagination(1)} />
            </div>
        </div>
    )
}

export default Characters