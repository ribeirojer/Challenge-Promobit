import useFetch from "../hooks/useFetch"
import { Wrapper, Home, H1, BR, SPAN, Paragraph, WrapperButton, Button, SpanButton } from "../styles/HomeStyle"

const Header = ({ filter, setFilter }) => {
    
    const url_buttons = "https://api.themoviedb.org/3/genre/movie/list?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR"
    const { data, isLoading, error } = useFetch(url_buttons);

    if(isLoading){
        return <p>Carregando...</p>
    }
    if(error){
        return <p>Houve um problema...</p>
    }

    const { genres } = data;

    function handleFilterFilms (genero, name) {
        const button = document.getElementById(name);
        const span = document.getElementById(name+"span");
        const paginacao = document.getElementById("buttons");
        paginacao.setAttribute("Style", "display: none;");

        if(span.hasAttribute("Style")) {
            removeFilter(genero)
            sessionStorage.removeItem(name);
            button.removeAttribute("Style");
            span.removeAttribute("Style");

        } else {
            setFilter([...filter, genero]);
            sessionStorage.setItem(name, name);
            button.setAttribute("Style","background-color: #D18000; color: #fff;");
            span.setAttribute("Style","display: flex");
        }
    }

    function removeFilter(genero) {
        const ap = filter.filter((element)=> {return element !== genero;})
        setFilter(ap);
    
        if(filter.length===1){
          const paginacao = document.getElementById("buttons");
          paginacao.setAttribute("Style", "display: block;");
          setFilter([0]);
        }
    }

    return (
        <Wrapper>
            <Home>
                <H1>Milhões de filmes, séries e pessoas<BR></BR><SPAN> para descobrir. Explore já.</SPAN></H1>
                <Paragraph>FILTRE POR:</Paragraph>
                <WrapperButton>
                    {genres.map((gen) => {
                        return (
                            <Button id={gen.name} onClick={()=>{handleFilterFilms(gen.id, gen.name)}} key={gen.id}>{gen.name}
                                <SpanButton id={`${gen.name}span`}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.99996 0.666672C4.39163 0.666672 0.666626 4.39167 0.666626 9.00001C0.666626 13.6083 4.39163 17.3333 8.99996 17.3333C13.6083 17.3333 17.3333 13.6083 17.3333 9.00001C17.3333 4.39167 13.6083 0.666672 8.99996 0.666672ZM13.1666 11.9917L11.9916 13.1667L8.99996 10.175L6.00829 13.1667L4.83329 11.9917L7.82496 9L4.83329 6.00834L6.00829 4.83334L8.99996 7.825L11.9916 4.83334L13.1666 6.00834L10.175 9L13.1666 11.9917Z" fill="white"/></svg>
                                </SpanButton>
                            </Button>
                        )
                    })}
                </WrapperButton>
            </Home>
        </Wrapper>
    )
}

export default Header;