import { documents } from "@/data/documents";
import type { Document, DocumentCategory } from "@/types";

export function useDocuments(category?: DocumentCategory): Document[] {
  if (!category) return documents;
  return documents.filter((doc) => doc.category === category);
}
