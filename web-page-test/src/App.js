import './App.css';
import NavBar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import routes from './navigation/routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map(({ path, screen }, index) => <Route key={`route-${index}`} path={path} element={screen} />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
