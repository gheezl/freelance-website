import React, { Fragment } from 'react';
import { Route } from "react-router-dom"
import './App.css';

import Title from "./components/title/title.jsx"
import About from "./components/about/about.jsx"
import Work from "./components/work/work.jsx"
import Contact from "./components/contact/contact.jsx"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"

import BackgroundImage from "./components/background-image/background-image.jsx"

import ErrorBoundary from "./components/error-boundary/error-boundary.jsx"


const App = () => {
  return (
    <Fragment>
      <BackgroundImage />
      <ErrorBoundary>
        <Route path="/" component={Title} />
        <Route exact path="/" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </ErrorBoundary>
    </Fragment>
  )
}


export default App;