"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@src/components/Footer";
import { Navbar } from "@src/components/Navbar/NavBar";

import { theme } from "@src/theme";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Global Learning Bridge</title>
        <meta title="description" content="Learning Bridge" />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NextTopLoader color="red" />

            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
