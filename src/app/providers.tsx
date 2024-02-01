// app/providers.tsx
"use client";

import { AuthContextProvider } from "@/contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ChakraProvider>
  );
}
