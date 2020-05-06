import React from "react";
import { Provider } from 'mobx-react';
import { hot } from "react-hot-loader";
import { configure } from 'mobx';
import stores from './stores';
import MainWrapper from './components'

configure({ enforceActions: 'observed'});

function App() {
  return (
    <Provider { ...stores }>
      <MainWrapper />
    </Provider>
  );
}

export default hot(module)(App);