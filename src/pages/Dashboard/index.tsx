import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import people from "../../assets/people.jpg";
import planets from "../../assets/planets.jpg";

import navs from "../../assets/navs.jpg";

import { Container, Header, HeaderContent, Cards } from "./styles";
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Vader" />
          <h1>Star-wars Universe</h1>
        </HeaderContent>
      </Header>
      <h1>Dashboard</h1>
      <h1>Em uma galáxia muito distante </h1>
      <span>Foi desenvolvido este front-end</span>
      <Cards>
        <Link to="/People">
          <div>
            <span>Pessoas</span>
            <img src={people} alt="Pessoas" />
          </div>
        </Link>
        <Link to="/planets">
          <div>
            <span>Planetas</span>
            <img src={planets} alt="Planetas" />
          </div>
        </Link>
        <Link to="/starship">
          <div>
            <span>Naves</span>
            <img src={navs} alt="Naves" />
          </div>
        </Link>
      </Cards>
    </Container>
  );
};

export default Dashboard;
