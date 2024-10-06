require("dotenv").config();

export const fetchVideos = async ({ pageParam = "" }) => {
  const urlToFetch = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=programming&key=${process.env.API_KEY}&pageToken=${pageParam}`;
  const response = await fetch(urlToFetch);
  if (!response.ok) throw new Error("Failed to fetch videos");
  return await response.json();
};
