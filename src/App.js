import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";

function App() {
  const [data, setData] = useState([]);
  const [finalData, setFinbalData] = useState([]);

  function movieFilter(key) {
    setData(movies);

    let res;
    if (key === "Drama") {
      res = data.filter((val) => val.genre === "Drama");
    } else if (key === "Crime") {
      res = data.filter((val) => val.genre === "Crime");
    } else if (key === "Action") {
      res = data.filter((val) => val.genre === "Action");
    } else if (key === "Fantasy") {
      res = data.filter((val) => val.genre === "Fantasy");
    } else if (key === "Western") {
      res = data.filter((val) => val.genre === "Western");
    } else if (key === "Science Fiction") {
      res = data.filter((val) => val.genre === "Science Fiction");
    } else if (key === "Animation") {
      res = data.filter((val) => val.genre === "Animation");
    } else if (key === "Thriller") {
      res = data.filter((val) => val.genre === "Thriller");
    } else if (key === "War") {
      res = data.filter((val) => val.genre === "War");
    }
    setFinbalData(res);
  }

  useEffect(() => {
    setFinbalData(data);
  }, [data]);
  useEffect(() => {
    setData(movies);
  }, []);

  return (
    <div className="App">
      <h4>Top 15 Movie of All Time</h4>
      <div>
        <p className="filter_text">Filter by Genre</p>
        <div className="filter">
          {genres?.map((val, i) => {
            return (
              <span
                onClick={() => movieFilter(val)}
                className="filter-item"
                key={i}
              >
                {val}
              </span>
            );
          })}
        </div>
      </div>
      <MovieList data={finalData} />
    </div>
  );
}

const genres = [
  "Drama",
  "Crime",
  "Action",
  "Fantasy",
  "Western",
  "Science Fiction",
  "Thriller",
  "War",
  "Animation",
];

const movies = [
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "The Godfather", genre: "Crime", year: 1972 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "12 Angry Men", genre: "Drama", year: 1957 },
  { title: "Schindler", genre: "Drama", year: 1993 },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
  { title: "Forrest Gump", genre: "Drama", year: 1994 },
  { title: "Inception", genre: "Science Fiction", year: 2010 },
  { title: "The Matrix", genre: "Science Fiction", year: 1999 },
  { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
  { title: "Saving Private Ryan", genre: "War", year: 1998 },
  { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
  { title: "Terminator 2: Judgment Day", genre: "Science Fiction", year: 1991 },
  { title: "The Lion King", genre: "Animation", year: 1994 },
];
export default App;
