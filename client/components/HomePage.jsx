import React from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
  img {
  width: 375px;
  height: 400px;
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
