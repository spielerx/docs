import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const TOOLING_LIST = [
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
  {
    path: "/toolings/cloud-sdk",
    emoji: "📼",
    title: "Cloud SDK",
    body: "Designed to streamline your cloud",
  },
  {
    path: "/toolings/github-action",
    emoji: "👾",
    title: "Github Action",
    body: "Action For Updating Cluster Instances",
  },
  {
    path: "/toolings/terraform",
    emoji: "🗂️",
    title: "Cloud Terraform",
    body: "Designed for easier Infra deployment",
  },
];

const SDK = () => {
  return (
    <main>
      <section className={styles.section}>
        {TOOLING_LIST.map((item: IQuickStartCard, index) => (
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

export default SDK;
