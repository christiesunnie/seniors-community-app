import { Link } from "react-router-dom";
import styles from "../App.module.css";

type residentsListProps = {
  residentsList: any[];
};

const ResidentsList: React.FC<residentsListProps> = ({ residentsList }) => {
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
    <div className={styles.app}>
      <h2>Residents List</h2>
      <p className={styles["link-return"]}>
        <Link to="/">Return home</Link>
      </p>
      <div>
        <ul className="ui cards centered grid container">
          {residentsList.slice(0, 21).map((resident: any) => {
            const {
              name,
              birthday,
              gender,
              hobbies,
              levelOfCare,
              userId,
              roomNumber,
              moveInDate,
            } = resident;

            const convertedMoveInDate = convertedDateFunc(moveInDate);

            return (
              <li key={userId} className="ui card four wide column">
                <div className="content">
                  <a className="header">{name}</a>
                  <div className="meta">
                    <span className="date">Moved in {convertedMoveInDate}</span>
                  </div>
                  <div className="description">
                    <p>Room: {roomNumber}</p>
                    <p>Gender: {gender}</p>
                    <p>
                      Birthday: {new Date(birthday).toLocaleDateString("en-US")}
                    </p>
                    <p>Level of care: {levelOfCare}</p>
                    <p>Hobbies: {hobbies}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResidentsList;
