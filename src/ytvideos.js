import React, { useEffect, useState } from 'react';
const API_KEY = 'AIzaSyCnZuxN3xcaCWwr-f0m8Z24mD5XpUU3xFs'; 

const YouTubeDataFetcher = ({update,query}) => {
      const [videos, setVideos] = useState([]);
     
      useEffect(() => {
        const fetchYouTubeData = async () => {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&maxResults=50`
            );
            const data = await response.json();
            setVideos(data.items);
          } catch (error) {
            console.log('An error occurred:', error);
          }
        };
    
        fetchYouTubeData();
      }, [query]);
    
      return (
        <div className='flex-col'>

      <div className='flex flex-wrap gap-8 m-4'>
          {videos.map((video) => (
            <div key={video.id.videoId} className='h-72 w-60'>
              <iframe
                width="250"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            <div>
               <span className='text-white text-base'>{video.snippet.title}</span>
               <br />
               <span className='text-white opacity-70 text-base'>{video.snippet.channelTitle}</span>
            </div>
          </div>
          ))}
        </div>


        </div>
      );
    };
    
    export default YouTubeDataFetcher;