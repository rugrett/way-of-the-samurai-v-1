import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <main className="wrap">
      <Header/>
      <Navbar/>
      <div className="wrap__content">
        <Route path="/profile" render={() => { return <Profile/> }}/>
        <Route path="/messages" render={() => { return <DialogsContainer/> }}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </main>
  );
}

export default App;
