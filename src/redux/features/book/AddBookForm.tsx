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
import { useCreateBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";
import { useTheme } from "@/components/theme-provider";
import Loader from "@/components/loading/Loader";

const AddBookForm = () => {
  const form = useForm();
  const [createBook, { isLoading }] = useCreateBookMutation();
  const { theme } = useTheme();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const res = await createBook(bookData).unwrap();
      if (res.success) {
        const swalWithBootstrapButtons = Swal.mixin({
          background: theme === "dark" ? "#151515" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          customClass: {
            confirmButton:
              "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2",
            cancelButton:
              "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
          title: "Created",
          text: `${res.message}`,
          icon: "success",
        });
        console.log("Created:", res);
        form.reset();
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <FormField
            control={form.control}
            rules={{ required: "title is required" }}
            name="title"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter book title"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Author */}
          <FormField
            control={form.control}
            rules={{ required: "author is required" }}
            name="author"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Author's name"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Genre */}
          <FormField
            control={form.control}
            rules={{ required: "Genre is required" }}
            name="genre"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">Fiction</SelectItem>
                    <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                    <SelectItem value="SCIENCE">Science</SelectItem>
                    <SelectItem value="HISTORY">History</SelectItem>
                    <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                    <SelectItem value="FANTASY">Fantasy</SelectItem>
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
            rules={{ required: "ISBN is required" }}
            name="isbn"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ISBN number"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Copies */}
          <FormField
            control={form.control}
            rules={{ required: "Copies number is required" }}
            name="copies"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Number of copies"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            rules={{ required: "Description is required" }}
            name="description"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a short description"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-sm text-red-500 mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button variant="secondary" type="submit" className="w-full mt-4">
            {isLoading ? <Loader></Loader> : "Create Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddBookForm;
