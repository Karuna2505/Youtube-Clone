import React from 'react';

function Content() {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion'
  ];

  return (
    <div className='h-8 flex flex-wrap'>
    {categories.map((category, index) => (
      <div
        key={index}
        className={`ml-${index === 0 ? '0' : '3'} ${index === 0 ? 'bg-white text-black' : 'bg-[rgb(255,255,255,0.16)] text-white'} h-5 rounded-md px-2 mx-2 font-medium text-sm my-1 flex-wrap`}
      >
        {category}
      </div>
    ))}
  </div>
  
  );
}

export default Content;