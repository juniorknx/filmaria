import '../Home/style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import ballsLoad from '../../components/animations/ballsLoad.json'

export function Home (){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

    async function loadFilmes(){
        const response = await api.get('r-api/?api=filmes')
        setFilmes(response.data)
        setLoading(false)
    }   
    
    loadFilmes();

    },[]);

    //exibe uma animação enquanto faz o fetch na api

    if(loading){ 
        return(
            <Lottie
            options={{
            animationData: ballsLoad,
            autoplay: true,
            loop: true,
            }}
            height={400}
            width={400}
        />
        )
    }

    return (
        <section id="movies">
            <div className="movie-items">
                {filmes.map((filme)=>{
                    return (
                        <div className="moviecard" key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <img src={filme.foto} alt={filme.nome} />
                            <p>{filme.sinopse}</p>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}