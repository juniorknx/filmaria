import '../Filme/style.css';
import { useParams, useHistory } from 'react-router';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import ballsLoad from '../../components/animations/ballsLoad.json';
import { toast } from 'react-toastify';

export function Filme (){

    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true); //indica que está carregando enquanto faz o fetch

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            if(response.data.length === 0){  //caso usuário digite uma url inválida, é redirecionado para home
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    },[id, history]);

    //Adiciona itens no local storage

    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        
        //Verifica se existe algum filme salvo com o mesmo ID
        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error('você ja possui esse filme na sua lista de favoritos.')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!')

    }


    // Adiciona animação lottie enquanto faz o fetch

    if(loading){
        return(
            <Lottie options={{
                animationData:ballsLoad,
                autoplay:true,
                loop:true,
            }}
            width={500}
            height={500}
            />
        )
    }

    return(
        <div className="movie-details">
            <div className="movie-info">
                <h1>{filme.nome}</h1>
                <img src={filme.foto} alt={filme.nome}/>
                <h2>Sinopse</h2>
                <p>{filme.sinopse}</p>
                <div>
                    <button onClick={salvaFilme}>Salvar</button>
                    <button>
                        <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="__blank">Trailer</a>
                    </button>
                </div>
            </div>
        </div>
    );
}