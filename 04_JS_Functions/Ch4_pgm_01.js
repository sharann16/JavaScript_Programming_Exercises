// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */

// 1) Adding a second movie
var movie2 = {
  title: "The Shawshank Redemption",
  actors: "Tim Robbins, Morgan Freeman",
  directors: "Frank Darabont"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// 2) Creating an object to represent a blog post
var blogPost = {
  title: "How to Start Coding",
  author: "Jane Coder",
  published: "2023-05-15",
  content: "In this post, I'll guide you through the basics of coding and share tips on how to get started."
};

// 3) Displaying info about the blog post
console.log("Blog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.published);
console.log("Content: " + blogPost.content);
console.log("------------------------------");
