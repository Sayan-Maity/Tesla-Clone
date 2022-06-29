import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Section
          title="Model S"
          description=" Order Online for Touchless delivery"
          backgroundImage="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description=" Order Online for Touchless delivery"
          backgroundImage="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description=" Order Online for Touchless delivery"
          backgroundImage="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description=" Order Online for Touchless delivery"
          backgroundImage="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description=" Money back guarantee"
          backgroundImage="solar-panel.jpg"
          leftBtnText=" Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solar for New Roofs"
          description=" Solar Roof costs less than a Roof Plus Panels"
          backgroundImage="solar-roof.jpg"
          leftBtnText=" Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title=" Accessories"
          description=" "
          backgroundImage="accessories.jpg"
          leftBtnText=" Shop Now"
        />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
