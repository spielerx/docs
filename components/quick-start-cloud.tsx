import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/compute",
    emoji: "✈️",
    title: "Cloud Guide",
    body: "Deploy compute instances with one click.",
  },
  {
    path: "/billing",
    emoji: "💸",
    title: "Billing",
    body: "Upgrade to Pro to enjoy additional benefits.",
  },
  {
    path: "/server-guide",
    emoji: "📌",
    title: "Server Guide",
    body: "Learn how to deploy your server.",
  },
  {
    path: "/marketplace-guide",
    emoji: "🏪",
    title: "Marketplace Guide",
    body: "Deploy pre-installed apps and develope fast.",
  },
  {
    path: "/toolings/cloud-api",
    emoji: "🔌",
    title: "Cloud API",
    body: "Take a look at how the Cloud API works.",
  },
  {
    path: "/toolings/cloud-cli",
    emoji: "💬",
    title: "Cloud CLI",
    body: "Create & deploy dapps right from your terminal.",
  },
];

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        {QUICK_START_LIST.map((item: IQuickStartCard, index) => (
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

export default QuickStart;
