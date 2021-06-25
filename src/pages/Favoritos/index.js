import { useEffect, useState } from 'react';
import '../Favoritos/style.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Favorites(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
      const minhaLista = localStorage.getItem('filmes');
      setFilmes(JSON.parse(minhaLista) || []);  

    }, []);

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme excluido com sucesso!')
    }

    return(
        <div className="favorite-items">
            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme na lista de favoritos :(</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <div>
                        <li key={item.id}>
                            <h2>{item.nome}</h2>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={ () => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}