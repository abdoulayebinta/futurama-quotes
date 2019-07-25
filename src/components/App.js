import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

/**
 * App Component - renders Navigation HomePage and About Page.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-header">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
