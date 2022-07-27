import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Wrapper, WrapperImage, Image, Title, Info, AvaliationWrapper, ScoreWrapper, Score, Subtitle, Sinopse, WrapperCrew, Crew, PersonCrew, ProfissionCrew, Elencotitle, Elencocards, TrailerTitle, WrapperElenco, ImageCast, NameCast, CharacterCast, Iframe, RecomendationsTitle, RecomendationsWrapper, RecomendationsCard, RecomendationsImage, RecomendationsName, RecomendationsDate } from "../styles/MovieStyle";

const Movie = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const url_inicial = `https://api.themoviedb.org/3/movie/${id}`;

  const { data, isLoading, error } = useFetch(`${url_inicial}?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR`);
  const age = useFetch(`${url_inicial}/release_dates?api_key=3d3c8258e81f9a09aee80aaf27e37cf5`);
  const crewAndCasts = useFetch(`${url_inicial}/credits?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR`);
  const video = useFetch(`${url_inicial}/videos?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR`)
  const recomendations = useFetch(`${url_inicial}/recommendations?api_key=3d3c8258e81f9a09aee80aaf27e37cf5&language=pt-BR&page=1`);

  if(isLoading || age.isLoading  || crewAndCasts.isLoading || video.isLoading || recomendations.isLoading ){
    return <p>Carregando...</p>
  }
  if(error || age.error  || crewAndCasts.error || video.error || recomendations.error){
    return <p>Houve um problema...</p>
  }

  const minutos = Math.floor((data.runtime)%60);
  const horas = Math.floor((data.runtime)/60);
  const dia = data.release_date.slice(8, 10);
  const mes = data.release_date.slice(5, 7);
  const ano = data.release_date.slice(0, 4);
  
  const classIndicativa = age.data.map((age)=>{
    if(age.iso_3166_1 === "BR") {
      if (age.release_dates[0].certification==="" || age.release_dates[0].certification==="L"){ return "Livre";}
      else { return `${age.release_dates[0].certification} anos`}
    }
  })

  const genres = data.genres.map((gen)=>{return gen.name}).join(", ");
  const crewAndCast = crewAndCasts.data.crew.slice(0, 5)

  function formatDate (data) {
    const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
      "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    let index = parseInt(data.slice(5, 7))-1;
    return `${data.slice(8, 10)} ${monthNames[index]} ${data.slice(0, 4)}`;
  }
  
  function retornaId(url){//em algum casos não há url e foi preciso dessa correção
    try {
      return url.data[0].key;
    } catch (error) {
      return "";
    }
  }
  
  return (<>
    <Wrapper>
      <WrapperImage>
        <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
      </WrapperImage>
      <div>
        <Title>{data.title}</Title>
        <Info>{classIndicativa} • {dia}/{mes}/{ano} (BR) • {genres} • {horas}h{minutos}m</Info>
        <AvaliationWrapper>
          <ScoreWrapper>
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.0623 3.70727C30.0232 2.05087 31.3372 0.660778 32.9893 0.787229C37.8747 1.16117 42.6105 2.72772 46.7732 5.3692C51.7832 8.54828 55.7379 13.1416 58.1372 18.5682C60.5366 23.9949 61.2729 30.0112 60.2531 35.8563C59.2332 41.7015 56.5029 47.1129 52.4076 51.4063C48.3122 55.6998 43.0356 58.6824 37.2451 59.977C31.4546 61.2716 25.4103 60.82 19.8765 58.6794C14.3426 56.5388 9.56779 52.8053 6.15582 47.951C3.32082 43.9176 1.53251 39.2609 0.928428 34.3986C0.724154 32.7544 2.05068 31.3761 3.70708 31.337C5.36347 31.2979 6.71875 32.6146 6.96406 34.2532C7.51418 37.9277 8.91235 41.4387 11.0646 44.5007C13.7941 48.3842 17.614 51.371 22.0411 53.0835C26.4682 54.7959 31.3036 55.1572 35.936 54.1215C40.5684 53.0858 44.7897 50.6998 48.066 47.265C51.3423 43.8303 53.5265 39.5011 54.3424 34.825C55.1583 30.1489 54.5692 25.3359 52.6497 20.9945C50.7302 16.6532 47.5664 12.9786 43.5585 10.4353C40.3983 8.43001 36.8253 7.19909 33.1289 6.823C31.4806 6.65528 30.1014 5.36366 30.0623 3.70727Z" fill="#14FF00"/></svg>
            <Score>{Math.floor((data.vote_average)*10)}%</Score>
          </ScoreWrapper>
          <p>Avaliação dos<br></br>usuários</p>
        </AvaliationWrapper>
        <Subtitle>Sinopse</Subtitle>
        <Sinopse>{data.overview}</Sinopse>
        <WrapperCrew>
          {crewAndCast.map(element => {
          return (
            <Crew key={element.id}>
              <PersonCrew>{element.name}</PersonCrew>
              <ProfissionCrew>{element.job}</ProfissionCrew>
            </Crew>
          )})}
        </WrapperCrew>
      </div>
    </Wrapper>
    <section>
      <Elencotitle>Elenco original</Elencotitle>
      <WrapperElenco>
        {crewAndCasts.data.cast.map((cast)=>{
          return (<Elencocards key={cast.cast_id}>
            <ImageCast src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="" />
            <NameCast>{cast.name}</NameCast>
            <CharacterCast>{cast.character}</CharacterCast>
          </Elencocards>)})}
      </WrapperElenco>
    </section>
    <section>
      <TrailerTitle>Trailer</TrailerTitle>
      <Iframe width="907" height="510" src={`https://www.youtube.com/embed/${retornaId(video)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    </section>
    <section>
      <RecomendationsTitle>Recomendações</RecomendationsTitle>
      <RecomendationsWrapper>
        {recomendations.data.slice(0, 6).map((rec)=>{
          return (
            <RecomendationsCard onClick={()=>{navigate(`/movie/${rec.id}`)}}>
              <RecomendationsImage src={`https://image.tmdb.org/t/p/original/${rec.poster_path}`} alt=''/>
              <RecomendationsName>{rec.title}</RecomendationsName>
              <RecomendationsDate>{formatDate(rec.release_date)}</RecomendationsDate>
            </RecomendationsCard>
          )
        })}
      </RecomendationsWrapper>
    </section>
    </>
  )
}

export default Movie;