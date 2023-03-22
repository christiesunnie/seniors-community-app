import { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      <h1>List of Residents & programs</h1>
      <ResidentsList residentsList={residentsList} />
      <ProgramsList programsList={programsList} />
    </>
  );
}
export default App;
