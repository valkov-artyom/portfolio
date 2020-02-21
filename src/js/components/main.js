import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from "./landing";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contacts from "./contacts";

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/landing' component={Landing} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contacts} />
    </Switch>
);

export default Main