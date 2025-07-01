import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-base-100 p-4 flex gap-10 items-center">
      <h1 className="text-xl  font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/user" className="hover:text-yellow-300">
          user
        </Link>
        <Link to="/task" className="hover:text-yellow-300">
          Task
        </Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
