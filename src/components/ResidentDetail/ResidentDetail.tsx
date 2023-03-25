import { useParams } from "react-router-dom";
import { type residentsListProps } from "../Residents/ResidentsList";

const ResidentDetail: React.FC<residentsListProps> = ({ residentsList }) => {
  const { userId } = useParams();

  const getResidentDetail = (userId: string | undefined) => {
    return residentsList.find((resident) => userId === resident.userId);
  };
  const resident = getResidentDetail(userId);

  // const {
  //   name,
  //   hobbies,
  //   moveInDate,
  //   birthday,
  //   roomNumber,
  //   gender,
  //   levelOfCare,
  // } = resident;

  console.log(resident);

  // const convertedDateFunc = (dateString: string) => {
  //   const date = new Date(dateString);

  //   return date.toLocaleDateString("en-US", {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  // const hobbiesFunc = () => {
  //   if (hobbies === null) return "N/A";

  //   const separatedHobbies = hobbies.split(",").join(", ");
  //   return separatedHobbies;
  // };

  // const convertedMoveInDate = convertedDateFunc(moveInDate);
  return (
    <div className="content">
      Resident detail
      {/* <a className="header">{name}</a>
      <div className="meta">
        <span className="date">Moved in {convertedMoveInDate}</span>
      </div>
      <div className="description">
        <p>Room: {roomNumber}</p>
        <p>Gender: {gender}</p>
        <p>Birthday: {new Date(birthday).toLocaleDateString("en-US")}</p>
        <p>Level of care: {levelOfCare !== null ? levelOfCare : "N/A"}</p>
        <p>Hobbies: {hobbiesFunc()}</p>
      </div> */}
    </div>
  );
};

export default ResidentDetail;
