'use strict';


let numberOfFilms;
let favoriteGenre;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a !== '' && b !== "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done')
        } else {
            console.log('Error')
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    personalMovieDB.count === 0 || '' ? alert("Произошла ошибка") :
        personalMovieDB.count <= 10 ? alert("Просмотрено довольно мало фильмов") :
            personalMovieDB.count > 10 && personalMovieDB.count <= 30 ? alert("Вы классический зритель") :
                personalMovieDB.count > 30 ? alert("Вы киноман") : alert("Произошла ошибка")

}
// detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres(g) {
    for (let i = 1; i <= 3; i++) {
        g[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres(personalMovieDB.genres)


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания