import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MealPage from "./Pages/MealPage";


function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={ <HomePages />} />
              <Route path="/search" element={ <Search /> }/>
              <Route path="/meal/:idMeal" element={ <MealPage /> }/>
          </Routes>
          <Footer />
      </>
  );
}

export default App;
