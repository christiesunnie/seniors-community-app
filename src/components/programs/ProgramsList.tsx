import { Link } from "react-router-dom";
import styles from "../App.module.css";

import ProgramLayout from "../Layout/ProgramLayout";

type programsListProps = {
  programsList: any[];
};

const ProgramsList: React.FC<programsListProps> = ({ programsList }) => {
  const convertedDateFunc = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderedFilteredPrograms = (modeType: string) => {
    return programsList
      .filter((resident) => resident.mode === modeType)
      .map((resident) => {
        const { name, id, start, end } = resident;

        const convertedStartDate = convertedDateFunc(start);
        const convertedEndDate = convertedDateFunc(end);

        return (
          <div key={id} className="item">
            <div className="right floated content">
              <Link to={`/residents/${id}`} className="ui button">
                View detail
              </Link>
            </div>
            <div className="content">
              <p>{name}</p>
              <p>
                Program schedule: from {convertedStartDate} to{" "}
                {convertedEndDate}
              </p>
            </div>
          </div>
        );
      });
  };

  const recreationPrograms = renderedFilteredPrograms("RECREATION");
  const oneononePrograms = renderedFilteredPrograms("ONEONONE");

  return (
    <>
      <h2>Programs List</h2>
      <p className={styles["link-return"]}>
        <Link to="/">Return home</Link>
      </p>
      <div className="ui two column grid container">
        <ProgramLayout mode="RECREATION">{recreationPrograms}</ProgramLayout>
        <ProgramLayout mode="ONEONONE">{oneononePrograms}</ProgramLayout>
      </div>
    </>
  );
};

export default ProgramsList;
