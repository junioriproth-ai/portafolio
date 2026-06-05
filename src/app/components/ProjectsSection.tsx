import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, ArrowRight, Zap, Globe, BookOpen, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    tag: "Automatización de Procesos",
    tagColor: "var(--primary)",
    icon: Zap,
    featured: true,
    name: "Mesa de Partes Digital EPIC",
    link: "https://epic.edu.pe/mesa-de-partes",
    subtitle: "Transformando procesos administrativos manuales en flujos digitales eficientes.",
    problem:
      "Los trámites académicos y administrativos dependían de múltiples pasos manuales, intercambio físico de documentos, seguimiento por distintos canales y generación repetitiva de información. La falta de trazabilidad generaba pérdidas de tiempo y carga operativa innecesaria.",
    solution:
      "Sistema digital integral que centraliza y automatiza todo el flujo de gestión documental y de solicitudes. Permite el registro, seguimiento, gestión y generación automatizada de documentos desde una única plataforma.",
    features: [
      "Registro digital de solicitudes",
      "Centralización de trámites",
      "Gestión documental integrada",
      "Seguimiento estructurado en tiempo real",
      "Generación automatizada de documentación",
      "Estandarización de procesos",
    ],
    problemPoints: [
      "Procesos manuales repetitivos",
      "Información dispersa entre áreas",
      "Dependencia de múltiples canales",
      "Falta de trazabilidad",
      "Carga administrativa innecesaria",
    ],
    impact: [
      "Procesos más ordenados y auditables",
      "Menor tiempo operativo por trámite",
      "Mayor control de solicitudes activas",
      "Mejor experiencia estudiantil y administrativa",
    ],
  },
  {
    id: 2,
    tag: "Portal Institucional",
    tagColor: "#22d3ee",
    icon: Globe,
    featured: false,
    name: "EPIC En Línea",
    link: "https://epicenlinea.com",
    subtitle: "Una experiencia digital diseñada para conectar instituciones con futuros estudiantes.",
    problem:
      "La institución carecía de una presencia digital sólida y orientada a la conversión. La información académica era difícil de acceder, la navegación poco intuitiva y la experiencia no generaba confianza ni interés en potenciales estudiantes.",
    solution:
      "Rediseño completo del portal institucional con enfoque en arquitectura de conversión, experiencia responsive y comunicación clara de la oferta académica.",
    features: [
      "Diseño moderno y profesional",
      "Arquitectura orientada a conversión",
      "Landing pages temáticas",
      "Formularios de captación optimizados",
      "Experiencia responsive completa",
      "Navegación intuitiva por carrera",
    ],
    problemPoints: [
      "Presencia digital débil",
      "Navegación poco clara",
      "Formularios de contacto deficientes",
      "Sin enfoque en conversión",
    ],
    impact: [
      "Imagen institucional fortalecida",
      "Mejor experiencia digital del visitante",
      "Mayor claridad en la comunicación de oferta académica",
    ],
  },
  {
    id: 3,
    tag: "En Desarrollo",
    tagColor: "#34d399",
    icon: BookOpen,
    featured: false,
    name: "NOVA",
    link: "",
    subtitle: "Reimaginando la experiencia académica digital.",
    problem:
      "Los estudiantes y docentes deben navegar múltiples plataformas independientes para acceder a notas, horarios, asistencia, materiales y servicios. La fragmentación genera fricción y baja adopción tecnológica en la institución.",
    solution:
      "Plataforma académica unificada que centraliza todos los servicios digitales institucionales en una sola experiencia cohesiva, moderna e intuitiva.",
    features: [
      "Intranet estudiantil centralizada",
      "Gestión de horarios",
      "Registro de notas y asistencia",
      "Repositorio de materiales",
      "Sistema de notificaciones",
      "Servicios académicos integrados",
    ],
    problemPoints: [
      "Fragmentación de servicios académicos",
      "Múltiples plataformas inconexas",
      "Experiencia de usuario deficiente",
      "Baja adopción tecnológica",
    ],
    impact: [
      "Centralización completa de la experiencia académica",
      "Reducción de fricción para estudiantes",
      "Mayor control institucional",
    ],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-24 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)", letterSpacing: "0.05em" }}>
              ./proyectos
            </span>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--foreground)" }}
            className="mb-3"
          >
            Proyectos destacados
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--muted-foreground)", maxWidth: 520 }}>
            Casos de estudio reales que demuestran el impacto de la digitalización y automatización en organizaciones educativas.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => {
            const isExpanded = expanded === project.id;
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  project.featured
                    ? "border-primary/25"
                    : "border-border hover:border-border"
                }`}
                style={{
                  background: project.featured
                    ? "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, var(--card) 60%)"
                    : "var(--card)",
                }}
              >
                {project.featured && (
                  <div
                    className="px-5 py-1.5 flex items-center gap-2"
                    style={{ background: "rgba(99,102,241,0.12)", borderBottom: "1px solid rgba(99,102,241,0.15)" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)", letterSpacing: "0.06em" }}>
                      ★ PROYECTO PRINCIPAL
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${project.tagColor}18` }}
                      >
                        <Icon size={20} style={{ color: project.tagColor }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 rounded-md text-xs font-medium"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: 11,
                              background: `${project.tagColor}18`,
                              color: project.tagColor,
                            }}
                          >
                            {project.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <h3
                            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--foreground)", lineHeight: 1.2 }}
                          >
                            {project.name}
                          </h3>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--muted-foreground)", marginTop: 4, fontStyle: "italic" }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.id)}
                      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-border hover:bg-secondary transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
                    </button>
                  </div>

                  {/* Summary row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CaseBlock label="Problema" color="var(--destructive)" points={project.problemPoints.slice(0, 3)} />
                    <CaseBlock label="Solución" color="var(--primary)" points={project.features.slice(0, 3)} />
                    <CaseBlock label="Impacto" color="#34d399" points={project.impact.slice(0, 3)} />
                  </div>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--foreground)", marginBottom: 12 }}>
                            Descripción completa
                          </h4>
                          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                            {project.problem}
                          </p>
                          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.75, marginTop: 12 }}>
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--foreground)", marginBottom: 12 }}>
                            Funcionalidades implementadas
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((f, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle2 size={13} style={{ color: project.tagColor, flexShrink: 0 }} />
                                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--muted-foreground)" }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ label, color, points }: { label: string; color: string; points: string[] }) {
  return (
    <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color, letterSpacing: "0.06em", marginBottom: 10 }}>
        {label.toUpperCase()}
      </p>
      <ul className="space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <ArrowRight size={12} style={{ color, flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--muted-foreground)" }}>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
