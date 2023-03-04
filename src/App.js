import classes from './App.module.scss';
import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import Game from './Pages/Game/Game';
import Results from './Pages/Results/Results';
import Footer from './Footer/Footer';
 export const URLs={
  results:'Results',
  game:"Game",
  welcome:'/'
 }
function App() {
  return (
    <div className={classes.App_container}>
      <Header/>
      <div className={classes.content_Container}>
      <BrowserRouter>
        <Routes>
          <Route path={URLs.welcome} element={<Welcome/>}/>
          <Route path={URLs.game} element={<Game/>}/>
          <Route path={URLs.results} element={<Results/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
