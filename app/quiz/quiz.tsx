"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  age: z
    .coerce.number()
    .min(16, { message: "Age must be at least 16" })
    .max(80, { message: "Age must be less than 80" }),
  gender: z.enum(["male", "female"]),
  height: z.coerce.number().max(300, {
    message: "Height must be less than 300",
  }),
  weight: z.coerce.number().max(300, {
    message: "Weight must be less than 300",
  }),
  goal: z.enum(["lose", "gain"]),
  activitylevel: z.enum(["low", "medium", "high"]),
});

export default function Quiz() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const redir = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session === null || error) {
        router.push("/sign-in");
      }
    };
    redir();
  }, [router, supabase]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0,
      height: 0,
      weight: 0,
      gender: "male",
      goal: "lose",
      activitylevel: "low",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting values:", values);
  
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      console.error("Error fetching user:", userError);
      return;
    }
  
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        name: values.name,
        gender: values.gender,
        age: values.age,
        height: values.height,
        weight: values.weight,
        goal: values.goal,
        activitylevel: values.activitylevel,
      }, { onConflict: 'id' });
  
    if (error) {
      console.error("Supabase error:", error);
    } else {
      console.log("Data submitted successfully");
    }
    router.push("/dashboard");
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || "male"}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (in centimeters)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (in kilograms)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you want to achieve?</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || "gain"}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lose">Lose weight</SelectItem>
                  <SelectItem value="gain">Gain muscle</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="activitylevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity Level</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || "low"} // Controlled value with fallback
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
