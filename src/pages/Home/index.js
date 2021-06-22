import '../Home/style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Home (){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

    async function loadFilmes(){
        const response = await api.get('r-api/?api=filmes')
        setFilmes(response.data)
    }   
    
    loadFilmes();

    },[]);

    return (
        <section id="movies">
            <div className="movie-items">
                {filmes.map((filme)=>{
                    return (
                        <div className="moviecard" key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <img src={filme.foto} alt={filme.nome} />
                            <p>{filme.sinopse}</p>
                            <Link to="/">Acessar</Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}