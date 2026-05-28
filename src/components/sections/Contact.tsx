// src/components/sections/Contact.tsx
import { useEffect, useState } from "react";
import { Check, Loader2, Send, Hammer, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isSuccess) return;
        const timer = setTimeout(() => setIsSuccess(false), 5000);
        return () => clearTimeout(timer);
    }, [isSuccess]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        const formData = new FormData(e.currentTarget);

        try {
            const response: Response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto p-6 space-y-6">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <h2 className="text-4xl font-bold tracking-tight text-white">Get in touch</h2>
                    <span className="inline-flex items-center gap-1 rounded-full border border-pink-500/30 bg-pink-500/10 px-2.5 py-0.5 text-xs font-medium text-pink-400">
                        <Hammer className="size-3" /> Let's create something
                    </span>
                </div>
                <p className="text-zinc-400 max-w-[600px]">
                    Have a project in mind or just want to say hi? I'm currently open to new opportunities and collaborations.
                </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 space-y-6 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-zinc-300">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="bg-zinc-900/50 border-zinc-800 text-white focus-visible:ring-pink-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-zinc-300">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                className="bg-zinc-900/50 border-zinc-800 text-white focus-visible:ring-pink-500/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-zinc-300">Subject</Label>
                        <Select name="subject" required>
                            <SelectTrigger className="bg-zinc-900/50 border-zinc-800 text-white focus-visible:ring-pink-500/50">
                                <SelectValue placeholder="What's this about?" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
                                <SelectItem value="collaboration">Collaboration / Project</SelectItem>
                                <SelectItem value="employment">Job Opportunity</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-zinc-300">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project details..."
                            required
                            rows={5}
                            className="bg-zinc-900/50 border-zinc-800 text-white focus-visible:ring-pink-500/50 resize-none"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-400 font-medium">{error}</p>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "w-full sm:w-auto bg-pink-500 text-zinc-950 font-semibold hover:bg-pink-400 transition-all duration-300 shadow-md shadow-pink-500/10",
                            isSuccess && "bg-emerald-500 hover:bg-emerald-500 text-zinc-950"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : isSuccess ? (
                            <>
                                <Check className="mr-2 h-4 w-4" />
                                Message Sent!
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>
                </form>

                {/* CV Integration Block */}
                <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-400 text-center sm:text-left">
                        Prefer a direct copy of my qualifications?
                    </p>
                    <Button
                        asChild
                        variant="outline"
                        className="border-pink-500/30 text-zinc-200 hover:bg-pink-500/10 hover:text-white transition-all duration-300 w-full sm:w-auto"
                    >
                        <a href="/CV_Keisha_Paraiso.pdf" target="_blank" download>
                            <FileDown className="mr-2 h-4 w-4 text-pink-400" />
                            Download My CV
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
