import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i bootstrap react-router-dom
//bootstrap and react-router-dom //library get installed in packaj.json
import HomePage from "./pages/home";
import EditPage from "./pages/edit";
///for every new page register your route here
///in routes edit is hardcoded route and :/imageUrl(here we get path dynamically//at run time)

function App() {
  return (
    <div className="Container">
      <h1 className="app-title">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/edit" element={<EditPage></EditPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
