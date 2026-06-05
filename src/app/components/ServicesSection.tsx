import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Layout, Database, Repeat2, GraduationCap, BarChart3, FileSearch, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code2,
    name: "Desarrollo web",
    desc: "Plataformas y sistemas web modernos, rápidos y escalables adaptados a las necesidades de cada organización.",
    color: "var(--primary)",
  },
  {
    icon: Layout,
    name: "Landing pages",
    desc: "Páginas de aterrizaje orientadas a conversión con diseño profesional y arquitectura de información clara.",
    color: "#22d3ee",
  },
  {
    icon: Database,
    name: "Sistemas internos",
    desc: "Aplicaciones de gestión interna que centralizan procesos, información y flujos de trabajo de equipos.",
    color: "#a78bfa",
  },
  {
    icon: Repeat2,
    name: "Automatización de procesos",
    desc: "Digitalización de tareas repetitivas y manuales para reducir carga operativa y aumentar la precisión.",
    color: "#34d399",
  },
  {
    icon: GraduationCap,
    name: "Sistemas académicos",
    desc: "Plataformas especializadas para instituciones educativas: matrículas, notas, asistencia y comunicación.",
    color: "#fb923c",
  },
  {
    icon: BarChart3,
    name: "Dashboards administrativos",
    desc: "Paneles de control con visualización de datos en tiempo real para toma de decisiones informadas.",
    color: "var(--primary)",
  },
  {
    icon: FileSearch,
    name: "Digitalización documental",
    desc: "Sistemas de gestión documental que reemplazan flujos físicos por procesos digitales trazables.",
    color: "#22d3ee",
  },
  {
    icon: Lightbulb,
    name: "Consultoría de transformación digital",
    desc: "Diagnóstico y hoja de ruta para organizaciones que quieren modernizar sus procesos con tecnología.",
    color: "#a78bfa",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)", letterSpacing: "0.05em" }}>
              ./servicios
            </span>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--foreground)" }}
            className="mb-3"
          >
            Servicios
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--muted-foreground)", maxWidth: 480 }}>
            Soluciones empresariales diseñadas para organizaciones que buscan transformar su operación con tecnología.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/25 transition-all duration-300 cursor-default"
                style={{ willChange: "transform" }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ background: `${s.color}15` }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "var(--foreground)",
                    marginBottom: 8,
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--muted-foreground)",
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
