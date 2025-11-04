// File: src/lib/auth-client.ts
"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
  // you might also pass other options if needed (fetchOptions, etc)
});

// Optionally export helpers:
export const { signIn, signUp, signOut, useSession } = authClient;
