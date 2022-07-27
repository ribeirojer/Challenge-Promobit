import { useNavigate } from "react-router-dom";
import { ImageList, CardList, WrapperList, TitleList, DateList } from "../styles/HomeStyle";

const MyDataTable = ({ data }) => {

    const navigate = useNavigate();

    function formatDate (date) {
        const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
          "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        let index = parseInt(date.slice(5, 7))-1;
        return `${date.slice(8, 10)} ${monthNames[index]} ${date.slice(0, 4)}`;
    }

    return (
    <WrapperList>
        {data.map((film)=>{
            return (
                <CardList onClick={()=>{navigate(`/movie/${film.id}`)}} key={film.id}>
                    <ImageList src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
                    <TitleList>{film.title}</TitleList>
                    <DateList>{formatDate(film.release_date)}</DateList>
                </CardList>
            )
        })}
    </WrapperList>
  )
}

export default MyDataTable;