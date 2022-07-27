import { useState } from "react";
import MyDataTable from "./MyDataTable";
import { ButtonList, ButtonListWrapper } from "../styles/HomeStyle";
import useFetch from "../hooks/useFetch"

const Pagination = ({ data_inicial, filtro, setFiltro, setFilter }) => {
    
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR&page=";
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(24)
    const [index, setIndex] = useState(1)
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useFetch(`${url}${page}`);
    const dados = useFetch(`${url}${page+1}`);

    if(filtro===true){
        data_inicial = [...data, ...dados.data];
    }

    if(isLoading || dados.isLoading){
        return <p>Carregando...</p>
    }
    if(error || dados.error){
        return <p>Houve um problema...</p>
    }

    function handleShowPage(number) {
        setFiltro(true);
        const inicial = (number-1)*24;//calcula qual página será preciso fazer a requisição
        const range = Math.floor((inicial/20) + 1);
        setStartIndex(inicial%20);
        setEndIndex((inicial%20)+24);
        setIndex(number);
        setFilter([0]);
        setPage(range);
    }

    function handleShowLastPage(number) {
        const inicial = (number-1)*24;//calcula qual página será preciso fazer a requisição
        setPage(number);
        setStartIndex(inicial%20);
        setEndIndex((inicial%20)+24);
        setIndex(number);
    }
  
    return (
        <>
            <MyDataTable data={data_inicial.slice(startIndex, endIndex)} />
            <div id="buttons">
                <ButtonListWrapper>
                    {/*index>3 && <ButtonList onClick={()=>{handleShowPage(1)}}>Primeira</ButtonList>*/}
                    {index>2 && <ButtonList onClick={()=>{handleShowPage(index-2)}}>{index-2}</ButtonList>}
                    {index>1 && <ButtonList onClick={()=>{handleShowPage(index-1)}}>{index-1}</ButtonList>}
                    <ButtonList onClick={()=>{handleShowPage(index)}} disabled={!startIndex}>{index}</ButtonList>
                    {index<416 && <ButtonList onClick={()=>{handleShowPage(index+1)}}>{index+1}</ButtonList>}
                    {index<415 && <ButtonList onClick={()=>{handleShowPage(index+2)}}>{index+2}</ButtonList>}
                    {index<3 && <ButtonList onClick={()=>{handleShowPage(index+3)}}>{index+3}</ButtonList>}
                    {index<2 && <ButtonList onClick={()=>{handleShowPage(index+4)}}>{index+4}</ButtonList>}
                    {index<415 && <ButtonList onClick={()=>{handleShowPage(index+1)}}>&gt;</ButtonList>}
                    {index<414 && <ButtonList onClick={()=>{handleShowLastPage(416)}}>Última</ButtonList>}
                </ButtonListWrapper>
            </div>
        </>
    );
}

export default Pagination;