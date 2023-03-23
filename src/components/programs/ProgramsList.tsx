import { Link } from "react-router-dom";
import styles from "../App.module.css";

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

  return (
    <>
      <h2>Programs List</h2>
      <p className={styles["link-return"]}>
        <Link to="/">Return home</Link>
      </p>
      <div>
        <ul className="ui cards centered grid container">
          {programsList.slice(0, 21).map((resident: any) => {
            const {
              name,
              mode,
              dimensions,
              hobbies,
              levelsOfCare,
              id,
              start,
              end,
              attendees,
            } = resident;

            const convertedStartDate = convertedDateFunc(start);
            const convertedEndDate = convertedDateFunc(end);

            return (
              <li key={id} className="ui card four wide column">
                <div className="card">
                  <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">
                      <p>Type of program: {mode}</p>
                      <p>Dimesion: {dimensions}</p>
                      <p>
                        Program schedule: from {convertedStartDate} to{" "}
                        {convertedEndDate}
                      </p>
                    </div>
                  </div>
                  <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    Add attendee
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProgramsList;
