/* eslint-disable no-unused-vars */
import { useLocation, useSearchParams } from "react-router-dom";

const Players = () => {
  const location = useLocation(); // mean current location
  const query = location.search; // mean current search query
  const [searchParams] = useSearchParams(query); // mean current search params

  const teamId = searchParams.get("teamId");
  // console.log({ location, searchParams });
  return <div className="container">Players: {teamId}</div>;
};

export default Players;
