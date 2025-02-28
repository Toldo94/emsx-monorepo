import React, { Suspense } from "react";

import LoginForm from "./login-form";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
