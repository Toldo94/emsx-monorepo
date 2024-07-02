'use server'

import { z } from "zod";

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

    try {
        const response = await fetch('https://musical-sniffle-wv6v9r4jjw4c99g9-3000.app.github.dev/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Emsx User",
                email: email,
                password: password,
                roleName: "Student"
            })
        })
        console.log("Status: ", response.ok)

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Ovaj? Error: ", error)

    }


}