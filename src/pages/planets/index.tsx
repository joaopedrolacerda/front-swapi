import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Link, RouteComponentProps, match } from "react-router-dom";
import { Container, Header, HeaderContent, ListPeople } from "./styles";
import { FiArrowDownLeft, FiGlobe } from "react-icons/fi";

interface Planet {
  name: string;
}

const Planet: React.FC = (_) => {
  const [peoples, setPeoples] = useState<Planet[]>([]);

  useEffect(() => {
    api.get("planets").then(
      (response) => {
        setPeoples(response.data.results);
      },
      (err) => {}
    );
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/">
            <FiArrowDownLeft />
          </Link>
          <h1>Listagem de planetas</h1>
        </HeaderContent>
      </Header>

      <ListPeople>
        {peoples.map((planet) => (
          <Link key={planet.name} to={`/planetsdetails/${planet.name}`}>
            <FiGlobe size={90} />
            <div>
              <strong>{planet.name}</strong>
            </div>
            {/* <FiChevronRight size={20} /> */}
          </Link>
        ))}
      </ListPeople>
    </Container>
  );
};

export default Planet;
