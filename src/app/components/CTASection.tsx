import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-24 px-6 border-t border-border" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(129,140,248,0.06) 50%, rgba(34,211,238,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 60%)",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
              style={{ borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.1)" }}
            >
              <MessageSquare size={13} style={{ color: "var(--primary)" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--primary)",
                  letterSpacing: "0.05em",
                }}
              >
                Hablemos de tu proyecto
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 36,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--foreground)",
                marginBottom: 20,
              }}
              className="md:text-5xl"
            >
              ¿Tu organización todavía
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                depende de procesos manuales?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "var(--muted-foreground)",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto 36px",
              }}
            >
              La tecnología no debería complicar el trabajo. Mi enfoque consiste
              en transformar procesos complejos en soluciones digitales{" "}
              <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
                simples, eficientes y escalables
              </span>
              .
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
            >
              {[
                "Sin compromiso inicial",
                "Primera consulta gratuita",
                "Propuesta en 48h",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
