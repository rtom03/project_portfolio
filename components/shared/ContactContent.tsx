
"use client"

import Header from './Header'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "must must be at least 2 characters.",
    }),
    message: z.string().min(5, {
        message: "Username must be at least 2 characters.",
    }),
})

const ContactContent = () => {
    // ...
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <div className='ml-32 '>

            <Header data='Contact Me ✉️' />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your name</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter your name..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your email address</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter your email address..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="enter your message..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-[600px]'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactContent;