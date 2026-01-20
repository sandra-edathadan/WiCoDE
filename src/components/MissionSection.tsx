import React from "react";
import { motion } from 'motion/react';
import { Target, Users, Share2, Handshake } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: 'Support UAE Women in Tech',
    description: 'Align with UAE Vision 2030 by encouraging women’s participation and leadership in STEM and digital innovation.'
  },
  {
    icon: Users,
    title: 'Build Industry-Ready Skills',
    description: 'Equip women with practical computing and problem-solving skills relevant to the UAE’s growing tech economy.'
  },
  {
    icon: Share2,
    title: 'Bridge Academia & Industry',
    description: 'Create pathways between universities, research, and the UAE tech sector through talks, workshops, and collaboration.'
  },
  {
    icon: Handshake,
    title: 'Enable Mentorship & Career Access',
    description: 'Connect students with professionals and mentors to support career growth within the UAE and global tech ecosystem.'
  }
];

export function MissionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E879F9]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-accent" />
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight" style={{ fontWeight: 700 }}>
              <span className="text-white">Goals</span>
            </h2>

            <p className="text-xl text-muted-foreground mt-8 leading-relaxed">
              Our mission is to elevate women's voices in computing and foster an inclusive technology community.
            </p>
          </motion.div>

          {/* Right column - Objectives list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              flex flex-col gap-4
              md:flex-row md:gap-6
              md:overflow-x-auto md:snap-x md:snap-mandatory
              pb-4
            "
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-6 p-6 bg-secondary/30 border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 w-full md:min-w-[380px] md:w-auto snap-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                    <objective.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-xl text-white group-hover:text-accent transition-colors duration-300 mb-2" style={{ fontWeight: 600 }}>
                    {objective.title}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-left md:text-justify">

                    {objective.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}