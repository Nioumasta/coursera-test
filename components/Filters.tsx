'use client';

import { useState } from 'react';

export default function Filters() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-frost rounded-2xl p-4 bg-white shadow-sm">
      <button className="font-semibold text-sm" onClick={() => setOpen(!open)}>
        Filtres {open ? '▲' : '▼'}
      </button>
      {open && (
        <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
          {['Couleur', 'Strass', 'Taille', 'Prix'].map((filter) => (
            <label key={filter} className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              {filter}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
