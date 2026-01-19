import React from "react";
import { motion } from "motion/react";

const audiences = [
  'Students & Researchers',
  'Industry Professionals',
  'ACM & ACM-W Members',
  'Tech Entrepreneurs'
];

export function AudienceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background grid (from your second code) */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-accent" />
              <span className="text-accent uppercase tracking-[0.3em] text-xs">
                Audience
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight"
              style={{ fontWeight: 700 }}
            >
              <span className="text-white">Who Should Attend?</span>
            </h2>

          </motion.div>

          {/* RIGHT COLUMN — LIST STYLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-center gap-6 p-6 bg-secondary/30 border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
                </div>

                <div
                  className="text-xl text-white group-hover:text-accent transition-colors duration-300"
                  style={{ fontWeight: 500 }}
                >
                  {audience}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}