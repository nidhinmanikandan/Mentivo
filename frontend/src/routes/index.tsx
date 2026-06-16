import { createFileRoute } from "@tanstack/react-router";
import { AiToolsPage } from "./ai-tools";

export const Route = createFileRoute("/")({
  component: AiToolsPage,
});
