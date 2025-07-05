import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Sparkles, BookOpen } from "lucide-react";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import BookCard from "@/components/book-card/BookCard";
import type { IBook } from "@/type";

const Home = () => {
  const { data } = useGetBooksQuery(undefined);

  return (
    <section className="min-h-[80vh]   bg-background ">
      <div className=" mx-auto flex flex-col gap-10 items-center">
        {/* Text Content */}
        <div className="text-center space-y-6">
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
          <div className="flex justify-center gap-4">
            <Link to="/books">
              <Button size="lg" className="text-base">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Books
              </Button>
            </Link>
          </div>
        </div>

        {/* Book Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data?.data?.slice(0, 5).map((book: IBook) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
