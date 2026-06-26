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
};
