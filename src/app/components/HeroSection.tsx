import { motion } from "motion/react";
import { ArrowRight, Calendar, Zap, Globe, Layers } from "lucide-react";

export function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const tags = [
    { icon: Zap, label: "Automatización de procesos" },
    { icon: Globe, label: "Desarrollo de plataformas" },
    { icon: Layers, label: "Soluciones digitales a medida" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      {/* Animated flow visual */}
      <FlowVisual />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary mb-8"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{ boxShadow: "0 0 6px var(--primary)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted-foreground)",
              letterSpacing: "0.05em",
            }}
          >
      
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
          }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          Transformando procesos{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            complejos
          </span>{" "}
          en experiencias digitales{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            simples
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "var(--muted-foreground)",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 40px",
          }}
        >
          Desarrollo soluciones digitales, plataformas web y sistemas de
          automatización que optimizan procesos, reducen carga operativa y
          mejoran la experiencia de usuarios y organizaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={() => scrollTo("#proyectos")}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            style={{ fontFamily: "var(--font-display)", fontSize: 15 }}
          >
            Ver proyectos
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {tags.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card"
            >
              <Icon size={14} style={{ color: "var(--primary)" }} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--muted-foreground)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 relative overflow-hidden">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--primary), transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function FlowVisual() {
  const nodes = [
    { x: 15, y: 35, label: "Proceso manual" },
    { x: 42, y: 20, label: "Análisis" },
    { x: 68, y: 35, label: "Automatización" },
    { x: 55, y: 65, label: "Plataforma" },
    { x: 28, y: 65, label: "Resultado" },
  ];

  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0],
    [1, 3],
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20"
        width="520"
        height="420"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="4"
            markerHeight="4"
            refX="2"
            refY="2"
            orient="auto"
          >
            <path d="M 0 0 L 4 2 L 0 4 z" fill="var(--primary)" />
          </marker>
        </defs>
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--primary)"
              strokeWidth="0.4"
              strokeDasharray="2 1"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1.2, ease: "easeInOut" }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="var(--card)"
              stroke="var(--primary)"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            />
            <motion.text
              x={node.x}
              y={node.y + 5.5}
              textAnchor="middle"
              fill="var(--muted-foreground)"
              fontSize="2.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
