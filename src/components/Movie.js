import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, coverImg, title, genres, summary, year }) => {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        {/* a 태그를 사용하면 페이지가 넘어가는걸 구현할 수 있다. 하지만 
      a 태그를 사용하면 페이지 전체가 새로고침이 된다.
       react를 사용하기 때문에 */}
        {/* 페이지 전체가 다시 실행되는것을 막고 싶다. */}
        {/* <h2>{title}</h2> */}
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        {/* 장르라는 키값에 벨류값이 있는지 확인 */}
        {/* (movie.hasOwnProperty("genres") */}
        {/* 옵셔널 체이닝을 이용하는 방법도 있음 */}
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres?.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Movie 컴포넌트에 오는 props들의 타입 체크
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
