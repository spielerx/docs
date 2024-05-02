import FrameworkCard, { IFrameworkCard } from "./framework-card";
import MongoDBIcon from "../assets/mongodb.svg";
import RedisIcon from "../assets/redis.svg";
import PostgreSQLIcon from "../assets/postgresql.svg";
import MySQLIcon from "../assets/mysql.svg";
import GrafanaIcon from "../assets/grafana.svg";
import VaultIcon from "../assets/vault.svg";
import DrupalIcon from "../assets/drupal.svg";
import JupyterIcon from "../assets/jupyter.svg";
import VSCodeIcon from "../assets/vscode.svg";
import MinecraftIcon from "../assets/minecraft.svg";
import TensorFlowIcon from "../assets/tensorflow.svg";
import styles from "../styles/framework.module.css";

const MARKETPLACE_APP_LIST = [
  {
    path: "/marketplace-guide/mongodb",
    logo: MongoDBIcon,
    alt: "mongodb",
    title: "Deploy MongoDB",
  },
  {
    path: "/marketplace-guide/redis",
    logo: RedisIcon,
    alt: "redis",
    title: "Deploy Redis",
  },
  {
    path: "/marketplace-guide/postgresql",
    logo: PostgreSQLIcon,
    alt: "postgresql",
    title: "Deploy PostgreSQL",
  },
  {
    path: "/marketplace-guide/mysql",
    logo: MySQLIcon,
    alt: "mysql",
    title: "Deploy MySQL",
  },
  {
    path: "/marketplace-guide/grafana",
    logo: GrafanaIcon,
    alt: "grafana",
    title: "Deploy Grafana",
  },
  {
    path: "/marketplace-guide/vault",
    logo: VaultIcon,
    alt: "vault",
    title: "Deploy Vault",
  },
  {
    path: "/marketplace-guide/drupal",
    logo: DrupalIcon,
    alt: "drupal",
    title: "Deploy Drupal",
  },
  {
    path: "/marketplace-guide/jupyter",
    logo: JupyterIcon,
    alt: "jupyter",
    title: "Deploy Jupyter Notebook",
  },
  {
    path: "/marketplace-guide/vscode",
    logo: VSCodeIcon,
    alt: "vscode",
    title: "Deploy VSCode Server",
  },
  {
    path: "/marketplace-guide/minecraft",
    logo: MinecraftIcon,
    alt: "minecraft",
    title: "Deploy Minecraft Server",
  },
  {
    path: "/marketplace-guide/tensorflow",
    logo: TensorFlowIcon,
    alt: "tensorflow",
    title: "Deploy TensorFlow GPU",
  },
];

const Marketplace = () => {
  return (
    <main>
      <section className={styles.section}>
        {MARKETPLACE_APP_LIST.map((item: IFrameworkCard, i) => (
          <FrameworkCard
            key={i}
            path={item.path}
            logo={item.logo}
            alt={item.alt}
            title={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Marketplace;
