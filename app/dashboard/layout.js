import Sidebar from "@/components/Sidebar";
// import "../page.module.css";

export const metadata = {
  title: "2 Dashboard",
  description: "2 Sample App Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
