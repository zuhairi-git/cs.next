import type { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service - CoreScene",
  description: "Read our Terms of Service to understand the agreement between you and CoreScene regarding our web design services.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
