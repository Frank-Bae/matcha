import React from 'react';
// import styled from 'styled-components';
import About from './About';
import Carousel from './Carousel';

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Carousel />
        <About />
      </div>
    );
  }
}
