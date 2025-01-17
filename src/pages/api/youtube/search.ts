import type { NextApiRequest, NextApiResponse } from "next";
import yts from "yt-search";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res
      .status(400)
      .json({ error: "Query parameter is required and must be a string." });
  }

  try {
    const searchResults = await yts(query);
    const { videos } = searchResults;

    const results = videos.map((video) => ({
      title: video.title,
      url: video.url,
      thumbnail: video.thumbnail,
      description: video.description,
    }));

    return res.status(200).json({ results });
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return res
      .status(500)
      .json({ error: "Error fetching YouTube results. Please try again." });
  }
}
