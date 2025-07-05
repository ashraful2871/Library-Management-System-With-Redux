import BookCard from "@/components/book-card/BookCard";
import Loader from "@/components/loading/Loader";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type";

const AllBook = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h1>i am all book</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.data.map((book: IBook) => (
          <BookCard book={book} key={book._id}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
