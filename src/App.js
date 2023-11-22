import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Search from "./Pages/Search";


function App() {
  return (
    <Routes>
        <Route path="/" element={ <HomePages />} />
        <Route path="/search" element={ <Search /> }/>
    </Routes>
  );
}

export default App;
