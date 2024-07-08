import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/spheron-console/spheron-cli",
    emoji: "🖥️",
    title: "Spheron CLI",
    body: "Spheron CLI is a Command Line Interface tool",
  },
  {
    path: "/spheron-console/spheron-ctl",
    emoji: "🛠️",
    title: "Spheron CTL CLI",
    body: "Spheron CTL CLI",
  },
];

const SpheronConsole = () => {
  return (
    <main>
      <section className={styles.section}>
        {CLUSTER_TYPE_LIST.map((item: IQuickStartCard, index) => (
          <QuickStartCard
            key={index}
            path={item.path}
            emoji={item.emoji}
            title={item.title}
            body={item.body}
          />
        ))}
      </section>
    </main>
  );
};

export default SpheronConsole;
