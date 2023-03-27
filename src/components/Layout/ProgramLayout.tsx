interface childrenProps {
  children: JSX.Element | JSX.Element[];
  mode: string;
}
const ProgramLayout = ({ mode, children }: childrenProps) => {
  return (
    <div className="column">
      <div className="ui raised segment">
        <div className="ui teal ribbon label">{mode}</div>
        {children}
      </div>
    </div>
  );
};

export default ProgramLayout;
