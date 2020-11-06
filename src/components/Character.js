import React,{useState} from 'react';

export default function Character(props){
    const characters = props.characters;

    const [mainCharacter , setMainCharacter] = useState({})

    

    return (
        <div>
            test
            <CardBuilder characters={characters} />
        </div>
    )
}


function CardBuilder(props){



    return(
        <div>
            poo
        </div>
    )
}