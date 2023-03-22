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
      <div>
        <ul>
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
              <li key={id}>
                <p>Program Name: {name}</p>
                <p>Type of program: {mode}</p>
                <p>Dimesion: {dimensions}</p>
                <p>
                  Program schedule: from {convertedStartDate} to{" "}
                  {convertedEndDate}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProgramsList;
