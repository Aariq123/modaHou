
import "./index.css"
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plans from "./components/plans";
import Menu from "./components/menu";
import Start from "./components/start";
import RecipeInfo from "./components/recipeinfo";
import AllResults from "./components/allresults";
import { useContext } from "react";
import { Context } from "./context/context";
import Favourites from "./components/favourites";

function App() {
 
  const { navOpen, closeNav } = useContext(Context)
  return (
    <div onClick={(e)=>{
      if(navOpen){
        if(e.target.className !== 'nav-ul'){
          closeNav()
        }
      }
    }}>
      
  { <img className="hero-main" src={require('./images/hero.jpg')} alt="" />
  }
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/modaHou' element={<Hero></Hero>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
          <Route path='/modaHou/plans' element={<Plans></Plans>}></Route>
          <Route path='/start' element={<Start></Start>}></Route>
          <Route path='/recipe-info' element={<RecipeInfo></RecipeInfo>}></Route>
          <Route path='/all-results' element={<AllResults></AllResults>}></Route>
          <Route path='/favourites' element={<Favourites></Favourites>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
