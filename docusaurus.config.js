const path = require("path");

module.exports = {
  title: "Coronavirus Tracker Map Dashboard",
  tagline: "tagline...",
  url: "https://marcoslimacom.github.io",
  baseUrl: "/coronavirus-tracker-doc/",
  favicon: "img/logo.svg",
  organizationName: "marcoslimacom", // Usually your GitHub org/user name.
  projectName: "coronavirus-tracker-doc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Coronavirus Tracker Map Dashboard",
      logo: {
        alt: "Coronavirus Tracker Map Dashboard Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/requirements",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "docs/change-logs", label: "Change Logs", position: "left" },
        {
          href: "https://marcoslima.com",
          label: "Marcos Lima Website",
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
              label: "Requirements",
              to: "docs/requirements",
            },
            {
              label: "How to use",
              to: "docs/how-to-use",
            },
            {
              to: "docs/change-logs",
              label: "Change Logs",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Me",
              href: "https://www.marcoslima.com/contact",
            },
            {
              label: "Support",
              href: "https://www.marcoslima.com/support",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcos Lima.`,
    },
    disableDarkMode: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/marcoslimacom/coronavirus-tracker-doc/edit/develop",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
