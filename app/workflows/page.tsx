import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { WorkflowTemplates } from "@/components/workflow/workflow-templates";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Workflow Templates — Hypit",
  description:
    "Start from a proven workflow. Product, script, persona, and voiceover nodes flow into one native short-form video.",
};

export default function WorkflowsPage() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Nav />
      <WorkflowTemplates />
      <Footer />
    </main>
  );
}
