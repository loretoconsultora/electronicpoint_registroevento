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
            className="rounded-2xl bg-gradient-to-r from-ep-blue-deep via-ep-blue to-ep-blue-deep p-[1.5px]"
          >
            <div className="overflow-hidden rounded-2xl bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-5 py-4 text-left"
              >
                <span className="ep-metallic-text text-lg font-bold">
                  {block.number}
                </span>
                <span className="flex-1 text-sm font-semibold text-black sm:text-base">
                  {block.title}
                </span>
                <span
                  className={`shrink-0 text-black/40 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {isOpen && (
                <div className="space-y-4 border-t border-black/10 px-5 pb-5 pt-4">
                  {block.points.map((point) => (
                    <div key={point.heading ?? point.text}>
                      {point.heading && (
                        <p className="text-sm font-semibold text-black">
                          {point.heading}
                        </p>
                      )}
                      <p className="mt-1 text-sm leading-relaxed text-black/60">
                        {point.text}
                      </p>
                      {point.subpoints && (
                        <ul className="mt-2 space-y-1.5">
                          {point.subpoints.map((sub) => (
                            <li
                              key={sub}
                              className="flex items-start gap-2 text-sm text-black/55"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ep-blue-deep" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {block.dinamica && (
                    <div className="flex items-start gap-3 rounded-xl bg-ep-blue-light/60 px-4 py-3">
                      <span className="mt-0.5 shrink-0">🎬</span>
                      <p className="text-sm text-ep-blue-deep">
                        <span className="font-semibold">
                          Dinámica en vivo:{" "}
                        </span>
                        {block.dinamica}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
