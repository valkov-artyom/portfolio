import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from "./landing";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contacts from "./contacts";

const Main = () => (
    <Switch>
        <Route exact path='/portfolio' component={Landing} />
        <Route path='/portfolio/about' component={About} />
        <Route path='/portfolio/landing' component={Landing} />
        <Route path='/portfolio/resume' component={Resume} />
        <Route path='/portfolio/projects' component={Projects} />
        <Route path='/portfolio/contacts' component={Contacts} />
    </Switch>
);

export default Main