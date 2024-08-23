import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const FIZZ_TYPE_LIST = [
  {
    path: "/fizz/hardware-requirements",
    emoji: "🗄️",
    title: "Hardware Requirements",
    body: "Software & Hardware Requirement.",
  },
  {
    path: "/fizz/setup-fizz",
    emoji: "🌐",
    title: "Setup Fizz Node",
    body: "Set up a Spheron fizz node.",
  },
  {
    path: "/fizz/reward-details",
    emoji: "💰",
    title: "Reward Details",
    body: "Fizz node reward details.",
  },
  {
    path: "https://fizz.spheron.network",
    emoji: "💻",
    title: "Dashboard",
    body: "Checkout your fizz node dashboard.",
  },
];

const FizzNode = () => {
  return (
    <main>
      <section className={styles.section}>
        {FIZZ_TYPE_LIST.map((item: IQuickStartCard, index) => (
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

export default FizzNode;
