import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import UserGraph from "@/components/charts/UserGraph";
import RadarChartGraph from "@/components/charts/RadarChart";
import BarChartGraph from "@/components/charts/BarChart";
import RadialGraph from "@/components/charts/RadialGraph";

Navbar.metadata = {
  title: "Dashboard",
  description: "Sample App Dashboard",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.component__grid}>
        <div className={styles.sidebar__component}>
          <Sidebar />
        </div>
        <div className={styles.main__component}>
          <div>
            <h1 className={styles.h1__style}>Hi! Welcome to your dashboard</h1>
          </div>

          <div className={styles.graph__component__flex}>
            <div className={styles.graph__component}>
              <h2 className={styles.h2__style}>User Growth</h2>
              <UserGraph />
            </div>
            <div className={styles.graph__component}>
              <h2 className={styles.h2__style}>Subjects</h2>
              <RadarChartGraph />
            </div>
          </div>
          {/*  */}
          <div className={styles.gap} />
          <div className={styles.graph__component__flex}>
            <div className={styles.graph__component}>
              <h2 className={styles.h2__style}>Page Views</h2>
              <BarChartGraph />
            </div>
            <div className={styles.graph__component}>
              <h2 className={styles.h2__style}>Retention</h2>
              <RadialGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
