import type { Document } from "@/types";
import { formatDate, categoryLabels } from "@/lib/utils";

export function DocumentCard({ doc }: { doc: Document }) {
  return (
    <article
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontWeight: 600 }}>{doc.name}</p>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>{doc.issuer}</p>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: doc.verified ? "var(--green)" : "var(--muted)",
          }}
        >
          {doc.verified ? "✓ Verified" : "Pending"}
        </span>
      </div>
      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "var(--muted)",
        }}
      >
        <span>{categoryLabels[doc.category]}</span>
        <span>Issued {formatDate(doc.issuedDate)}</span>
      </div>
    </article>
  );
}
