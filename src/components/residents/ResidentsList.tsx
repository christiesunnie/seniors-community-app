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
    <>
      <h2>Residents List</h2>
      <div>
        <ul>
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
              <li key={userId}>
                <p>Name: {name}</p>
                <p>Room: {roomNumber}</p>
                <p>Gender: {gender}</p>
                <p>
                  Birthday: {new Date(birthday).toLocaleDateString("en-US")}
                </p>
                <p>Level of care: {levelOfCare}</p>
                <p>Move in date: {convertedMoveInDate}</p>
                <p>Hobbies: {hobbies}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ResidentsList;
