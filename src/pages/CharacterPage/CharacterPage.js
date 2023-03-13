import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

import '../CharacterPage/CharacterPage.scss'

const CharacterPage = () =>{
    const {id} = useParams();
    let _apiBase = `https://rickandmortyapi.com/api/character/${id}`;
    let [receivedData, updateReceivedData] = useState([])
    let backPath = ''
    
    const {name, species, image, gender, status, type, origin} = receivedData;

    sessionStorage.getItem('search') ? backPath = `/?name=${sessionStorage.getItem('search')}` : backPath = '/' 

    useEffect(()=>{
        (async function(){
        let data = await fetch(_apiBase).then(res => res.json())
        updateReceivedData(data)
        })();
    },[_apiBase]);



    return(
        <>
        <Link to ={backPath} className="character__link-back">GO BACK</Link>
        <div className="character">
            <img src={image} alt='Character img' className="character__img"/>
            <h1 className="character__name">{name}</h1>
            <div className="character__info">
                <h3>Informations</h3>
                <div className="character__card">
                    <div className="character__card-item">
                        <p className="item__title">Gender</p>
                        <p className="item__info">{gender}</p>
                    </div>
                    <div className="character__card-item">
                        <p className="item__title">Status</p>
                        <p className="item__info">{status}</p>
                    </div>
                    <div className="character__card-item">
                        <p className="item__title">Specie</p>
                        <p className="item__info">{species}</p>
                    </div>
                    <div className="character__card-item">
                        <p className="item__title">Origin</p>
                        <p className="item__info">{origin?.name}</p>
                    </div>
                    <div className="character__card-item">
                        <p className="item__title">Type</p>
                        <p className="item__info">{type ? type :"Unknown"}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CharacterPage