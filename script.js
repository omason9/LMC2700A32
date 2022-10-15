let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
    
    changeHaveWatched() {
        console.log("also working");
        if (this.haveWatched == true) {
            this.haveWatched = false;   
        } else {
            this.haveWatched = true;   
        }    
    }    
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies[allMovies.length] = movie;
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    for (i = 0; i < allMovies.length; i = i + 1) {
        console.log(allMovies[i]);
    }
    console.log(allMovies.length);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    for (i = 0; i < allMovies.length; i = i + 1) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i]);
        }
    }
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (i = 0; i < allMovies.length; i = i + 1) {
        if (allMovies[i].title === title) {
            allMovies[i].changeHaveWatched();
            console.log("working");
            console.log(allMovies[i]);
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
