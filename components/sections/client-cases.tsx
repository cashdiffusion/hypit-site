"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/client-cases";
import { ClientCaseCard } from "@/components/cases/client-case-card";

export function ClientCases() {
  const [activeId, setActiveId] = useState(CLIENTS[0].id);
  const active = CLIENTS.find((c) => c.id === activeId) ?? CLIENTS[0];

  return (
    <section className="relative bg-canvas px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-h2 text-ink">
            Built Around{" "}
            <span className="italic text-pink-300">Real Client Workflows</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-m text-muted">
            Turn winning video structures into repeatable workflows for your
            brand.
          </p>
        </motion.div>

        {/* client tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CLIENTS.map((c) => {
            const selected = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors duration-300 ${
                  selected
                    ? "border-pink-300/50 bg-pink-300/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                ) : (
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                      selected
                        ? "bg-pink-300/20 text-pink-200"
                        : "bg-white/[0.06] text-muted"
                    }`}
                  >
                    {c.initial}
                  </span>
                )}
                <span className="leading-tight">
                  <span className="block text-[13px] font-semibold text-ink">
                    {c.name}
                  </span>
                  <span className="block text-[11px] text-muted">
                    {c.descriptor}
                  </span>
                </span>
                <span
                  className={`ml-2 h-2 w-2 rounded-full ${
                    selected
                      ? "bg-pink-300 shadow-[0_0_8px_1px] shadow-pink-300/70"
                      : "bg-white/15"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* showcase panel */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-5 lg:p-8">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-center text-h3 text-ink">{active.name}</div>

            <div className="mt-6 flex snap-x gap-3 overflow-x-auto pb-2 lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {active.cards.map((card) => (
                <ClientCaseCard
                  key={card.id}
                  card={card}
                  initial={active.initial}
                  brand={active.name}
                  logo={active.logo}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-mono-label text-muted">
              <span className="text-pink-300">✦</span>
              Proven structures. Real results. Repeatable growth.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
