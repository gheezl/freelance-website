import React, { Fragment } from 'react';
import { Route } from "react-router-dom"
import './App.css';

import Title from "./components/title/title.jsx"
import About from "./components/about/about.jsx"
import Work from "./components/work/work.jsx"
import Contact from "./components/contact/contact.jsx"

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={Title} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Fragment>
  )
}

export default App;
