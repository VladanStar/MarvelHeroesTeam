export default App;
import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';
import { InfoPage } from './components/InfoPage/InfoPage';
import { Footer } from './components/Footer/Footer';

//https://gateway.marvel.com/v1/public/comics?ts=1&apikey=91b6e33f5e13f8f0a6a853edbfc97e80&hash=5cb1336c1e4d0c256e22d56936db786b

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/infopage/:id' component={InfoPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;