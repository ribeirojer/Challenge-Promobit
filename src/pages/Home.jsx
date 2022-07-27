import { useState } from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import useFetch from "../hooks/useFetch"

function Home() {

  const [filtro, setFiltro] = useState(false);//filtro desabilita os filtro ao ser realizado a paginação
  const [filter, setFilter] = useState([0]);//filter é um array que armazena os generos
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR&page=";
  let apoio = [];

  const { data, isLoading, error } = useFetch(`${url}1`);
  const dados = useFetch(`${url}2`);
  
  if(isLoading || dados.isLoading){
    return <p>Carregando...</p>
  }
  if(error || dados.error){
    return <p>Houve um problema...</p>
  }

  let films = [...data, ...dados.data];

  films.map((film)=>{
    if(filter[0]===0){// carrega a primeira página
      apoio.push(film);
    } else {
      filter.map((genero)=>{//aqui que realiza o filtro pelo genero
        if(film.genre_ids.includes(genero)) {
          apoio.push(film);
        }
      });
    }
  });

  apoio = apoio.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))//essa função remove filmes duplicados

  if(filter[0]===0) {//remove o apoio para o carregamento inicial
    filter.shift();
  }

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} setFiltro={setFiltro} />
      <Pagination data_inicial={apoio} setFilter={setFilter} filtro={filtro} setFiltro={setFiltro} />
    </div>
  )
}

export default Home;
