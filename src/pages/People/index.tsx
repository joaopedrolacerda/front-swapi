import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Link, RouteComponentProps, match } from "react-router-dom";
import { Container, Header, HeaderContent, ListPeople } from "./styles";
import { FiArrowDownLeft, FiChevronRight } from "react-icons/fi";

interface People {
  name: string;
  gender: string;
}

const People: React.FC = (_) => {
  const [peoples, setPeoples] = useState<People[]>([]);

  useEffect(() => {
    api.get("people").then(
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
          <h1>Listagem de personagens</h1>
        </HeaderContent>
      </Header>

      <ListPeople>
        {peoples.map((people) => (
          <Link key={people.name} to={`/peopledetails/${people.name}`}>
            <img
              src="https://www.routeone.com/sites/default/files/default_images/default-person.png"
              alt={people.name}
            />
            <div>
              <strong>{people.name}</strong>
              <p>{people.gender}</p>
            </div>
            {/* <FiChevronRight size={20} /> */}
          </Link>
        ))}
      </ListPeople>
    </Container>
  );
};

export default People;
