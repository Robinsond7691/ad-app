import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdProvider } from './context/ads/adContext';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreateAdForm from './components/ads/CreateAdForm';
import FullAd from './components/ads/FullAd';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='ui container'>
        <AdProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ads/create' component={CreateAdForm} />
            <Route exact path='/ads/:id' component={FullAd} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </AdProvider>
      </div>
    </Router>
  );
}

export default App;
