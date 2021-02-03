const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
//console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Один из последних просмотренных фильмов");
const b = prompt("Оценка фильма");
const c = prompt("Один из последних просмотренных фильмов");
const d = prompt("Оценка фильма");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
