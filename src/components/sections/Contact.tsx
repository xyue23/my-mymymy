// src/components/sections/Contact.tsx

import { useEffect, useState } from "react";

import { Check, Loader2, Send, Hammer } from "lucide-react";

import { createPortal } from "react-dom";

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

