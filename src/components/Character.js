import React from 'react';
import styled from 'styled-components'
import './character.css'


// main Div - holds all the cards
const CardStyleContainer = styled.main`
    background-color: ${pr => pr.theme.secondaryColor};
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`  
const CardContainer = styled.div`
    max-width: 1150px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
` 

const CardStyle = styled.div`
 border: 1px solid ${pr => pr.theme.primaryColor};
 flex-basis: 30%;
 margin: 10px;
 text-align: center;
 transition: all 300ms ease-in-out;
 
    img{
        border-radius: 20%;
    }

    &:hover{
        box-shadow: 0 0 20px 3px ${pr => pr.theme.primaryColor};
    }
` 






export default function Character(props){
    return (
        <CardStyleContainer>
            <CardContainer>
                <CardBuilder characters={props.characters} />
            </CardContainer>
        </CardStyleContainer>
    )
}


function CardBuilder(props){
    const characters = props.characters;
    return(
        <>
        
            {characters.map((result, index) =>( 
                <>
                    <CardStyle>
                        <h6 className={result.status === 'Alive' ? 'alive' : 'dead'}>Status: {result.status}</h6>
                        <img src={result.image} alt={result.name} />
                        <h2 key={index}> {result.name}</h2>
                        <p>Gender: {result.gender}</p>
                        <p>Species: {result.species}</p>
                        <p className="lastP">Origin: {result.location.name}</p>
                    </CardStyle>
                </>     
            ))}
        </>
    )
}























// <div>
// <img src={mainCharacterImage} alt={mainCharacter} />
// <h2>{mainCharacter}</h2>
// <p>Status: {mainCharacterStatus}</p>
// <p>Species: {mainCharacterSpecies}</p>
// <p>Type: {mainCharacterType}</p>
// </div>


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