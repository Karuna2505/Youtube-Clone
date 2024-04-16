import React from "react";
import styled from 'styled-components';
import home from "../Assets/home.png";
import subscribe from "../Assets/subscribe.png";
import video from "../Assets/video.png";
import shorts from "../Assets/shorts.png";

const StyledDiv=styled.div`
  height:60px;
  width:53px;
  border-radius:10%;
  padding-top:0.5rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &:hover{
    background-color:rgb(255,255,255,0.2);
  }

  img {
    height: 1rem;
    width: 1rem;
  }

  span {
    font-size: 0.5rem; 
    font-weight: normal;
    padding:.3rem;
  }
`

function MiniGuide() {
  const items = [
    { image: home, alt: 'Home', label: 'Home' },
    { image: shorts, alt: 'Subscribe', label: 'Shorts' },
    { image: subscribe, alt: 'Subscribe', label: 'Subscriptions' },
    { image: video, alt: 'Video', label: 'You' },
  ];
  return (
    <div className="text-white w-14 flex flex-col items-center px-2 fixed mt-[3rem] cursor-pointer">
       {items.map((item, index) => (
        <StyledDiv key={index}>
          <img src={item.image} alt={item.alt} />
          <span>{item.label}</span>
        </StyledDiv>
      ))}
    </div>
  );
}

export default MiniGuide;
