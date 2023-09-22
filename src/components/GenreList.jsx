import useGenre from "../hooks/useGenre";


const GenreList = () => {
  const { data } = useGenre();

  return <div>
    {data.map((genre)=><li key={genre.id}>{genre.name}</li>)}
  </div>;
};

export default GenreList;
