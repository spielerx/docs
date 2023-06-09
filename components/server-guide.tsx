import FrameworkCard, { IFrameworkCard } from "./framework-card";
import DjangoIcon from "../assets/django.svg";
import NextIcon from "../assets/nextjs.svg";
import RustIcon from "../assets/rust.svg";
import GoIcon from "../assets/go.svg";
import RailsIcon from "../assets/rails.svg";
import ExpressIcon from "../assets/express.svg";
import styles from "../styles/framework.module.css";

const SERVER_LIST = [
  {
    path: "/server-guide/nextjs",
    logo: NextIcon,
    alt: "nextjs",
    title: "Deploy Next App",
  },
  {
    path: "/server-guide/rust",
    logo: RustIcon,
    alt: "rust",
    title: "Deploy Rust App",
  },
  {
    path: "/server-guide/django",
    logo: DjangoIcon,
    alt: "django",
    title: "Deploy Django App",
  },
  {
    path: "/server-guide/go",
    logo: GoIcon,
    alt: "go",
    title: "Deploy Go App",
  },
  {
    path: "/server-guide/rails",
    logo: RailsIcon,
    alt: "rails",
    title: "Deploy Rails App",
  },
  {
    path: "/server-guide/express",
    logo: ExpressIcon,
    alt: "express",
    title: "Deploy Express App",
  },
];

const ServerGuide = () => {
  return (
    <main>
      <section className={styles.section}>
        {SERVER_LIST.map((item: IFrameworkCard, i) => (
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

export default ServerGuide;
