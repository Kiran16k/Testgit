import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div>
        <Link to="/Counter">Click here for Counter!!</Link>
      </div>
      <div>
        <Link to="/Parent">Click here for Parent and Child </Link>
      </div>
      <div>
        <Link to="/City">Click here for cities</Link>
      </div>
    </div>
  );
};
export default DashBoard;
