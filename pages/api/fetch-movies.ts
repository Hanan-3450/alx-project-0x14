// pages/api/fetch-movies.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resp = await fetch("https://moviesdatabase.p.rapidapi.com/titles", {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.MOVIE_API_KEY as string,
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    });

    // Debug logs (remove in production)
    console.log("API Key loaded:", !!process.env.MOVIE_API_KEY);
    console.log("Response status:", resp.status);

    if (!resp.ok) {
      throw new Error(
        `Failed to fetch movies: ${resp.status} ${resp.statusText}`
      );
    }

    const moviesResponse = await resp.json();
    const movies = moviesResponse.results || [];

    res.status(200).json({ movies });
  } catch (error: any) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: error.message });
  }
}
