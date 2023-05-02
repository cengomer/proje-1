import { About, Country, Cv, Hero, Interests, Navbar } from './components/imports';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const About = location.pathname === '/HAKKIMDA';
  const Cv = location.pathname === '/cv';
  const Country = location.pathname === '/country';
  return (
    <div>
      <Routes>
      <Route path="/" component={<Hero/>} />
      <Route path="/HAKKIMDA" component={<About/>} />
      <Route path="/cv" component={<Cv/>} />
      <Route path="/country" component={<Country/>} />
      </Routes>
      {!About && !Cv && !Country && (
        <div>
          <Navbar />
          <Hero />
          <Interests/>
        </div>
      )}
    </div>
  );
}

export default App;
