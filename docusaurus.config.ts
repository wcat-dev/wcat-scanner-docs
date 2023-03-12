module.exports = {
  title: "WCAT-Scanner Docs",
  tagline: "Learn how to consume, build, and deploy with WCAT-Scanner.",
  url: "https://docs.wcat.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wcat-org",
  projectName: "docs",
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: "WCAT-Scanner",
      logo: {
        alt: "WCAT-Scanner Logo",
        src: "img/logo.svg",
        style: { background: "transparent" },
      },
      items: [
        {
          to: "documentation/",
          activeBasePath: "documentation",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/wcat-org/wcat-scanner-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "documentation",
            },
            {
              label: "Contact",
              to: "documentation/contact/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/wcat-scanner",
            },
            {
              label: "Discord",
              href: "https://discord.gg/tmCzndrmMm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/wcat-org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://blog.wcat.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/wca-org/wcat-scanner-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WCAT-Scanner`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "documentation",
          sidebarPath: require.resolve("./src/sidebars.js"),
          editUrl: "https://github.com/wcat-org/wcat-scanner-docs/edit/main",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/wcat-org/wcat-scanner-docs/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
