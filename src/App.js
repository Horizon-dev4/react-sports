import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import UseEffect from './pages/components/Hooks/UseEffect';
import Login from './pages/components/login/Login';
import Contact from './pages/Contact';
import Cricket from './pages/Cri-Fball-Espt/Cricket/Cricket';
import CurrentFutureSeries from './pages/Cri-Fball-Espt/Cricket/CurrentFutureSeries/CurrentFutureSeries';
import CurrentMatches from './pages/Cri-Fball-Espt/Cricket/CurrentMatches/CurrentMatches';
import SeriesArchive from './pages/Cri-Fball-Espt/Cricket/SeriesArchive/SeriesArchive';
import Teams from './pages/Cri-Fball-Espt/Cricket/Teams/Teams';
import CallOfDuty from './pages/Cri-Fball-Espt/Esports/CallOfDuty/CallOfDuty';
import CsGo from './pages/Cri-Fball-Espt/Esports/CsGo/CsGo';
import Dota2 from './pages/Cri-Fball-Espt/Esports/Dota2/Dota2';
import Esports from './pages/Cri-Fball-Espt/Esports/Esports';
import Fortnite from './pages/Cri-Fball-Espt/Esports/Fortnite/Fortnite';
import Lol from './pages/Cri-Fball-Espt/Esports/Lol/Lol';
import Overwatch2 from './pages/Cri-Fball-Espt/Esports/Overwatch2/Overwatch2';
import Starcraft from './pages/Cri-Fball-Espt/Esports/Starcraft/Starcraft';
import Valorant from './pages/Cri-Fball-Espt/Esports/Valorant/Valorant';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Home from './pages/Home';
import News from './pages/News';
import Prediction from './pages/Prediction';
import Results from './pages/Results';
import First from './pages/tournaments/First/First';
import Second from './pages/tournaments/Second/Second';
import Third from './pages/tournaments/Third/Third';

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Prediction" element={ <Prediction/> } />
        <Route path="/Results" element={ <Results/> } />
        <Route path="/News" element={ <News/> } />
        <Route path="/Dashboard" element={ <Dashboard/> } />
        <Route path="/Forum" element={ <Forum/> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/UseEffect" element={ <UseEffect />} />
        <Route path="/first" element={ <First />} />
        <Route path="/second" element={ <Second />} />
        <Route path="/third" element={ <Third />} />
        <Route path="/esports" element={ <Esports /> } />
        <Route path="/csgo" element={ <CsGo /> } />
        <Route path="/dota2" element={ <Dota2 /> } />
        <Route path="/lol" element={ <Lol /> } />
        <Route path="/overwatch2" element={ <Overwatch2 /> } />
        <Route path="/valorant" element={ <Valorant /> } />
        <Route path="/fortnite" element={ <Fortnite /> } />
        <Route path="/call-of-duty" element={ <CallOfDuty /> } />
        <Route path="/starcraft" element={ <Starcraft /> } />
        <Route path="/cricket" element={ <Cricket />} />
        <Route path="/currentfutureseries" element={ <CurrentFutureSeries />} />
        <Route path="/currentmatches" element={ <CurrentMatches />} />
        <Route path="/seriesarchive" element={ <SeriesArchive /> } />
        <Route path="/teams" element={ <Teams /> } />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
