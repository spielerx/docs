import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/spheron-cli/cloud-cli",
    emoji: "🖥️",
    title: "Cloud CLI",
    body: "Cloud CLI is for CLoud API interaction.",
  },
  {
    path: "/spheron-cli/protocol-cli",
    emoji: "🛠️",
    title: "Protocol CLI",
    body: "Protocol CLI is for Protocol interaction.",
  },
];

const SpheronCLI = () => {
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

export default SpheronCLI;
