import { About, Country, Cv, Hero, Interests, Navbar } from './components/imports';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const About = location.pathname === '/HAKKIMDA';
  return (
    <div>
      <Routes>
      <Route path="/" component={<Hero/>} />
      <Route path="/HAKKIMDA" component={<About/>} />
      </Routes>
      {!About && (
        <div>
          <Navbar />
          <Hero />
          <Interests/>
          <Cv/>
          <Country/>
        </div>
      )}
    </div>
  );
}

export default App;
