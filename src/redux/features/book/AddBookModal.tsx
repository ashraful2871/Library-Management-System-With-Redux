import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import { useCreateBookMutation } from "@/redux/api/baseApi";

const AddBookModal = () => {
  const form = useForm();

  const [createBook, { isLoading, isError }] = useCreateBookMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // console.log(bookData);
    // dispatch(addBook(bookData as IBook));
    const res = await createBook(bookData).unwrap();
    console.log(res);
    console.log("ERROR", isError);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Book</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="title"
                        {...field}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />{" "}
              {/* author */}
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Author"
                        {...field}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />{" "}
              {/* genre */}
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />{" "}
              {/* isbn */}
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ISBN No"
                        {...field}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />{" "}
              {/* title */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="description"
                        {...field}
                        value={field.value || ""}
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />{" "}
              {/* copies */}
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="copies"
                        {...field}
                        value={field.value || ""}
                        type="number"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />{" "}
              <DialogFooter>
                <Button className="mt-6" type="submit">
                  {isLoading ? "Creating..." : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBookModal;
