import React, { useEffect, useState, useCallback } from "react";
import {
  FiArrowDownLeft,
  FiChevronRight,
  FiFilm,
  FiNavigation,
  FiUser,
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
interface Starships {
  name: string;
  cargo_capacity: string;
  consumables: string;
  model: string;
  passengers: string;
  starship_class: string;
}
interface Films {
  name: string;
}
interface Vehicls {
  name: string;
}
interface Pilots {
  name: string;
}
interface UrlFilms {
  url: string;
}
const StarshipsDetails: React.FC = () => {
  const [starships, setStarships] = useState<Starships | null>(null);
  const { params } = useRouteMatch<NameParams>();
  const [urlsFilms, setUrlFilms] = useState<UrlFilms[]>([]);
  const [films, setFilms] = useState<Films[]>([]);
  const [pilots, setPilots] = useState<Pilots[]>([]);

  useEffect(() => {
    async function getStarships() {
      await api.get(`starships/?search=${params.name}`).then(
        (response) => {
          setStarships(response.data.results[0]);
          setUrlFilms(response.data.results[0].films);
          const urlFilms = response.data.results[0].films;
          const urlPilost = response.data.results[0].pilots;

          urlFilms.map(async (url: string) => {
            await axios.get(url).then((response) => {
              films.push(response.data.title);
              setUrlFilms([]);
              // setFilms([...films, response.data.title]);
            });
          });
          urlPilost.map(async (url: string) => {
            await axios.get(url).then((response) => {
              pilots.push(response.data.name);
              setUrlFilms([]);
              // setFilms([...films, response.data.title]);
            });
          });
          // urlStarships.map(async (url: string) => {
          //   await axios.get(url).then((response) => {
          //     starships.push(response.data.name);
          //     setUrlFilms([]);
          //     // setFilms([...films, response.data.title]);
          //   });
          // });
        },
        (err) => {}
      );
    }

    getStarships();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name, films]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/starship">
            <FiArrowDownLeft />
          </Link>
          <h1>Detalhes</h1>
        </HeaderContent>
      </Header>

      <CardInfo>
        <img
          src="http://s2.glbimg.com/CdeOACxEkerJ1yAGSvZD8ufISPs=/695x0/s.glbimg.com/po/tt2/f/original/2015/08/10/imperialshuttle-starwars.jpg"
          alt={"name"}
        />
        <h1>{starships?.name}</h1>
        <div>
          <span>Capacidade de carga: {starships?.cargo_capacity}</span>
          <span>Consumiveis: {starships?.consumables} </span>
          {/* <span>Cor dos olhos: {starships.}</span> */}
          <span>Modelo: {starships?.model}</span>
          <span>passageiros: {starships?.passengers}</span>
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
          <h1>Pilotos:</h1>
          {pilots.map((pilot, index) => (
            <div key={index}>
              <FiUser />
              <span>{pilot}</span>
            </div>
          ))}
        </CardSimple>
        {/* <CardSimple>
          <h1>veiculos:</h1>
          {vehicles.map((vehicle, index) => (
            <div key={index}>
              <FiTruck />
              <span>{vehicle}</span>
            </div>
          ))}
        </CardSimple> */}
      </div>
    </Container>
  );
};

export default StarshipsDetails;
