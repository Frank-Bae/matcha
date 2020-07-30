import React from 'react';
import styled from 'styled-components';

const CarouselDiv = styled.div`
  img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
`;

export default class Carousel extends React.Component {

  render() {
    return (
      <CarouselDiv>
        <img src="./images/matcha.png" alt="" />
      </CarouselDiv>
    );
  }
}
