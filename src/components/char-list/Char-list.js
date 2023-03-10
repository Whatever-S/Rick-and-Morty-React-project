import './char-list.scss'

function CharList({characters}){
   //console.log(characters)
   let content

   if(characters){
    
        content = characters.map(char => {
            const {name,id, species, image} = char
            
            return (
            <div key={id} className="singlecharacter">
                <img src={image} alt='Character image'className="singlecharacter__img"/>
                <div className="singlecharacter__info">
                    <p className="singlecharacter__name">{name}</p>
                    <p className="singlecharacter__specie">{species}</p>
                </div>
            </div>
            )
    })
    
   }
   else{
    content = "There is no character with such name..."
   }
    return (
    <div className='list__container'>
        <div>{content}</div>
    </div>
   )
}

export default CharList