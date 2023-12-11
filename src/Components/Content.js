import React from 'react';

function Content() {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion'
  ];

  return (
    <div className='h-8 flex mx-14'>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`ml-${index === 0 ? '0' : '3'} bg-${index === 0 ? 'white' : '[dimgray]'} h-5 rounded-md px-2 mx-2 text-${index === 0 ? 'black' : 'white'} font-medium text-sm`}
          style={{ background: index === 0 ? 'white' : `rgba(105, 105, 105, 0.4)` }}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Content;