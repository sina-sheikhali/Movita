"use strict";

/**
 * Add event on multiple elements
 */

const addEventOnElements = (elements, eventType, callback) => {
  for (const elem of elements) elem.addEventListener(eventType, callback);
};

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

// In mobile
addEventOnElements(searchTogglers, "click", () => {
  searchBox.classList.toggle("active");
});

/**
 * Set movieId in 'localStorage'
 *  when you click any movie card
 */

const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
};

const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
