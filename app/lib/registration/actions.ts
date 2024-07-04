'use server'

import { redirect } from 'next/navigation'
import { z } from "zod";
import { HttpClient } from "../http-client";
import { UserRoutes } from '../routes/users.routes';

const StudentRegistrationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export async function registerStudent(formData: FormData) {
    const { email, password } = StudentRegistrationSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword")
    });
    const data = await HttpClient.postRequest(UserRoutes.register, { name: "Emsx User", roleName: "Student", email, password });
    redirect("/login");
}