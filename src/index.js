import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';

import App from "./App";
import Raia from "./components/ProjectsDetails/Raia";
import Climatiza from "./components/ProjectsDetails/Climatiza";
import BandTec from "./components/ProjectsDetails/BandTec";
import ConsultaMais from "./components/ProjectsDetails/ConsultaMais";
import Acob from "./components/ProjectsDetails/Acob";
import AmazoniaLife from "./components/ProjectsDetails/AmazoniaLife";
import SNCC from "./components/ProjectsDetails/SNCC";
import Sebracom from "./components/ProjectsDetails/Sebracom";
import Trigg from "./components/ProjectsDetails/Trigg";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="raia" element={<Raia />} />
        <Route path="climatiza" element={<Climatiza />} />
        <Route path="bandTec" element={<BandTec />} />
        <Route path="consulta-mais" element={<ConsultaMais />} />
        <Route path="acob" element={<Acob />} />
        <Route path="amazonia-life" element={<AmazoniaLife />} />
        <Route path="sncc" element={<SNCC />} />
        <Route path="sebracom" element={<Sebracom />} />
        <Route path="trigg" element={<Trigg />} />
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
