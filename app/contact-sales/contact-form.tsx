"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Computer, ScreenShare, Share, Smile } from "lucide-react";

import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "How to use Bird",
    "Other",
  ]),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help:
    | "Evaluate Bird for my company"
    | "Learn More"
    | "Get a Quote"
    | "How to use Bird"
    | "Other";
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      company_size: "1-10",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
    style={{
      height: "100%",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}
    
    className="md:flex  justify-center pt-20 px-8">
            <div>
          <div className="text-5xl font-medium w-2/3">
            Contact our sales team
          </div>
          <div
            className="
              
              py-4
              text-gray-500
                    "
          >
            Let&apos;s talk about how Bird can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
            <div className="flex gap-4 border-b ">
              <PiCheckLight className="text-2xl " />

              <div className=" font-normal pb-4 w-80">
              One flexible tool for your entire company to share knowledge, ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <PiCheckLight className="text-2xl " />

              <div className=" font-normal pb-4 w-80">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4  ">
              <PiCheckLight className="text-2xl " />

              <div className=" font-normal pb-4 w-80">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
        </div>
  

      <Form {...form}>
        {!submitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
            space-y-4
                     
                        "
          >
            <div className="md:flex items-center gap-6 ">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm ">
                        First name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="w-60 text-sm ">Last name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className=" text-sm   ">
                    Work email *
                    </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />



<FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm">
                    Company name *
                    </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
   

            <FormField
              control={form.control}
              name="company_size"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="w-60 text-sm ">
                    Company size*
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="1-10">1-10</SelectItem>
                      </div>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm   ">
                   How can we help ? 
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="Evaluate Bird for my company">
                          Evaluate Bird for my company
                        </SelectItem>
                      </div>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                      <SelectItem value="How to use Bird">
                        How to use Bird
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="info"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="w-60 text-sm   ">
                   Anything else ? 
                  </FormLabel>
                  <FormControl>
                    <Textarea style={{ height: "100px" }} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center">
              <div>
                <Checkbox className="text-[#6c6684]" />
              </div>
              <div className="text-xs font-light  md:w-3/4 mb-1">
                I agree to Bird&apos; sending marketing communications related to bird 
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                className="
                            text-sm
                            font-light
                        
                            "
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <>
                  <div
          className="
        text-xl 
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
        >
          <div className="w-80">

          <Image
            src="/assets/MeditatingDoodle.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mx-auto"
          />

          <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10"> 
          We&apos;ve received your inquiry and will be contacting you via email shortly.
          </div>
      
        </div>
        </div>
          </>
        )}
      </Form>
    </div>
  );
}
