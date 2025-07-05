import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t mt-10">
      <div className="container mx-auto px-4 py-8 space-y-4">
        {/* Logo & Slogan */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">📚 My Library</h2>
          <p className="text-sm text-muted-foreground">
            Discover. Read. Borrow.
          </p>
        </div>

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <Link to="/books" className="hover:text-primary transition-colors">
            All Books
          </Link>
          <Link
            to="/create-book"
            className="hover:text-primary transition-colors"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="hover:text-primary transition-colors"
          >
            Borrow Summary
          </Link>
        </div>

        <Separator />

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} My Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
