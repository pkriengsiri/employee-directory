import React from 'react';
import Header from "./components/Header/Header"
import Directory from './containers/Directory/Directory';
import './sass/App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Directory />
    </div>
  );
}

export default App;
