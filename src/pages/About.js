import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
  Link,
  useLocation,
} from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  const { url } = useMatch();
  const { pathname } = useLocation();

  
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path={`${pathname}/:slug`}>
            <SinglePage />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default About;
