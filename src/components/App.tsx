import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainNav from "./home/Nav/MainNav";
import ResidentsList from "./Residents/ResidentsList";
import ProgramsList from "./Programs/ProgramsList";
import ResidentDetail from "./ResidentDetail/ResidentDetail";
import ProgramDetail from "./ProgramDetail/ProgramDetail";

import styles from "./App.module.css";

function App() {
  const [residentsList, setResidentsList] = useState<any[]>([]);
  const [programsList, setProgramsList] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/data/backend").then((res) => {
      const residentsData = res.data.residents;
      const programsData = res.data.programs;

      setResidentsList(residentsData);
      setProgramsList(programsData);
    });
  }, [residentsList, programsList]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<MainNav />} />
        <Route
          path="/residents"
          element={<ResidentsList residentsList={residentsList} />}
        />
        <Route
          path="/residents/:userId"
          element={<ResidentDetail residentsList={residentsList} />}
        />
        <Route
          path="/programs"
          element={<ProgramsList programsList={programsList} />}
        />
        <Route
          path="/programs/:programId"
          element={<ProgramDetail programsList={programsList} />}
        />
      </Routes>
    </div>
  );
}
export default App;
