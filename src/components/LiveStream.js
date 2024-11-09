import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveStream = () => {
  const [liveStream, setLiveStream] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const apiKey = 'AIzaSyAm_naLdyacfDDanCSuMvw788t74xJQw0Y'; // Replace with your actual API key
  const channelId = 'NaaAnveshana'; // Replace with your channel ID

  useEffect(() => {
    const fetchLiveStream = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&eventType=live`
        );

        if (response.data.items.length > 0) {
          const videoId = response.data.items[0].id.videoId;
          const videoDetailsResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`
          );
          setLiveStream(videoDetailsResponse.data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching live stream data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchLiveStream();
  }, [apiKey, channelId]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator while fetching
  }

  if (!liveStream) {
    return <div>No live stream available.</div>; // Handle case when no live stream is found
  }

  return (
    <div>
      <h2>{liveStream.snippet.title}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${liveStream.id}`}
        title={liveStream.snippet.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{liveStream.snippet.description}</p>
    </div>
  );
};

export default LiveStream;