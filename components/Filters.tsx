'use client';

import { useState } from 'react';

const filterOptions = {
  size: ['Mini', 'Regular', 'XL'],
  color: ['Holographic', 'Team color', 'Black', 'White'],
  type: ['Practice', 'Competition', 'Supporter']
};

export function Filters() {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <p className="font-semibold">Filters</p>
        <span>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className="mt-4 space-y-4 text-sm text-slate-200">
          {Object.entries(filterOptions).map(([key, values]) => (
            <div key={key} className="space-y-2">
              <p className="uppercase text-xs tracking-wide text-slate-400">{key}</p>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <button key={value} className="tag hover:bg-brand-secondary/30">
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
