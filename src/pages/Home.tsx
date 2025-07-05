import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Sparkles, BookOpen } from "lucide-react";

const Home = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          <Sparkles className="h-5 w-5 animate-pulse" />
          Welcome to My Library
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Discover, Read, and Borrow Amazing Books 📚
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
          Easily explore our collection, manage your borrowings, and enjoy
          seamless book tracking in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/books">
            <Button size="lg" className="text-base">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
