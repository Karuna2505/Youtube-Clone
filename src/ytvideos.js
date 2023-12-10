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


      <div className='flex flex-wrap gap-8 '>
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
               <h1 className='text-white'>{video.snippet.title}</h1>
               <h5 className='text-white'>-{video.snippet.channelTitle}</h5>
            </div>
          </div>
          ))}
        </div>


        </div>
      );
    };
    
    export default YouTubeDataFetcher;