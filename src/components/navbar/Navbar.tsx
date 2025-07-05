import { Link, useLocation } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "All Books", to: "/books" },
    { name: "Add Book", to: "/create-book" },
    { name: "Borrow Summary", to: "/borrow-summary" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          📚 My Library
        </Link>

        {/* Center: Nav Menu (desktop only) */}
        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 space-x-2">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button
                variant={pathname === item.to ? "outline" : "ghost"}
                className={cn(
                  "font-medium  cursor-pointer",
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

        {/* Right: Theme Toggle (desktop) + Menu Button (mobile) */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>
          <div className="sm:hidden flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300 px-4",
          menuOpen ? "max-h-60 mt-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
              <Button
                variant={pathname === item.to ? "outline" : "ghost"}
                className={cn(
                  "w-full justify-start",
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
      </div>
    </nav>
  );
};

export default Navbar;
