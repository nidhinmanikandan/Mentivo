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
        title: "Figma",
        description: "Design interfaces collaboratively.",
        steps: [],
        parents: [],
      },
      {
        id: "frames",
        title: "Frames",
        description: "Create the main design area.",
        steps: ["Press F", "Choose a frame size", "Start designing"],
        parents: ["figma"],
      },
      {
        id: "auto-layout",
        title: "Auto Layout",
        description: "Arrange elements automatically.",
        steps: ["Select two layers", "Right Click", "Add Auto Layout"],
        parents: ["frames"],
      },
      {
        id: "components",
        title: "Components",
        description: "Create reusable UI elements.",
        steps: ["Select object", "Create Component", "Reuse anywhere"],
        parents: ["frames"],
      },
      {
        id: "prototype",
        title: "Prototype",
        description: "Connect screens and create interactions.",
        steps: ["Select Frame", "Drag Connection", "Choose Interaction"],
        parents: ["auto-layout", "components"],
      },
    ],
  },
};

module.exports = toolRoadmaps;
