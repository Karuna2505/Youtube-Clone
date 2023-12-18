import React from "react";
import styled from 'styled-components';
import home from "../Assets/home.png";
import subscribe from "../Assets/subscribe.png";
import video from "../Assets/video.png";
import shorts from "../Assets/shorts.png";

const StyledDiv=styled.div`
  height:73px;
  width:55px;
  border-radius:10%;
  padding:14px 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &:hover{
    background-color:rgb(255,255,255,0.2);
  }

  img {
    height: 16px;
    width: 16px;
  }

  span {
    font-size: 0.6rem; 
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
    <div className="text-white w-16 flex flex-col items-center px-2">
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
