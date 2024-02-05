'use client';

import React, { startTransition, useState } from 'react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sendNewsletter } from '@/actions/mailActions';
import { emailSchema } from '@/schemas/mailSchemas';
import { ArrowRight } from 'lucide-react';



export const SimpleNewsletter = () => {
  const [success, setSuccess] = useState(true);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data: z.infer<typeof emailSchema>) => {
    startTransition(() => {
      form.reset();
      sendNewsletter(data);
      //Logic to make sure message was sent

      setSuccess(true);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex items-center justify-center h-full bg-[#07384A] px-2 mt-4 sm:mt-0 py-4 sm:py-0 sm:px-0 '>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <div className='flex items-center'>
                    <Input type="email" className='bg-[#07384A] md:w-[300px] focus:outline-none focus:border-none border-0 text-white placeholder:text-white/65 placeholder:text-sm sm:placeholder:text-xs' placeholder="Please enter your email address" {...field} />
                    <Button className='bg-[#07384A] text-4xl'><ArrowRight /></Button>
                  </div>
                </FormControl>
                <FormMessage className='text-xs mt-4' />
              </FormItem>
            </>
          )}
        />
        {/* {!success && <p className='text-green-500 mt-4 mb-0'>Message sent!</p>} */}
      </form>
    </Form>
  );
};

