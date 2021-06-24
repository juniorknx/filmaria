import '../Filme/style.css';
import { useParams } from 'react-router';
import api from '../../services/api';
import { useEffect, useState } from 'react';

export function Filme (){

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true); //indica que está carregando enquanto faz o fetch

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    },[id]);

    if(loading){
        return(
            <h1>Carregando..</h1>
        )
    }

    return(
        <div>
            <h1>Movie Detalhes - {id}</h1>
        </div>
    );
}