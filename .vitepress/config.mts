import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/synapse-docs",
  title: "Synapse",
  description: "Synapse Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Vision",
        collapsed: false,
        items: [
          { text: "Overview", link: "/vision/overview" },
          { text: "Problem", link: "/vision/problem" },
          { text: "Solution", link: "/vision/solution" },
          { text: "Principles", link: "/vision/principles" },
          { text: "Lean Canvas", link: "/vision/lean-canvas" },
        ],
      },

      {
        text: "Product",
        collapsed: false,
        items: [
          { text: "Architecture", link: "/product/architecture" },
          { text: "Modules", link: "/product/modules" },
          { text: "Data Model", link: "/product/data-model" },
          { text: "Workflows", link: "/product/workflows" },
          { text: "Roadmap", link: "/product/roadmap" },
        ],
      },

      {
        text: "Features",
        collapsed: true,
        items: [
          { text: "Accounts", link: "/features/accounts" },
          { text: "Permissions", link: "/features/permissions" },
          { text: "Courses", link: "/features/courses" },
          { text: "Tracks", link: "/features/tracks" },
          { text: "Files", link: "/features/files" },
          { text: "Search", link: "/features/search" },
          { text: "Chat", link: "/features/chat" },
          { text: "Notifications", link: "/features/notifications" },
          { text: "Workspaces", link: "/features/workspaces" },
          { text: "Extensions", link: "/features/extensions" },
        ],
      },

      {
        text: "Developer",
        collapsed: true,
        items: [
          { text: "Setup", link: "/dev/setup" },
          { text: "API", link: "/dev/api" },
          { text: "Backend", link: "/dev/backend" },
          { text: "Frontend", link: "/dev/frontend" },
          { text: "Deployment", link: "/dev/deployment" },
        ],
      },
    ],
  },
});
