import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import People from "../pages/People";
import PeopleDetails from "../pages/PeopleDetails";

import Planets from "../pages/planets";
import PlanetsDetails from "../pages/PlanetsDetails";

import Starship from "../pages/starship";
import StarshipsDetails from "../pages/StarshipsDetails";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/people" component={People} />
    <Route path="/peopledetails/:name" component={PeopleDetails} />

    <Route path="/planets" component={Planets} />
    <Route path="/planetsDetails/:name" component={PlanetsDetails} />

    <Route path="/Starship" component={Starship} />
    <Route path="/StarshipsDetails/:name" component={StarshipsDetails} />
  </Switch>
);

export default Routes;
