import React, { useState } from 'react';

function Content({update}) {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion','Gaming','Job Interviews'
  ];
  const [selectedCategory,setSelectedCategory]=useState("All");
  function handleClick(category){
    if (category === selectedCategory) {
      update('');
      setSelectedCategory('');
    } else {
      update(category);
      setSelectedCategory(category);
    }
  }
  return (
    <div className='h-12 w-full flex flex-wrap fixed mx-12 my-8 z-40 bg-black items-center'>
    {categories.map((category, index) => (
      <button key={index} onClick={() => handleClick(category)}>
      <div
        key={index}
        className={`${selectedCategory === category ? 'bg-white text-black' : 'bg-[rgb(255,255,255,0.16)] text-white'} rounded-md px-2.5 mx-1 font-medium text-xs flex justify-center items-center h-6 hover:bg-[rgb(255,255,255,0.3)]`}
      >
        {category}
      </div>
      </button>
    ))}
  </div>
  );
}

export default Content;