import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/documents", label: "Docs" },
  { href: "/scan", label: "Scan" },
  { href: "/shared", label: "Shared" },
];

export function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: 480,
        margin: "0 auto",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{ fontSize: 12, color: "var(--muted)" }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
