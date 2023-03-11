import './char-list.scss'

function CharList({characters}){
   //console.log(characters)
    let content,
        counter = 0

   if(characters){
        content = characters.map(char => {
            console.log(char)
            while(counter < 8) {
            const {name,id, species, image} = char
            counter++;

            return (
            <div key={id} className="singlecharacter">
                <img src={image} alt='Character img' className="singlecharacter__img"/>
                <div className="singlecharacter__info">
                    <p className="singlecharacter__name">{name}</p>
                    <p className="singlecharacter__specie">{species}</p>
                </div>
            </div>
            )}
    })

   }
   else{
    content = "There is no character with such name..."
   }
    return (
    <div className='list__wrapper'>
        {content}
    </div>
   )
}

export default CharList