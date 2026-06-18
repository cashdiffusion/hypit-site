import type { Metadata } from "next";
import { CommunityRedirect } from "@/components/community/community-redirect";

export const metadata: Metadata = {
  title: "Join the Hypit Discord",
  description: "Redirecting you to the Hypit creator community on Discord.",
  robots: { index: false, follow: false },
};

export default function CommunityPage() {
  return (
    <main className="bg-canvas">
      <CommunityRedirect />
    </main>
  );
}
