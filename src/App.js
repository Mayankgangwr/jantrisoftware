import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Blogs from './page/Blog';
import Layout from './page/Layout';
import axios from 'axios';
const App = () =>{

    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="view-product/:proid" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
}
export default App;
