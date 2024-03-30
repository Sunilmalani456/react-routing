import { useParams } from "react-router-dom";

const TeamPage = () => {
  const { teamId } = useParams();

  return <div>Team id is : {teamId}</div>;
};

export default TeamPage;
