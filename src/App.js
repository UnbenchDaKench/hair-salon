import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./widgets/navbar/Navbar";

//pages
import Home from "./pages/home/Home";

import Footer from "./widgets/footer/Footer";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import Stylists from "./pages/stylists/Stylists";
import Contact from "./pages/contact/Contact";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/gallery",
    element: Gallery,
  },
  {
    path: "/services",
    element: Services,
  },
  {
    path: "/stylists",
    element: Stylists,
  },
  {
    path: "/contact",
    element: Contact,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
