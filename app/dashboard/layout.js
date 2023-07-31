import Sidebar from "@/components/Sidebar";
import styles from "@/app/page.module.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "2 Dashboard",
  description: "2 Sample App Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.component__grid}>
          <div className={styles.sidebar__component}>
            <Sidebar />
          </div>
          <div className={styles.main__component}>{children}</div>
        </div>
      </div>
    </>
  );
}
