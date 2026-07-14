import { currentUser, documents } from "@/data/documents";
import { formatDate, categoryLabels } from "@/lib/utils";

export default function DigiLockerHome() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: "0 0 88px" }}>
      <header
        style={{
          background: "var(--navy)",
          color: "#fff",
          padding: "20px 20px 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--saffron)",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
            }}
          >
            {currentUser.avatarInitials}
          </div>
          <div>
            <p style={{ fontSize: 13, opacity: 0.75 }}>Welcome back,</p>
            <p style={{ fontSize: 17, fontWeight: 600 }}>{currentUser.name}</p>
          </div>
        </div>
      </header>

      <section style={{ padding: 20 }}>
        <h2 style={{ fontSize: 15, color: "var(--muted)", marginBottom: 12 }}>
          Issued Documents ({documents.length})
        </h2>
        <ul style={{ listStyle: "none", display: "grid", gap: 12 }}>
          {documents.map((doc) => (
            <li
              key={doc.id}
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
                  <p style={{ fontSize: 13, color: "var(--muted)" }}>
                    {doc.issuer}
                  </p>
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
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
