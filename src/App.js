import React, { Fragment } from 'react';
import './App.css';

import Title from "./components/title/title.jsx"
import Information from "./components/information/information.jsx"


const App = () => {
  return (
    <Fragment>
      <Title />
      <Information />
    </Fragment>
  )
}

export default App;
