import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Cpu, TrendingUp, Users } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: Code2, value: "3+", label: "Proyectos institucionales" },
    { icon: Cpu, value: "100%", label: "Foco en automatización" },
    { icon: TrendingUp, value: "↑", label: "Mejora operativa continua" },
    { icon: Users, value: "Multi", label: "Perfil usuario-institución" },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col max-w-2xl"
        >
          {/* Left: identity */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-6">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--primary)",
                  letterSpacing: "0.05em",
                }}
              >
                ./sobre-mi
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
              }}
              className="mb-4"
            >
              Sobre mí
            </h2>
            <div className="flex items-center gap-5 mb-8">
              <img
                src="/fotos/perfil.png"
                alt="Perfil"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-lg"
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 20,
                    color: "var(--foreground)",
                  }}
                >
                  David Ticona
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--primary)",
                  }}
                >
                  Desarrollador de Sistemas
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Mi trabajo consiste en analizar procesos, identificar oportunidades
              de mejora y convertir tareas manuales en soluciones digitales
              eficientes.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Me especializo en el desarrollo de plataformas web, automatización
              administrativa y experiencias digitales enfocadas en simplificar la
              interacción entre usuarios y organizaciones.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
              }}
            >
              Cada proyecto busca generar un impacto real mediante tecnología
              aplicada a problemas concretos.
            </p>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
