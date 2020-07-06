import React, { useEffect, useState, useCallback } from "react";
import {
  FiArrowDownLeft,
  FiChevronRight,
  FiFilm,
  FiNavigation,
  FiTruck,
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
interface People {
  name: string;
  gender: string;
  mass: string;
  birth_year: string;
  height: string;
  hair_color: string;
  eye_color: string;
}
interface Films {
  name: string;
}
interface Vehicls {
  name: string;
}
interface starships {
  name: starships;
}
interface UrlFilms {
  url: string;
}
const PeopleDetails: React.FC = () => {
  const [people, setPeople] = useState<People | null>(null);
  const { params } = useRouteMatch<NameParams>();
  const [urlsFilms, setUrlFilms] = useState<UrlFilms[]>([]);
  const [films, setFilms] = useState<Films[]>([]);
  const [starships, setStarships] = useState<starships[]>([]);
  const [vehicles, setVehicls] = useState<Vehicls[]>([]);
  useEffect(() => {
    async function getPeople() {
      await api.get(`people/?search=${params.name}`).then(
        (response) => {
          setPeople(response.data.results[0]);
          setUrlFilms(response.data.results[0].films);
          const urlFilms = response.data.results[0].films;
          const urlStarships = response.data.results[0].starships;
          const urlVehicles = response.data.results[0].vehicles;
          urlFilms.map(async (url: string) => {
            await axios.get(url).then((response) => {
              films.push(response.data.title);
              setUrlFilms([]);
              // setFilms([...films, response.data.title]);
            });
          });
          urlVehicles.map(async (url: string) => {
            await axios.get(url).then((response) => {
              vehicles.push(response.data.name);
              setUrlFilms([]);
              // setFilms([...films, response.data.title]);
            });
          });
          urlStarships.map(async (url: string) => {
            await axios.get(url).then((response) => {
              starships.push(response.data.name);
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
  }, [params.name, films]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/people">
            <FiArrowDownLeft />
          </Link>
          <h1>Detalhes</h1>
        </HeaderContent>
      </Header>

      <CardInfo>
        <img
          src="https://www.routeone.com/sites/default/files/default_images/default-person.png"
          alt={"name"}
        />
        <h1>{people?.name}</h1>
        <div>
          <span>Altura: {people?.height}</span>
          <span>Cor do cabelo: {people?.hair_color} </span>
          <span>Cor dos olhos: {people?.eye_color}</span>
          <span>Aniversário: {people?.birth_year}</span>
          <span>Genero: {people?.gender}</span>
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
          <h1>naves:</h1>
          {starships.map((starship, index) => (
            <div key={index}>
              <FiNavigation />
              <span>{starship}</span>
            </div>
          ))}
        </CardSimple>
        <CardSimple>
          <h1>veiculos:</h1>
          {vehicles.map((vehicle, index) => (
            <div key={index}>
              <FiTruck />
              <span>{vehicle}</span>
            </div>
          ))}
        </CardSimple>
      </div>
    </Container>
  );
};

export default PeopleDetails;
