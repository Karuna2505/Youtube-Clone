import React, { useState } from 'react';
import {Navigation} from "swiper/modules";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Content({update}) {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion','Gaming','Job Interviews','Pranks'
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
  <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={19}
  navigation
  className='!fixed !pt-3 h-12 !my-8 !mx-12 !w-full z-40 bg-black items-center'
  >
    {categories.map((category,index) => (
      <SwiperSlide key={index} onClick={() => handleClick(category)} className={`${selectedCategory === category ? 'bg-white text-black' : 'bg-[rgb(255,255,255,0.16)] text-white'} rounded-md !px-2.5 !mx-1 !font-medium !text-xs !flex !justify-center !items-center !h-6 hover:bg-[rgb(255,255,255,0.3)] !w-max`}>{category}</SwiperSlide>
    ))}
    
  </Swiper>
  );
}

export default Content;