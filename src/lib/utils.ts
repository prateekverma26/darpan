import type { DocumentCategory } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export const categoryLabels: Record<DocumentCategory, string> = {
  identity: "Identity",
  education: "Education",
  vehicle: "Vehicle",
  health: "Health",
  insurance: "Insurance",
  other: "Other",
};
