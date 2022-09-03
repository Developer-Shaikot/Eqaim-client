import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Addpost from './Components/Addpost/Addpost';
import SingleBlog from './Components/Blogpost/SingleBlog/SingleBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Addpost />} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
