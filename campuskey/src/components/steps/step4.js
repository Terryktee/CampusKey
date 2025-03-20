import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  studentNumber: z.string().regex(/^[a-zA-Z]\d{8}[a-zA-Z]$/,
    {
        message:"Invalid student number format (e.g., N02422803X)",
    } ),
  studentYear: z.string().min(4, {
    message:"Enter valid  year",
  }).max(4,{
    message:"Enter valid year < 5",
  }), 
  verificationCode: z.string().min(1, {
    message:"Verification code is required",
  }),
});

export default function VerificationForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentNumber: "",
      studentYear: "",
      verificationCode: "",
    },
  });

  function onSubmit(values) {
    console.log("Form Submitted:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
        {/* Student Number */}
        <FormField
          control={form.control}
          name="studentNumber" 
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Number</FormLabel>
              <Input {...field} placeholder="Student Number" />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student Year */}
        <FormField
          control={form.control}
          name="studentYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Year</FormLabel>
              <Input {...field} placeholder="Student Year" />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Verification Code */}
        <FormField
          control={form.control}
          name="verificationCode" 
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <Input {...field} placeholder="Code" />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-8">
          <Button type="submit">Send Code</Button>
        </div>
      </form>
    </Form>
  );
}
