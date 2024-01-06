import React from 'react';

function Content({update}) {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion','Gaming','Job Interviews'
  ];
  function handleClick(category){
    if(category==="All"){
      update("");
    }else{
      update(category);
    }
  }
  return (
    <div className='h-12 w-full flex flex-wrap fixed mx-12 my-8 z-40 bg-black items-center'>
    {categories.map((category, index) => (
      <button key={index} onClick={() => handleClick(category)}>
      <div
        key={index}
        className={`${index === 0 ? 'bg-white text-black' : 'bg-[rgb(255,255,255,0.16)] text-white'} rounded-md px-2.5 mx-1 font-medium text-xs flex justify-center items-center h-6 hover:bg-[rgb(255,255,255,0.3)]`}
      >
        {category}
      </div>
      </button>
    ))}
  </div>
  );
}

export default Content;