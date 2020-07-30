import React from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
  img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
`;

export default class HomePage extends React.Component {

  render() {
    return (
      <Carousel>
        <img src="./images/matcha.png" alt=""/>
      </Carousel>
    );
  }
}
