import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, erro, isLoading } = useGenre();

  return <div>
    {genres.map((genre)=><li key={genre.id}>{genre.name}</li>)}
  </div>;
};

export default GenreList;
