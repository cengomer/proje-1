import { About, Country, Cv, Hero, Interests, Navbar } from './components/imports';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const About = location.pathname === '/about';
  const Interests = location.pathname === '/interests';
  const Cv = location.pathname === '/cv';
  const Country = location.pathname === '/country';
  return (
    <div>
      <Routes>
      <Route path="/" component={<Hero/>} />
      <Route path="/about" component={<About/>} />
      <Route path="/interests" component={<Interests/>} />
      <Route path="/cv" component={<Cv/>} />
      <Route path="/country" component={<Country/>} />
      </Routes>
      {!About && !Interests && !Cv && !Country && (
        <div>
          <Navbar />
          <Hero />
        </div>
      )}
    </div>
  );
}

export default App;
