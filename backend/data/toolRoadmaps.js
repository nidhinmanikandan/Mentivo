const toolRoadmaps = {
  Figma: {
    title: "Figma",

    description:
      "Professional UI/UX design tool used for interface design, prototyping and collaboration.",

    logoDomain: "figma.com",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=figma.com",

    roadmap: [
      {
        id: "figma",
        parent: null,

        title: "Figma",

        description: "Design interfaces collaboratively.",

        steps: [],
      },

      {
        id: "frames",
        parent: "figma",

        title: "Frames",

        description: "Create the main design area.",

        steps: ["Press F", "Choose a frame size", "Start designing"],
      },

      {
        id: "auto-layout",
        parent: "frames",

        title: "Auto Layout",

        description: "Arrange elements automatically.",

        steps: ["Select two layers", "Right Click", "Add Auto Layout"],
      },

      {
        id: "components",
        parent: "frames",

        title: "Components",

        description: "Create reusable UI elements.",

        steps: ["Select object", "Create Component", "Reuse anywhere"],
      },

      {
        id: "variables",
        parent: "frames",

        title: "Variables",

        description: "Store reusable colors and values.",

        steps: ["Create Variable", "Assign Value", "Apply to Layers"],
      },

      {
        id: "prototype",
        parent: "auto-layout",

        title: "Prototype",

        description: "Connect screens and create interactions.",

        steps: ["Select Frame", "Drag Connection", "Choose Interaction"],
      },
    ],
  },
};

module.exports = toolRoadmaps;
