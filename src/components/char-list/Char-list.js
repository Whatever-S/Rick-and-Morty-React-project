import { Link } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import './char-list.scss';

function CharList({characters}){
    let content,
        counter = 0;
    //let [list, sortList] = useState(characters)
    
   if(characters){
        content = characters.map(char => {
            while(counter < 8) {
            const {name,id, species, image} = char
            counter++;

            return (
            <Link to = {`/${id}`} style={{textDecoration: 'none'}} key={id} className="singlecharacter">
                <img src={image} alt='Character img' className="singlecharacter__img"/>
                <div className="singlecharacter__info">
                    <p className="singlecharacter__name">{name}</p>
                    <p className="singlecharacter__specie">{species}</p>
                </div>
            </Link>
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