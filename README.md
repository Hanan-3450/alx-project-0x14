# MoviesDatabase API Documentation Summary

## API Overview

The MoviesDatabase API provides access to extensive information about movies, TV shows, and actors. It allows you to search for titles, retrieve actor details, explore genres, get YouTube trailer links, and access additional metadata such as awards and biographies. This makes it a powerful tool for building applications around movie discovery and entertainment content.

## Version

Not specified in the documentation.

## Available Endpoints

- **/titles**: Retrieve information about movies and TV shows. Supports filters such as year, genre, and title type.
- **/actors**: Fetch detailed information about actors, including biographies, awards, and filmography.
- **/search**: Search for movies, TV shows, or people using keywords.
- **/utils**: Utility endpoints that provide supporting data such as trailers, posters, or related media.

## Request and Response Format

A typical request includes query parameters and authentication headers.

**Request Example:**

```http
GET https://moviesdatabase.p.rapidapi.com/titles?year=2020&genre=Action
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```
