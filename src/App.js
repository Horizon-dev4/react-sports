import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import UseEffect from './pages/components/Hooks/UseEffect';
import Login from './pages/components/login/Login';
import Contact from './pages/Contact';
import Cricket from './pages/Cri-Fball-Espt/Cricket/Cricket';
import UpcomingCricketMatches from './pages/Cri-Fball-Espt/Cricket/CricketUpcomingFolder/UpcomingCricketMatches';
import Result from './pages/Cri-Fball-Espt/Cricket/CricketScoreBoardFolder/CricketResult';
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
import NewsDemo from './pages/NewsDemo';
// import News from './pages/NewsDemo';
import Prediction from './pages/Prediction';
// import Results from './pages/Results';
import ResultsDemo from './pages/ResultsDemo';
import First from './pages/tournaments/First/First';
import Second from './pages/tournaments/Second/Second';
import Third from './pages/tournaments/Third/Third';
import CricketLiveMatches from './pages/Cri-Fball-Espt/Cricket/CricketLiveMatchesFolder/CricketLiveMatches';
import CricketNews from './pages/Cri-Fball-Espt/Cricket/CricketNewsFolder/CricketNews';
import CricketScoreBoard from './pages/Cri-Fball-Espt/Cricket/CricketScoreBoardFolder/CricketScoreBoard';
import CricketNewsDetails from './pages/Cri-Fball-Espt/Cricket/CricketNewsFolder/CricketNewsDetails';
import Upcoming from './pages/components/Upcoming';
import FootballNews from './pages/Cri-Fball-Espt/Football/FootballNews';
import News from './pages/NewsDemo';


function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <CricketLiveMatches/> } />
        <Route path="/Prediction" element={ <Prediction/> } />
        {/* <Route path="/Results" element={ <Results/> } /> */}
        <Route path="/Results" element={ <Result /> } />
        <Route path="/News" element={ <CricketNews /> } />
        <Route path="/All-Sports-News" element={ <NewsDemo/> } />
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
        <Route path="/Upcoming-Cricket-Matches" element={ <UpcomingCricketMatches/>} />
        <Route path="/Live-Cricket-Matches" element={ <CricketLiveMatches/>} />
        {/* <Route path="/seriesarchive" element={ <SeriesArchive /> } /> */}
        <Route path="/Cricket-Scoreboard" element={<CricketScoreBoard />  } />
        <Route path="/Cricket-News" element={ <CricketNews /> } />
        <Route path="/Cricket-Result" element={ <Result  />}/>
        <Route path="/Cricket-News-Details" element={ <CricketNewsDetails  />}/>
        <Route path="/upcoming" element={ <Upcoming  />}/>
        <Route path="/football-news" element={ <FootballNews  />}/> 








        {/* <Route path="/scoreprediction" component={ScorePrediction} /> */}
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
