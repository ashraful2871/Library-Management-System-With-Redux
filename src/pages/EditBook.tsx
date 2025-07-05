import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import { useEffect } from "react";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookByIdQuery(id);
  const bookData = book?.data;
  const [updateBook, { isLoading: isUpdating, isError }] =
    useUpdateBookMutation();

  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    },
  });

  useEffect(() => {
    if (bookData) {
      form.reset({
        title: bookData.title || "",
        author: bookData.author || "",
        genre: bookData.genre || "",
        isbn: bookData.isbn || "",
        description: bookData.description || "",
        copies: bookData.copies || 0,
      });
    }
  }, [bookData, form]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      await updateBook({ id, data: values }).unwrap();
      navigate("/books");
    } catch (err) {
      console.error("Failed to update book:", err);
    }
  };

  if (isLoading) return <p>Loading book data...</p>;

  if (isError) return <p>Error loading book: {isError}</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Book title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Author */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Genre */}
          <FormField
            control={form.control}
            name="genre"
            rules={{ required: "Genre is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* ISBN */}
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="ISBN number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write description..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Copies */}
          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="1"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditBook;
