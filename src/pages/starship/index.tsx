import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Link } from "react-router-dom";
import { Container, Header, HeaderContent, ListPeople } from "./styles";
import { FiArrowDownLeft } from "react-icons/fi";

interface Starship {
  name: string;
  gender: string;
}

const Starship: React.FC = (_) => {
  const [starship, setStarship] = useState<Starship[]>([]);

  useEffect(() => {
    api.get("starships").then(
      (response) => {
        setStarship(response.data.results);
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
          <h1>Listagem de naves</h1>
        </HeaderContent>
      </Header>

      <ListPeople>
        {starship.map((starship) => (
          <Link key={starship.name} to={`/starshipsdetails/${starship.name}`}>
            <img
              src="http://s2.glbimg.com/CdeOACxEkerJ1yAGSvZD8ufISPs=/695x0/s.glbimg.com/po/tt2/f/original/2015/08/10/imperialshuttle-starwars.jpg"
              alt={starship.name}
            />
            <div>
              <strong>{starship.name}</strong>
              <p>{starship.gender}</p>
            </div>
            {/* <FiChevronRight size={20} /> */}
          </Link>
        ))}
      </ListPeople>
    </Container>
  );
};

export default Starship;
