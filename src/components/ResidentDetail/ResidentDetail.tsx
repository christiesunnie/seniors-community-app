import { useParams, Link } from "react-router-dom";
import { type residentsListProps } from "../Residents/ResidentsList";

const ResidentDetail: React.FC<residentsListProps> = ({ residentsList }) => {
  const { userId } = useParams();

  const getResidentDetail = (userId: any) => {
    return residentsList.find((resident: any) => userId === resident.userId);
  };
  const resident = getResidentDetail(userId);

  const convertedDateFunc = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const hobbiesFunc = () => {
    if (resident?.hobbies === null) return "N/A";

    const separatedHobbies = resident?.hobbies.split(",").join(", ");
    return separatedHobbies;
  };

  const convertedMoveInDate = convertedDateFunc(resident?.moveInDate);
  return (
    <div className="ui divided items container">
      <div className="item">
        <div className="ui small image">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="middle aligned content">
          <p className="header">{resident?.name}</p>
          <div className="meta">
            <span className="cinema">Move in date: {convertedMoveInDate}</span>
          </div>
          <div className="description">
            <p>Room: {resident?.roomNumber}</p>
            <p>Gender: {resident?.gender}</p>
            <p>
              Birthday:{" "}
              {new Date(resident?.birthday).toLocaleDateString("en-US")}
            </p>
            <p>
              Level of care:{" "}
              {resident?.levelOfCare !== null ? resident?.levelOfCare : "N/A"}
            </p>
            <p>Hobbies: {hobbiesFunc()}</p>
          </div>
          <div className="extra">
            <Link to="/residents" className="ui right floated button">
              Back to the resident list
              <i className="right chevron icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDetail;
