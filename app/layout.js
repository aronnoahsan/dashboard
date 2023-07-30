import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "Sample App Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
