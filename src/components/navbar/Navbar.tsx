import { Link, useLocation } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "All Books", to: "/books" },
    { name: "Add Book", to: "/create-book" },
    { name: "Borrow Summary", to: "/borrow-summary" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          📚 My Library
        </Link>

        {/* Navigation Links */}
        <div className="space-x-2 sm:space-x-4 hidden sm:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button
                variant={pathname === item.to ? "outline" : "ghost"}
                className={cn(
                  "font-medium",
                  pathname === item.to
                    ? "text-white bg-primary"
                    : "hover:text-primary"
                )}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="ml-auto sm:ml-0">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
