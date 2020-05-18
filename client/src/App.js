import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdProvider } from './context/ads/adContext';
import { AuthProvider } from './context/auth/authContext';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import CreateAdForm from './components/ads/CreateAdForm';
import FullAd from './components/ads/FullAd';

function App() {
  return (
    <AuthProvider>
      <AdProvider>
        <Router>
          <Navbar />
          <div className='ui container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/ads/create' component={CreateAdForm} />
              <Route exact path='/ads/:id' component={FullAd} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/Register' component={Register} />
            </Switch>
          </div>
        </Router>
      </AdProvider>
    </AuthProvider>
  );
}

export default App;
