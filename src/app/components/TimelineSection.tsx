import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Globe, BookOpen } from "lucide-react";

const milestones = [
  {
    icon: Zap,
    name: "Mesa de Partes Digital EPIC",
    label: "Automatización de procesos",
    desc: "Primer sistema institucional digitalizado. Transformó la gestión de trámites manuales en un flujo digital trazable y eficiente.",
    color: "var(--primary)",
    year: "Fase 1",
  },
  {
    icon: Globe,
    name: "EPIC En Línea",
    label: "Experiencias digitales",
    desc: "Portal institucional rediseñado para convertir visitantes en estudiantes, fortaleciendo la presencia digital de la organización.",
    color: "#22d3ee",
    year: "Fase 2",
  },
  {
    icon: BookOpen,
    name: "NOVA",
    label: "Plataformas completas",
    desc: "Plataforma académica unificada que centraliza toda la experiencia digital estudiantil — la evolución natural hacia el ecosistema integrado.",
    color: "#34d399",
    year: "Fase 3",
  },
];

export function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)", letterSpacing: "0.05em" }}>
              ./evolucion
            </span>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--foreground)" }}
            className="mb-3"
          >
            Evolución profesional
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--muted-foreground)", maxWidth: 480 }}>
            Cada proyecto representa una etapa de madurez: de la automatización puntual a las plataformas completas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "var(--border)", transform: "translateX(-50%)" }}
          />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--primary), transparent)", transform: "translateX(-50%)" }}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${m.color}18`,
                        border: `1.5px solid ${m.color}40`,
                        boxShadow: `0 0 16px ${m.color}20`,
                      }}
                    >
                      <Icon size={20} style={{ color: m.color }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 pl-2 md:pl-0 ${
                      isLeft ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div
                      className="p-5 rounded-2xl border"
                      style={{
                        borderColor: `${m.color}25`,
                        background: `${m.color}06`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: m.color,
                            letterSpacing: "0.06em",
                          }}
                        >
                          {m.year}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded-md"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            background: `${m.color}15`,
                            color: m.color,
                          }}
                        >
                          {m.label}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: 18,
                          color: "var(--foreground)",
                          marginBottom: 8,
                        }}
                      >
                        {m.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          color: "var(--muted-foreground)",
                          lineHeight: 1.7,
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
