import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    setLoading(false);
    // medium_cover_image
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <Link to={`${process.env.PUBLIC_URL}/`}>전으로 가기</Link>
          </div>

          <img src={movie.data.movie.medium_cover_image} alt="movie_img" />
          <h1>{movie.data.movie.title}</h1>
          <ul>
            {movie.data.movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{movie.data.movie.description_full}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
