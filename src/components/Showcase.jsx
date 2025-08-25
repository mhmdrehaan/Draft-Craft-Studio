import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    desc: "Landing page modern untuk brand teknologi.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d72e5d19-d3fc-4464-9747-b3dfe6b6de63.png",
    detailImg:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d72e5d19-d3fc-4464-9747-b3dfe6b6de63.png",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Toko online dengan integrasi payment gateway.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da53a72d-bd73-4205-acf4-ec646d3fe326.png",
    detailImg:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da53a72d-bd73-4205-acf4-ec646d3fe326.png",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Website perusahaan dengan blog terintegrasi.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/22e5e29a-514a-40ab-8bff-21a8b1b4aa70.png",
    detailImg:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/22e5e29a-514a-40ab-8bff-21a8b1b4aa70.png",
  },
];

export const Showcase = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="portfolio"
      className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Portfolio Showcase</h2>
       
      </div>

      {/* Grid Projects */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            onClick={() => setSelected(p)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src={p.img}
              alt={p.title}
              className="aspect-[16/10] w-full object-cover bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30"
            />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)} // klik overlay close
        >
          <div
            className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-lg dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()} // biar klik dalam modal nggak close
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300"
            >
              ✕
            </button>

            <h2 className="mb-4 text-2xl font-bold">{selected.title}</h2>
            <img
              src={selected.detailImg}
              alt={selected.title}
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              {selected.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
