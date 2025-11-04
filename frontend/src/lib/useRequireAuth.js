// File: src/hooks/useRequireAuth.ts
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";

export function useRequireAuth() {
  const router = useRouter();
  const { data: session, isPending: isLoading, error } = authClient.useSession();

  useEffect(() => {
    if (!isLoading && !session) {
      router.push("/login");
    }
  }, [session, isLoading, router]);

  return { session, isLoading, error };
}
