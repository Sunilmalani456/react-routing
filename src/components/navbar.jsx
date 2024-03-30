import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-4 font-bold max-sm: px-4">
      <div className="flex w-full max-w-md justify-between">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/players">Players</Link>
          <Link to="/teams">Teams</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
