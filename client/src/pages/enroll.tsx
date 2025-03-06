import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnrollmentSchema } from "@shared/schema";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Enroll() {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(insertEnrollmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/enroll", data);
    },
    onSuccess: () => {
      toast({
        title: "Enrollment submitted",
        description: "We'll contact you shortly to confirm your enrollment.",
      });
      form.reset();
    },
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Begin Your Journey</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
              <Input
                {...form.register("name")}
                placeholder="Full Name"
              />
              <Input
                {...form.register("email")}
                type="email"
                placeholder="Email"
              />
              <Input
                {...form.register("phone")}
                placeholder="Phone"
              />
              <Input
                {...form.register("program")}
                placeholder="Preferred Program"
              />
              <Input
                {...form.register("message")}
                placeholder="Additional Message"
              />
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit Enrollment"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
