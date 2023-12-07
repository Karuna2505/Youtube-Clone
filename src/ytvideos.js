import React, { useEffect, useState } from 'react';
const API_KEY = 'AIzaSyCnZuxN3xcaCWwr-f0m8Z24mD5XpUU3xFs'; 

const YouTubeDataFetcher = () => {
      const [videos, setVideos] = useState([]);

      const [value,setvalue]=useState("");
      const [query,setquery]=useState("");

      function handleChange(event){
        setvalue(event.target.value);
      }

      function handleclick(){
          setquery(value);
      }

      function handlekey(event){
        console.log(event.key);
          if(event.key === "Enter"){
            handleclick();
          }
      }
      
      useEffect(() => {
        const fetchYouTubeData = async () => {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&maxResults=20`
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
        <div className='flex flex-wrap gap-8'>
        <div>
     <input
        type="text"
        placeholder="Search..."
        className=" rounded-l-full"
        onChange={handleChange}
        onKeyDown={handlekey}
      />
      <button
        type="button"
        className=" text-white rounded-r-full"
        onClick={handleclick}
        onKeyDown={handlekey}
      >
        Search
      </button>
      </div>
          {videos.map((video) => (
            <div className='flex flex-col'>
            <div key={video.id.videoId}>
              <iframe
                width="350"
                height="250"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div>
               <h1 className='text-white w-96'>{video.snippet.title}</h1>
               <h5 className='text-white w-96'>-{video.snippet.channelTitle}</h5>
            </div>
          </div>
            
          ))}
        </div>
      );
    };
    
    export default YouTubeDataFetcher;