import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-base-100 p-4 flex gap-10 items-center">
      <h1 className="text-xl  font-bold">
        <Link to="/">MyApp</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/books" className="hover:text-yellow-300">
          All Books
        </Link>
        <Link to="/create-book" className="hover:text-yellow-300">
          Add Book
        </Link>
        <Link to="/borrow-summary" className="hover:text-yellow-300">
          Borrow Summary
        </Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
