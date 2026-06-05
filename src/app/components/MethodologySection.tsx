import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, ScanLine, Palette, Terminal, FlaskConical, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    name: "Descubrimiento",
    desc: "Reunión inicial para entender el contexto, objetivos y necesidades de la organización.",
    color: "var(--primary)",
  },
  {
    num: "02",
    icon: ScanLine,
    name: "Análisis de procesos",
    desc: "Mapeo detallado de flujos actuales, identificación de cuellos de botella y oportunidades de mejora.",
    color: "#22d3ee",
  },
  {
    num: "03",
    icon: Palette,
    name: "Diseño UX/UI",
    desc: "Prototipado de la solución con foco en usabilidad, experiencia de usuario y alineación con la marca.",
    color: "#a78bfa",
  },
  {
    num: "04",
    icon: Terminal,
    name: "Desarrollo",
    desc: "Implementación técnica con tecnologías modernas, código limpio y arquitectura escalable.",
    color: "#34d399",
  },
  {
    num: "05",
    icon: FlaskConical,
    name: "Validación",
    desc: "Pruebas con usuarios reales, detección de fricciones y ajustes antes del lanzamiento.",
    color: "#fb923c",
  },
  {
    num: "06",
    icon: Rocket,
    name: "Implementación",
    desc: "Despliegue controlado, capacitación del equipo y acompañamiento durante el arranque.",
    color: "var(--primary)",
  },
  {
    num: "07",
    icon: RefreshCw,
    name: "Mejora continua",
    desc: "Seguimiento post-lanzamiento, recolección de feedback y ciclos iterativos de optimización.",
    color: "#22d3ee",
  },
];

export function MethodologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodologia" className="py-24 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)", letterSpacing: "0.05em" }}>
              ./metodologia
            </span>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--foreground)" }}
            className="mb-3"
          >
            Metodología de trabajo
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--muted-foreground)", maxWidth: 480 }}>
            Un proceso estructurado que garantiza claridad, calidad y resultados medibles en cada proyecto.
          </p>
        </motion.div>

        {/* Roadmap horizontal (desktop) */}
        <div className="hidden lg:flex items-start gap-0 relative mb-4">
          {/* Progress line */}
          <div
            className="absolute top-6 left-0 right-0 h-px"
            style={{ background: "var(--border)" }}
          />
          <motion.div
            className="absolute top-6 left-0 h-px"
            style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }}
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex-1 flex flex-col items-center text-center group"
              >
                {/* Node */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    background: `${step.color}15`,
                    border: `1.5px solid ${step.color}30`,
                  }}
                >
                  <Icon size={18} style={{ color: step.color }} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: step.color,
                    letterSpacing: "0.08em",
                    marginBottom: 4,
                  }}
                >
                  {step.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "var(--foreground)",
                    marginBottom: 6,
                  }}
                >
                  {step.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11.5,
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                    maxWidth: 110,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${step.color}15` }}
                >
                  <Icon size={17} style={{ color: step.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: step.color }}>{step.num}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>{step.name}</h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
