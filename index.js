const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
//console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

// const a = prompt("Один из последних просмотренных фильмов");
// const b = prompt("Оценка фильма");
// const c = prompt("Один из последних просмотренных фильмов");
// const d = prompt("Оценка фильма");
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов");
  const b = prompt("Оценка фильма");
  if (a != null && b != null && a != "" && b != "" && a.length != 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else alert("Ошибка");
//console.log(personalMovieDB);
