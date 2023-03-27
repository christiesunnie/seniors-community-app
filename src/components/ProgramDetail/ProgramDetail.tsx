import { useParams, Link } from "react-router-dom";
import AttendeesList from "../Attendees/AttendeesList";
import { type programsListProps } from "../Programs/ProgramsList";

const ProgramDetail: React.FC<programsListProps> = ({ programsList }) => {
  const { programId } = useParams();

  const getProgramDetail = (programId: any) => {
    return programsList.find((program: any) => programId === program.id);
  };
  const program = getProgramDetail(programId);

  return (
    <div className="ui container">
      <h2 className="ui header">{program?.name}</h2>

      <AttendeesList programDetail={program} />

      <Link to="/programs" className="ui small blue button">
        Back to the program list
        <i className="right chevron icon"></i>
      </Link>
    </div>
  );
};

export default ProgramDetail;
