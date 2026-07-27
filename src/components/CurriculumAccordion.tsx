"use client";

import { useState } from "react";
import { CURRICULUM_BLOCKS } from "@/lib/curriculum";

export default function CurriculumAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {CURRICULUM_BLOCKS.map((block, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={block.number}
            className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-5 py-4 text-left"
            >
              <span className="text-lg font-bold text-white/60">
                {block.number}
              </span>
              <span className="flex-1 text-sm font-semibold text-white sm:text-base">
                {block.title}
              </span>
              <span
                className={`shrink-0 text-white/50 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {isOpen && (
              <div className="space-y-4 border-t border-white/10 px-5 pb-5 pt-4">
                {block.points.map((point) => (
                  <div key={point.heading ?? point.text}>
                    {point.heading && (
                      <p className="text-sm font-semibold text-white">
                        {point.heading}
                      </p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {point.text}
                    </p>
                    {point.subpoints && (
                      <ul className="mt-2 space-y-1.5">
                        {point.subpoints.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {block.dinamica && (
                  <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <span className="mt-0.5 shrink-0">🎬</span>
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-white">
                        Dinámica en vivo:{" "}
                      </span>
                      {block.dinamica}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
