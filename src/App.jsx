

import {Routes, Route} from "react-router-dom"
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Layout from "./Layouts/Layout";
import { ThemeProvider } from "./Context/ThemeContext";


function App() {
  return (
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
