import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
    text-align: center;
    font-family: sans-serif;
    font-size: 1.2em;
    margin-bottom: 15px;

  @media (max-width: 768px) {
    text-align: center;
    font-family: sans-serif;
    h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    }
  }
`;

export default class About extends React.Component {

  render() {
    return (
      <AboutDiv>
        <h1>Finest Matcha Around The World</h1>
        <p>Yixing bamboo whisk lemongrass infuser jasmine infusion fermentation mug iced lemongrass shoumei energy herbal. Antioxidant oolong shincha tea kettle green teacup latte oolong rize oolong infuser.
        </p>
      </AboutDiv>
    );
  }

}
