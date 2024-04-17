import React, { useState } from 'react';
import {Navigation} from "swiper/modules";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/grid';

function Content({update}) {
  const categories = [
    'All', 'Music', 'Lo-Fi', 'Web Development', 'Computer Science', 'Playlists',
    'Lives', 'Soldering', 'B Praak', 'Electronics', 'Indian pop music',
    'Home improvement', 'Dramedy', 'Physics', 'News', 'Comedy','Fashion','Gaming','Job Interviews','Pranks','Game Shows','Software Engineering'
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
    <div className='contentDiv fixed pt-3 w-[100rem] h-12 my-8 mx-12 bg-black z-40'>
  <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={19}
  navigation
  >
    {categories.map((category,index) => (
      <SwiperSlide key={index} onClick={() => handleClick(category)} className={`${selectedCategory === category ? 'bg-white text-black' : 'bg-[rgb(255,255,255,0.16)] text-white'} rounded-md !px-2.5 !mx-1 !font-medium !text-xs !flex !justify-center !items-center !h-6 hover:bg-[rgb(255,255,255,0.3)] !w-max`}>{category}</SwiperSlide>
    ))}
    
  </Swiper>
   </div>
  );
}

export default Content;