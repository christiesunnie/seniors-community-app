const AttendeesList = ({ programDetail }: any) => {
  const attendees = programDetail.attendees;

  const renderedAttendees = attendees.map((attendee: any) => {
    return (
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div className="header">{attendee.userId}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui cards">{renderedAttendees}</div>;
};

export default AttendeesList;
