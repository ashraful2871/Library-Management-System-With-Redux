"use client";

import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { useParams } from "react-router";
import { useBorrowBookByIdMutation } from "@/redux/api/baseApi";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BorrowBook = () => {
  const [borrowBookById, { isLoading }] = useBorrowBookByIdMutation();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [dateError, setDateError] = React.useState(false);

  //   const [date, setDate] = useState(new Date());
  const { id } = useParams();
  const form = useForm({
    defaultValues: {
      book: id,
      quantity: 0,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (!date) {
      setDateError(true);
      return;
    }
    setDateError(false);

    const borrowData = {
      ...values,
      dueDate: date,
    };
    try {
      console.log("Borrow Data:", borrowData);
      // Call API here

      const res = await borrowBookById(borrowData).unwrap();
      console.log(res);
      if (res.success === true) {
        form.reset({
          book: id,
          quantity: 0,
        });
        setDate(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl space-y-6">
      <h1 className="text-2xl font-bold text-center text-primary">
        📚 Borrow Book
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Book ID (disabled) */}
          <FormField
            control={form.control}
            name="book"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book ID</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Quantity */}
          <FormField
            control={form.control}
            rules={{ required: "Quantity number is required" }}
            name="quantity"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Copies Of Book"
                    type="number"
                    min={1}
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
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

          {/* Due Date */}
          <FormItem>
            <FormLabel>Due Date</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className={cn(
                    "justify-between font-normal w-full",
                    !date && "text-muted-foreground",
                    dateError && "border-red-500"
                  )}
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                    setDateError(false);
                  }}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
            {dateError && (
              <p className="text-sm text-red-500 mt-1">
                Please select a due date
              </p>
            )}
          </FormItem>

          <Button type="submit" className="w-full">
            {isLoading ? "Borrowing...." : "Confirm Borrow"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BorrowBook;
