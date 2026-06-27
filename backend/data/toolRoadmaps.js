const toolRoadmaps = {
  Framer: {
    overview: {
      title: "Framer",

      category: "Website Builder",

      tagline: "Design and publish responsive websites visually.",

      description:
        "Framer is a visual website builder that allows designers and developers to create interactive, responsive websites without writing much code.",

      difficulty: "Intermediate",

      estimatedTime: "2–3 Weeks",

      bestFor: ["Frontend Developers", "UI Designers", "Freelancers"],

      prerequisites: ["Basic UI Design", "Responsive Design"],

      useCases: [
        "Portfolio Websites",
        "Landing Pages",
        "Marketing Sites",
        "Interactive Prototypes",
      ],
    },

    journey: [
      {
        id: "workspace",

        title: "Workspace",

        description:
          "Understand the Framer workspace before building anything.",

        duration: "20 min",

        children: [
          {
            title: "Pages",

            description: "Learn how pages organize your website.",

            steps: ["Create a page", "Rename page", "Navigate between pages"],
          },

          {
            title: "Layers",

            description: "Understand how layers organize your design.",
          },

          {
            title: "Assets",

            description: "Manage images, icons and reusable assets.",
          },
        ],
      },

      {
        id: "components",

        title: "Components",

        description: "Learn reusable UI.",

        duration: "2 hours",

        children: [
          {
            title: "Create Component",

            steps: [
              "Select Frame",
              "Create Component",
              "Rename",
              "Reuse Instance",
            ],
          },

          {
            title: "Variants",
          },

          {
            title: "Properties",
          },
        ],
      },

      {
        id: "cms",

        title: "CMS",

        children: [
          {
            title: "Collections",
          },

          {
            title: "Fields",
          },

          {
            title: "Dynamic Pages",
          },
        ],
      },
    ],

    resources: [
      {
        title: "Official Documentation",
        url: "https://www.framer.com/docs/",
      },

      {
        title: "Framer YouTube Channel",
        url: "...",
      },
    ],
  },

  Cursor: {
    overview: {
      title: "Cursor",

      category: "AI Code Editor",

      tagline: "Build software faster with AI.",

      description:
        "Cursor is an AI-powered code editor built on VS Code that helps developers write, edit, and understand code using AI.",

      difficulty: "Beginner",

      estimatedTime: "1–2 Weeks",

      bestFor: ["Frontend Developers", "Backend Developers", "Students"],

      prerequisites: ["Basic Programming", "VS Code Basics"],

      useCases: ["AI Coding", "Debugging", "Code Generation", "Refactoring"],
    },

    journey: [
      {
        id: "setup",

        title: "Setup",

        description: "Install and configure Cursor.",

        duration: "20 min",

        children: [
          {
            title: "Install Cursor",

            description: "Download and install Cursor.",

            steps: ["Download Cursor", "Install", "Launch Editor"],
          },

          {
            title: "Import VS Code Settings",

            description: "Reuse your extensions and settings.",

            steps: ["Import Extensions", "Import Settings"],
          },

          {
            title: "Sign In",

            description: "Connect your Cursor account.",

            steps: ["Create Account", "Login", "Choose Plan"],
          },
        ],
      },

      {
        id: "editor",

        title: "Editor Basics",

        description: "Learn the Cursor interface.",

        duration: "1 hour",

        children: [
          {
            title: "Chat",

            description: "Ask questions about your code.",

            steps: ["Open Chat", "Ask Questions", "Reference Files"],
          },

          {
            title: "Composer",

            description: "Generate and edit multiple files.",

            steps: ["Create Prompt", "Generate Code", "Apply Changes"],
          },

          {
            title: "Inline Edit",

            description: "Edit code directly using AI.",

            steps: ["Select Code", "Edit with AI", "Accept Changes"],
          },
        ],
      },

      {
        id: "workflow",

        title: "AI Workflow",

        description: "Use Cursor efficiently in real projects.",

        duration: "2 hours",

        children: [
          {
            title: "Agent Mode",

            description: "Let Cursor perform multi-step tasks.",

            steps: ["Enable Agent", "Give Task", "Review Output"],
          },

          {
            title: "Codebase Search",

            description: "Understand your project using AI.",

            steps: ["Search Files", "Ask About Code", "Navigate Results"],
          },

          {
            title: "Refactoring",

            description: "Improve existing code.",

            steps: ["Select Function", "Refactor", "Review Changes"],
          },
        ],
      },
    ],

    resources: [
      {
        title: "Cursor Documentation",
        url: "https://cursor.com/docs",
      },

      {
        title: "Cursor YouTube",
        url: "https://www.youtube.com/@cursor_ai",
      },
    ],
  },
};

module.exports = toolRoadmaps;
