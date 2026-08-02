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
        id: "layers",
        title: "Layers",
        description: "Organize and manage design elements.",
        steps: ["Rename layers", "Group layers", "Lock & hide"],
        parents: ["figma"],
      },

      {
        id: "text",
        title: "Typography",
        description: "Create and style text.",
        steps: ["Text Tool", "Font", "Hierarchy"],
        parents: ["figma"],
      },

      {
        id: "color-styles",
        title: "Color Styles",
        description: "Reuse colors consistently.",
        steps: ["Create Style", "Apply Style"],
        parents: ["figma"],
      },

      {
        id: "auto-layout",
        title: "Auto Layout",
        description: "Arrange elements automatically.",
        steps: ["Select layers", "Shift + A", "Configure spacing"],
        parents: ["frames"],
      },

      {
        id: "constraints",
        title: "Constraints",
        description: "Control resizing behavior.",
        steps: ["Select Layer", "Choose Constraint"],
        parents: ["frames"],
      },

      {
        id: "grids",
        title: "Layout Grids",
        description: "Design with consistent spacing.",
        steps: ["Add Grid", "Columns", "Margins"],
        parents: ["frames"],
      },

      {
        id: "components",
        title: "Components",
        description: "Create reusable UI elements.",
        steps: ["Create Component", "Reuse", "Detach"],
        parents: ["frames"],
      },

      {
        id: "variants",
        title: "Variants",
        description: "Manage multiple component states.",
        steps: ["Combine", "Add Properties"],
        parents: ["components"],
      },

      {
        id: "component-properties",
        title: "Component Properties",
        description: "Create configurable components.",
        steps: ["Boolean", "Text", "Instance Swap"],
        parents: ["variants"],
      },

      {
        id: "variables",
        title: "Variables",
        description: "Create reusable design tokens.",
        steps: ["Colors", "Spacing", "Modes"],
        parents: ["color-styles", "components"],
      },

      {
        id: "styles",
        title: "Styles",
        description: "Reuse typography, effects and colors.",
        steps: ["Text Style", "Effect Style"],
        parents: ["text", "color-styles"],
      },

      {
        id: "prototype",
        title: "Prototyping",
        description: "Connect screens and interactions.",
        steps: ["Connect Frames", "Triggers", "Actions"],
        parents: ["auto-layout", "components"],
      },

      {
        id: "smart-animate",
        title: "Smart Animate",
        description: "Create smooth transitions.",
        steps: ["Matching Layers", "Animate"],
        parents: ["prototype"],
      },

      {
        id: "interactive-components",
        title: "Interactive Components",
        description: "Create clickable reusable components.",
        steps: ["Interactions", "Hover", "Pressed"],
        parents: ["prototype", "variants"],
      },

      {
        id: "team-library",
        title: "Team Libraries",
        description: "Share components across projects.",
        steps: ["Publish", "Consume Library"],
        parents: ["components"],
      },

      {
        id: "dev-mode",
        title: "Dev Mode",
        description: "Inspect designs for development.",
        steps: ["Inspect", "CSS", "Export"],
        parents: ["prototype", "variables"],
      },

      {
        id: "design-system",
        title: "Design System",
        description: "Build a scalable UI system.",
        steps: ["Tokens", "Components", "Documentation"],
        parents: ["components", "variables", "styles", "team-library"],
      },
    ],
  },
};

module.exports = toolRoadmaps;
