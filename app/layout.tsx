import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Dish Palette Fullstack",
  description: "Find the perfect recipe for your next meal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorPrimary: "#16A34A", // Your primary brand color
        colorBackground: "#ffffff", // Background color
        colorText: "#333333", // Text color
        fontFamily: "Helvetica, Arial, sans-serif", // Font family
        fontSize: "16px", // Font size
      },
    }}>
      <html lang="en">
        <body className={`${poppins.className} bg-gray-100`}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
