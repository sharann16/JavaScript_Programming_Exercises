// Using a function to display object properties

var movie; // Step 2: Declare a movie variable

var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title); // Step 1: Added call to movie.title
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Step 4: Add title, actors, and directors properties to the movie object
movie = { 
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

// Step 1: Call to showMovieInfo function
showMovieInfo();

// Steps 3 & 4: Exploring different scenarios with movie object

// 3) Create an empty object and assign it to movie variable
movie = {};

// 4) Add title, actors, and directors properties to the movie object
movie.title = "The Matrix";
movie.actors = "Keanu Reeves, Laurence Fishburne";
movie.directors = "The Wachowskis";

// Call showMovieInfo again
showMovieInfo();
