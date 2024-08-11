import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({ subsets: ["latin"] });

export const metadata = {
  title: "Assesment",
  description: "Created by Basma Elmihy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={afacad.className}>{children}</body>
    </html>
  );
}
