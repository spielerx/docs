import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Spheron</span>,
  project: {
    link: "https://github.com/argoapp-live",
  },
  chat: {
    link: "https://discord.com/invite/ahxuCtm",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template", // documentation repo for edit this page
  feedback: {
    content: null,
  },
  footer: {
    text: "Spheron Protocol Docs",
  },
};

export default config;
