'use server'

import { redirect } from 'next/navigation'
import { z } from "zod";

import EncryptionService from '../encryption/encryption.service';
import { UserRole } from '../user/user-role.enum';
import dbConnect from '@/lib/db';
import AuthUser from '@/models/User';


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

    const hashedPassword = await EncryptionService.hash(password);

    await dbConnect();

    await AuthUser.create({
        email,
        password: hashedPassword,
        roleName: UserRole.Student
    });
    
    redirect("/login");
}