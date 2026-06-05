import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: "#fff" }}>D</span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>
            David Ticona
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
            · Desarrollador de Sistemas
          </span>
        </div>

        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
          © 2025 David Ticona. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
