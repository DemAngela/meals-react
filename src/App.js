import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MealPage from "./Pages/MealPage";
import IngredientsPage from "./Pages/IngredientsPage";


function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={ <HomePages />} />
              <Route path="/search" element={ <Search /> }/>
              <Route path="/meal/:idMeal" element={ <MealPage /> }/>
              <Route path="/ingredient/:name" element={ <IngredientsPage/> }/>
          </Routes>
          <Footer />
      </>
  );
}

export default App;
