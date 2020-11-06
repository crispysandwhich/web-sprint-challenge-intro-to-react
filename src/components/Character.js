import React from 'react';
import styled from 'styled-components'



const CardStyle = styled.div`
    display: flex;
    
` 






export default function Character(props){
    const characters = props.characters;

    return (
        <div>
            <CardBuilder characters={characters} />
        </div>
    )
}


function CardBuilder(props){
    const characters = props.characters;
    // const [mainCharacterImage , setMainCharacterImage] = useState('image url')
    // let [mainCharacter , setMainCharacter] = useState([])
    // const [mainCharacterStatus , setMainCharacterStatus] = useState('dead')
    // const [mainCharacterSpecies , setMainCharacterSpecies] = useState('human')
    // const [mainCharacterType , setMainCharacterType] = useState('paracite')

    // console.log(characters.length)

    // useEffect(() => {
    //     for(let i in characters){
    //         console.log(i)
    //         console.log(characters[i].name)
    //         console.log(characters[i].image)
    //         setMainCharacterImage(characters[i].image)
    //         setMainCharacter(characters[i].name)
    //         setMainCharacterStatus(characters[i].status)
    //         setMainCharacterSpecies(characters[i].species)
    //         setMainCharacterType(characters[i].type)
            
    //       }

    // },[characters])


  
    return(
        <div className='card'>
        
            {characters.map((result, index) =>( 
                <>
                    <img src={result.image} alt={result.name} />
                    <h2 key={index}> {result.name}</h2>
                </>     
            ))}
        </div>
    )
}


// <div>
// <img src={mainCharacterImage} alt={mainCharacter} />
// <h2>{mainCharacter}</h2>
// <p>Status: {mainCharacterStatus}</p>
// <p>Species: {mainCharacterSpecies}</p>
// <p>Type: {mainCharacterType}</p>
// </div>