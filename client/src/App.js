import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdProvider } from './context/ads/adContext';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreateAdForm from './components/ads/CreateAdForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='ui container'>
        <Switch>
          <AdProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/ads/create' component={CreateAdForm} />

            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </AdProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
