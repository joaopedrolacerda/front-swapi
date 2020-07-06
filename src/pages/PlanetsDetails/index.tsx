import React, { useEffect, useState, useCallback } from "react";
import {
  FiArrowDownLeft,
  FiChevronRight,
  FiFilm,
  FiNavigation,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  Header,
  HeaderContent,
  CardInfo,
  CardSimple,
} from "./styles";
interface NameParams {
  name: string;
}
interface planet {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  terrain: string;
  population: string;
}
interface Films {
  name: string;
}
interface Residents {
  name: string;
}
interface starships {
  name: starships;
}
interface UrlFilms {
  url: string;
}
const PeopleDetails: React.FC = () => {
  const [planet, setPlanet] = useState<planet | null>(null);
  const { params } = useRouteMatch<NameParams>();
  const [urlsFilms, setUrlFilms] = useState<UrlFilms[]>([]);
  const [films, setFilms] = useState<Films[]>([]);
  const [starships, setStarships] = useState<starships[]>([]);
  const [residents, setresidents] = useState<Residents[]>([]);
  useEffect(() => {
    async function getPeople() {
      await api.get(`planets/?search=${params.name}`).then(
        (response) => {
          setPlanet(response.data.results[0]);
          setUrlFilms(response.data.results[0].films);
          const urlFilms = response.data.results[0].films;
          const urlResidents = response.data.results[0].residents;
          urlFilms.map(async (url: string) => {
            await axios.get(url).then((response) => {
              films.push(response.data.title);
              setUrlFilms([]);
            });
          });
          urlResidents.map(async (url: string) => {
            await axios.get(url).then((response) => {
              residents.push(response.data.name);
              setUrlFilms([]);
              // setFilms([...films, response.data.title]);
            });
          });
        },
        (err) => {}
      );
    }

    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/planets">
            <FiArrowDownLeft />
          </Link>
          <h1>Detalhes</h1>
        </HeaderContent>
      </Header>

      <CardInfo>
        <FiGlobe size={90} />

        <h1>{planet?.name}</h1>
        <div>
          <span>Clima: {planet?.climate}</span>
          <span>Diametro: {planet?.diameter} </span>
          <span>Gravidate: {planet?.gravity}</span>
          <span>População: {planet?.population}</span>
          <span>Terreno: {planet?.terrain}</span>
        </div>
      </CardInfo>
      <div>
        <CardSimple>
          <h1>participou de:</h1>
          {films.map((film, index) => (
            <div key={index}>
              <FiFilm />
              <span>{film}</span>
            </div>
          ))}
        </CardSimple>
        <CardSimple>
          <h1>Residentes:</h1>
          {residents.map((resident, index) => (
            <div key={index}>
              <FiUsers />
              <span>{resident}</span>
            </div>
          ))}
        </CardSimple>
      </div>
    </Container>
  );
};

export default PeopleDetails;
