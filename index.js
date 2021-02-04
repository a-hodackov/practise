let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
  }
}
//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов");
    const b = prompt("Оценка фильма");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
//rememberMyFilms();

// const a = prompt("Один из последних просмотренных фильмов");
// const b = prompt("Оценка фильма");
// const c = prompt("Один из последних просмотренных фильмов");
// const d = prompt("Оценка фильма");
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Ошибка");
  }
}
//detectPersonalLevel();
//console.log(personalMovieDB);

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
  console.log(personalMovieDB);
}
writeYourGenres();
