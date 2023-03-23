import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./home/header/Header";
import MainNav from "./home/nav/MainNav";
import ResidentsList from "./residents/ResidentsList";
import ProgramsList from "./programs/ProgramsList";

function App() {
  const [residentsList, setResidentsList] = useState<any[]>([]);
  const [programsList, setProgramsList] = useState([]);

  useEffect(() => {
    axios.get("/data/backend").then((res) => {
      const residentsData = res.data.residents;
      const programsData = res.data.programs;

      setResidentsList(residentsData);
      setProgramsList(programsData);
    });
  }, [residentsList, programsList]);

  return (
    <Routes>
      <Route path="/" element={<MainNav />} />
      <Route
        path="/residents"
        element={<ResidentsList residentsList={residentsList} />}
      />
      <Route
        path="/programs"
        element={<ProgramsList programsList={programsList} />}
      />
    </Routes>
  );
}
export default App;
