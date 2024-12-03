

import {Routes, Route} from "react-router-dom"
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </>
  );
}

export default App;
