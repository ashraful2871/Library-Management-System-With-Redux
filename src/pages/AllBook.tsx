import Loader from "@/components/loading/Loader";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import BookTableList from "./BookTableList";

const AllBook = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-center text-primary">
        📚 All Books
      </h1>
      <BookTableList books={data.data} />
    </div>
  );
};

export default AllBook;
