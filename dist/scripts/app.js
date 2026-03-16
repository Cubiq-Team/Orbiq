if (!window.lucide || typeof window.lucide.createIcons !== 'function') {
  window.lucide = { createIcons: () => {} };
  console.warn('[ui] lucide did not load; using no-op icon renderer');
}


// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// MODAL DEFINITIONS
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function selectedInstanceNameForModal() {
  const selected = getSelectedInstanceName();
  return selected || 'Instance';
}

function selectedInstanceDetailsForModal() {
  const name = selectedInstanceNameForModal();
  const details = (typeof INSTANCE_DATA === 'object' && INSTANCE_DATA && INSTANCE_DATA[name]) || null;
  const loader = normalizeLoader(details && details.loader ? details.loader : 'vanilla');
  const version = (details && details.version ? String(details.version) : 'unknown').trim();
  return { name, loader, version };
}

function buildInstanceShareLink() {
  const context = selectedInstanceDetailsForModal();
  const nameSlug = context.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'instance';
  const versionSlug = context.version.replace(/[^0-9a-z]+/gi, '').toLowerCase() || 'unknown';
  const token = Math.random().toString(36).slice(2, 8);
  return `orbiq://share/${nameSlug}_${context.loader}_${versionSlug}_${token}`;
}

function buildDuplicateInstanceName() {
  const sourceName = selectedInstanceNameForModal();
  const used = new Set(
    Object.keys((typeof INSTANCE_DATA === 'object' && INSTANCE_DATA) || {}).map((item) =>
      String(item).toLowerCase()
    )
  );
  let candidate = sourceName + ' (copy)';
  let suffix = 2;
  while (used.has(candidate.toLowerCase())) {
    candidate = sourceName + ' (copy ' + suffix + ')';
    suffix += 1;
  }
  return candidate;
}

function mojibakeScore(text) {
  if (typeof text !== 'string' || text.length === 0) return 0;
  const hits = text.match(/(?:ÃƒÆ’.|Ãƒâ€š.|ÃƒÆ’Ã†â€™|ÃƒÆ’Ã¢â‚¬Å¡|ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½|ÃƒÂ¯Ã‚Â¿Ã‚Â½|Ã¯Â¿Â½|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢|ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ|ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â|ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦)/g);
  return hits ? hits.length : 0;
}

function tryDecodeLatin1Utf8(text) {
  if (typeof text !== 'string' || text.length === 0) return text;
  if (typeof TextDecoder !== 'function') return text;
  const bytes = new Uint8Array(text.length);
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code > 0xff) return text;
    bytes[i] = code;
  }
  try {
    return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  } catch (_err) {
    return text;
  }
}

function normalizeMojibakeText(value) {
  if (typeof value !== 'string' || value.length === 0) return value;
  let text = value;

  // Try up to 2 repair passes for common double-encoded UTF-8 mojibake.
  for (let pass = 0; pass < 2; pass++) {
    const decoded = tryDecodeLatin1Utf8(text);
    if (!decoded || decoded === text) break;
    if (mojibakeScore(decoded) <= mojibakeScore(text)) {
      text = decoded;
    } else {
      break;
    }
  }

  text = text
    .replace(/(?:ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½|ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½|ÃƒÂ¯Ã‚Â¿Ã‚Â½|Ã¯Â¿Â½)+/g, '')
    .replace(/(?:ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â|ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¸Ãƒâ€šÃ‚Â|ÃƒÂ¯Ã‚Â¸Ã‚Â)+/g, '')
    .replace(/[\u0080-\u009f]/g, '')
    .replace(/\u00c2(?=[\u00a0\u00b7])/g, '')
    .replace(/\u00b8/g, '')
    .replace(/\uFE0F/g, '')
    .replace(/\u00A0/g, ' ')
    .replace(/(?:Ãƒâ€šÃ‚Â·|ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·|\u00b7|Ã¢â‚¬Â¢)/g, ' - ')
    .replace(/(?:ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦|\u2026)/g, '...')
    .replace(/(?:ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â|\u2013|\u2014)/g, '-')
    .replace(/(?:ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ|ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â|ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢)/g, "'")
    .replace(/\s\?["']/g, ' - ')
    .replace(/([A-Za-z0-9])\s+\.\.\.\s+([A-Za-z0-9])/g, '$1 - $2')
    .replace(/\s+\.\.\.[A-Za-z]["']?(?=\s|$)/g, '')
    .replace(/^\.\.\.\s*/, '')
    .replace(/\s+\.\.\.$/, '')
    .replace(/\?{2,}/g, '...')
    .replace(/([A-Za-z0-9])\s+\.\.\.\s+([A-Za-z0-9])/g, '$1 - $2')
    .replace(/\s+\.\.\.[A-Za-z]["']?(?=\s|$)/g, '')
    .replace(/^\.\.\.\s*/, '')
    .replace(/\s+\.\.\.$/, '')
    .replace(/(?:^|\s)[oO]["'](?=\s+Added\b)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const token = text.trim();
  if (/^(?:YO|Y"|Y<|Y>|YZ|YT,|sT|s|~|Y-|Y|T|o)$/.test(token)) return '';
  if (/^[A-Z~<>",.'?!-]{1,4}$/.test(token) && !/^(OK|ON|OFF|FPS|GB|MB|RAM|CPU)$/.test(token)) return '';

  return text;
}

function sanitizeMojibakeDom(root) {
  if (!root) return;

  const textNodes = [];
  if (root.nodeType === Node.TEXT_NODE) {
    textNodes.push(root);
  } else if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let current = walker.nextNode();
    while (current) {
      textNodes.push(current);
      current = walker.nextNode();
    }
  }

  for (const node of textNodes) {
    const parentTag = node.parentElement ? node.parentElement.tagName : '';
    if (parentTag === 'SCRIPT' || parentTag === 'STYLE') continue;
    const next = normalizeMojibakeText(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  const elements = [];
  if (root.nodeType === Node.ELEMENT_NODE) {
    elements.push(root);
    elements.push(...root.querySelectorAll('*'));
  } else if (root.nodeType === Node.DOCUMENT_NODE && root.documentElement) {
    elements.push(root.documentElement);
    elements.push(...root.documentElement.querySelectorAll('*'));
  } else if (root.parentElement) {
    elements.push(root.parentElement);
  }

  for (const el of elements) {
    for (const attr of ['placeholder', 'title', 'aria-label']) {
      if (!el.hasAttribute(attr)) continue;
      const before = el.getAttribute(attr);
      const after = normalizeMojibakeText(before);
      if (after !== before) el.setAttribute(attr, after);
    }
  }
}

let mojibakeObserver = null;
function installMojibakeSanitizer() {
  if (mojibakeObserver || typeof MutationObserver !== 'function' || !document.body) return;
  mojibakeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData' && mutation.target) {
        sanitizeMojibakeDom(mutation.target);
      }
      if (mutation.type === 'attributes' && mutation.target) {
        sanitizeMojibakeDom(mutation.target);
      }
      for (const node of mutation.addedNodes) {
        sanitizeMojibakeDom(node);
      }
    }
  });
  mojibakeObserver.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['placeholder', 'title', 'aria-label']
  });
}

const MODALS = {

  'link-microsoft': () => `
    <div class="ms-banner">
      <div class="ms-grid"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
      <span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Link Microsoft Account</span>
    </div>
    <div class="mh">
      <i data-lucide="link" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Link Microsoft Account</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:12px;font-family:var(--mono);color:var(--t3);margin-bottom:14px;line-height:1.7">
          Linking your Microsoft account lets you play on <strong style="color:var(--t2)">official servers</strong> using your purchased Minecraft license.
        </div>
        <div style="width:80px;height:80px;background:var(--s2);border:1px solid var(--b2);border-radius:12px;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;overflow:hidden">
          <img id="ms-device-hero-qr-image" alt="Microsoft QR" src="" style="width:100%;height:100%;object-fit:cover;display:none">
          <div id="ms-device-hero-qr-fallback" style="display:flex;align-items:center;justify-content:center;color:var(--t3);width:100%;height:100%"><i data-lucide="qr-code" width="44" height="44"></i></div>
        </div>
        <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4)">Secure browser sign-in</div>
      </div>
      <div class="ms-device-mini-card">
        <div class="ms-device-mini-row">
          <span class="ms-device-mini-label">Link</span>
          <a id="ms-device-link-url" class="ms-device-mini-link" href="https://www.microsoft.com/link" target="_blank" rel="noreferrer noopener">https://www.microsoft.com/link</a>
          <button class="btn btn-ghost ms-device-mini-action" onclick="openMicrosoftDeviceLinkOnly()"><i data-lucide="external-link" width="11" height="11"></i>Open</button>
        </div>
        <div class="ms-device-mini-row">
          <span class="ms-device-mini-label">Code</span>
          <span id="ms-device-user-code" class="ms-device-mini-code">--------</span>
          <button class="btn btn-ghost ms-device-mini-action" onclick="copyMicrosoftDeviceCode(true)"><i data-lucide="copy" width="11" height="11"></i>Copy</button>
        </div>
        <div class="ms-device-mini-steps">1) Open link 2) Enter code 3) Approve and return to launcher</div>
      </div>
      <button class="btn-ms" onclick="startMicrosoftLoginFlow()">
        <div class="ms-grid" style="width:14px;height:14px;"><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div></div>
        Open Link and Copy Code
      </button>
      <div id="ms-device-status" style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:9px;text-align:center"></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-ghost" onclick="refreshMicrosoftDeviceCodeFlow(true)"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh Code</button></div>`,

  'ms-login': () => MODALS['link-microsoft'](),

  'add-offline-profile': () => `
    <div class="mh">
      <i data-lucide="user-plus" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Add Offline Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="background:rgba(180,120,0,0.05);border:1px solid rgba(180,120,0,0.1);border-radius:8px;padding:9px 12px;margin-bottom:12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="info" width="13" height="13" style="color:var(--yellow);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#776600;line-height:1.6">Offline profiles can only join cracked servers. For official servers, link a Microsoft account.</span>
      </div>
      <div class="field">
        <div class="label">Username</div>
        <input class="input" id="offline-username" placeholder="e.g. Batbold" oninput="updateOfflineUUID(this.value)" value="">
      </div>
      <div class="field">
        <div class="label">Profile Icon</div>
        <div class="icon-grid">
          ${[['user','user'],['user-round','user-round'],['gamepad-2','gamepad-2'],['sword','sword'],['shield','shield'],['zap','zap'],['flame','flame'],['star','star'],['skull','skull'],['ghost','ghost']].map(([ic,name],i)=>`<div class="icon-cell${i===0?' sel':''}" onclick="selectIcon(this)" data-icon="${name}"><i data-lucide="${ic}" width="16" height="16" style="pointer-events:none"></i></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="label" style="margin-bottom:4px">UUID (auto-generated)</div>
        <div class="uuid-preview" id="offline-uuid-preview">Type a username to generate UUID</div>
      </div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="createOfflineProfileFromModal()">
        <i data-lucide="plus" width="12" height="12"></i>Add Profile
      </button>
    </div>`,

  'orbiq-login': () => `
    <div class="orbiq-login-header">
      <div class="orbiq-login-logo"><img src="assets/Orbiq.svg" width="44" height="44" alt="Orbiq" style="display:block;border-radius:12px;"></div>
      <div class="orbiq-login-title">Sign in to Orbiq</div>
      <div class="orbiq-login-sub">Your account for everything Orbiq</div>
    </div>
    <div class="mb">
      <div class="field">
        <div class="label">Email</div>
        <input class="input" id="orbiq-login-email" type="email" placeholder="you@example.com" autocomplete="email">
      </div>
      <div class="field">
        <div class="label">Password</div>
        <div style="display:flex;gap:6px;align-items:center">
          <input class="input" id="orbiq-login-password" type="password" placeholder="........" autocomplete="current-password" style="flex:1">
          <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-login-password', this)">Show</button>
        </div>
      </div>
      <div style="text-align:right;margin-top:-6px;margin-bottom:12px">
        <span style="font-size:11px;font-family:var(--mono);color:var(--t3);cursor:pointer;text-decoration:underline">Forgot password?</span>
      </div>
      <button class="btn btn-primary" style="width:100%;height:36px;justify-content:center;font-size:13px" onclick="signInOrbiqFromModal()">
        Sign In
      </button>
      <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><div style="flex:1;height:1px;background:var(--b2)"></div><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">or</span><div style="flex:1;height:1px;background:var(--b2)"></div></div>
      <button style="width:100%;height:33px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;font-size:12px;font-family:var(--mono);color:var(--t3);cursor:pointer;transition:all 0.12s" onclick="createOrbiqAccountFromModal()" onmouseover="this.style.borderColor='var(--b3)'" onmouseout="this.style.borderColor='var(--b2)'">
        Create a free account
      </button>
      <div id="orbiq-login-status" style="margin-top:10px;font-size:11px;font-family:var(--mono);color:var(--t4);text-align:center"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>`,

  'orbiq-register': () => `
    <div class="mh">
      <div class="brand-logo" style="width:18px;height:18px;flex-shrink:0;"><img src="assets/Orbiq.svg" width="18" height="18" alt="Orbiq" style="display:block;border-radius:4px;"></div>
      <span class="mh-title">Create Orbiq Account</span>
      <button class="mh-close" onclick="cancelOrbiqRegister()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb" style="padding:12px 14px">
      <div style="margin-bottom:10px;padding:10px 12px;border-radius:9px;background:linear-gradient(135deg,rgba(20,140,120,0.18),rgba(90,120,220,0.15));border:1px solid rgba(120,160,230,0.35)">
        <div style="font-size:11px;font-weight:700;color:var(--t1)">Orbiq Setup</div>
        <div style="font-size:10px;font-family:var(--mono);color:var(--t3);margin-top:2px">Secure your account in 3 steps</div>
      </div>
      <div id="orbiq-register-stepper" style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:10px"></div>
      <div id="orbiq-register-content" style="padding:10px;border:1px solid var(--b2);border-radius:9px;background:var(--s2)"></div>
      <div id="orbiq-register-status" style="margin-top:10px;font-size:11px;font-family:var(--mono);color:var(--t4);padding:8px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px"></div>
    </div>
    <div class="mf" id="orbiq-register-actions"></div>`,

  'orbiq-register-success': () => `
    <div class="mh">
      <i data-lucide="badge-check" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Setup Complete</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb" style="padding:14px">
      <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--b2);border-radius:10px;background:var(--s2);margin-bottom:10px">
        <div style="width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(61,140,74,0.22);color:var(--green)">
          <i data-lucide="check" width="18" height="18"></i>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--t1)">Your Orbiq account is ready</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4)">You can launch now or link Microsoft.</div>
        </div>
      </div>
      <div id="orbiq-success-summary" style="padding:10px 12px;border:1px solid var(--b2);border-radius:9px;background:var(--s2)"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" id="orbiq-success-link-btn" onclick="openLinkMicrosoftFromSuccess()"><i data-lucide="link" width="12" height="12"></i>Link Microsoft</button>
      <button class="btn btn-primary" id="orbiq-success-go-btn" onclick="goToLauncherHome()">Go to Launcher</button>
    </div>`,

  'ms-linked-detail': () => `
    <div class="ms-banner">
      <div class="ms-grid"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
      <span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Microsoft account</span>
    </div>
    <div class="mh">
      <i data-lucide="user" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Dream - Microsoft</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="display:flex;gap:14px;align-items:center;padding:10px 0;margin-bottom:12px;border-bottom:1px solid var(--b1)">
        <div style="width:48px;height:48px;border-radius:9px;overflow:hidden;flex-shrink:0;image-rendering:pixelated;background:var(--s2)">
          <img src="https://mc-heads.net/avatar/Dream/64" style="width:100%;image-rendering:pixelated" onerror="this.style.display='none'">
        </div>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--t1)">Dream</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:2px">dream@outlook.com</div>
          <div style="margin-top:5px;display:inline-flex;align-items:center;gap:5px;background:rgba(0,120,212,0.12);border:1px solid rgba(0,120,212,0.2);border-radius:5px;padding:3px 8px;font-size:10px;font-family:var(--mono);color:#5599dd">
            <i data-lucide="check-circle" width="10" height="10"></i> Official license
          </div>
        </div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;overflow:hidden;margin-bottom:12px">
        <div class="info-row"><span class="info-key">Type</span><span class="info-val">Microsoft / Java Edition</span></div>
        <div class="info-row"><span class="info-key">Servers</span><span class="info-val">Official + Cracked</span></div>
        <div class="info-row"><span class="info-key">Token</span><span class="info-val dim">Refreshes automatically</span></div>
        <div class="info-row"><span class="info-key">Linked</span><span class="info-val">Mar 7, 2025</span></div>
      </div>
      <div style="background:rgba(30,60,30,0.3);border:1px solid rgba(61,140,74,0.2);border-radius:8px;padding:9px 12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="check-circle" width="13" height="13" style="color:var(--green);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#3a7a4a;line-height:1.5">This account can access Hypixel, official servers, and all Minecraft features.</span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-danger" onclick="closeModal();showToast('OK','Unlinked','Microsoft account removed')">
        <i data-lucide="unlink" width="12" height="12"></i>Unlink
      </button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'offline-profile-detail': () => `
    <div class="mh">
      <i data-lucide="user" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Batbold - Offline Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="display:flex;gap:14px;align-items:center;padding:10px 0;margin-bottom:12px;border-bottom:1px solid var(--b1)">
        <div style="width:48px;height:48px;border-radius:9px;background:var(--s3);border:1px solid var(--b2);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i data-lucide="user" width="24" height="24" style="color:var(--t2)"></i></div>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--t1)">Batbold</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:2px">Offline profile</div>
          <div style="margin-top:5px;display:inline-flex;align-items:center;gap:5px;background:rgba(61,140,74,0.12);border:1px solid rgba(61,140,74,0.2);border-radius:5px;padding:3px 8px;font-size:10px;font-family:var(--mono);color:var(--green)">
            <div style="width:5px;height:5px;border-radius:50%;background:currentColor"></div>Active profile
          </div>
        </div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;overflow:hidden;margin-bottom:12px">
        <div class="info-row"><span class="info-key">Type</span><span class="info-val">Offline / Cracked</span></div>
        <div class="info-row"><span class="info-key">Servers</span><span class="info-val">Cracked only</span></div>
        <div class="info-row"><span class="info-key">UUID</span><span class="info-val dim" style="font-size:9.5px">3f7a2b4c-1d8e-4f9a-8a1e-2f4b8c9d7a10</span></div>
        <div class="info-row"><span class="info-key">Created</span><span class="info-val">Jan 12, 2025</span></div>
      </div>
      <div style="background:rgba(180,120,0,0.05);border:1px solid rgba(180,120,0,0.12);border-radius:8px;padding:9px 12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="info" width="13" height="13" style="color:var(--yellow);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#776600;line-height:1.5">Want to play on Hypixel or official servers? <span style="color:var(--t2);text-decoration:underline;cursor:pointer" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)">Link a Microsoft account.</span></span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-danger" onclick="closeModal();showToast('OK','Removed','Offline profile deleted')">
        <i data-lucide="trash-2" width="12" height="12"></i>Delete
      </button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="closeModal();showToast('OK','Active','Batbold is now the active profile')">Set Active</button>
      </div>
    </div>`,

  'profile-select-launch': () => `
    <div class="mh">
      <i data-lucide="play" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Launch - Choose Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="font-size:11.5px;font-family:var(--mono);color:var(--t3);margin-bottom:14px;line-height:1.7">
        Select the profile to use when launching <strong style="color:var(--t1)">${escapeHtml(selectedInstanceNameForModal())}</strong>:
      </div>
      <div class="profile-select-list">
        <div class="profile-select-item selected ms-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar">
            <img src="https://mc-heads.net/avatar/Dream/64" onerror="this.parentNode.innerHTML='?'" style="width:100%;image-rendering:pixelated">
          </div>
          <div style="flex:1">
            <div class="ps-name">Dream</div>
            <div class="ps-desc">Microsoft - Official servers</div>
          </div>
          <div class="ps-tag ms">
            <div class="ms-grid" style="width:10px;height:10px;margin-right:5px;display:inline-grid;gap:1px"><div style="background:#f25022;border-radius:0.5px"></div><div style="background:#7fba00;border-radius:0.5px"></div><div style="background:#00a4ef;border-radius:0.5px"></div><div style="background:#ffb900;border-radius:0.5px"></div></div>
            Microsoft
          </div>
        </div>
        <div class="profile-select-item offline-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="18" height="18" style="color:var(--t3)"></i></div>
          <div style="flex:1">
            <div class="ps-name">Batbold</div>
            <div class="ps-desc">Offline - Cracked servers only</div>
          </div>
          <div class="ps-tag off">Offline</div>
        </div>
        <div class="profile-select-item offline-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="gamepad-2" width="18" height="18" style="color:var(--t3)"></i></div>
          <div style="flex:1">
            <div class="ps-name">ProGamer</div>
            <div class="ps-desc">Offline - Cracked servers only</div>
          </div>
          <div class="ps-tag off">Offline</div>
        </div>
      </div>
      <div style="margin-top:10px;padding:8px 11px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;display:flex;align-items:center;gap:7px">
        <i data-lucide="info" width="12" height="12" style="color:var(--t4);flex-shrink:0"></i>
        <span style="font-size:10.5px;font-family:var(--mono);color:var(--t4)">Microsoft profile required for Hypixel, Mineplex, and other official servers.</span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-ghost" onclick="closeModal();setTimeout(()=>goToAccountsPage(),200)">
        <i data-lucide="settings" width="12" height="12"></i>Manage
      </button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="closeModal();doLaunchSequence()">
          <i data-lucide="play" width="12" height="12"></i>Launch
        </button>
      </div>
    </div>`,

  'add-instance': () => `
    <div class="mh"><i data-lucide="plus-square" class="mh-icon" width="16" height="16"></i><span class="mh-title">Add Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Name</div><input class="input" id="add-inst-name" value="My Instance" placeholder="Instance name"></div>
      <div class="field"><div class="label">Icon</div>
        <input type="hidden" id="add-inst-icon-key" value="">
        <button type="button" class="icon-picker-trigger" id="add-inst-icon-trigger" onclick="openAddInstanceIconMenu(event)">
          <div class="icon-picker-left">
            <img class="icon-picker-preview-img" id="add-inst-icon-preview-img" src="" alt="Instance icon preview">
            <span class="icon-picker-label" id="add-inst-icon-preview-label">Loading icons...</span>
          </div>
          <i data-lucide="chevrons-up-down" width="14" height="14"></i>
        </button>
      </div>
      <div class="field"><div class="label">Loader</div><select class="select" id="add-inst-loader"><option>Vanilla</option><option>Fabric</option><option>Forge</option><option>NeoForge</option><option>Quilt</option></select></div>
      <div class="field"><div class="label">Minecraft Version</div><select class="select" id="add-inst-version"><option>Loading versions...</option></select></div>
      <div style="display:flex;justify-content:flex-end;margin:-6px 0 8px">
        <button class="btn btn-ghost" style="height:26px;padding:0 10px;font-size:10px" onclick="openVersionSelectorFromAddInstance()"><i data-lucide="tag" width="11" height="11"></i>Version List</button>
      </div>
      <div class="field"><div class="label">Loader Version</div><select class="select" id="add-inst-loader-version"><option value="">Auto (latest)</option></select></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openModal('import')"><i data-lucide="package-open" width="12" height="12"></i>Import</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createInstanceFromModal()">Create</button></div>`,

  'edit-instance': () => `
    <div class="mh"><i data-lucide="pencil" class="mh-icon" width="16" height="16"></i><span class="mh-title" id="edit-modal-title">Edit - Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Name</div><input class="input" id="edit-inst-name" value="" placeholder="Instance name"></div>
      <div class="field"><div class="label">Icon</div>
        <input type="hidden" id="edit-inst-icon-key" value="">
        <button type="button" class="icon-picker-trigger" id="edit-inst-icon-trigger" onclick="openEditInstanceIconMenu(event)">
          <div class="icon-picker-left">
            <img class="icon-picker-preview-img" id="edit-inst-icon-preview-img" src="" alt="Instance icon preview">
            <span class="icon-picker-label" id="edit-inst-icon-preview-label">Loading icons...</span>
          </div>
          <i data-lucide="chevrons-up-down" width="14" height="14"></i>
        </button>
      </div>
      <div class="field"><div class="label">Memory (GB)</div>
        <div style="margin:6px 0 4px"><input type="range" class="slider" min="1" max="16" value="4"></div>
        <div style="display:flex;justify-content:space-between"><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">1 GB</span><span style="font-size:10px;font-family:var(--mono);color:var(--t2)">4 GB</span><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">16 GB</span></div>
      </div>
      <div class="field"><div class="label">Java Args</div><input class="input" id="edit-java-args" value="-Xmx4G -XX:+UseG1GC"></div>
      <div class="field"><div class="label">Launch Executable</div><input class="input" id="edit-launch-exec" placeholder="e.g. java or C:\\Java\\bin\\java.exe"></div>
      <div class="field"><div class="label">Launch Arguments</div><input class="input" id="edit-launch-args" placeholder="e.g. -jar server.jar nogui"></div>
      <div class="field"><div class="label">Working Directory</div><input class="input" id="edit-launch-wd" placeholder="e.g. C:\\Minecraft\\Instances\\MyInstance"></div>
      <div class="field"><div class="label">JVM Preset</div>
        <div class="preset-grid">
          ${[['VL','Vanilla','Balanced'],['HV','Heavy','Max perf'],['ST','Stream','Low RAM']].map(([e,n,d],i)=>`<div class="preset-card${i===0?' sel':''}" onclick="document.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('sel'));this.classList.add('sel')"><div class="preset-icon">${e}</div><div class="preset-name">${n}</div><div class="preset-desc">${d}</div></div>`).join('')}
        </div>
      </div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Use global Java settings</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveEditInstanceModal()">Save</button></div>`,

  'instance-info-java': () => `
    <div class="mh"><i data-lucide="coffee" class="mh-icon" width="16" height="16"></i><span class="mh-title">Java - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field">
        <div class="label">Detected Java Runtime</div>
        <select class="select" id="instance-java-path-select">
          ${buildJavaPathOptionsMarkup(getSelectedInstanceJavaExecutable())}
        </select>
      </div>
      <div class="field">
        <div class="label">Custom Java Path (Optional)</div>
        <input class="input" id="instance-java-custom-path" placeholder="e.g. C:\\Java\\bin\\java.exe">
      </div>
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
        Leave custom path empty to use the selected runtime. Choose <strong style="color:var(--t2)">Auto (launcher default)</strong> to clear custom Java.
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveInstanceJavaFromModal()"><i data-lucide="check" width="12" height="12"></i>Save</button></div>`,

  'instance-info-memory': () => `
    <div class="mh"><i data-lucide="hard-drive" class="mh-icon" width="16" height="16"></i><span class="mh-title">Memory - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field">
        <div class="label">Min Memory (GB)</div>
        <input class="input" type="number" min="0.25" step="0.25" id="instance-memory-min-gb" placeholder="e.g. 2">
      </div>
      <div class="field">
        <div class="label">Max Memory (GB)</div>
        <input class="input" type="number" min="0.25" step="0.25" id="instance-memory-max-gb" placeholder="e.g. 4">
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        <button class="btn btn-ghost" type="button" style="height:26px;padding:0 10px;font-size:10px" onclick="applyMemoryPresetFromModal(2,4)">2 / 4 GB</button>
        <button class="btn btn-ghost" type="button" style="height:26px;padding:0 10px;font-size:10px" onclick="applyMemoryPresetFromModal(4,8)">4 / 8 GB</button>
        <button class="btn btn-ghost" type="button" style="height:26px;padding:0 10px;font-size:10px" onclick="applyMemoryPresetFromModal(8,12)">8 / 12 GB</button>
        <button class="btn btn-ghost" type="button" style="height:26px;padding:0 10px;font-size:10px" onclick="applyMemoryPresetFromModal(null,null)">Auto</button>
      </div>
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
        Values update JVM args (<span style="color:var(--t2)">-Xms</span> and <span style="color:var(--t2)">-Xmx</span>). Leave both empty for Auto.
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveInstanceMemoryFromModal()"><i data-lucide="check" width="12" height="12"></i>Save</button></div>`,

  'delete-confirm': () => `
    <div class="mh"><i data-lucide="trash-2" class="mh-icon" width="16" height="16" style="color:var(--red)"></i><span class="mh-title" style="color:var(--red)">Delete Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="warn-box danger"><i data-lucide="triangle-alert" width="16" height="16" style="color:var(--red);flex-shrink:0;margin-top:1px"></i><span class="warn-text" style="color:#774444">This will permanently delete <strong style="color:#aa5555" id="delete-instance-name">instance</strong> and all its data.</span></div>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">Also delete world saves</span></label>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">Also delete screenshots</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deleteSelectedInstanceFromModal()"><i data-lucide="trash-2" width="12" height="12"></i>Delete</button></div>`,

  'launch-progress': () => `
    <div class="mh"><i data-lucide="loader" class="mh-icon spin" width="16" height="16"></i><span class="mh-title">Launching ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Downloading assets...</span><span style="font-size:11px;font-family:var(--mono);color:var(--t3)">68%</span></div><div class="prog-track"><div class="prog-fill" style="width:68%"></div></div></div>
      <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Libraries</span><span style="font-size:11px;font-family:var(--mono);color:var(--green)">Done</span></div><div class="prog-track"><div class="prog-fill" style="width:100%"></div></div></div>
      <div><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Java runtime</span><span style="font-size:11px;font-family:var(--mono);color:var(--green)">Done</span></div><div class="prog-track"><div class="prog-fill" style="width:100%"></div></div></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`,

  'manage-mods': () => `
    <div class="mh"><i data-lucide="puzzle" class="mh-icon" width="16" height="16"></i><span class="mh-title">Installed Items - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="manage-mods-list" class="manage-mods-list"></div>
      <div id="manage-mods-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="openModal('resource-packs')"><i data-lucide="image" width="12" height="12"></i>Packs</button>
      <button class="btn btn-ghost" onclick="openModal('shader-packs')"><i data-lucide="sun" width="12" height="12"></i>Shaders</button>
      <button class="btn btn-ghost" onclick="openModal('mod-updates')"><i data-lucide="refresh-cw" width="12" height="12"></i>Updates</button>
      <button class="btn btn-ghost" id="manage-mods-install-missing" onclick="installMissingTrackedFromModal()"><i data-lucide="wrench" width="12" height="12"></i>Install Missing</button>
      <button class="btn btn-ghost" onclick="openManagedModsBrowseInstall()"><i data-lucide="plus" width="12" height="12"></i>Install</button>
      <button class="btn btn-ghost" onclick="refreshManagedModsModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'launch-missing-required': () => `
    <div class="mh"><i data-lucide="triangle-alert" class="mh-icon" width="16" height="16" style="color:var(--yellow)"></i><span class="mh-title">Missing Required Files</span><button class="mh-close" onclick="cancelLaunchMissingDialog()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6;margin-bottom:10px">
        Some required mods/shaders are missing in <strong style="color:var(--t1)">${escapeHtml(selectedInstanceNameForModal())}</strong>.
      </div>
      <div id="launch-missing-list" class="ver-list" style="max-height:230px"></div>
      <div id="launch-missing-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)"></div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-ghost" onclick="cancelLaunchMissingDialog()">Cancel</button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" id="launch-missing-anyway-btn" onclick="proceedLaunchWithMissingDialog()"><i data-lucide="play" width="12" height="12"></i>Launch Anyway</button>
        <button class="btn btn-primary" id="launch-missing-install-btn" onclick="installMissingAndContinueLaunch()"><i data-lucide="download" width="12" height="12"></i>Install Missing</button>
      </div>
    </div>`,

  'launch-preflight': () => `
    <div class="mh"><i data-lucide="shield-alert" class="mh-icon" width="16" height="16" style="color:var(--yellow)"></i><span class="mh-title">Preflight Check</span><button class="mh-close" onclick="cancelLaunchPreflightDialog()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6;margin-bottom:10px">
        Launch check found compatibility/runtime issues.
      </div>
      <div id="launch-preflight-list" class="ver-list" style="max-height:250px"></div>
      <div id="launch-preflight-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)"></div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-ghost" id="launch-preflight-cancel-btn" onclick="cancelLaunchPreflightDialog()">Cancel</button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" id="launch-preflight-anyway-btn" onclick="proceedLaunchPreflightDialog()"><i data-lucide="play" width="12" height="12"></i>Continue Anyway</button>
        <button class="btn btn-primary" id="launch-preflight-fix-btn" onclick="fixLaunchPreflightDialog()"><i data-lucide="wrench" width="12" height="12"></i>Fix Now</button>
      </div>
    </div>`,

  'diagnostics': () => `
    <div class="mh"><i data-lucide="activity" class="mh-icon" width="16" height="16"></i><span class="mh-title">Diagnostics</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-bottom:8px">Latest backend failure and launch context.</div>
      <div id="diagnostics-latest-error" style="padding:10px;border:1px solid var(--b2);border-radius:8px;background:var(--s2);font-size:10.5px;font-family:var(--mono);line-height:1.6;color:var(--t3);white-space:pre-wrap"></div>
      <div id="diagnostics-last-launch" style="margin-top:8px;padding:10px;border:1px solid var(--b2);border-radius:8px;background:var(--s2);font-size:10.5px;font-family:var(--mono);line-height:1.6;color:var(--t4);white-space:pre-wrap"></div>
      <div id="diagnostics-export-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="openDiagnosticsLogsFolder()"><i data-lucide="folder-open" width="12" height="12"></i>Open Logs</button>
      <button class="btn btn-ghost" onclick="exportDiagnosticsBundle()"><i data-lucide="file-down" width="12" height="12"></i>Export Bundle</button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'skin-manager': () => `
    <div class="mh"><i data-lucide="user" class="mh-icon" width="16" height="16"></i><span class="mh-title" id="skin-manager-title">Skin</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb skin-manager-body" style="display:flex;gap:14px;align-items:flex-start">
      <div class="skin-manager-left-pane" style="width:332px;flex-shrink:0">
        <div class="field" style="margin-bottom:10px">
          <div class="label">Skin Manager</div>
          <div class="skin-action-grid">
            <button class="skin-action-btn" onclick="triggerSkinFilePicker()"><i data-lucide="upload" width="13" height="13"></i>Upload Skin</button>
            <button class="skin-action-btn" onclick="importSkinFromUsername()"><i data-lucide="at-sign" width="13" height="13"></i>Import Username</button>
            <button class="skin-action-btn" onclick="browseSkinCatalogFromModal()"><i data-lucide="compass" width="13" height="13"></i>Browse Skins</button>
            <button class="skin-action-btn" onclick="focusSkinDropzone()"><i data-lucide="mouse-pointer" width="13" height="13"></i>Drag and Drop</button>
          </div>
        </div>

        <div class="dropzone" id="skin-manager-dropzone" style="padding:12px" ondragover="onSkinFileDragOver(event)" ondragleave="onSkinFileDragLeave(event)" ondrop="onSkinFileDrop(event)" onclick="triggerSkinFilePicker()">
          <i data-lucide="file-up" width="16" height="16"></i>
          <span style="font-size:10.5px;font-family:var(--mono)">Drop .png skin file</span>
        </div>

        <div class="field" style="margin-top:10px">
          <div class="label">Recent Skins</div>
          <div id="skin-manager-recent-grid" class="skin-recent-grid"></div>
        </div>
      </div>

      <div style="flex:1;min-width:0">
        <div id="skin-manager-viewer-wrap" style="width:100%;height:336px;background:var(--s2);border:1px solid var(--b2);border-radius:10px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden">
          <canvas id="skin-manager-3d-canvas" width="520" height="332" style="width:100%;height:100%;display:block"></canvas>
          <div id="skin-manager-viewer-fallback" style="position:absolute;inset:0;display:none;align-items:center;justify-content:center;padding:10px;text-align:center;font-size:11px;font-family:var(--mono);color:var(--t4);background:rgba(10,10,10,0.82)">3D preview unavailable</div>
        </div>
        <div style="display:flex;gap:6px;margin-top:7px;margin-bottom:12px">
          <button class="btn btn-ghost" style="height:28px;padding:0 10px" onclick="resetSkinViewerCamera()"><i data-lucide="rotate-cw" width="12" height="12"></i>Reset View</button>
          <button class="btn btn-ghost" id="skin-manager-auto-rotate-btn" style="height:28px;padding:0 10px" onclick="toggleSkinViewerAutoRotate()"><i data-lucide="refresh-cw" width="12" height="12"></i>Auto Rotate</button>
          <div style="margin-left:auto;font-size:10px;font-family:var(--mono);color:var(--t4);display:flex;align-items:center">Drag to rotate - Scroll to zoom</div>
        </div>

        <div class="skin-manager-meta-grid">
        <div class="field">
          <div class="label">Profile</div>
          <div id="skin-manager-profile" style="padding:8px 10px;border:1px solid var(--b2);border-radius:7px;background:var(--s2);font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.4">-</div>
        </div>
        <div class="field">
          <div class="label">Current Skin Sync</div>
          <div id="skin-manager-current" style="padding:8px 10px;border:1px solid var(--b2);border-radius:7px;background:var(--s2);font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.5">Loading...</div>
        </div>
        <div class="field"><div class="label">Model</div><select class="select" id="skin-manager-model" onchange="onSkinModelChanged()"><option value="classic">Classic (Steve)</option><option value="slim">Slim (Alex)</option></select></div>
        <div class="field">
          <div class="label">Skin PNG</div>
          <input id="skin-manager-file-input" type="file" accept=".png,image/png" style="display:none" onchange="onSkinFileChosen(event)">
          <div style="display:flex;gap:6px;align-items:center">
            <button class="btn btn-ghost" style="height:28px;padding:0 10px" onclick="triggerSkinFilePicker()">Choose File</button>
            <span id="skin-manager-file-name" style="font-size:10.5px;font-family:var(--mono);color:var(--t4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">No file selected</span>
          </div>
        </div>
        <div class="field">
          <div class="label">Cape Preview (optional)</div>
          <input id="skin-manager-cape-file-input" type="file" accept=".png,image/png" style="display:none" onchange="onSkinCapeFileChosen(event)">
          <div style="display:flex;gap:6px;align-items:center">
            <button class="btn btn-ghost" style="height:28px;padding:0 10px" onclick="triggerSkinCapeFilePicker()">Choose Cape</button>
            <button class="btn btn-ghost" id="skin-manager-cape-clear-btn" style="height:28px;padding:0 10px" onclick="clearSkinCapePreview()">Clear</button>
            <span id="skin-manager-cape-file-name" style="font-size:10.5px;font-family:var(--mono);color:var(--t4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Use synced cape</span>
          </div>
          <div style="margin-top:4px;font-size:10px;font-family:var(--mono);color:var(--t4)">Preview-only cape image. Official cape management remains on Microsoft profile page.</div>
        </div>
        <div class="field" style="margin-top:8px">
          <div class="label">History & Rollback</div>
          <div style="display:flex;gap:6px;align-items:center">
            <select class="select" id="skin-manager-history-select" style="flex:1"></select>
            <button class="btn btn-ghost" id="skin-manager-rollback-btn" style="height:28px;padding:0 10px" onclick="rollbackSkinFromModal()"><i data-lucide="rotate-ccw" width="12" height="12"></i>Rollback</button>
          </div>
        </div>
        <div id="skin-manager-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.5"></div>
      </div>
      </div>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" style="height:30px" onclick="refreshSkinManagerModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button>
        <button class="btn btn-ghost" style="height:30px" onclick="openMinecraftSkinPageFromModal()"><i data-lucide="external-link" width="12" height="12"></i>Open Skin Page</button>
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" id="skin-manager-apply-btn" onclick="applySkinFromModal()"><i data-lucide="shirt" width="12" height="12"></i>Apply Skin</button>
      </div>
    </div>`,

  'accounts': () => `
    <div class="ms-banner"><div class="ms-grid"><div></div><div></div><div></div><div></div></div><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Microsoft accounts</span></div>
    <div class="mh"><i data-lucide="users" class="mh-icon" width="16" height="16"></i><span class="mh-title">Accounts</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="list-item" style="padding:10px 0"><div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;background:var(--s2);image-rendering:pixelated"><img src="https://mc-heads.net/avatar/Dream/32" style="width:100%;image-rendering:pixelated"></div><div style="flex:1"><div style="font-size:12.5px;font-weight:700;color:var(--t1)">Dream</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t3)">dream@outlook.com</div></div><div style="padding:2px 8px;background:rgba(255,255,255,0.04);border:1px solid var(--b3);border-radius:4px;font-size:10px;font-family:var(--mono);color:var(--t3)">Active</div></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)"><i data-lucide="plus" width="12" height="12"></i>Add Account</button></div>`,

  'settings': () => `
    <div class="mh"><i data-lucide="settings" class="mh-icon" width="16" height="16"></i><span class="mh-title">Settings</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb settings-modal-body">
      <div class="field"><div class="label">Java Path</div><input class="input" id="settings-java-path" placeholder="Auto (launcher default)"></div>
      <div class="field">
        <div class="label">Default Memory</div>
        <div style="margin:6px 0 4px"><input type="range" class="slider" id="settings-default-memory" min="1" max="16" step="1" value="4" oninput="updateSettingsMemoryLabel()"></div>
        <div class="settings-memory-meta"><span>1 GB</span><span id="settings-default-memory-value">4 GB</span><span>16 GB</span></div>
      </div>
      <div class="field">
        <div class="label">Launcher Defaults</div>
        <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
          Java path and memory below are used only when instance launch settings are Auto.
        </div>
      </div>
      <label class="check-row"><div class="check-box" id="settings-auto-update-check" onclick="toggleCheck(this)"></div><span class="check-label">Auto-update launcher</span></label>
      <label class="check-row"><div class="check-box" id="settings-analytics-check" onclick="toggleCheck(this)"></div><span class="check-label">Send anonymous analytics</span></label>
      <label class="check-row"><div class="check-box" id="settings-close-to-tray-check" onclick="toggleCheck(this)"></div><span class="check-label">Close to tray on launch</span></label>
      <div class="settings-inline-tools">
        <button class="btn btn-ghost" onclick="openModal('java-manager')"><i data-lucide="cpu" width="12" height="12"></i>Java</button>
        <button class="btn btn-ghost" onclick="openModal('diagnostics')"><i data-lucide="activity" width="12" height="12"></i>Diagnostics</button>
      </div>
      <div id="settings-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)"></div>
    </div>
    <div class="mf settings-modal-footer">
      <button class="btn btn-ghost" onclick="resetSettingsModal()">Reset</button>
      <div class="settings-modal-footer-right">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveSettingsModal()">Save</button>
      </div>
    </div>`,

  'export': () => `
    <div class="mh"><i data-lucide="package-open" class="mh-icon" width="16" height="16"></i><span class="mh-title">Export - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Format</div><select class="select"><option>Modrinth (.mrpack)</option><option>CurseForge (.zip)</option><option>MultiMC (.zip)</option></select></div>
      <div class="field"><div class="label">Version</div><input class="input" value="1.0.0"></div>
      <div class="field"><div class="label">Include</div>
        <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Mods</span></label>
        <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Config files</span></label>
        <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">World saves</span></label>
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Export</button></div>`,

  'share-link': () => `
    <div class="mh"><i data-lucide="share-2" class="mh-icon" width="16" height="16"></i><span class="mh-title">Share Instance - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="label" style="margin-bottom:6px">Share Link</div>
      <div class="share-link-box"><i data-lucide="link" width="13" height="13" style="color:var(--t4);flex-shrink:0"></i><span id="share-link-value">${escapeHtml(buildInstanceShareLink())}</span><button style="background:var(--s3);border:1px solid var(--b3);border-radius:5px;padding:2px 8px;font-size:10px;font-family:var(--mono);color:var(--t3);cursor:pointer;flex-shrink:0" onclick="copyShareLinkFromModal()">Copy</button></div>
      <div class="field" style="margin-top:12px"><div class="label">Expires</div><select class="select"><option>Never</option><option>24 hours</option><option>7 days</option></select></div>
      <label class="check-row" style="margin-top:8px"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Include mods &amp; configs</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="showToast('OK','Link shared','Share link generated')"><i data-lucide="share-2" width="12" height="12"></i>Generate New</button></div>`,

  'download-mods': () => `
    <div class="mh"><i data-lucide="search" class="mh-icon" width="16" height="16"></i><span class="mh-title">Download Mods</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" onclick="switchTab(this)">Modrinth</button><button class="tab" onclick="switchTab(this)">CurseForge</button></div>
      <div class="field" style="position:relative"><i data-lucide="search" width="12" height="12" style="position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--t4)"></i><input class="input" style="padding-left:28px" placeholder="Search mods..."></div>
      ${[['SO','Sodium','Render engine rewrite',false],['LI','Lithium','Game logic optimization',true],['IR','Iris Shaders','Shader support',false],['FA','Fabric API','Required library',false]].map(([e,n,d,added])=>`
      <div class="list-item"><div style="width:26px;height:26px;background:var(--s3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:12px;font-family:var(--mono);flex-shrink:0">${e}</div><div style="flex:1"><div style="font-size:12px;font-family:var(--mono);color:var(--t2)">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4)">${d}</div></div><button style="height:25px;padding:0 9px;border-radius:5px;border:1px solid ${added?'var(--b3)':'var(--b2)'};background:${added?'var(--s3)':'var(--s2)'};font-size:10.5px;font-family:var(--mono);color:${added?'var(--t3)':'var(--t2)'};cursor:pointer">${added?'Added':'+ Add'}</button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`,

  'install-modpack': () => `
    <div class="mh"><i data-lucide="layers" class="mh-icon" width="16" height="16"></i><span class="mh-title">Install Modpack</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" onclick="switchTab(this)">Modrinth</button><button class="tab" onclick="switchTab(this)">CurseForge</button><button class="tab" onclick="switchTab(this)">Local</button></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
        ${[['ATM','All the Mods 9','1.21.1 - Forge'],['CA','Create: Astral','1.20.1 - Fabric'],['BMC','Better MC','1.21.4 - Fabric'],['PR','Prominence II','1.20.1 - Forge'],['RA','Roguelike Adv.','1.20.1 - Forge'],['COB','Cobblemon','1.21.1 - Fabric']].map(([e,n,v])=>`
        <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;padding:9px;cursor:pointer;transition:border-color 0.12s" onmouseenter="this.style.borderColor='var(--b3)'" onmouseleave="this.style.borderColor='var(--b2)'">
          <div style="font-size:12px;font-family:var(--mono);margin-bottom:5px">${e}</div>
          <div style="font-size:11.5px;font-family:var(--mono);color:var(--t2)">${n}</div>
          <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">${v}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Install</button></div>`,

  'browse-install': () => `
    <div class="mh">
      <i data-lucide="download" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Install from Browse</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div id="browse-install-summary" style="padding:9px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px;font-size:11px;font-family:var(--mono);color:var(--t3)"></div>
      <div class="field">
        <div class="label">Instance</div>
        <select class="select" id="browse-install-instance" onchange="onBrowseInstallInstanceChange()"></select>
      </div>
      <div style="display:flex;justify-content:flex-end;margin:-4px 0 8px">
        <button class="btn btn-ghost" style="height:28px;padding:0 10px;font-size:10px" onclick="openAddInstanceForBrowseItem()">
          <i data-lucide="plus" width="11" height="11"></i>Add instance for this
        </button>
      </div>
      <div id="browse-install-compat" style="font-size:11px;font-family:var(--mono);color:var(--t4);margin:-4px 0 9px"></div>
      <div class="field">
        <div class="label">If already installed</div>
        <select class="select" id="browse-install-exists-policy" onchange="onBrowseInstallExistsPolicyChange()">
          <option value="skip">Skip existing (Recommended)</option>
          <option value="overwrite">Update / overwrite</option>
        </select>
      </div>
      <div class="field">
        <div class="label">Required / Related Mods</div>
        <div id="browse-install-deps" class="ver-list" style="max-height:130px"></div>
      </div>
      <div id="browse-install-status" style="font-size:11px;font-family:var(--mono);color:var(--t4);padding:8px 9px;border:1px solid var(--b2);border-radius:7px;background:var(--s2)">Select instance to continue.</div>
      <div class="field" style="margin-top:8px">
        <div class="label">Install Log</div>
        <div id="browse-install-log" class="ver-list" style="max-height:120px;font-size:10px;font-family:var(--mono);line-height:1.45"></div>
      </div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" id="browse-install-confirm" onclick="confirmBrowseInstallFromModal()"><i data-lucide="download" width="12" height="12"></i>Install</button>
    </div>`,

  'world-manager': () => `
    <div class="mh"><i data-lucide="globe" class="mh-icon" width="16" height="16"></i><span class="mh-title">Worlds - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="world-manager-list" class="ver-list" style="max-height:250px"></div>
      <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:8px" id="world-manager-meta">Loading worlds...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openModal('datapacks')"><i data-lucide="database" width="12" height="12"></i>Data Packs</button><button class="btn btn-ghost" onclick="openSelectedInstanceFolder('saves')"><i data-lucide="folder-open" width="12" height="12"></i>Open Worlds</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'world-detail': () => `
    <div class="mh"><i data-lucide="map" class="mh-icon" width="16" height="16"></i><span class="mh-title">World Detail</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs" style="margin-bottom:8px">
        <button class="tab active" id="world-tab-overview" onclick="setWorldDetailTab('overview')">Overview</button>
        <button class="tab" id="world-tab-players" onclick="setWorldDetailTab('players')">Players</button>
        <button class="tab" id="world-tab-inventory" onclick="setWorldDetailTab('inventory')">Inventory</button>
        <button class="tab" id="world-tab-stats" onclick="setWorldDetailTab('stats')">Stats</button>
      </div>
      <div id="world-detail-body" style="font-size:12px;font-family:var(--mono);color:var(--t3);min-height:220px">Loading world details...</div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="openSelectedInstanceFolder('saves')"><i data-lucide="folder-open" width="12" height="12"></i>Open Worlds</button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'screenshots': () => `
    <div class="mh"><i data-lucide="camera" class="mh-icon" width="16" height="16"></i><span class="mh-title">Screenshots - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="screenshots-list" class="ver-list" style="max-height:250px"></div>
      <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:8px" id="screenshots-meta">Loading screenshots...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openSelectedInstanceFolder('screenshots')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'notes': () => `
    <div class="mh"><i data-lucide="notebook-pen" class="mh-icon" width="16" height="16"></i><span class="mh-title">Notes - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <textarea class="textarea" rows="7" id="instance-notes-input" placeholder="Write notes for this instance...">${escapeHtml(getInstanceNote(selectedInstanceNameForModal()))}</textarea>
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:6px" id="instance-notes-meta">0 chars</div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="clearNotesFromModal()"><i data-lucide="trash-2" width="12" height="12"></i>Clear</button>
      <button class="btn btn-primary" onclick="saveNotesFromModal()"><i data-lucide="check" width="12" height="12"></i>Save</button>
    </div>`,

  'duplicate': () => `
    <div class="mh"><i data-lucide="copy" class="mh-icon" width="16" height="16"></i><span class="mh-title">Duplicate - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">New Name</div><input class="input" id="duplicate-inst-name" value="${escapeHtml(buildDuplicateInstanceName())}"></div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Mods &amp; configs</span></label>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">World saves</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="duplicateSelectedInstanceFromModal()"><i data-lucide="copy" width="12" height="12"></i>Duplicate</button></div>`,

  'server-connect': () => `
    <div class="mh"><i data-lucide="plug" class="mh-icon" width="16" height="16"></i><span class="mh-title">Quick Connect</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Server Address</div><input class="input" value="mc.hypixel.net"></div>
      ${[['mc.hypixel.net','32ms',true],['play.cubecraft.net','88ms',true],['smp.myserver.net','offline',false]].map(([addr,ping,on])=>`<div class="srv-row"><div class="li-dot ${on?'on':'err'}"></div><span style="flex:1;font-size:12px;font-family:var(--mono);color:${on?'var(--t2)':'var(--t3)'}">${addr}</span><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">${ping}</span></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="play" width="12" height="12"></i>Launch &amp; Connect</button></div>`,

  'add-friend': () => `
    <div class="mh"><i data-lucide="user-plus" class="mh-icon" width="16" height="16"></i><span class="mh-title">Add Friend</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Username</div><input class="input" placeholder="e.g. Technoblade2"></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('OK','Request sent','Friend request sent!')"><i data-lucide="send" width="12" height="12"></i>Send Request</button></div>`,

  'shared-session': () => `
    <div class="mh"><i data-lucide="arrow-right-to-line" class="mh-icon" width="16" height="16"></i><span class="mh-title">Join Session</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:12px"><div style="font-size:12px;font-family:var(--mono)">ATM</div><div><div style="font-size:13px;font-weight:700;color:var(--t1)">All the Mods 9</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t3)">Technoblade2 - 1.21.1 - Forge</div></div><div style="margin-left:auto;display:flex;align-items:center;gap:4px"><div class="li-dot on"></div><span style="font-size:10px;font-family:var(--mono);color:var(--green)">Online</span></div></div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Auto-sync mods</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();launchSequence()"><i data-lucide="play" width="12" height="12"></i>Join Session</button></div>`,

  'banner-picker': () => `
    <div class="mh"><i data-lucide="image" class="mh-icon" width="16" height="16"></i><span class="mh-title">Set Banner - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <input type="hidden" id="banner-picker-selected-key" value="${escapeHtml(resolveInstanceBannerKey((INSTANCE_DATA[selectedInstanceNameForModal()] && INSTANCE_DATA[selectedInstanceNameForModal()].bannerKey) || '', selectedInstanceNameForModal()))}">
      <div class="banner-picker-scroll">
        <div class="ss-grid banner-picker-grid" id="banner-picker-grid">
          ${BANNER_IMAGE_FILES.map((file) => {
            const key = bannerKeyFromFile(file);
            const selectedKey = resolveInstanceBannerKey((INSTANCE_DATA[selectedInstanceNameForModal()] && INSTANCE_DATA[selectedInstanceNameForModal()].bannerKey) || '', selectedInstanceNameForModal());
            const selectedClass = key === selectedKey ? ' selected' : '';
            return `<div class="ss-cell banner-cell${selectedClass}" data-banner-key="${key}" style="background-image:url('assets/banner/${file}');background-size:cover;" onclick="pickBannerFromModal('${key}')"></div>`;
          }).join('')}
        </div>
      </div>
      <div class="dropzone" style="padding:10px;margin-top:8px"><i data-lucide="upload" width="14" height="14"></i><span style="font-size:10.5px;font-family:var(--mono)">Or upload custom image</span></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="applyBannerFromModal()">Apply</button></div>`,

  'create-group': () => `
    <div class="mh"><i data-lucide="folder-plus" class="mh-icon" width="16" height="16"></i><span class="mh-title">Create Group</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field">
        <div class="label">Group Name</div>
        <input class="input" id="create-group-name" maxlength="32" placeholder="e.g. Survival" onkeydown="if(event.key==='Enter'){event.preventDefault();submitCreateGroupFromModal();}">
      </div>
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
        Group names are local to this launcher profile.
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitCreateGroupFromModal()"><i data-lucide="check" width="12" height="12"></i>Create</button></div>`,

  'rename-group': () => `
    <div class="mh"><i data-lucide="pencil" class="mh-icon" width="16" height="16"></i><span class="mh-title">Rename Group</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field">
        <div class="label">Group Name</div>
        <input class="input" id="rename-group-name" maxlength="32" placeholder="Group name" onkeydown="if(event.key==='Enter'){event.preventDefault();submitRenameGroupFromModal();}">
      </div>
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
        Keep names short for cleaner group headers.
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitRenameGroupFromModal()"><i data-lucide="check" width="12" height="12"></i>Save</button></div>`,

  'delete-group': () => `
    <div class="mh"><i data-lucide="trash-2" class="mh-icon" width="16" height="16"></i><span class="mh-title">Delete Group</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="background:rgba(180,40,40,0.08);border:1px solid rgba(180,40,40,0.2);border-radius:8px;padding:10px 12px;margin-bottom:12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="alert-triangle" width="13" height="13" style="color:var(--red);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:var(--t2);line-height:1.65">This action cannot be undone.</span>
      </div>
      <div class="info-grid" style="margin-bottom:10px">
        <div class="info-row"><span class="info-key">Group</span><span class="info-val" id="delete-group-name">-</span></div>
        <div class="info-row"><span class="info-key">Affected Instances</span><span class="info-val" id="delete-group-count">0</span></div>
      </div>
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);line-height:1.6">
        Instances in this group will be moved to <strong style="color:var(--t2)">No group</strong>.
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="submitDeleteGroupFromModal()"><i data-lucide="trash-2" width="12" height="12"></i>Delete Group</button></div>`,

  'move-group': () => `
    <div class="mh"><i data-lucide="folder-input" class="mh-icon" width="16" height="16"></i><span class="mh-title">Move ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${moveGroupEntries()}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="applyMoveGroupFromModal()">Move</button></div>`,

  'resource-packs': () => `
    <div class="mh"><i data-lucide="image" class="mh-icon" width="16" height="16"></i><span class="mh-title">Resource Packs - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="resource-packs-list" class="ver-list" style="max-height:260px"></div>
      <div id="resource-packs-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading resource packs...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openInstanceAssetFolder('resourcepacks')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</button><button class="btn btn-ghost" onclick="refreshInstanceAssetModal('resource-packs')"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'shader-packs': () => `
    <div class="mh"><i data-lucide="sun" class="mh-icon" width="16" height="16"></i><span class="mh-title">Shader Packs - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="shader-packs-list" class="ver-list" style="max-height:260px"></div>
      <div id="shader-packs-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading shader packs...</div>
      <div class="warn-box" style="margin-top:10px;margin-bottom:0"><i data-lucide="info" width="14" height="14" style="color:var(--yellow);flex-shrink:0"></i><span class="warn-text">Iris/Oculus is required for shader runtime.</span></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openInstanceAssetFolder('shaderpacks')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</button><button class="btn btn-ghost" onclick="refreshInstanceAssetModal('shader-packs')"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'import': () => `
    <div class="mh"><i data-lucide="package-open" class="mh-icon" width="16" height="16"></i><span class="mh-title">Import Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" onclick="switchTab(this)">File</button><button class="tab" onclick="switchTab(this)">URL</button></div>
      <div class="dropzone"><i data-lucide="folder-open" width="22" height="22"></i><span style="font-size:11px;font-family:var(--mono)">Drop .mrpack/.zip here</span></div>
      <div class="field" style="margin-top:10px"><div class="label">Or paste URL</div><input class="input" placeholder="https://modrinth.com/modpack/..."></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Import</button></div>`,

  'java-manager': () => `
    <div class="mh"><i data-lucide="cpu" class="mh-icon" width="16" height="16"></i><span class="mh-title">Java Installations</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="java-manager-list" class="ver-list" style="max-height:260px"></div>
      <div id="java-manager-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Detecting Java runtimes...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="refreshJavaManagerModal()"><i data-lucide="scan" width="12" height="12"></i>Auto Detect</button><button class="btn btn-ghost" onclick="openModal('instance-info-java')"><i data-lucide="settings" width="12" height="12"></i>Use in Instance</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'console': () => `
    <div class="mh"><i data-lucide="terminal" class="mh-icon" width="16" height="16"></i><span class="mh-title">Game Console - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="console-log-files" class="ver-list" style="max-height:240px"></div>
      <div id="console-log-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading log files...</div>
    </div>
    <div class="mf" style="justify-content:space-between"><button class="btn btn-ghost" onclick="openInstanceAssetFolder('logs')"><i data-lucide="folder-open" width="12" height="12"></i>Open Logs</button><div style="display:flex;gap:6px"><button class="btn btn-ghost" onclick="refreshConsoleModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-ghost" onclick="openModal('diagnostics')">Diagnostics</button><button class="btn btn-danger" onclick="killInstance()"><i data-lucide="zap-off" width="12" height="12"></i>Kill Game</button></div></div>`,

  'crash': () => `
    <div class="mh"><i data-lucide="circle-x" class="mh-icon" width="16" height="16" style="color:var(--red)"></i><span class="mh-title" style="color:var(--red)">Game Crashed</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="warn-box danger"><i data-lucide="triangle-alert" width="16" height="16" style="color:var(--red);flex-shrink:0"></i><span class="warn-text">java.lang.OutOfMemoryError: Java heap space</span></div>
      <div class="log-area">
        <div class="log-err">[ERROR] JVM max heap: 2G</div>
        <div class="log-err">[ERROR] Used heap: 1.99G</div>
        <div class="log-warn">[HINT] Increase memory for this instance.</div>
      </div>
      <div style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Suggested fix: open instance memory and set max to 4-6 GB.</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openModal('instance-info-memory')"><i data-lucide="hard-drive" width="12" height="12"></i>Open Memory</button><button class="btn btn-ghost" onclick="openModal('diagnostics')">Diagnostics</button><button class="btn btn-primary" onclick="closeModal()">Close</button></div>`,

  'dependencies': () => `
    <div class="mh"><i data-lucide="link" class="mh-icon" width="16" height="16"></i><span class="mh-title">Missing Dependencies</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="dependencies-list" class="ver-list" style="max-height:250px"></div>
      <div id="dependencies-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Scanning dependencies...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="refreshDependenciesModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" id="dependencies-install-btn" onclick="installDependenciesFromModal()"><i data-lucide="download" width="12" height="12"></i>Install Required</button></div>`,

  'mod-conflict': () => `
    <div class="mh"><i data-lucide="shield-alert" class="mh-icon" width="16" height="16" style="color:var(--yellow)"></i><span class="mh-title">Mod Conflict Detected</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="mod-conflict-list" class="ver-list" style="max-height:250px"></div>
      <div id="mod-conflict-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Checking conflicts...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="refreshModConflictModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-ghost" onclick="openModal('diagnostics')">Diagnostics</button><button class="btn btn-primary" id="mod-conflict-fix-btn" onclick="openModal('dependencies')"><i data-lucide="wrench" width="12" height="12"></i>Open Fixes</button></div>`,

  'mod-updates': () => `
    <div class="mh"><i data-lucide="refresh-cw" class="mh-icon" width="16" height="16"></i><span class="mh-title">Mod Updates - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="mod-updates-list" class="ver-list" style="max-height:250px"></div>
      <div id="mod-updates-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading tracked installs...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="toggleAllModUpdatesSelection(true)">Select all</button><button class="btn btn-ghost" onclick="refreshModUpdatesModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-ghost" onclick="closeModal()">Later</button><button class="btn btn-primary" id="mod-updates-apply-btn" onclick="applyModUpdatesFromModal()"><i data-lucide="download" width="12" height="12"></i>Update Selected</button></div>`,

  'version-selector': () => `
    <div class="mh"><i data-lucide="tag" class="mh-icon" width="16" height="16"></i><span class="mh-title">Version Selector</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" id="version-tab-release" onclick="setVersionSelectorMode('release')">Release</button><button class="tab" id="version-tab-snapshot" onclick="setVersionSelectorMode('snapshot')">Snapshot</button><button class="tab" id="version-tab-old" onclick="setVersionSelectorMode('old')">Old</button></div>
      <div class="field" style="position:relative"><i data-lucide="search" width="12" height="12" style="position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--t4)"></i><input class="input" id="version-selector-search" style="padding-left:28px" placeholder="Filter versions..." oninput="onVersionSelectorSearchInput(this.value)"></div>
      <div id="version-selector-list" class="ver-list" style="max-height:190px"></div>
      <div id="version-selector-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading versions...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="applyVersionSelectorSelection()">Select</button></div>`,

  'update-launcher': () => `
    <div class="mh"><i data-lucide="arrow-up-circle" class="mh-icon" width="16" height="16"></i><span class="mh-title">Update Available</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb" style="text-align:center">
      <div style="font-size:30px;margin-bottom:8px">🎉</div>
      <div style="font-size:15px;font-weight:700;color:var(--t1);margin-bottom:2px">Orbiq v2.1.0</div>
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:12px">Current: v2.0.3</div>
      <div style="text-align:left;background:var(--s2);border:1px solid var(--b2);border-radius:8px;padding:10px 12px">
        <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:7px">What's new:</div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">- Diagnostics panel improvements</div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">- Browse/runtime stability updates</div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">- Instance and account UX polish</div>
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Later</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Update Now</button></div>`,

  'datapacks': () => `
    <div class="mh"><i data-lucide="database" class="mh-icon" width="16" height="16"></i><span class="mh-title">Data Packs - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div id="datapacks-list" class="ver-list" style="max-height:260px"></div>
      <div id="datapacks-status" style="margin-top:8px;font-size:10.5px;font-family:var(--mono);color:var(--t4)">Loading worlds...</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openInstanceAssetFolder('saves')"><i data-lucide="folder-open" width="12" height="12"></i>Open Saves</button><button class="btn btn-ghost" onclick="refreshDatapacksModal()"><i data-lucide="refresh-cw" width="12" height="12"></i>Refresh</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'backup': () => `
    <div class="mh"><i data-lucide="archive" class="mh-icon" width="16" height="16"></i><span class="mh-title">Backup - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${[['backup_2025-03-01','234 MB','2 days ago'],['backup_2025-02-20','198 MB','2 weeks ago']].map(([n,s,d])=>`
      <div class="bk-row"><i data-lucide="hard-drive" width="15" height="15" style="color:var(--t4);flex-shrink:0"></i><div style="flex:1"><div style="font-size:12px;font-family:var(--mono);color:var(--t2)">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4)">${s} - ${d}</div></div><button style="background:transparent;border:none;cursor:pointer;color:var(--t4);display:flex" onclick="this.closest('.bk-row').remove()"><i data-lucide="trash-2" width="11" height="11"></i></button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="showToast('OK','Backup created','Saved backup successfully')"><i data-lucide="plus" width="12" height="12"></i>New Backup</button><button class="btn btn-primary"><i data-lucide="rotate-ccw" width="12" height="12"></i>Restore</button></div>`,
};

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// INIT
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
const tauriInvoke = (() => {
  const coreInvoke = window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.invoke;
  const legacyInvoke = window.__TAURI__ && window.__TAURI__.invoke;
  const internalInvoke =
    window.__TAURI_INTERNALS__ &&
    typeof window.__TAURI_INTERNALS__.invoke === 'function'
      ? function invokeWithInternals(command, payload) {
          return window.__TAURI_INTERNALS__.invoke(command, payload || {});
        }
      : null;

  const fn =
    (typeof coreInvoke === 'function' && coreInvoke) ||
    (typeof legacyInvoke === 'function' && legacyInvoke) ||
    internalInvoke;

  if (typeof fn !== 'function') {
    console.warn('Tauri invoke API is not available; backend calls will fail');
    return function missingInvoke() {
      return Promise.reject(new Error('Tauri invoke API is not available'));
    };
  }
  return fn;
})();
const tauriListen = (() => {
  const eventListen = window.__TAURI__ && window.__TAURI__.event && window.__TAURI__.event.listen;
  if (typeof eventListen === 'function') return eventListen;
  const coreListen = window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.listen;
  if (typeof coreListen === 'function') return coreListen;

  // Tauri v2 fallback when global API is not injected, but internals exist.
  const internals = window.__TAURI_INTERNALS__;
  const internalInvoke =
    internals && typeof internals.invoke === 'function'
      ? function invokeWithInternals(command, payload) {
          return internals.invoke(command, payload || {});
        }
      : null;
  const transformCallback =
    internals && typeof internals.transformCallback === 'function'
      ? internals.transformCallback.bind(internals)
      : null;
  const unregisterInternalListener =
    window.__TAURI_EVENT_PLUGIN_INTERNALS__ &&
    typeof window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener === 'function'
      ? window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener.bind(window.__TAURI_EVENT_PLUGIN_INTERNALS__)
      : null;

  if (internalInvoke && transformCallback) {
    return async function listenViaInternals(eventName, handler, options) {
      if (typeof handler !== 'function') {
        throw new Error('listen handler must be a function');
      }
      const opts = options && typeof options === 'object' ? options : null;
      const target = opts && typeof opts.target === 'string'
        ? { kind: 'AnyLabel', label: opts.target }
        : (opts && opts.target) || { kind: 'Any' };
      const callbackId = transformCallback(handler);
      const eventId = await internalInvoke('plugin:event|listen', {
        event: eventName,
        target,
        handler: callbackId,
      });
      return async function unlistenViaInternals() {
        try {
          if (unregisterInternalListener) unregisterInternalListener(eventName, eventId);
        } catch (_err) {}
        await internalInvoke('plugin:event|unlisten', {
          event: eventName,
          eventId,
        });
      };
    };
  }

  console.warn('Tauri listen API not available; lifecycle/provision event stream disabled');
  return null;
})();
const PROVISION_EVENT_NAME = 'orbiq://provision-progress';
const DEEP_LINK_EVENT_NAME = 'deep-link://new-url';
let detachLifecycleListener = null;
let detachProvisionListener = null;
let detachDeepLinkListener = null;
let ACTIVE_PROVISION = null;
const LAUNCH_STARTUP_TIMEOUT_MS = 45000;
const LAUNCH_STARTUP_POLL_MS = 1200;
const LAUNCH_STABLE_POLLS = 3;
const LAUNCH_READY_MIN_ALIVE_MS = 18000;
const INSTANCE_RUNTIME_POLL_MS = 2000;
let JAVA_RUNTIME_INFO = { minimumMajor: 17, defaultPath: null, candidates: [] };
const ADD_INSTANCE_VERSION_CACHE = new Map();
const ADD_INSTANCE_LOADER_VERSION_CACHE = new Map();
let INSTANCE_RUNTIME_POLL_TIMER = null;
let INSTANCE_RUNTIME_POLL_IN_FLIGHT = false;
let INSTANCE_RUNTIME_POLL_SIGNATURE = '';
const INSTANCE_ICON_MANIFEST_PATH = 'assets/instance-icons/isometric-256/manifest.json';
const INSTANCE_ICON_FALLBACK_KEYS = ['block_of_amethyst', 'block_of_diamond', 'bricks_stone', 'natural_grass_block', 'ore_emerald'];
const BANNER_IMAGE_FILES = [
  '0c34cf99c6ef3e6d0afb169eede3d1243f8a8720.webp',
  '194a66202abf4b4c01842411826fcde15863ad9c.webp',
  '2a12588c3cae5a1b59e2154ca8a975349463725d.webp',
  '2d5f7afcbee2ee385db0532d7234d8be3cdc3504.webp',
  '2db359dad7e1d382f1831ae752a4fb0baf07d2b3.webp',
  '331ec5c1ee90d70d97c218dfe52f5113973738b6.webp',
  '4a72f7d54fabe97c8eaf3c5e61894d8dfe2819bf.webp',
  '51b1457222cb549b8aed57045a8900f785abf623.webp',
  '520e2e71c7791a48947698dec9c2a0ab1ab4ca91.webp',
  '53158735be49a61e603c276c66788af48e5a9503.webp',
  '7b30e83ce5f6689f0f775db2e9f86e893f6b5501.webp',
  '80fc3013d9d63fd343980cbebf770fefcd36ed75.webp',
  '964cd5e32519c7bce63cba7e3438428319a38bbf.webp',
  'a7205115d731077733ab5cdcc639e5531f2dee12.webp',
  'e39aa18a7097a5af8072ac77c72160ec02217810.webp',
];
const BANNER_IMAGE_KEYS = BANNER_IMAGE_FILES.map((file) => file.replace(/\.webp$/i, ''));
let INSTANCE_ICON_KEYS = [];
let INSTANCE_ICON_MANIFEST_PROMISE = null;
let PROFILE_DATA = [];
const ORBIQ_ACCOUNT_STORE_KEY = 'orbiq.account.v1';
const INSTANCE_GROUP_STORE_KEY = 'orbiq.instance-groups.v1';
const INSTANCE_NOTES_STORE_KEY = 'orbiq.instance-notes.v1';
const INSTANCE_VIEW_STORE_KEY = 'orbiq.instance-view.v1';
const LAUNCHER_SETTINGS_STORE_KEY = 'orbiq.launcher-settings.v1';
const INSTANCE_INSTALLS_STORE_KEY = 'orbiq.instance-installs.v1';
const WEEKLY_PLAYTIME_STORE_KEY = 'orbiq.instance-weekly-play.v1';
const WEEKLY_PLAYTIME_DAY_COUNT = 7;
const WEEKLY_PLAYTIME_RETENTION_DAYS = 35;
const INSTANCE_GROUP_COLOR_POOL = ['#3a3a3a', '#2a4a2a', '#2a2a4a', '#4a2a2a', '#3a2a4a', '#2a4a4a'];
let ORBIQ_ACCOUNT_STATE = null;
let ORBIQ_REGISTER_STATE = null;
let ORBIQ_REGISTER_RESULT = null;
let PENDING_DEEP_LINK_OTP = '';
let MICROSOFT_AUTH_POLL = null;
let MICROSOFT_DEVICE_POLL_BUSY = false;
let MICROSOFT_DEVICE_STATE = {
  sessionId: '',
  userCode: '',
  verificationUri: 'https://www.microsoft.com/link',
  verificationUriComplete: '',
  intervalSeconds: 5,
  expiresAtEpoch: 0,
  loading: false,
};
let MICROSOFT_OAUTH_EXPECTED_STATE = '';
let MICROSOFT_OAUTH_FLOW_ACTIVE = false;
let MICROSOFT_OAUTH_COMPLETE_IN_FLIGHT = false;
const HANDLED_MICROSOFT_OAUTH_CALLBACKS = new Set();
const MAX_HANDLED_MICROSOFT_OAUTH_CALLBACKS = 24;
let ACTIVE_PROFILE_DETAIL_ID = null;
const HANDLED_DEEP_LINKS = new Set();
const MAX_HANDLED_DEEP_LINKS = 24;
let MOVE_GROUP_SELECTED_ID = '';
let RENAME_GROUP_TARGET_ID = '';
let DELETE_GROUP_TARGET_ID = '';
let INSTANCE_NOTES_LOADED = false;
let INSTANCE_NOTES = {};
let INSTANCE_INSTALLS_LOADED = false;
let INSTANCE_INSTALLS = {};
let WEEKLY_PLAYTIME_CACHE = null;
let INSTANCE_WEEKLY_SESSION_STATE = {};
let MANAGED_MODS_PRESENCE_CACHE = { instanceName: '', rows: [] };
let LAUNCHER_SETTINGS_LOADED = false;
let LAUNCHER_SETTINGS = {};
let MOD_UPDATES_MODAL_STATE = { instanceName: '', rows: [], selected: {} };
let MOD_DEPENDENCIES_MODAL_STATE = { instanceName: '', rows: [] };
let MOD_CONFLICT_MODAL_STATE = { instanceName: '', issues: [] };
let LAUNCH_MISSING_DIALOG_STATE = null;
let LAUNCH_PREFLIGHT_DIALOG_STATE = null;
let SERVER_DEPLOYMENTS_CACHE = [];
let SERVER_SELECTED_DEPLOYMENT_ID = '';
let SERVER_MANAGER_POLL = null;
let SERVER_WARNING_TOAST_AT = 0;
const DIAGNOSTICS_STATE = {
  latestError: null,
  lastCommand: null,
  lastLaunchCommand: null,
  lastLaunchRequest: null,
  lastBundlePath: '',
};

function clearMicrosoftAuthPoll() {
  if (!MICROSOFT_AUTH_POLL) return;
  clearTimeout(MICROSOFT_AUTH_POLL);
  clearInterval(MICROSOFT_AUTH_POLL);
  MICROSOFT_AUTH_POLL = null;
}

function startMicrosoftCallbackWatch() {
  clearMicrosoftAuthPoll();
  let busy = false;
  const startedAt = Date.now();
  MICROSOFT_AUTH_POLL = setInterval(async () => {
    if (busy) return;
    if (Date.now() - startedAt > 3 * 60 * 1000) {
      clearMicrosoftAuthPoll();
      return;
    }
    busy = true;
    try {
      const current = await tauriInvoke('plugin:deep-link|get_current', {});
      await processDeepLinkPayload(current);
    } catch (_err) {
      // Ignore transient deep-link read errors during polling.
    } finally {
      busy = false;
    }
  }, 1200);
}

async function invokeBackend(command, payload) {
  DIAGNOSTICS_STATE.lastCommand = {
    command: String(command || ''),
    at: new Date().toISOString(),
  };
  try {
    const data = await tauriInvoke(command, payload || {});
    return { ok: true, data, error: null };
  } catch (err) {
    const raw = String(err || '');
    const normalized = formatBackendError(raw, 'Backend request failed');
    const matched = raw.match(/^\s*\[([A-Z0-9_]+)\]\s*/);
    const code = matched ? String(matched[1] || '').trim() : '';
    const lowered = raw.toLowerCase();
    const isInstanceInfoNotFound = String(command || '').trim() === 'get_instance_info'
      && lowered.includes('instance')
      && lowered.includes('not found');
    if (code === 'AUTH_RELINK_REQUIRED' || code === 'AUTH_ACCOUNT_SECURITY_INTERRUPT' || isInstanceInfoNotFound) {
      console.warn('[backend] ' + command + ' failed', err);
    } else {
      console.error('[backend] ' + command + ' failed', err);
    }
    DIAGNOSTICS_STATE.latestError = {
      command: String(command || ''),
      code,
      message: normalized,
      raw: raw,
      at: new Date().toISOString(),
    };
    if (code === 'AUTH_RELINK_REQUIRED') {
      promptAuthRelinkGuidance('backend:' + String(command || ''));
    }
    if (code === 'AUTH_ACCOUNT_SECURITY_INTERRUPT') {
      promptAuthSecurityInterruptGuidance('backend:' + String(command || ''));
    }
    return { ok: false, data: null, error: raw };
  }
}

function isAuthRelinkFailureMessage(text) {
  const value = String(text || '').toLowerCase();
  if (!value) return false;
  return value.includes('auth_relink_required')
    || value.includes('relink required')
    || value.includes('link microsoft again')
    || value.includes('token not found for profile')
    || value.includes('refresh token is missing')
    || value.includes('microsoft token is invalid or missing');
}

function isAuthSecurityInterruptMessage(text) {
  const value = String(text || '').toLowerCase();
  if (!value) return false;
  return value.includes('auth_account_security_interrupt')
    || value.includes('aadsts70000')
    || value.includes('account security interrupt')
    || (value.includes('collecting proof') && value.includes('compromised'));
}

function isMicrosoftTokenMissingError(text) {
  const value = String(text || '').toLowerCase();
  if (!value) return false;
  return value.includes('token not found for profile')
    || value.includes('refresh token is missing')
    || value.includes('microsoft token is missing');
}

function promptAuthRelinkGuidance(source) {
  const now = Date.now();
  if (now - LAST_AUTH_RELINK_PROMPT_AT < 5000) return;
  LAST_AUTH_RELINK_PROMPT_AT = now;
  console.warn('[auth] relink required', source || 'unknown');
  goToAccountsPage();
  showToast(
    'MS',
    'Microsoft relink required',
    'Your Microsoft session is missing or expired.',
    {
      label: 'Relink now',
      onClick: () => openModal('link-microsoft'),
    }
  );
}

function promptAuthSecurityInterruptGuidance(source) {
  const now = Date.now();
  if (now - LAST_AUTH_SECURITY_PROMPT_AT < 8000) return;
  LAST_AUTH_SECURITY_PROMPT_AT = now;
  console.warn('[auth] security interrupt', source || 'unknown');
  goToAccountsPage();
  showToast(
    'MS',
    'Microsoft security check required',
    'Verify your Microsoft account security, then link again.',
    {
      label: 'Verify now',
      onClick: () => {
        void openExternalHttpUrl('https://account.live.com/Activity');
      },
    }
  );
}

function isInstanceInfoNotFoundError(raw, instanceName) {
  const lowered = String(raw || '').toLowerCase();
  if (!lowered) return false;
  const normalizedName = String(instanceName || '').trim().toLowerCase();
  if (normalizedName && lowered.includes(normalizedName) && lowered.includes('not found')) {
    return true;
  }
  return lowered.includes("instance '") && lowered.includes('not found');
}

function rememberHandledDeepLink(url) {
  const normalized = String(url || '').trim();
  if (!normalized) return true;
  if (HANDLED_DEEP_LINKS.has(normalized)) return true;
  HANDLED_DEEP_LINKS.add(normalized);
  if (HANDLED_DEEP_LINKS.size > MAX_HANDLED_DEEP_LINKS) {
    const first = HANDLED_DEEP_LINKS.values().next();
    if (!first.done) HANDLED_DEEP_LINKS.delete(first.value);
  }
  return false;
}

function normalizeDeepLinkEntry(entry) {
  if (!entry) return '';
  if (typeof entry === 'string') return entry.trim();
  if (typeof entry === 'object') {
    if (typeof entry.url === 'string') return entry.url.trim();
    if (typeof entry.href === 'string') return entry.href.trim();
    if (typeof entry.uri === 'string') return entry.uri.trim();
  }
  return String(entry || '').trim();
}

function extractDeepLinkUrls(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) {
    return payload
      .map(normalizeDeepLinkEntry)
      .filter((item) => item.length > 0);
  }
  if (typeof payload === 'string') {
    const trimmed = payload.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
      try {
        return extractDeepLinkUrls(JSON.parse(trimmed));
      } catch (_err) {
        return [trimmed];
      }
    }
    return [trimmed];
  }
  if (typeof payload === 'object') {
    if (Array.isArray(payload.urls)) {
      return payload.urls
        .map(normalizeDeepLinkEntry)
        .filter((item) => item.length > 0);
    }
    if (Array.isArray(payload.uris)) {
      return payload.uris
        .map(normalizeDeepLinkEntry)
        .filter((item) => item.length > 0);
    }
    if (payload.payload) {
      const nested = extractDeepLinkUrls(payload.payload);
      if (nested.length) return nested;
    }
    if (payload.data) {
      const nested = extractDeepLinkUrls(payload.data);
      if (nested.length) return nested;
    }
    return [normalizeDeepLinkEntry(payload)].filter((item) => item.length > 0);
  }
  return [];
}

function parseOrbiqDeepLink(rawUrl) {
  const value = String(rawUrl || '').trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (String(url.protocol || '').toLowerCase() !== 'orbiq:') return null;
    const hostAction = String(url.hostname || '').trim().toLowerCase();
    const pathAction = String(url.pathname || '')
      .replace(/^\/+/, '')
      .split('/')[0]
      .trim()
      .toLowerCase();
    const action = hostAction || pathAction || 'open';
    let rawCode = String(url.searchParams.get('code') || url.searchParams.get('auth_code') || '').trim();
    let state = String(url.searchParams.get('state') || '').trim();
    if ((!rawCode || !state) && String(url.hash || '').startsWith('#')) {
      const hashParams = new URLSearchParams(String(url.hash || '').slice(1));
      if (!rawCode) {
        rawCode = String(hashParams.get('code') || hashParams.get('auth_code') || '').trim();
      }
      if (!state) {
        state = String(hashParams.get('state') || '').trim();
      }
    }
    const otpCode = rawCode.replace(/\D+/g, '').slice(0, 6);
    return { action, otpCode, rawCode, state, raw: value };
  } catch (_err) {
    return null;
  }
}

async function focusWindowForDeepLink() {
  const currentWindow = resolveCurrentTauriWindow();
  if (!currentWindow) return;
  try {
    if (typeof currentWindow.show === 'function') await currentWindow.show();
    if (typeof currentWindow.unminimize === 'function') await currentWindow.unminimize();
    if (typeof currentWindow.setFocus === 'function') await currentWindow.setFocus();
  } catch (err) {
    console.warn('failed to focus window from deep link', err);
  }
}

function applyPendingDeepLinkOtpIfAny() {
  const pending = String(PENDING_DEEP_LINK_OTP || '').replace(/\D+/g, '').slice(0, 6);
  if (pending.length !== 6) return false;
  const codeInput = document.getElementById('orbiq-reg-code');
  if (!codeInput) return false;
  codeInput.value = pending;
  codeInput.dispatchEvent(new Event('input', { bubbles: true }));
  if (typeof codeInput.focus === 'function') codeInput.focus();
  PENDING_DEEP_LINK_OTP = '';
  setOrbiqRegisterStatus('Code filled from email. Click Verify.', false);
  return true;
}

function applyOrbiqVerifyDeepLink(code) {
  const normalizedCode = String(code || '').replace(/\D+/g, '').slice(0, 6);
  if (normalizedCode.length !== 6) {
    showToast('!', 'Invalid code', 'Deep link code is missing or invalid');
    return;
  }

  PENDING_DEEP_LINK_OTP = normalizedCode;
  const state = getOrbiqRegisterState();
  if (state.verificationSessionId && state.email) {
    state.step = 2;
  }
  openModal('orbiq-register');
  setTimeout(() => {
    if (!applyPendingDeepLinkOtpIfAny()) {
      setOrbiqRegisterStatus(
        'Code received. Send a verification code from app first, then retry.',
        true
      );
    }
  }, 80);
}

async function completeMicrosoftOAuthFromDeepLink(rawCode, oauthState) {
  const code = String(rawCode || '').trim();
  const state = String(oauthState || '').trim();
  if (!code || !state) {
    showToast('!', 'Microsoft link', 'Missing callback code/state from browser');
    return;
  }
  if (!MICROSOFT_OAUTH_EXPECTED_STATE) {
    const statusEl = document.getElementById('ms-device-status');
    const reason = 'Microsoft sign-in session expired. Start Link Microsoft again.';
    if (statusEl) statusEl.textContent = reason;
    MICROSOFT_OAUTH_FLOW_ACTIVE = false;
    showToast('!', 'Microsoft link expired', reason);
    return;
  }
  if (rememberHandledMicrosoftOauthCallback(code, state)) {
    return;
  }
  if (MICROSOFT_OAUTH_COMPLETE_IN_FLIGHT) {
    return;
  }
  MICROSOFT_OAUTH_COMPLETE_IN_FLIGHT = true;
  clearMicrosoftAuthPoll();

  try {
    if (MICROSOFT_OAUTH_EXPECTED_STATE && MICROSOFT_OAUTH_EXPECTED_STATE !== state) {
      const allowMismatch = !!window.__ORBIQ_ALLOW_STATE_MISMATCH;
      if (!allowMismatch) {
        const reason = 'Microsoft callback state mismatch. Please start Link Microsoft again.';
        const statusEl = document.getElementById('ms-device-status');
        if (statusEl) statusEl.textContent = reason;
        MICROSOFT_OAUTH_FLOW_ACTIVE = false;
        showToast('!', 'Microsoft link failed', reason);
        return;
      }
      console.warn('[ms-oauth] callback state mismatch override enabled');
    }

    const statusEl = document.getElementById('ms-device-status');
    if (statusEl) statusEl.textContent = 'Finishing Microsoft sign-in...';

    const completeRes = await invokeBackend('complete_microsoft_oauth_login_command', {
      request: { state, code },
    });
    if (!completeRes.ok || !completeRes.data) {
      const raw = String(completeRes.error || '');
      if (raw.toLowerCase().includes('already used')) {
        await refreshProfilesFromBackend();
        const profiles = getRenderableProfiles();
        const msProfiles = profiles.filter((item) => String(item && item.profileType ? item.profileType : '').toLowerCase() === 'microsoft');
        for (const profile of msProfiles) {
          const refreshRes = await invokeBackend('refresh_microsoft_profile_token', {
            request: { profileId: String(profile.id || '') },
          });
          if (refreshRes.ok) {
            MICROSOFT_OAUTH_EXPECTED_STATE = '';
            MICROSOFT_OAUTH_FLOW_ACTIVE = false;
            await completeMicrosoftLinkSuccess(String(profile.name || 'Microsoft profile'));
            return;
          }
        }
      }

      const reason = formatBackendError(
        completeRes.error,
        'Microsoft sign-in could not be completed. Please try Link Microsoft again.'
      );
      if (statusEl) statusEl.textContent = reason;
      MICROSOFT_OAUTH_FLOW_ACTIVE = false;
      showToast('!', 'Microsoft link failed', reason);
      return;
    }

    MICROSOFT_OAUTH_EXPECTED_STATE = '';
    MICROSOFT_OAUTH_FLOW_ACTIVE = false;
    const profileName =
      completeRes.data.profile && completeRes.data.profile.name
        ? completeRes.data.profile.name
        : 'Microsoft profile';
    await completeMicrosoftLinkSuccess(profileName);
  } finally {
    MICROSOFT_OAUTH_COMPLETE_IN_FLIGHT = false;
  }
}

async function handleOrbiqDeepLink(rawUrl) {
  const parsed = parseOrbiqDeepLink(rawUrl);
  if (!parsed) return;
  const isMicrosoftCallbackAction =
    parsed.action === 'microsoft-auth'
    || parsed.action === 'microsoft-callback'
    || (!!parsed.rawCode && !!parsed.state);
  if (isMicrosoftCallbackAction && !MICROSOFT_OAUTH_FLOW_ACTIVE && !MICROSOFT_OAUTH_EXPECTED_STATE) {
    // Ignore stale callbacks that arrive outside an active launcher-initiated OAuth flow.
    return;
  }
  if (parsed.rawCode || parsed.state) {
    showToast('DL', 'Deep link received', parsed.action || 'oauth-callback');
  }
  await focusWindowForDeepLink();
  setPage('launch');

  if (parsed.action === 'verify') {
    applyOrbiqVerifyDeepLink(parsed.otpCode);
    return;
  }

  if (parsed.action === 'link-microsoft') {
    if (overlay && overlay.style.display !== 'none') closeModal();
    setTimeout(() => openModal('link-microsoft'), 120);
    return;
  }

  if (parsed.action === 'microsoft-auth' || parsed.action === 'microsoft-callback') {
    await completeMicrosoftOAuthFromDeepLink(parsed.rawCode, parsed.state);
    return;
  }

  // Allow custom redirect URI hosts such as orbiq://auth-callback?code=...&state=...
  if (parsed.rawCode && parsed.state) {
    await completeMicrosoftOAuthFromDeepLink(parsed.rawCode, parsed.state);
    return;
  }

  if (overlay && overlay.style.display !== 'none') closeModal();
}

async function processDeepLinkPayload(payload) {
  const urls = extractDeepLinkUrls(payload);
  for (const url of urls) {
    if (rememberHandledDeepLink(url)) continue;
    await handleOrbiqDeepLink(url);
  }
}

async function setupDeepLinkEventStream() {
  if (!tauriListen) return;
  if (typeof detachDeepLinkListener === 'function') return;
  try {
    detachDeepLinkListener = await tauriListen(DEEP_LINK_EVENT_NAME, (event) => {
      void processDeepLinkPayload(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach deep link listener', err);
  }
}

async function consumeInitialDeepLinkPayload() {
  try {
    const current = await tauriInvoke('plugin:deep-link|get_current', {});
    await processDeepLinkPayload(current);
  } catch (err) {
    console.warn('failed to read initial deep link payload', err);
  }
}

function formatBackendError(errorText, fallbackText) {
  const fallback = String(fallbackText || 'Backend request failed');
  const raw = String(errorText || '').trim();
  if (!raw) return fallback;
  const normalized = normalizeMojibakeText(raw).trim();
  if (!normalized) return fallback;
  const cleaned = normalized.replace(/^Error:\s*/i, '').trim();
  if (!cleaned) return fallback;

  const match = cleaned.match(/^\[([A-Z0-9_]+)\]\s*(.*)$/);
  const code = match ? String(match[1] || '').trim() : '';
  const message = (match ? String(match[2] || '') : cleaned).trim();
  const lower = message.toLowerCase();

  if (code === 'AUTH_ACCOUNT_SECURITY_INTERRUPT') {
    return 'Microsoft blocked sign-in for account security verification. Verify at account.live.com/Activity, then link Microsoft again.';
  }
  if (code === 'AUTH_RELINK_REQUIRED') {
    return 'Microsoft account relink required. Open Accounts and link Microsoft again.';
  }
  if (code === 'AUTH_ENTITLEMENT_MISSING') {
    return 'This Microsoft account does not own Minecraft: Java Edition.';
  }
  if (code === 'AUTH_APP_REGISTRATION_INVALID') {
    return 'Azure app registration is not approved for Minecraft services (see aka.ms/mce-reviewappid).';
  }
  if (code === 'AUTH_CLOCK_SKEW') {
    return 'System clock appears out of sync. Correct date/time and retry Microsoft sign-in.';
  }
  if (code === 'AUTH_OAUTH_COMPLETE_FAILED' && lower.includes('already used')) {
    return 'Microsoft sign-in session already consumed. Start Link Microsoft again.';
  }
  if (code === 'AUTH_OAUTH_COMPLETE_FAILED' && lower.includes('session not found')) {
    return 'Microsoft sign-in session expired. Start Link Microsoft again.';
  }
  if (code === 'AUTH_REFRESH_FAILED' && isAuthSecurityInterruptMessage(message)) {
    return 'Microsoft requires account security verification. Verify at account.live.com/Activity, then link Microsoft again.';
  }
  if (
    lower.includes('the application is a first party application')
    && lower.includes('pre-authorization for the resource server')
  ) {
    return 'This Azure App ID is not approved for Minecraft/Xbox scopes yet. Submit/wait for approval at aka.ms/mce-reviewappid, then retry link.';
  }

  if (lower.includes('invalid app registration') || lower.includes('aka.ms/appreginfo')) {
    return 'Azure app registration is invalid for Minecraft services. Submit/approve AppID first.';
  }
  if (isAuthSecurityInterruptMessage(lower)) {
    return 'Microsoft requires account security verification. Verify at account.live.com/Activity, then link Microsoft again.';
  }
  if (lower.includes('does not own minecraft') || lower.includes('minecraft profile not found')) {
    return 'This Microsoft account does not own Minecraft: Java Edition.';
  }
  if (lower.includes('token not found for profile') || lower.includes('refresh token is missing')) {
    return 'Microsoft token is invalid or missing. Please relink Microsoft account.';
  }

  return message || fallback;
}

async function completeMicrosoftLinkSuccess(profileName) {
  clearMicrosoftAuthPoll();
  MICROSOFT_OAUTH_FLOW_ACTIVE = false;
  await refreshProfilesFromBackend();
  const orbiqAccount = getOrbiqAccountState();
  if (orbiqAccount) {
    orbiqAccount.microsoftLinked = true;
    persistOrbiqAccountState(orbiqAccount);
  }
  if (overlay && overlay.style.display !== 'none') closeModal();
  goToAccountsPage();
  showToast('OK', 'Account linked', String(profileName || 'Microsoft profile') + ' connected successfully');
}

function normalizeOrbiqEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizeOrbiqUsername(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  return raw
    .replace(/^@+/, '')
    .replace(/\.orbiq$/i, '')
    .replace(/[^a-z0-9_-]/g, '');
}

function ensureOrbiqUsername(value) {
  const label = normalizeOrbiqUsername(value);
  return label ? `${label}.orbiq` : '';
}

function getOrbiqUsernameLabel(value) {
  return normalizeOrbiqUsername(value);
}

function togglePasswordVisibility(inputId, triggerEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  if (triggerEl) {
    triggerEl.textContent = show ? 'Hide' : 'Show';
  }
}

function hashOrbiqPassword(password) {
  const input = String(password || '');
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function hashStableText(value) {
  const input = String(value || '');
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

function resolveOrbiqAccountId(account) {
  const existing = account && typeof account.accountId === 'string'
    ? account.accountId.trim().toUpperCase()
    : '';
  if (/^ORQ-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(existing)) return existing;

  const username = ensureOrbiqUsername((account && account.username) || '');
  const email = normalizeOrbiqEmail((account && account.email) || '');
  const created = Number((account && account.createdAtEpoch) || 0) || 0;
  const seed = [username, email, String(created)].join('|') || 'orbiq-local';
  const token = hashStableText(seed);
  return `ORQ-${token.slice(0, 4)}-${token.slice(4, 8)}`;
}

function loadOrbiqAccountState() {
  try {
    const raw = window.localStorage ? window.localStorage.getItem(ORBIQ_ACCOUNT_STORE_KEY) : null;
    if (!raw) {
      ORBIQ_ACCOUNT_STATE = null;
      return null;
    }
    const parsed = JSON.parse(raw);
    const email = normalizeOrbiqEmail(parsed && parsed.email);
    const passwordHash = String(parsed && parsed.passwordHash ? parsed.passwordHash : '').trim();
    if (!email || !passwordHash) {
      ORBIQ_ACCOUNT_STATE = null;
      return null;
    }
    const normalizedUsername = ensureOrbiqUsername((parsed && parsed.username) || '');
    const createdAtEpoch =
      Number((parsed && parsed.createdAtEpoch) || 0) || Math.floor(Date.now() / 1000);
    ORBIQ_ACCOUNT_STATE = {
      email,
      passwordHash,
      username: normalizedUsername,
      displayName: String((parsed && parsed.displayName) || '').trim(),
      plan: String((parsed && parsed.plan) || 'Free'),
      createdAtEpoch,
      lastLoginAtEpoch: parsed && parsed.lastLoginAtEpoch ? Number(parsed.lastLoginAtEpoch) : null,
      signedIn: !!(parsed && parsed.signedIn),
      microsoftLinked: !!(parsed && parsed.microsoftLinked),
      accountId: resolveOrbiqAccountId({
        accountId: parsed && parsed.accountId,
        username: normalizedUsername,
        email,
        createdAtEpoch,
      }),
    };
    return ORBIQ_ACCOUNT_STATE;
  } catch (err) {
    console.warn('[orbiq] failed to load account state', err);
    ORBIQ_ACCOUNT_STATE = null;
    return null;
  }
}

function persistOrbiqAccountState(nextState) {
  ORBIQ_ACCOUNT_STATE = nextState || null;
  try {
    if (!window.localStorage) return;
    if (!ORBIQ_ACCOUNT_STATE) {
      window.localStorage.removeItem(ORBIQ_ACCOUNT_STORE_KEY);
      return;
    }
    window.localStorage.setItem(ORBIQ_ACCOUNT_STORE_KEY, JSON.stringify(ORBIQ_ACCOUNT_STATE));
  } catch (err) {
    console.warn('[orbiq] failed to persist account state', err);
  }
}

function getOrbiqAccountState() {
  if (ORBIQ_ACCOUNT_STATE) return ORBIQ_ACCOUNT_STATE;
  return loadOrbiqAccountState();
}

function resolveCurrentTauriWindow() {
  const tauriRoot = window.__TAURI__ || {};
  const windowApi = tauriRoot.window || {};

  if (typeof windowApi.getCurrentWindow === 'function') {
    try {
      return windowApi.getCurrentWindow();
    } catch (err) {
      console.warn('[window] getCurrentWindow failed', err);
    }
  }

  if (typeof windowApi.getCurrent === 'function') {
    try {
      return windowApi.getCurrent();
    } catch (err) {
      console.warn('[window] getCurrent failed', err);
    }
  }

  if (windowApi.appWindow && typeof windowApi.appWindow === 'object') {
    return windowApi.appWindow;
  }

  return null;
}

async function runWindowCommand(methodName, invokeCommand) {
  const currentWindow = resolveCurrentTauriWindow();
  if (currentWindow && typeof currentWindow[methodName] === 'function') {
    try {
      await currentWindow[methodName]();
      return true;
    } catch (err) {
      console.warn('[window] method failed: ' + methodName, err);
    }
  }

  try {
    await tauriInvoke(invokeCommand, {});
    return true;
  } catch (errNoLabel) {
    try {
      await tauriInvoke(invokeCommand, { label: 'main' });
      return true;
    } catch (errWithLabel) {
      console.warn('[window] invoke failed: ' + invokeCommand, errNoLabel, errWithLabel);
    }
  }

  return false;
}

function initWindowControls() {
  const buttons = document.querySelectorAll('[data-window-action]');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const action = button.getAttribute('data-window-action');
      let ok = false;

      if (action === 'minimize') {
        ok = await runWindowCommand('minimize', 'plugin:window|minimize');
      } else if (action === 'maximize') {
        ok = await runWindowCommand('toggleMaximize', 'plugin:window|toggle_maximize');
      } else if (action === 'close') {
        ok = await runWindowCommand('close', 'plugin:window|close');
      }

      if (!ok) {
        showToast('!', 'Window controls', 'Failed to call window API');
      }
    });
  });
}

function isTitlebarInteractiveTarget(target) {
  if (!target || !(target instanceof Element)) return false;
  return !!target.closest(
    'button,input,select,textarea,a,[role="button"],.tb-btn,.wm-btn,.wm-btns,.titlebar-right,.search-wrap,.search-input,.auth-wrap,.auth-pill,.auth-dropdown,.auth-dd-item'
  );
}

function initTitlebarDrag() {
  const titlebar = document.querySelector('.titlebar');
  if (!titlebar) return;

  titlebar.addEventListener('mousedown', async (event) => {
    if (event.button !== 0) return;
    if (isTitlebarInteractiveTarget(event.target)) return;
    await runWindowCommand('startDragging', 'plugin:window|start_dragging');
  });
}

function getSelectedInstanceName() {
  const selectedCard = document.querySelector('.instance-card.selected');
  if (selectedCard && selectedCard.dataset && selectedCard.dataset.name) {
    return selectedCard.dataset.name;
  }
  const detailName = document.getElementById('detail-name');
  const value = detailName ? detailName.textContent.trim() : '';
  if (!value) return null;
  const exists = Array.from(document.querySelectorAll('.instance-card')).some((item) => {
    return String(item.dataset.name || '').trim().toLowerCase() === value.toLowerCase();
  });
  return exists ? value : null;
}

function openInstanceJavaConfig() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  openModal('instance-info-java');
}

function openInstanceMemoryConfig() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  openModal('instance-info-memory');
}

function selectInstanceByName(name) {
  const target = String(name || '').trim().toLowerCase();
  if (!target) return false;
  const card = Array.from(document.querySelectorAll('.instance-card')).find((item) => {
    const current = String(item.dataset.name || '').trim().toLowerCase();
    return current === target;
  });
  if (!card) return false;
  selectCard(card);
  return true;
}

function getSelectedLaunchProfileName() {
  const selected = document.querySelector('.profile-select-item.selected .ps-name');
  return selected ? selected.textContent.trim() : null;
}

function getSelectedLaunchProfileId() {
  const selected = document.querySelector('.profile-select-item.selected');
  if (!selected) return null;
  const value = String(selected.getAttribute('data-profile-id') || '').trim();
  return value || null;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function refreshProfilesFromBackend() {
  const res = await invokeBackend('get_profiles');
  if (res.ok && Array.isArray(res.data)) {
    PROFILE_DATA = res.data.map(normalizeProfileRecord);
    syncAuthPillFromProfiles();
    return true;
  }
  return false;
}

function normalizeProfileRecord(raw) {
  const source = raw && typeof raw === 'object' ? raw : {};
  return {
    id: String(source.id || '').trim(),
    name: String(source.name || 'Player').trim() || 'Player',
    profileType: String(source.profileType || source.profile_type || 'offline').toLowerCase(),
    active: !!source.active,
    accountId: source.accountId || source.account_id || null,
    email: source.email || null,
    accessTokenExpiresAtEpoch:
      source.accessTokenExpiresAtEpoch || source.access_token_expires_at_epoch || null,
    lastAuthenticatedAtEpoch:
      source.lastAuthenticatedAtEpoch || source.last_authenticated_at_epoch || null,
  };
}

function getRenderableProfiles() {
  return Array.isArray(PROFILE_DATA) ? PROFILE_DATA.map(normalizeProfileRecord) : [];
}

function profileLaunchItemMarkup(profile, selected) {
  const isMicrosoft = String(profile.profileType || '').toLowerCase() === 'microsoft';
  const safeName = escapeHtml(profile.name || 'Player');
  const itemClass = isMicrosoft ? 'ms-type' : 'offline-type';
  const avatarMarkup = isMicrosoft
    ? `<div class="ps-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(profile.name || 'Steve')}/64" onerror="this.parentNode.innerHTML='?'" style="width:100%;image-rendering:pixelated"></div>`
    : `<div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="18" height="18" style="color:var(--t3)"></i></div>`;
  const desc = isMicrosoft ? 'Microsoft - Official servers' : 'Offline - Cracked servers only';
  const tag = isMicrosoft
    ? `<div class="ps-tag ms"><div class="ms-grid" style="width:10px;height:10px;margin-right:5px;display:inline-grid;gap:1px"><div style="background:#f25022;border-radius:0.5px"></div><div style="background:#7fba00;border-radius:0.5px"></div><div style="background:#00a4ef;border-radius:0.5px"></div><div style="background:#ffb900;border-radius:0.5px"></div></div>Microsoft</div>`
    : '<div class="ps-tag off">Offline</div>';
  return `
    <div class="profile-select-item ${itemClass}${selected ? ' selected' : ''}" onclick="selectLaunchProfile(this)" data-profile-id="${escapeHtml(profile.id || '')}">
      ${avatarMarkup}
      <div style="flex:1">
        <div class="ps-name">${safeName}</div>
        <div class="ps-desc">${desc}</div>
      </div>
      ${tag}
    </div>
  `;
}

function hydrateLaunchProfileModal() {
  const list = document.querySelector('.profile-select-list');
  if (!list) return;

  const profiles = getRenderableProfiles();
  const activeIndex = profiles.findIndex((item) => !!item.active);
  list.innerHTML = profiles
    .map((profile, index) => profileLaunchItemMarkup(profile, index === (activeIndex >= 0 ? activeIndex : 0)))
    .join('');

  const titleStrong = modalPop && modalPop.querySelector('.mb strong');
  if (titleStrong) titleStrong.textContent = getSelectedInstanceName() || 'Instance';
  lucide.createIcons();
}

function getSkinManagerTargetProfile() {
  const profiles = getRenderableProfiles();
  if (!profiles.length) return null;
  const active = profiles.find((item) => !!item.active) || profiles[0];
  if (active && String(active.profileType || '').toLowerCase() === 'microsoft') {
    return active;
  }
  const microsoft = profiles.find((item) => String(item.profileType || '').toLowerCase() === 'microsoft');
  return microsoft || active || null;
}

function setSkinManagerStatus(message, isError) {
  const statusEl = document.getElementById('skin-manager-status');
  if (!statusEl) return;
  statusEl.textContent = String(message || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function clearSkinManagerUploadSelection() {
  SKIN_MANAGER_STATE.imageBase64 = '';
  SKIN_MANAGER_STATE.localPreviewDataUrl = '';
  SKIN_MANAGER_STATE.fileName = '';
  SKIN_MANAGER_STATE.lastValidation = null;
}

const SKIN_RECENT_STORE_KEY = 'orbiq.skin.recent.v1';
const SKIN_RECENT_LIMIT = 12;
const SKIN_RECENT_RENDER_LIMIT = 6;

function loadSkinRecentEntries() {
  try {
    if (!window.localStorage) return [];
    const raw = window.localStorage.getItem(SKIN_RECENT_STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((row) => {
        const dataUrl = String(row && row.dataUrl ? row.dataUrl : '').trim();
        if (!dataUrl.startsWith('data:image/png')) return null;
        return {
          dataUrl,
          fileName: String(row && row.fileName ? row.fileName : 'skin.png').trim() || 'skin.png',
          variant: String(row && row.variant ? row.variant : 'classic').toLowerCase() === 'slim' ? 'slim' : 'classic',
          source: String(row && row.source ? row.source : '').trim(),
          at: Number(row && row.at ? row.at : 0) || Date.now(),
        };
      })
      .filter(Boolean)
      .slice(0, SKIN_RECENT_LIMIT);
  } catch (_err) {
    return [];
  }
}

function persistSkinRecentEntries(rows) {
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(SKIN_RECENT_STORE_KEY, JSON.stringify(Array.isArray(rows) ? rows.slice(0, SKIN_RECENT_LIMIT) : []));
  } catch (_err) {}
}

function ensureSkinRecentEntriesLoaded() {
  if (SKIN_MANAGER_STATE.recentLoaded) return;
  SKIN_MANAGER_STATE.recentSkins = loadSkinRecentEntries();
  SKIN_MANAGER_STATE.recentLoaded = true;
}

function pushSkinRecentEntry(dataUrl, fileName, variant, source) {
  const normalizedUrl = String(dataUrl || '').trim();
  if (!normalizedUrl.startsWith('data:image/png')) return;
  ensureSkinRecentEntriesLoaded();

  const entry = {
    dataUrl: normalizedUrl,
    fileName: String(fileName || 'skin.png').trim() || 'skin.png',
    variant: String(variant || 'classic').toLowerCase() === 'slim' ? 'slim' : 'classic',
    source: String(source || '').trim(),
    at: Date.now(),
  };

  const rows = Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins.slice() : [];
  const deduped = rows.filter((row) => String(row && row.dataUrl ? row.dataUrl : '').trim() !== normalizedUrl);
  deduped.unshift(entry);
  if (deduped.length > SKIN_RECENT_LIMIT) deduped.length = SKIN_RECENT_LIMIT;
  SKIN_MANAGER_STATE.recentSkins = deduped;
  persistSkinRecentEntries(deduped);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('failed to read selected file'));
    reader.readAsDataURL(file);
  });
}

function extractPngBase64(dataUrl) {
  const normalized = String(dataUrl || '');
  if (!normalized.startsWith('data:image/png')) return '';
  const marker = 'base64,';
  const markerIndex = normalized.indexOf(marker);
  if (markerIndex < 0) return '';
  return normalized.slice(markerIndex + marker.length).trim();
}

async function applySkinDataUrlToState(dataUrl, fileName, variantHint, sourceLabel, includeRecent) {
  const normalized = String(dataUrl || '').trim();
  if (!normalized.startsWith('data:image/png')) {
    throw new Error('Skin must be a PNG image');
  }
  const payload = extractPngBase64(normalized);
  if (!payload) throw new Error('Could not parse PNG payload');

  const validation = await inspectSkinPngDataUrl(normalized);
  const preferredVariant = String(variantHint || '').toLowerCase() === 'slim' ? 'slim' : '';
  const finalVariant = validation.height === 32
    ? 'classic'
    : (preferredVariant || (validation.autoVariant === 'slim' ? 'slim' : 'classic'));

  SKIN_MANAGER_STATE.imageBase64 = payload;
  SKIN_MANAGER_STATE.localPreviewDataUrl = normalized;
  SKIN_MANAGER_STATE.fileName = String(fileName || 'skin.png').trim() || 'skin.png';
  SKIN_MANAGER_STATE.lastValidation = validation;
  SKIN_MANAGER_STATE.variant = finalVariant;

  if (includeRecent !== false) {
    pushSkinRecentEntry(normalized, SKIN_MANAGER_STATE.fileName, finalVariant, sourceLabel || '');
  }
}

function hydrateSkinManagerRecentGrid() {
  const grid = document.getElementById('skin-manager-recent-grid');
  if (!grid) return;
  ensureSkinRecentEntriesLoaded();
  const rows = (Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins : []).slice(0, SKIN_RECENT_RENDER_LIMIT);
  if (!rows.length) {
    grid.innerHTML = '<div class="skin-recent-empty">No recent skins</div>';
    return;
  }
  grid.innerHTML = rows.map((row, index) => (
    '<button class="skin-recent-item" title="' + escapeHtml(row.fileName) + '" onclick="applyRecentSkinFromModal(' + String(index) + ')" oncontextmenu="openSkinRecentContextMenu(event,' + String(index) + ')">' +
    '<img src="' + escapeHtml(row.dataUrl) + '" alt="' + escapeHtml(row.fileName) + '">' +
    '<span>' + escapeHtml(row.variant === 'slim' ? 'Slim' : 'Classic') + '</span>' +
    '</button>'
  )).join('');
}

function formatSkinHistoryAge(epochValue) {
  const epoch = Number(epochValue || 0);
  if (!epoch || !Number.isFinite(epoch)) return 'unknown';
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.max(0, now - epoch);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  return Math.floor(diff / 86400) + 'd ago';
}

function detectSlimVariantFromImageData(imageData, width, height) {
  if (width !== 64 || height < 64 || !imageData || !imageData.length) return 'classic';
  const alphaAt = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return 0;
    const offset = ((y * width) + x) * 4 + 3;
    return imageData[offset] || 0;
  };
  const markers = [
    [54, 20],
    [55, 20],
    [54, 31],
    [55, 31],
    [46, 52],
    [47, 52],
    [46, 63],
    [47, 63],
  ];
  let transparentCount = 0;
  markers.forEach(([x, y]) => {
    if (alphaAt(x, y) === 0) transparentCount += 1;
  });
  return transparentCount >= 6 ? 'slim' : 'classic';
}

async function inspectSkinPngDataUrl(dataUrl) {
  const source = String(dataUrl || '').trim();
  if (!source.startsWith('data:image/png')) {
    throw new Error('Skin must be a PNG file');
  }
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Could not decode PNG image'));
    img.src = source;
  });
  const width = Number(image.width || 0);
  const height = Number(image.height || 0);
  if (width !== 64) throw new Error('Skin width must be exactly 64px');
  if (height !== 64 && height !== 32) throw new Error('Skin height must be 64px or 32px');

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Could not inspect skin image');
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0);
  const pixels = ctx.getImageData(0, 0, width, height).data;
  const autoVariant = height === 32 ? 'classic' : detectSlimVariantFromImageData(pixels, width, height);
  return { width, height, autoVariant };
}

function getSkinview3dApi() {
  const api = window && (window.skinview3d || window.SkinView3D);
  if (!api || typeof api.SkinViewer !== 'function') return null;
  return api;
}

function setSkinViewerFallback(message, visible) {
  const fallback = document.getElementById('skin-manager-viewer-fallback');
  if (!fallback) return;
  fallback.style.display = visible ? 'flex' : 'none';
  if (message) fallback.textContent = String(message);
}

function destroySkinViewerRuntime() {
  if (SKIN_VIEWER_RUNTIME.resizeObserver) {
    try {
      SKIN_VIEWER_RUNTIME.resizeObserver.disconnect();
    } catch (_err) {}
  }
  SKIN_VIEWER_RUNTIME.resizeObserver = null;
  if (SKIN_VIEWER_RUNTIME.viewer && typeof SKIN_VIEWER_RUNTIME.viewer.dispose === 'function') {
    try {
      SKIN_VIEWER_RUNTIME.viewer.dispose();
    } catch (_err) {}
  }
  SKIN_VIEWER_RUNTIME.viewer = null;
  SKIN_VIEWER_RUNTIME.controls = null;
  SKIN_VIEWER_RUNTIME.canvas = null;
}

function resizeSkinViewerCanvas() {
  const canvas = document.getElementById('skin-manager-3d-canvas');
  if (!canvas || !SKIN_VIEWER_RUNTIME.viewer) return;
  const width = Math.max(160, Math.floor(canvas.clientWidth || canvas.parentElement?.clientWidth || 260));
  const height = Math.max(220, Math.floor(canvas.clientHeight || canvas.parentElement?.clientHeight || 314));
  if (canvas.width !== width) canvas.width = width;
  if (canvas.height !== height) canvas.height = height;
  SKIN_VIEWER_RUNTIME.viewer.width = width;
  SKIN_VIEWER_RUNTIME.viewer.height = height;
}

function refreshSkinViewerAutoRotateButton() {
  const button = document.getElementById('skin-manager-auto-rotate-btn');
  if (!button) return;
  const enabled = !!SKIN_VIEWER_RUNTIME.autoRotate;
  button.style.borderColor = enabled ? 'rgba(80,180,120,0.42)' : '';
  button.style.color = enabled ? 'var(--green)' : '';
}

function applySkinViewerAutoRotateState() {
  if (SKIN_VIEWER_RUNTIME.controls) {
    SKIN_VIEWER_RUNTIME.controls.autoRotate = !!SKIN_VIEWER_RUNTIME.autoRotate;
    SKIN_VIEWER_RUNTIME.controls.autoRotateSpeed = 2.0;
  }
  refreshSkinViewerAutoRotateButton();
}

function ensureSkinViewerRuntime() {
  const api = getSkinview3dApi();
  const canvas = document.getElementById('skin-manager-3d-canvas');
  if (!canvas) return null;
  if (!api) {
    setSkinViewerFallback('3D preview module not loaded', true);
    return null;
  }

  if (SKIN_VIEWER_RUNTIME.viewer && SKIN_VIEWER_RUNTIME.canvas === canvas) {
    resizeSkinViewerCanvas();
    return SKIN_VIEWER_RUNTIME;
  }

  destroySkinViewerRuntime();
  try {
    const viewer = new api.SkinViewer({
      canvas,
      width: Math.max(160, Math.floor(canvas.clientWidth || 260)),
      height: Math.max(220, Math.floor(canvas.clientHeight || 314)),
      skin: null,
    });
    viewer.fov = 50;
    viewer.zoom = 0.9;

    let controls = null;
    if (typeof api.createOrbitControls === 'function') {
      controls = api.createOrbitControls(viewer);
      if (controls) {
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.rotateSpeed = 0.9;
      }
    }
    if (typeof api.IdleAnimation === 'function') {
      viewer.animation = new api.IdleAnimation();
    }

    SKIN_VIEWER_RUNTIME.viewer = viewer;
    SKIN_VIEWER_RUNTIME.controls = controls;
    SKIN_VIEWER_RUNTIME.canvas = canvas;
    applySkinViewerAutoRotateState();

    if (typeof ResizeObserver === 'function') {
      SKIN_VIEWER_RUNTIME.resizeObserver = new ResizeObserver(() => {
        resizeSkinViewerCanvas();
      });
      SKIN_VIEWER_RUNTIME.resizeObserver.observe(canvas.parentElement || canvas);
    }
    resizeSkinViewerCanvas();
    setSkinViewerFallback('', false);
    return SKIN_VIEWER_RUNTIME;
  } catch (_err) {
    setSkinViewerFallback('Could not initialize 3D preview', true);
    return null;
  }
}

function loadSkinViewerAsset(loaderResult, onError) {
  if (!loaderResult || typeof loaderResult.then !== 'function') return;
  loaderResult.catch(() => {
    if (typeof onError === 'function') onError();
  });
}

function getDefaultSkinDataUrl() {
  if (SKIN_VIEWER_RUNTIME.defaultSkinDataUrl) return SKIN_VIEWER_RUNTIME.defaultSkinDataUrl;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    ctx.clearRect(0, 0, 64, 64);
    // Base transparent background.
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 64, 64);

    // Head (8x8 at [8,8]).
    ctx.fillStyle = '#d4ad8a';
    ctx.fillRect(8, 8, 8, 8);
    ctx.fillStyle = '#5a3a22';
    ctx.fillRect(8, 8, 8, 2);

    // Body (8x12 at [20,20]).
    ctx.fillStyle = '#3d7ac5';
    ctx.fillRect(20, 20, 8, 12);
    // Arms.
    ctx.fillRect(44, 20, 4, 12);
    ctx.fillRect(36, 52, 4, 12);
    // Legs.
    ctx.fillStyle = '#2d4366';
    ctx.fillRect(4, 20, 4, 12);
    ctx.fillRect(20, 52, 8, 12);

    SKIN_VIEWER_RUNTIME.defaultSkinDataUrl = canvas.toDataURL('image/png');
    return SKIN_VIEWER_RUNTIME.defaultSkinDataUrl;
  } catch (_err) {
    return '';
  }
}

function syncSkinManagerPreview(previewSource, profileName) {
  const runtime = ensureSkinViewerRuntime();
  if (!runtime || !runtime.viewer) return;

  const defaultSkin = getDefaultSkinDataUrl();
  const skinSource = String(previewSource || '').trim() || defaultSkin;
  const variant = SKIN_MANAGER_STATE.variant === 'slim' ? 'slim' : 'classic';
  try {
    const result = runtime.viewer.loadSkin(skinSource, { model: variant });
    loadSkinViewerAsset(result, () => {
      if (defaultSkin && skinSource !== defaultSkin) {
        try {
          const fallbackResult = runtime.viewer.loadSkin(defaultSkin, { model: variant });
          loadSkinViewerAsset(fallbackResult, () => setSkinViewerFallback('Could not load skin texture', true));
          setSkinViewerFallback('', false);
          return;
        } catch (_err) {}
      }
      setSkinViewerFallback('Could not load skin texture', true);
    });
    setSkinViewerFallback('', false);
  } catch (_err) {
    setSkinViewerFallback('Could not render selected skin', true);
  }

  const capeSource = String(SKIN_MANAGER_STATE.localCapePreviewDataUrl || SKIN_MANAGER_STATE.currentCapeUrl || '').trim();
  if (!capeSource) {
    if (typeof runtime.viewer.resetCape === 'function') {
      try {
        runtime.viewer.resetCape();
      } catch (_err) {}
    } else {
      try {
        runtime.viewer.loadCape(null);
      } catch (_err) {}
    }
    return;
  }

  try {
    const capeResult = runtime.viewer.loadCape(capeSource);
    loadSkinViewerAsset(capeResult, () => setSkinViewerFallback('Cape preview failed to load', true));
  } catch (_err) {
    setSkinViewerFallback('Cape preview failed to load', true);
  }
}

function hydrateSkinManagerCurrentInfo() {
  const currentEl = document.getElementById('skin-manager-current');
  if (!currentEl) return;
  if (SKIN_MANAGER_STATE.syncingCurrent) {
    currentEl.textContent = 'Syncing current skin...';
    return;
  }
  if (!SKIN_MANAGER_STATE.currentSkinUrl) {
    currentEl.innerHTML =
      '<div style="color:var(--t4)">No synced skin metadata yet.</div>' +
      (SKIN_MANAGER_STATE.lastSyncAt
        ? '<div style="margin-top:2px">Last check: ' + escapeHtml(formatSkinHistoryAge(Math.floor(SKIN_MANAGER_STATE.lastSyncAt / 1000))) + '</div>'
        : '');
    return;
  }
  const variantLabel = SKIN_MANAGER_STATE.currentSkinVariant === 'slim' ? 'Slim (Alex)' : 'Classic (Steve)';
  const capeLabel = SKIN_MANAGER_STATE.currentCapeUrl ? 'Synced' : 'None';
  currentEl.innerHTML =
    '<div style="color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Variant: ' + escapeHtml(variantLabel) + '</div>' +
    '<div style="margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Cape: ' + escapeHtml(capeLabel) + '</div>' +
    '<div style="margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">URL: ' + escapeHtml(SKIN_MANAGER_STATE.currentSkinUrl) + '</div>' +
    '<div style="margin-top:2px;color:var(--t4)">Synced ' + escapeHtml(formatSkinHistoryAge(Math.floor((SKIN_MANAGER_STATE.lastSyncAt || 0) / 1000))) + '</div>';
}

function hydrateSkinManagerHistoryOptions(isMicrosoft) {
  const selectEl = document.getElementById('skin-manager-history-select');
  const rollbackBtn = document.getElementById('skin-manager-rollback-btn');
  if (!selectEl) return;
  const rows = Array.isArray(SKIN_MANAGER_STATE.history) ? SKIN_MANAGER_STATE.history : [];
  if (!isMicrosoft) {
    selectEl.innerHTML = '<option value="">Microsoft profile required</option>';
    selectEl.disabled = true;
    if (rollbackBtn) rollbackBtn.disabled = true;
    return;
  }
  if (!rows.length) {
    selectEl.innerHTML = '<option value="">No history</option>';
    selectEl.disabled = true;
    if (rollbackBtn) rollbackBtn.disabled = true;
    return;
  }
  selectEl.innerHTML = rows
    .map((entry, index) => {
      const variant = String(entry && entry.variant ? entry.variant : 'classic').toLowerCase() === 'slim'
        ? 'slim'
        : 'classic';
      const capturedAt = Number(entry && entry.capturedAtEpoch ? entry.capturedAtEpoch : 0);
      const label = '#' + (index + 1) + ' - ' + variant + ' - ' + formatSkinHistoryAge(capturedAt);
      return '<option value="' + String(index) + '">' + escapeHtml(label) + '</option>';
    })
    .join('');
  selectEl.disabled = SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent;
  if (rollbackBtn) {
    rollbackBtn.disabled = SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent || !rows.length;
  }
}

async function syncSkinManagerFromBackend(force) {
  const profileId = String(SKIN_MANAGER_STATE.profileId || '').trim();
  const profileType = String(SKIN_MANAGER_STATE.profileType || '').toLowerCase();
  if (!profileId || profileType !== 'microsoft') return false;
  if (SKIN_MANAGER_STATE.syncingCurrent) return false;
  const recentlySynced = SKIN_MANAGER_STATE.syncedProfileId === profileId && (Date.now() - Number(SKIN_MANAGER_STATE.lastSyncAt || 0) < 8000);
  if (!force && recentlySynced) return true;

  SKIN_MANAGER_STATE.syncingCurrent = true;
  if (ACTIVE_MODAL_ID === 'skin-manager') hydrateSkinManagerModal();

  const res = await invokeBackend('get_minecraft_skin_status', {
    request: { profileId },
  });

  SKIN_MANAGER_STATE.syncingCurrent = false;
  if (!res.ok || !res.data) {
    const reason = formatBackendError(res.error, 'Could not sync current skin');
    if (ACTIVE_MODAL_ID === 'skin-manager') {
      hydrateSkinManagerModal();
      setSkinManagerStatus(reason, true);
    }
    if (isAuthSecurityInterruptMessage(reason)) {
      promptAuthSecurityInterruptGuidance('skin-manager-sync');
    } else if (isAuthRelinkFailureMessage(reason)) {
      promptAuthRelinkGuidance('skin-manager-sync');
    }
    return false;
  }

  const data = res.data || {};
  SKIN_MANAGER_STATE.currentSkinUrl = String(data.skinUrl || '').trim();
  SKIN_MANAGER_STATE.currentCapeUrl = String(data.capeUrl || '').trim();
  SKIN_MANAGER_STATE.currentSkinVariant = String(data.variant || 'classic').toLowerCase() === 'slim' ? 'slim' : 'classic';
  SKIN_MANAGER_STATE.history = Array.isArray(data.history) ? data.history.slice() : [];
  if (!SKIN_MANAGER_STATE.fileName && !SKIN_MANAGER_STATE.imageBase64) {
    SKIN_MANAGER_STATE.variant = SKIN_MANAGER_STATE.currentSkinVariant || 'classic';
  }
  SKIN_MANAGER_STATE.lastSyncAt = Date.now();
  SKIN_MANAGER_STATE.syncedProfileId = profileId;
  if (!SKIN_MANAGER_STATE.localPreviewDataUrl) {
    SKIN_MANAGER_STATE.previewNonce = Date.now();
  }
  if (ACTIVE_MODAL_ID === 'skin-manager') hydrateSkinManagerModal();
  return true;
}

function hydrateSkinManagerModal() {
  ensureSkinRecentEntriesLoaded();
  const profile = getSkinManagerTargetProfile();
  const profileType = String(profile && profile.profileType ? profile.profileType : '').toLowerCase();
  const isMicrosoft = profileType === 'microsoft';

  if (!profile) {
    const titleEl = document.getElementById('skin-manager-title');
    if (titleEl) titleEl.textContent = 'Skin';
    const profileEl = document.getElementById('skin-manager-profile');
    if (profileEl) profileEl.textContent = 'No profile found. Add one from Accounts.';
    const applyBtn = document.getElementById('skin-manager-apply-btn');
    if (applyBtn) applyBtn.disabled = true;
    const fileInput = document.getElementById('skin-manager-file-input');
    if (fileInput) fileInput.disabled = true;
    SKIN_MANAGER_STATE.history = [];
    SKIN_MANAGER_STATE.currentSkinUrl = '';
    SKIN_MANAGER_STATE.currentCapeUrl = '';
    SKIN_MANAGER_STATE.currentSkinVariant = '';
    SKIN_MANAGER_STATE.localCapePreviewDataUrl = '';
    SKIN_MANAGER_STATE.capeFileName = '';
    SKIN_MANAGER_STATE.syncingCurrent = false;
    destroySkinViewerRuntime();
    setSkinManagerStatus('No profile available for skin update.', true);
    hydrateSkinManagerCurrentInfo();
    hydrateSkinManagerHistoryOptions(false);
    hydrateSkinManagerRecentGrid();
    return;
  }

  if (SKIN_MANAGER_STATE.profileId && SKIN_MANAGER_STATE.profileId !== profile.id) {
    clearSkinManagerUploadSelection();
    SKIN_MANAGER_STATE.currentSkinUrl = '';
    SKIN_MANAGER_STATE.currentCapeUrl = '';
    SKIN_MANAGER_STATE.currentSkinVariant = '';
    SKIN_MANAGER_STATE.localCapePreviewDataUrl = '';
    SKIN_MANAGER_STATE.capeFileName = '';
    SKIN_MANAGER_STATE.history = [];
    SKIN_MANAGER_STATE.lastSyncAt = 0;
    SKIN_MANAGER_STATE.syncedProfileId = '';
  }

  SKIN_MANAGER_STATE.profileId = String(profile.id || '');
  SKIN_MANAGER_STATE.profileName = String(profile.name || 'Player');
  SKIN_MANAGER_STATE.profileType = profileType;

  const titleEl = document.getElementById('skin-manager-title');
  if (titleEl) titleEl.textContent = 'Skin - ' + SKIN_MANAGER_STATE.profileName;

  const profileEl = document.getElementById('skin-manager-profile');
  if (profileEl) {
    const subtitle = isMicrosoft
      ? String(profile.email || 'Microsoft profile')
      : 'Offline profile';
    profileEl.innerHTML =
      '<div style="font-size:11px;color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
      escapeHtml(SKIN_MANAGER_STATE.profileName) +
      '</div>' +
      '<div style="font-size:10px;color:' + (isMicrosoft ? 'var(--green)' : 'var(--t4)') + ';margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
      escapeHtml(subtitle) +
      '</div>';
  }

  const modelEl = document.getElementById('skin-manager-model');
  if (modelEl) {
    const nextVariant = SKIN_MANAGER_STATE.variant === 'slim' ? 'slim' : 'classic';
    modelEl.value = nextVariant;
    modelEl.disabled = !isMicrosoft || SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent;
  }

  const inputEl = document.getElementById('skin-manager-file-input');
  if (inputEl) {
    inputEl.disabled = !isMicrosoft || SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent;
    if (!SKIN_MANAGER_STATE.fileName) inputEl.value = '';
  }
  const capeInputEl = document.getElementById('skin-manager-cape-file-input');
  if (capeInputEl) {
    capeInputEl.disabled = !isMicrosoft || SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent;
    if (!SKIN_MANAGER_STATE.capeFileName) capeInputEl.value = '';
  }

  const dropzone = document.getElementById('skin-manager-dropzone');
  if (dropzone) {
    dropzone.style.opacity = isMicrosoft ? '1' : '0.55';
    dropzone.style.cursor = isMicrosoft ? 'pointer' : 'default';
    dropzone.style.pointerEvents = isMicrosoft ? 'auto' : 'none';
  }

  const fileNameEl = document.getElementById('skin-manager-file-name');
  if (fileNameEl) {
    fileNameEl.textContent = SKIN_MANAGER_STATE.fileName || 'No file selected';
    fileNameEl.style.color = SKIN_MANAGER_STATE.fileName ? 'var(--t3)' : 'var(--t4)';
  }
  const capeFileNameEl = document.getElementById('skin-manager-cape-file-name');
  if (capeFileNameEl) {
    capeFileNameEl.textContent = SKIN_MANAGER_STATE.capeFileName || (SKIN_MANAGER_STATE.currentCapeUrl ? 'Use synced cape' : 'No cape');
    capeFileNameEl.style.color = SKIN_MANAGER_STATE.capeFileName || SKIN_MANAGER_STATE.currentCapeUrl ? 'var(--t3)' : 'var(--t4)';
  }
  const capeClearBtn = document.getElementById('skin-manager-cape-clear-btn');
  if (capeClearBtn) {
    const hasCapePreview = !!String(SKIN_MANAGER_STATE.localCapePreviewDataUrl || '').trim();
    capeClearBtn.disabled = !isMicrosoft || SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent || !hasCapePreview;
  }

  const applyBtn = document.getElementById('skin-manager-apply-btn');
  if (applyBtn) {
    const disabled = !isMicrosoft || SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent || !SKIN_MANAGER_STATE.imageBase64;
    applyBtn.disabled = disabled;
  }
  hydrateSkinManagerCurrentInfo();
  hydrateSkinManagerHistoryOptions(isMicrosoft);
  hydrateSkinManagerRecentGrid();

  const previewUrl = SKIN_MANAGER_STATE.localPreviewDataUrl
    || SKIN_MANAGER_STATE.currentSkinUrl
    || getDefaultSkinDataUrl();
  syncSkinManagerPreview(previewUrl, SKIN_MANAGER_STATE.profileName);
  refreshSkinViewerAutoRotateButton();

  if (SKIN_MANAGER_STATE.applying) {
    setSkinManagerStatus('Uploading skin...', false);
  } else if (SKIN_MANAGER_STATE.syncingCurrent) {
    setSkinManagerStatus('Syncing current skin state...', false);
  } else if (!isMicrosoft) {
    setSkinManagerStatus('Offline profile cannot sync skins. Switch to a Microsoft profile in Accounts.', true);
  } else if (SKIN_MANAGER_STATE.lastValidation && SKIN_MANAGER_STATE.fileName) {
    const validation = SKIN_MANAGER_STATE.lastValidation;
    const variantLabel = SKIN_MANAGER_STATE.variant === 'slim' ? 'Slim (Alex)' : 'Classic (Steve)';
    const capeLabel = SKIN_MANAGER_STATE.localCapePreviewDataUrl
      ? ' + Local cape preview'
      : (SKIN_MANAGER_STATE.currentCapeUrl ? ' + Synced cape' : '');
    setSkinManagerStatus(
      'Validated ' + validation.width + 'x' + validation.height + ' PNG - Auto variant: '
      + validation.autoVariant + ' - Using: ' + variantLabel + capeLabel,
      false
    );
  } else if (SKIN_MANAGER_STATE.fileName) {
    setSkinManagerStatus('Ready to upload: ' + SKIN_MANAGER_STATE.fileName, false);
  } else {
    setSkinManagerStatus('Select a PNG file (max 2MB), then click Apply Skin.', false);
  }

  if (isMicrosoft && !SKIN_MANAGER_STATE.syncingCurrent) {
    const shouldSync = SKIN_MANAGER_STATE.syncedProfileId !== SKIN_MANAGER_STATE.profileId || !SKIN_MANAGER_STATE.lastSyncAt;
    if (shouldSync) {
      void syncSkinManagerFromBackend(false);
    }
  }
}

function onSkinModelChanged() {
  const modelEl = document.getElementById('skin-manager-model');
  if (!modelEl) return;
  const value = String(modelEl.value || '').toLowerCase();
  const nextVariant = value === 'slim' ? 'slim' : 'classic';
  if (SKIN_MANAGER_STATE.lastValidation && SKIN_MANAGER_STATE.lastValidation.height === 32 && nextVariant === 'slim') {
    SKIN_MANAGER_STATE.variant = 'classic';
    modelEl.value = 'classic';
    setSkinManagerStatus('64x32 skin cannot use Slim. Switched to Classic.', true);
    return;
  }
  SKIN_MANAGER_STATE.variant = nextVariant;
  hydrateSkinManagerModal();
}

function resetSkinViewerCamera() {
  const runtime = ensureSkinViewerRuntime();
  if (!runtime || !runtime.controls) return;
  if (typeof runtime.controls.reset === 'function') {
    runtime.controls.reset();
  }
}

function toggleSkinViewerAutoRotate() {
  SKIN_VIEWER_RUNTIME.autoRotate = !SKIN_VIEWER_RUNTIME.autoRotate;
  applySkinViewerAutoRotateState();
}

async function refreshSkinManagerModal() {
  if (SKIN_MANAGER_STATE.applying) return;
  const ok = await refreshProfilesFromBackend();
  if (ok) {
    SKIN_MANAGER_STATE.lastSyncAt = 0;
    SKIN_MANAGER_STATE.syncedProfileId = '';
  }
  hydrateSkinManagerModal();
  if (ok) await syncSkinManagerFromBackend(true);
  if (ok) {
    showToast('OK', 'Skin refreshed', 'Profile state synced');
  } else {
    showToast('!', 'Refresh failed', 'Could not refresh profiles');
  }
}

async function openMinecraftSkinPageFromModal() {
  const opened = await openExternalHttpUrl('https://www.minecraft.net/en-us/msaprofile/mygames/editprofile');
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open Minecraft skin page');
    return;
  }
  showToast('OK', 'Opened', 'Minecraft skin page opened in browser');
}

function triggerSkinFilePicker() {
  const inputEl = document.getElementById('skin-manager-file-input');
  if (!inputEl || inputEl.disabled) return;
  inputEl.click();
}

function focusSkinDropzone() {
  const dropzone = document.getElementById('skin-manager-dropzone');
  if (!dropzone) return;
  try {
    dropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (_err) {}
  const previousBorder = dropzone.style.borderColor;
  const previousBackground = dropzone.style.background;
  dropzone.style.borderColor = 'rgba(86, 198, 129, 0.7)';
  dropzone.style.background = 'rgba(48, 120, 74, 0.18)';
  setTimeout(() => {
    if (!dropzone.isConnected) return;
    dropzone.style.borderColor = previousBorder || '';
    dropzone.style.background = previousBackground || '';
  }, 850);
}

async function browseSkinCatalogFromModal() {
  const opened = await openExternalHttpUrl('https://namemc.com/minecraft-skins');
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open skin catalog');
    return;
  }
  showToast('OK', 'Opened', 'Skin catalog opened in browser');
}

async function importSkinFromUsername() {
  const usernameRaw = typeof window.prompt === 'function'
    ? window.prompt('Minecraft username')
    : '';
  const username = String(usernameRaw || '').trim();
  if (!username) return;
  if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) {
    showToast('!', 'Invalid username', 'Use 3-16 chars: letters, numbers, underscore');
    return;
  }
  setSkinManagerStatus('Importing skin from username: ' + username + ' ...', false);

  try {
    const url = 'https://minotar.net/skin/' + encodeURIComponent(username);
    const response = await fetch(url, { cache: 'no-store', mode: 'cors' });
    if (!response.ok) {
      throw new Error('skin service returned ' + response.status);
    }
    const blob = await response.blob();
    if (!blob || !String(blob.type || '').includes('image')) {
      throw new Error('service did not return image data');
    }
    const dataUrl = await fileToDataUrl(blob);
    await applySkinDataUrlToState(dataUrl, username + '.png', '', 'username:' + username, true);
    const modelEl = document.getElementById('skin-manager-model');
    if (modelEl) modelEl.value = SKIN_MANAGER_STATE.variant;
    hydrateSkinManagerModal();
    setSkinManagerStatus('Imported skin for ' + username + '. Review preview then Apply.', false);
    showToast('OK', 'Imported', 'Skin loaded from username: ' + username);
  } catch (err) {
    const reason = err && err.message ? err.message : 'Could not import by username';
    setSkinManagerStatus(String(reason), true);
    showToast('!', 'Import failed', String(reason));
  }
}

async function applyRecentSkinFromModal(index) {
  ensureSkinRecentEntriesLoaded();
  const rows = Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins : [];
  const row = rows[Number(index)];
  if (!row || !row.dataUrl) return;
  try {
    await applySkinDataUrlToState(row.dataUrl, row.fileName || 'skin.png', row.variant || 'classic', row.source || 'recent', false);
    const modelEl = document.getElementById('skin-manager-model');
    if (modelEl) modelEl.value = SKIN_MANAGER_STATE.variant;
    hydrateSkinManagerModal();
    setSkinManagerStatus('Loaded recent skin: ' + (row.fileName || 'skin.png'), false);
  } catch (err) {
    const reason = err && err.message ? err.message : 'Could not load recent skin';
    setSkinManagerStatus(String(reason), true);
    showToast('!', 'Recent failed', String(reason));
  }
}

function removeRecentSkinByIndex(index) {
  ensureSkinRecentEntriesLoaded();
  const rows = Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins.slice() : [];
  const targetIndex = Number(index);
  if (!Number.isFinite(targetIndex) || targetIndex < 0 || targetIndex >= rows.length) return;
  const removed = rows.splice(targetIndex, 1)[0];
  SKIN_MANAGER_STATE.recentSkins = rows;
  persistSkinRecentEntries(rows);
  hydrateSkinManagerRecentGrid();
  if (!rows.length) {
    setSkinManagerStatus('Recent list is empty.', false);
  }
  showToast('OK', 'Removed', String(removed && removed.fileName ? removed.fileName : 'Recent skin'));
}

function clearAllRecentSkins() {
  ensureSkinRecentEntriesLoaded();
  const rows = Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins : [];
  if (!rows.length) {
    showToast('OK', 'No recent skins', 'Recent list is already empty');
    return;
  }
  SKIN_MANAGER_STATE.recentSkins = [];
  persistSkinRecentEntries([]);
  hydrateSkinManagerRecentGrid();
  setSkinManagerStatus('Recent list cleared.', false);
  showToast('OK', 'Cleared', 'Recent skins removed');
}

function openSkinRecentContextMenu(event, index) {
  if (!event || !ctxMenu) return;
  event.preventDefault();
  event.stopPropagation();
  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '176px';

  const safeIndex = Math.max(0, Number(index) || 0);
  const rows = Array.isArray(SKIN_MANAGER_STATE.recentSkins) ? SKIN_MANAGER_STATE.recentSkins : [];
  const hasRows = rows.length > 0;
  const hasRow = safeIndex < rows.length;

  ctxMenu.innerHTML = `
    <div class="ctx-item${hasRow ? '' : ' disabled'}" onclick="${hasRow ? ('hideCtx();applyRecentSkinFromModal(' + String(safeIndex) + ')') : 'void(0)'}"><i data-lucide="play" width="12" height="12"></i>Apply</div>
    <div class="ctx-item${hasRow ? '' : ' disabled'}" onclick="${hasRow ? ('hideCtx();removeRecentSkinByIndex(' + String(safeIndex) + ')') : 'void(0)'}"><i data-lucide="trash-2" width="12" height="12"></i>Remove</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger${hasRows ? '' : ' disabled'}" onclick="${hasRows ? 'hideCtx();clearAllRecentSkins()' : 'void(0)'}"><i data-lucide="x" width="12" height="12"></i>Clear All</div>
  `;
  ctxMenu.style.display = 'block';
  const menuWidth = 182;
  const menuHeight = Math.max(96, ctxMenu.scrollHeight);
  const x = Math.min(Math.max(8, Math.floor(event.clientX || 0)), window.innerWidth - menuWidth - 8);
  const y = Math.min(Math.max(8, Math.floor(event.clientY || 0)), window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function triggerSkinCapeFilePicker() {
  const inputEl = document.getElementById('skin-manager-cape-file-input');
  if (!inputEl || inputEl.disabled) return;
  inputEl.click();
}

async function onSkinCapeFileChosen(event) {
  const target = event && event.target ? event.target : null;
  const file = target && target.files ? target.files[0] : null;
  if (!file) return;
  await loadSkinCapeFileForModal(file);
}

async function loadSkinCapeFileForModal(file) {
  const profileType = String(SKIN_MANAGER_STATE.profileType || '').toLowerCase();
  if (profileType !== 'microsoft') {
    showToast('!', 'Unsupported profile', 'Cape preview requires a Microsoft profile');
    return;
  }

  const fileName = String(file && file.name ? file.name : '').trim();
  const lowerName = fileName.toLowerCase();
  if (!lowerName.endsWith('.png')) {
    showToast('!', 'Invalid file', 'Cape must be a .png file');
    return;
  }
  const fileSize = Number(file && file.size ? file.size : 0);
  if (fileSize <= 0) {
    showToast('!', 'Invalid file', 'Selected cape file is empty');
    return;
  }
  if (fileSize > (2 * 1024 * 1024)) {
    showToast('!', 'File too large', 'Cape file must be under 2MB');
    return;
  }

  let dataUrl = '';
  try {
    dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('failed to read selected file'));
      reader.readAsDataURL(file);
    });
  } catch (err) {
    const reason = err && err.message ? err.message : 'Could not read cape file';
    showToast('!', 'Read failed', String(reason));
    return;
  }

  const normalized = String(dataUrl || '');
  if (!normalized.startsWith('data:image/png')) {
    showToast('!', 'Invalid file', 'Cape must be a PNG image');
    return;
  }

  SKIN_MANAGER_STATE.localCapePreviewDataUrl = normalized;
  SKIN_MANAGER_STATE.capeFileName = fileName || 'cape.png';
  hydrateSkinManagerModal();
  setSkinManagerStatus('Cape preview loaded. This does not upload a cape to Minecraft.', false);
}

function clearSkinCapePreview() {
  SKIN_MANAGER_STATE.localCapePreviewDataUrl = '';
  SKIN_MANAGER_STATE.capeFileName = '';
  const inputEl = document.getElementById('skin-manager-cape-file-input');
  if (inputEl) inputEl.value = '';
  hydrateSkinManagerModal();
}

function onSkinFileDragOver(event) {
  if (!event) return;
  event.preventDefault();
  const dropzone = document.getElementById('skin-manager-dropzone');
  if (dropzone) {
    dropzone.style.borderColor = 'var(--b3)';
    dropzone.style.background = 'var(--s2)';
  }
}

function onSkinFileDragLeave(event) {
  if (!event) return;
  event.preventDefault();
  const dropzone = document.getElementById('skin-manager-dropzone');
  if (dropzone) {
    dropzone.style.borderColor = 'var(--b3)';
    dropzone.style.background = '';
  }
}

async function onSkinFileDrop(event) {
  if (!event) return;
  event.preventDefault();
  onSkinFileDragLeave(event);
  const file = event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files[0] : null;
  if (!file) return;
  await loadSkinFileForModal(file);
}

async function onSkinFileChosen(event) {
  const target = event && event.target ? event.target : null;
  const file = target && target.files ? target.files[0] : null;
  if (!file) return;
  await loadSkinFileForModal(file);
}

async function loadSkinFileForModal(file) {
  const profileType = String(SKIN_MANAGER_STATE.profileType || '').toLowerCase();
  if (profileType !== 'microsoft') {
    showToast('!', 'Unsupported profile', 'Skin upload requires a Microsoft profile');
    return;
  }

  const fileName = String(file && file.name ? file.name : '').trim();
  const lowerName = fileName.toLowerCase();
  if (!lowerName.endsWith('.png')) {
    showToast('!', 'Invalid file', 'Skin must be a .png file');
    return;
  }
  const fileSize = Number(file && file.size ? file.size : 0);
  if (fileSize <= 0) {
    showToast('!', 'Invalid file', 'Selected file is empty');
    return;
  }
  if (fileSize > (2 * 1024 * 1024)) {
    showToast('!', 'File too large', 'Skin file must be under 2MB');
    return;
  }

  let dataUrl = '';
  try {
    dataUrl = await fileToDataUrl(file);
  } catch (err) {
    const reason = err && err.message ? err.message : 'Could not read skin file';
    showToast('!', 'Read failed', String(reason));
    return;
  }

  try {
    await applySkinDataUrlToState(dataUrl, fileName || 'skin.png', '', 'upload:file', true);
  } catch (err) {
    const reason = err && err.message ? err.message : 'Invalid skin image';
    showToast('!', 'Invalid skin', String(reason));
    return;
  }
  const modelEl = document.getElementById('skin-manager-model');
  if (modelEl) modelEl.value = SKIN_MANAGER_STATE.variant;
  hydrateSkinManagerModal();
}

async function applySkinFromModal() {
  if (SKIN_MANAGER_STATE.applying) return;

  const profileType = String(SKIN_MANAGER_STATE.profileType || '').toLowerCase();
  if (profileType !== 'microsoft') {
    showToast('!', 'Unsupported profile', 'Skin update requires a Microsoft profile');
    return;
  }
  if (!SKIN_MANAGER_STATE.profileId) {
    showToast('!', 'Missing profile', 'Could not resolve target profile');
    return;
  }
  if (!SKIN_MANAGER_STATE.imageBase64) {
    showToast('!', 'Missing file', 'Choose a PNG skin file first');
    return;
  }
  if (SKIN_MANAGER_STATE.lastValidation && SKIN_MANAGER_STATE.lastValidation.height === 32 && SKIN_MANAGER_STATE.variant === 'slim') {
    showToast('!', 'Invalid variant', '64x32 skin cannot use Slim');
    return;
  }

  SKIN_MANAGER_STATE.applying = true;
  hydrateSkinManagerModal();

  const modelEl = document.getElementById('skin-manager-model');
  const variant = String(modelEl && modelEl.value ? modelEl.value : SKIN_MANAGER_STATE.variant || 'classic')
    .trim()
    .toLowerCase() === 'slim'
    ? 'slim'
    : 'classic';
  SKIN_MANAGER_STATE.variant = variant;

  const res = await invokeBackend('update_minecraft_skin', {
    request: {
      profileId: SKIN_MANAGER_STATE.profileId,
      imageBase64: SKIN_MANAGER_STATE.imageBase64,
      variant,
    },
  });

  SKIN_MANAGER_STATE.applying = false;
  if (!res.ok) {
    const reason = formatBackendError(res.error, 'Skin upload failed');
    hydrateSkinManagerModal();
    setSkinManagerStatus(reason, true);
    if (isAuthSecurityInterruptMessage(reason)) {
      promptAuthSecurityInterruptGuidance('skin-manager');
    } else if (isAuthRelinkFailureMessage(reason)) {
      promptAuthRelinkGuidance('skin-manager');
    }
    return;
  }

  clearSkinManagerUploadSelection();
  SKIN_MANAGER_STATE.previewNonce = Date.now();
  const inputEl = document.getElementById('skin-manager-file-input');
  if (inputEl) inputEl.value = '';
  await syncSkinManagerFromBackend(true);
  hydrateSkinManagerModal();
  setSkinManagerStatus('Skin updated successfully. It may take up to 60 seconds to appear.', false);
  showToast('OK', 'Skin updated', SKIN_MANAGER_STATE.profileName + ' skin uploaded');
}

async function rollbackSkinFromModal() {
  if (SKIN_MANAGER_STATE.applying || SKIN_MANAGER_STATE.syncingCurrent) return;
  const profileType = String(SKIN_MANAGER_STATE.profileType || '').toLowerCase();
  if (profileType !== 'microsoft') {
    showToast('!', 'Unsupported profile', 'Rollback requires a Microsoft profile');
    return;
  }
  const profileId = String(SKIN_MANAGER_STATE.profileId || '').trim();
  if (!profileId) {
    showToast('!', 'Missing profile', 'Could not resolve target profile');
    return;
  }
  const selectEl = document.getElementById('skin-manager-history-select');
  const index = selectEl ? Number(selectEl.value || 0) : 0;
  if (!Number.isFinite(index) || index < 0) {
    showToast('!', 'Invalid selection', 'Select a valid history entry');
    return;
  }

  SKIN_MANAGER_STATE.applying = true;
  hydrateSkinManagerModal();
  const res = await invokeBackend('rollback_minecraft_skin', {
    request: {
      profileId,
      historyIndex: Math.floor(index),
    },
  });
  SKIN_MANAGER_STATE.applying = false;
  if (!res.ok) {
    const reason = formatBackendError(res.error, 'Rollback failed');
    hydrateSkinManagerModal();
    setSkinManagerStatus(reason, true);
    if (isAuthSecurityInterruptMessage(reason)) {
      promptAuthSecurityInterruptGuidance('skin-manager-rollback');
    } else if (isAuthRelinkFailureMessage(reason)) {
      promptAuthRelinkGuidance('skin-manager-rollback');
    }
    return;
  }

  clearSkinManagerUploadSelection();
  SKIN_MANAGER_STATE.previewNonce = Date.now();
  const inputEl = document.getElementById('skin-manager-file-input');
  if (inputEl) inputEl.value = '';
  await syncSkinManagerFromBackend(true);
  hydrateSkinManagerModal();
  setSkinManagerStatus('Skin rollback applied successfully.', false);
  showToast('OK', 'Rollback complete', 'Previous skin restored');
}

function hashPseudoUuid(name) {
  const input = String(name || '').trim();
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (Math.imul(31, hash) + input.charCodeAt(i)) | 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `${hex}-xxxx-3xxx-yxxx-xxxxxxxxxxxx`;
}

function formatEpochDate(value) {
  const epoch = parseLastPlayedEpoch(value);
  if (!epoch) return 'Recently';
  return new Date(epoch * 1000).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function findProfileById(profileId) {
  const target = String(profileId || '').trim();
  if (!target) return null;
  const profiles = getRenderableProfiles();
  return profiles.find((item) => String(item.id || '').toLowerCase() === target.toLowerCase()) || null;
}

let AUTH_DROPDOWN_OPEN = false;
let AUTH_DROPDOWN_LISTENERS_BOUND = false;

function getActiveRenderableProfile() {
  const profiles = getRenderableProfiles();
  return profiles.find((item) => !!item.active) || profiles[0] || null;
}

function closeAuthDropdown() {
  AUTH_DROPDOWN_OPEN = false;
  const dropdown = document.getElementById('auth-dropdown');
  if (dropdown) dropdown.classList.remove('open');
  const pill = document.querySelector('.auth-pill');
  if (pill) pill.classList.remove('open');
}

function toggleAuthDropdown(event) {
  if (event && typeof event.preventDefault === 'function') event.preventDefault();
  if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
  const dropdown = document.getElementById('auth-dropdown');
  const pill = document.querySelector('.auth-pill');
  if (!dropdown || !pill) return;
  AUTH_DROPDOWN_OPEN = !AUTH_DROPDOWN_OPEN;
  dropdown.classList.toggle('open', AUTH_DROPDOWN_OPEN);
  pill.classList.toggle('open', AUTH_DROPDOWN_OPEN);
}

function openAccountsFromAuthDropdown() {
  closeAuthDropdown();
  goToAccountsPage();
}

function openLinkMicrosoftFromAuthDropdown() {
  closeAuthDropdown();
  openModal('link-microsoft');
}

function initAuthDropdown() {
  if (AUTH_DROPDOWN_LISTENERS_BOUND) return;
  AUTH_DROPDOWN_LISTENERS_BOUND = true;

  document.addEventListener('click', (event) => {
    const target = event && event.target instanceof Element ? event.target : null;
    if (!target) {
      closeAuthDropdown();
      return;
    }
    if (target.closest('.auth-wrap')) return;
    closeAuthDropdown();
  });

  document.addEventListener('keydown', (event) => {
    if (!event || event.key !== 'Escape') return;
    closeAuthDropdown();
  });
}

function syncAuthPillFromProfiles() {
  const selected = getActiveRenderableProfile();
  if (!selected) return;

  const avatarSrc = 'https://mc-heads.net/avatar/' + encodeURIComponent(selected.name || 'Steve') + '/32';
  const nameEl = document.querySelector('.auth-name');
  if (nameEl) {
    nameEl.textContent = selected.name;
    nameEl.title = selected.name;
  }

  const profileType = String(selected.profileType || '').toLowerCase();
  const subtitle = profileType === 'microsoft'
    ? String(selected.email || 'Microsoft profile')
    : 'Offline profile';
  const ddName = document.querySelector('.auth-dd-name');
  if (ddName) ddName.textContent = String(selected.name || 'Player');
  const ddSub = document.querySelector('.auth-dd-sub');
  if (ddSub) ddSub.textContent = subtitle;

  document.querySelectorAll('.auth-avatar img, .auth-dd-avatar img').forEach((avatar) => {
    avatar.src = avatarSrc;
    avatar.style.display = '';
    avatar.onerror = function onAvatarError() {
      this.style.display = 'none';
    };
  });
}

function setOrbiqLoginStatus(message, isError) {
  const statusEl = document.getElementById('orbiq-login-status');
  if (!statusEl) return;
  statusEl.textContent = String(message || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function hydrateOrbiqLoginModal() {
  const account = getOrbiqAccountState();
  const emailInput = document.getElementById('orbiq-login-email');
  if (emailInput && account && account.email) {
    emailInput.value = account.email;
  }
  if (!account) {
    setOrbiqLoginStatus('No local account yet. Create a free account first.', false);
    return;
  }
  if (account.signedIn) {
    setOrbiqLoginStatus('Already signed in as ' + account.email, false);
  } else {
    setOrbiqLoginStatus('Account found. Sign in to continue.', false);
  }
}

function onOrbiqAccountsAuthAction() {
  const account = getOrbiqAccountState();
  if (account && account.signedIn) {
    signOutOrbiqAccount();
    return;
  }
  openModal('orbiq-login');
}

function signOutOrbiqAccount() {
  const account = getOrbiqAccountState();
  if (!account || !account.signedIn) {
    showToast('!', 'Already signed out', 'No active Orbiq session');
    return;
  }
  account.signedIn = false;
  persistOrbiqAccountState(account);
  const modalVisible = overlay && overlay.style.display !== 'none';
  if (modalVisible) {
    closeModal();
  }
  setTimeout(() => openModal('orbiq-login'), modalVisible ? 180 : 60);
  void hydrateOrbiqAccountsPage();
  showToast('OK', 'Signed out', 'Orbiq account session ended');
}

function signInOrbiqFromModal() {
  const emailInput = document.getElementById('orbiq-login-email');
  const passwordInput = document.getElementById('orbiq-login-password');
  const email = normalizeOrbiqEmail(emailInput ? emailInput.value : '');
  const password = String(passwordInput ? passwordInput.value : '');
  const account = getOrbiqAccountState();

  if (!email || !password) {
    setOrbiqLoginStatus('Email and password are required.', true);
    return;
  }
  if (!account) {
    setOrbiqLoginStatus('No Orbiq account found. Create one first.', true);
    return;
  }
  if (account.email !== email || account.passwordHash !== hashOrbiqPassword(password)) {
    setOrbiqLoginStatus('Invalid email or password.', true);
    return;
  }

  account.signedIn = true;
  account.lastLoginAtEpoch = Math.floor(Date.now() / 1000);
  persistOrbiqAccountState(account);
  closeModal();
  setTimeout(() => goToAccountsPage(), 180);
  showToast('OK', 'Signed in', 'Welcome back to Orbiq');
}

function createOrbiqAccountFromModal() {
  const loginEmailInput = document.getElementById('orbiq-login-email');
  const loginPasswordInput = document.getElementById('orbiq-login-password');
  ORBIQ_REGISTER_STATE = {
    step: 1,
    email: normalizeOrbiqEmail(loginEmailInput ? loginEmailInput.value : ''),
    username: '',
    displayName: '',
    passwordHash: '',
    rawPassword: loginPasswordInput ? String(loginPasswordInput.value || '') : '',
    verificationSessionId: '',
    codeExpiresAtEpoch: 0,
    verified: false,
    microsoftLinked: false,
  };
  openModal('orbiq-register');
}

function setOrbiqRegisterStatus(message, isError) {
  const statusEl = document.getElementById('orbiq-register-status');
  if (!statusEl) return;
  statusEl.textContent = String(message || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
  statusEl.style.borderColor = isError ? 'rgba(210,90,90,0.45)' : 'var(--b2)';
  statusEl.style.background = isError ? 'rgba(100,20,20,0.18)' : 'var(--s2)';
}

function renderOrbiqRegisterStepper(step) {
  const current = Math.min(3, Math.max(1, Number(step || 1)));
  const labels = ['Account', 'Verify', 'Link'];
  return labels
    .map((label, index) => {
      const value = index + 1;
      const done = value < current;
      const active = value === current;
      const bg = active ? 'var(--t2)' : (done ? 'rgba(60,160,90,0.25)' : 'var(--s2)');
      const border = active ? 'var(--t2)' : (done ? 'rgba(60,160,90,0.4)' : 'var(--b2)');
      const color = active ? '#000' : (done ? 'var(--green)' : 'var(--t4)');
      const shadow = active ? '0 0 0 1px rgba(255,255,255,0.1), 0 8px 18px rgba(0,0,0,0.22)' : 'none';
      const transform = active ? 'translateY(-1px)' : 'translateY(0)';
      return `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid ${border};border-radius:999px;background:${bg};color:${color};transition:all .22s ease;box-shadow:${shadow};transform:${transform}">
        <div style="width:14px;height:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;border:1px solid ${border}">${done ? 'OK' : value}</div>
        <span>${label}</span>
      </div>`;
    })
    .join('');
}

function setOrbiqRegisterBadge(id, ok, text) {
  const el = document.getElementById(id);
  if (!el) return;
  const safeText = String(text || (ok ? 'OK' : 'Check'));
  el.textContent = safeText;
  el.style.color = ok ? 'var(--green)' : '#d8b467';
  el.style.borderColor = ok ? 'rgba(61,140,74,0.35)' : 'rgba(216,180,103,0.4)';
  el.style.background = ok ? 'rgba(40,110,60,0.16)' : 'rgba(95,70,25,0.18)';
}

function computeOrbiqRegisterChecks(state, confirmPassword) {
  const existing = getOrbiqAccountState();
  const checks = {
    email: { ok: false, message: '' },
    username: { ok: false, message: '' },
    displayName: { ok: false, message: '' },
    password: { ok: false, message: '' },
    confirm: { ok: false, message: '' },
    allOk: false,
    firstError: '',
  };

  checks.email.ok =
    state.email.includes('@') &&
    !state.email.startsWith('@') &&
    !state.email.endsWith('@') &&
    (!existing || existing.email === state.email);
  checks.email.message = checks.email.ok ? 'OK' : (existing && existing.email !== state.email ? 'Device has different account' : 'Invalid');

  checks.username.ok = /^[a-z0-9_-]{3,24}$/.test(state.username);
  checks.username.message = checks.username.ok ? 'OK' : '3-24 chars';

  checks.displayName.ok = state.displayName.length >= 2 && state.displayName.length <= 24;
  checks.displayName.message = checks.displayName.ok ? 'OK' : '2-24 chars';

  checks.password.ok = state.rawPassword.length >= 6;
  checks.password.message = checks.password.ok ? 'Strong' : 'Min 6';

  checks.confirm.ok = !!state.rawPassword && state.rawPassword === confirmPassword;
  checks.confirm.message = checks.confirm.ok ? 'Match' : 'Mismatch';

  checks.firstError = !checks.email.ok
    ? 'Enter a valid email address.'
    : !checks.username.ok
      ? 'Orbiq username must be 3-24 chars (letters, numbers, _ or -).'
      : !checks.displayName.ok
        ? 'Display name must be 2-24 characters.'
        : !checks.password.ok
          ? 'Password must be at least 6 characters.'
          : !checks.confirm.ok
            ? 'Passwords do not match.'
            : '';
  checks.allOk = !checks.firstError;
  return checks;
}

function updateOrbiqRegisterPreview(state) {
  const accountEl = document.getElementById('orbiq-reg-preview-account');
  const emailEl = document.getElementById('orbiq-reg-preview-email');
  const avatarEl = document.getElementById('orbiq-reg-preview-avatar');
  const accountText = ensureOrbiqUsername(state.username) || 'yourname.orbiq';
  if (accountEl) accountEl.textContent = accountText;
  if (emailEl) emailEl.textContent = state.email || 'you@example.com';
  if (avatarEl) {
    avatarEl.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(state.displayName || state.username || 'Steve') + '/48';
    avatarEl.onerror = function onPreviewAvatarError() {
      this.style.opacity = '0.35';
    };
  }
}

function refreshOrbiqRegisterStepOneHints() {
  const state = getOrbiqRegisterState();
  if (Number(state.step || 1) !== 1) return;
  const confirm = readOrbiqRegisterStepOneInput(state);
  const checks = computeOrbiqRegisterChecks(state, confirm);
  setOrbiqRegisterBadge('orbiq-badge-email', checks.email.ok, checks.email.message);
  setOrbiqRegisterBadge('orbiq-badge-username', checks.username.ok, checks.username.message);
  setOrbiqRegisterBadge('orbiq-badge-display', checks.displayName.ok, checks.displayName.message);
  setOrbiqRegisterBadge('orbiq-badge-pass', checks.password.ok, checks.password.message);
  setOrbiqRegisterBadge('orbiq-badge-confirm', checks.confirm.ok, checks.confirm.message);
  updateOrbiqRegisterPreview(state);
}

function getOrbiqRegisterState() {
  if (!ORBIQ_REGISTER_STATE || typeof ORBIQ_REGISTER_STATE !== 'object') {
    ORBIQ_REGISTER_STATE = {
      step: 1,
      email: '',
      username: '',
      displayName: '',
      passwordHash: '',
      rawPassword: '',
      verificationSessionId: '',
      codeExpiresAtEpoch: 0,
      verified: false,
      microsoftLinked: false,
    };
  }
  return ORBIQ_REGISTER_STATE;
}

function renderOrbiqRegisterStepOne(state) {
  const email = escapeHtml(state.email || '');
  const username = escapeHtml(getOrbiqUsernameLabel(state.username || ''));
  const displayName = escapeHtml(state.displayName || '');
  const rawPassword = escapeHtml(state.rawPassword || '');
  return `
    <div style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--b2);border-radius:9px;background:rgba(255,255,255,0.015);margin-bottom:10px">
      <div style="width:36px;height:36px;border-radius:50%;overflow:hidden;background:var(--s3);border:1px solid var(--b2);flex-shrink:0">
        <img id="orbiq-reg-preview-avatar" src="https://mc-heads.net/avatar/Steve/48" style="width:100%;height:100%;image-rendering:pixelated">
      </div>
      <div style="min-width:0">
        <div id="orbiq-reg-preview-account" style="font-size:12px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">yourname.orbiq</div>
        <div id="orbiq-reg-preview-email" style="font-size:10px;font-family:var(--mono);color:var(--t4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">you@example.com</div>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Email</span><span id="orbiq-badge-email" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <input class="input" id="orbiq-reg-email" type="email" placeholder="you@example.com" autocomplete="email" value="${email}" oninput="refreshOrbiqRegisterStepOneHints()">
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Orbiq Username</span><span id="orbiq-badge-username" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-username" type="text" placeholder="dream" value="${username}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <div style="height:31px;display:flex;align-items:center;padding:0 10px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;font-size:11px;font-family:var(--mono);color:var(--t3)">.orbiq</div>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Display Name</span><span id="orbiq-badge-display" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <input class="input" id="orbiq-reg-display-name" type="text" placeholder="Dream" value="${displayName}" oninput="refreshOrbiqRegisterStepOneHints()">
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Password</span><span id="orbiq-badge-pass" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-password" type="password" placeholder="At least 6 chars" autocomplete="new-password" value="${rawPassword}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-reg-password', this)">Show</button>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Confirm Password</span><span id="orbiq-badge-confirm" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-confirm-password" type="password" placeholder="Repeat password" autocomplete="new-password" value="${rawPassword}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-reg-confirm-password', this)">Show</button>
      </div>
    </div>
  `;
}

function renderOrbiqRegisterStepTwo(state) {
  return `
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">
        We sent a 6-digit code to <strong style="color:var(--t2)">${escapeHtml(state.email)}</strong>.
      </div>
    </div>
    <div class="field">
      <div class="label">Verification Code</div>
      <input class="input" id="orbiq-reg-code" type="text" inputmode="numeric" maxlength="6" placeholder="123456" style="text-align:center;font-size:18px;letter-spacing:6px;font-family:var(--mono)">
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:5px">Tip: check spam folder if code is delayed.</div>
    </div>
  `;
}

function renderOrbiqRegisterStepThree(state) {
  const hasMicrosoft = getRenderableProfiles().some((item) => item.profileType === 'microsoft');
  state.microsoftLinked = state.microsoftLinked || hasMicrosoft;
  const statusLabel = state.microsoftLinked ? 'Linked' : 'Not linked';
  const statusColor = state.microsoftLinked ? 'var(--green)' : 'var(--t4)';
  const readyAccount = ensureOrbiqUsername(state.username) || state.email;
  return `
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">
        Account ready: <strong style="color:var(--t2)">${escapeHtml(readyAccount)}</strong><br>
        Email verified: <strong style="color:var(--green)">Yes</strong>
      </div>
    </div>
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:10px;font-family:var(--mono);letter-spacing:1px;color:var(--t4);margin-bottom:6px">MICROSOFT BENEFITS</div>
      <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--t3)">
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="shield-check" width="12" height="12" style="color:var(--green)"></i>Official servers and secure auth</div>
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="shirt" width="12" height="12" style="color:var(--green)"></i>Skins and profile sync</div>
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="sparkles" width="12" height="12" style="color:var(--green)"></i>Smoother account switching</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px">
      <div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3)">Microsoft Link</div>
        <div style="font-size:12px;color:${statusColor};margin-top:2px">${statusLabel}</div>
      </div>
      <button class="btn btn-ghost" style="height:30px" onclick="orbiqRegisterLinkMicrosoft()">
        <i data-lucide="link" width="12" height="12"></i>Link Microsoft
      </button>
    </div>
  `;
}

function hydrateOrbiqRegisterModal() {
  const state = getOrbiqRegisterState();
  state.step = Number(state.step || 1);
  if (state.step < 1 || state.step > 3) state.step = 1;

  const stepper = document.getElementById('orbiq-register-stepper');
  const content = document.getElementById('orbiq-register-content');
  const actions = document.getElementById('orbiq-register-actions');
  if (!stepper || !content || !actions) return;

  stepper.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">${renderOrbiqRegisterStepper(state.step)}</div>
    <div style="margin-top:6px;color:var(--t4)">Step ${state.step} of 3</div>
  `;

  if (state.step === 1) {
    content.innerHTML = renderOrbiqRegisterStepOne(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="cancelOrbiqRegister()">Cancel</button>
      <button class="btn btn-primary" onclick="orbiqRegisterSendCode()">Send Code</button>
    `;
    setOrbiqRegisterStatus('Fill all fields to continue.', false);
    refreshOrbiqRegisterStepOneHints();
  } else if (state.step === 2) {
    content.innerHTML = renderOrbiqRegisterStepTwo(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="orbiqRegisterPrevStep()">Back</button>
      <button class="btn btn-ghost" onclick="orbiqRegisterResendCode()">Resend</button>
      <button class="btn btn-primary" onclick="orbiqRegisterVerifyCode()">Verify</button>
    `;
    setOrbiqRegisterStatus('Check your email and enter the 6-digit code.', false);
    applyPendingDeepLinkOtpIfAny();
  } else {
    content.innerHTML = renderOrbiqRegisterStepThree(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="orbiqRegisterPrevStep()">Back</button>
      <button class="btn btn-primary" onclick="finishOrbiqRegistration(true)">Skip and Finish</button>
    `;
    setOrbiqRegisterStatus('You can link Microsoft now or skip and finish.', false);
  }

  lucide.createIcons();
}

function cancelOrbiqRegister() {
  ORBIQ_REGISTER_STATE = null;
  closeModal();
}

function orbiqRegisterPrevStep() {
  const state = getOrbiqRegisterState();
  state.step = Math.max(1, Number(state.step || 1) - 1);
  hydrateOrbiqRegisterModal();
}

function readOrbiqRegisterStepOneInput(state) {
  state.email = normalizeOrbiqEmail(document.getElementById('orbiq-reg-email')?.value || '');
  state.username = normalizeOrbiqUsername(document.getElementById('orbiq-reg-username')?.value || '');
  state.displayName = String(document.getElementById('orbiq-reg-display-name')?.value || '').trim();
  state.rawPassword = String(document.getElementById('orbiq-reg-password')?.value || '');
  const confirm = String(document.getElementById('orbiq-reg-confirm-password')?.value || '');
  return confirm;
}

function validateOrbiqRegisterStepOne(state, confirmPassword) {
  const checks = computeOrbiqRegisterChecks(state, confirmPassword);
  return checks.firstError || '';
}

async function orbiqRegisterSendCode() {
  const state = getOrbiqRegisterState();
  const confirm = readOrbiqRegisterStepOneInput(state);
  const validationError = validateOrbiqRegisterStepOne(state, confirm);
  if (validationError) {
    setOrbiqRegisterStatus(validationError, true);
    return;
  }

  state.passwordHash = hashOrbiqPassword(state.rawPassword);
  const sendRes = await invokeBackend('start_orbiq_email_verification', {
    request: { email: state.email },
  });
  if (!sendRes.ok || !sendRes.data) {
    setOrbiqRegisterStatus(
      formatBackendError(sendRes.error, 'Could not send verification code.'),
      true
    );
    return;
  }
  state.verificationSessionId = String(sendRes.data.sessionId || '').trim();
  state.codeExpiresAtEpoch = Number(sendRes.data.expiresAtEpoch || 0) || 0;
  state.step = 2;
  hydrateOrbiqRegisterModal();
  setOrbiqRegisterStatus(`Verification code sent to ${state.email}.`, false);
  showToast('OTP', 'Code sent', 'Verification code has been issued');
}

async function orbiqRegisterResendCode() {
  const state = getOrbiqRegisterState();
  const resendRes = await invokeBackend('start_orbiq_email_verification', {
    request: { email: state.email },
  });
  if (!resendRes.ok || !resendRes.data) {
    setOrbiqRegisterStatus(
      formatBackendError(resendRes.error, 'Could not resend verification code.'),
      true
    );
    return;
  }
  state.verificationSessionId = String(resendRes.data.sessionId || '').trim();
  state.codeExpiresAtEpoch = Number(resendRes.data.expiresAtEpoch || 0) || 0;
  setOrbiqRegisterStatus('New code sent. Check your inbox.', false);
  showToast('OTP', 'Code resent', 'A new verification code was sent');
}

async function orbiqRegisterVerifyCode() {
  const state = getOrbiqRegisterState();
  const codeInput = document.getElementById('orbiq-reg-code');
  const code = String(codeInput ? codeInput.value : '').replace(/\D+/g, '');
  if (code.length !== 6) {
    setOrbiqRegisterStatus('Enter a valid 6-digit code.', true);
    return;
  }
  if (!state.verificationSessionId) {
    setOrbiqRegisterStatus('No code was generated. Go back and resend code.', true);
    return;
  }
  if (Math.floor(Date.now() / 1000) > Number(state.codeExpiresAtEpoch || 0)) {
    setOrbiqRegisterStatus('Verification code expired. Click Resend.', true);
    return;
  }
  const verifyRes = await invokeBackend('verify_orbiq_email_code', {
    request: {
      email: state.email,
      sessionId: state.verificationSessionId,
      code,
    },
  });
  if (!verifyRes.ok) {
    setOrbiqRegisterStatus(
      formatBackendError(verifyRes.error, 'Verification failed.'),
      true
    );
    return;
  }

  state.verified = true;
  state.step = 3;
  hydrateOrbiqRegisterModal();
  setOrbiqRegisterStatus('Email verified successfully.', false);
}

function buildOrbiqAccountFromRegisterState(state) {
  const existing = getOrbiqAccountState();
  const now = Math.floor(Date.now() / 1000);
  const username = ensureOrbiqUsername(state.username);
  const createdAtEpoch = existing && existing.createdAtEpoch ? existing.createdAtEpoch : now;
  return {
    email: state.email,
    username,
    displayName: state.displayName,
    passwordHash: state.passwordHash,
    plan: existing && existing.plan ? existing.plan : 'Free',
    createdAtEpoch,
    lastLoginAtEpoch: now,
    signedIn: true,
    microsoftLinked: !!state.microsoftLinked,
    accountId: resolveOrbiqAccountId({
      accountId: existing && existing.accountId,
      username,
      email: state.email,
      createdAtEpoch,
    }),
  };
}

async function finishOrbiqRegistration(skipMicrosoft) {
  const state = getOrbiqRegisterState();
  if (!state.verified) {
    setOrbiqRegisterStatus('Email verification is required.', true);
    return;
  }
  if (!state.passwordHash) {
    setOrbiqRegisterStatus('Password is missing. Go back and check fields.', true);
    return;
  }

  state.microsoftLinked =
    state.microsoftLinked || getRenderableProfiles().some((item) => item.profileType === 'microsoft');
  const accountPayload = buildOrbiqAccountFromRegisterState(state);
  persistOrbiqAccountState(accountPayload);

  const welcomeRes = await invokeBackend('send_orbiq_welcome_email', {
    request: {
      email: accountPayload.email,
      username: accountPayload.username,
      displayName: accountPayload.displayName,
    },
  });
  if (!welcomeRes.ok) {
    console.warn('[orbiq] welcome email failed', welcomeRes.error);
    showToast('!', 'Mail warning', 'Account created, but welcome email failed');
  }

  ORBIQ_REGISTER_RESULT = {
    email: accountPayload.email,
    username: accountPayload.username,
    accountId: accountPayload.accountId,
    microsoftLinked: !!state.microsoftLinked,
    requestedMicrosoftLink: !skipMicrosoft,
  };
  ORBIQ_REGISTER_STATE = null;

  closeModal();
  setTimeout(() => openModal('orbiq-register-success'), 180);
  showToast('OK', 'Account created', 'Setup complete');
}

async function orbiqRegisterLinkMicrosoft() {
  await finishOrbiqRegistration(false);
}

function hydrateOrbiqRegisterSuccessModal() {
  const summary = ORBIQ_REGISTER_RESULT || {};
  const summaryEl = document.getElementById('orbiq-success-summary');
  if (!summaryEl) return;
  const account = String(summary.accountId || summary.username || summary.email || 'player.orbiq');
  const email = String(summary.email || 'you@example.com');
  const linked = !!summary.microsoftLinked;
  summaryEl.innerHTML = `
    <div style="font-size:10px;font-family:var(--mono);letter-spacing:1px;color:var(--t4);margin-bottom:6px">ACCOUNT SUMMARY</div>
    <div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:4px"><span style="font-size:11px;color:var(--t4)">Orbiq ID</span><span style="font-size:11px;color:var(--t1);font-weight:700">${escapeHtml(account)}</span></div>
    <div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:4px"><span style="font-size:11px;color:var(--t4)">Email</span><span style="font-size:11px;color:var(--t3)">${escapeHtml(email)}</span></div>
    <div style="display:flex;justify-content:space-between;gap:10px"><span style="font-size:11px;color:var(--t4)">Microsoft</span><span style="font-size:11px;color:${linked ? 'var(--green)' : 'var(--t4)'}">${linked ? 'Linked' : 'Not linked'}</span></div>
  `;
  const linkBtn = document.getElementById('orbiq-success-link-btn');
  if (linkBtn && summary.requestedMicrosoftLink && !linked) {
    linkBtn.classList.remove('btn-ghost');
    linkBtn.classList.add('btn-primary');
    linkBtn.innerHTML = '<i data-lucide="link" width="12" height="12"></i>Link Microsoft Now';
  }
  lucide.createIcons();
}

function openLinkMicrosoftFromSuccess() {
  closeModal();
  setTimeout(() => openModal('link-microsoft'), 180);
}

function goToLauncherHome() {
  ORBIQ_REGISTER_RESULT = null;
  closeModal();
  setPage('instances', document.getElementById('sb-instances-all'));
}

function renderOrbiqAccountsListInto(root) {
  if (!root) return;
  const wrap = root.querySelector('.linked-list');
  if (!wrap) return;

  const account = getOrbiqAccountState();
  const profiles = getRenderableProfiles();
  const active = profiles.find((item) => !!item.active) || profiles[0];
  const effectiveName = account && account.displayName
    ? account.displayName
    : (account && account.username
      ? getOrbiqUsernameLabel(account.username)
      : ((active && active.name) || 'Player'));
  const effectiveEmail = account && account.email
    ? account.email
    : (active && active.email ? active.email : 'No email');
  const effectivePlan = account && account.plan ? account.plan : 'Free';
  const effectiveId = resolveOrbiqAccountId({
    accountId: account && account.accountId,
    username: account && account.username,
    email: effectiveEmail,
    createdAtEpoch: account && account.createdAtEpoch,
  });

  const accountName = root.querySelector('.orbiq-acct-name');
  if (accountName) accountName.textContent = effectiveName;
  const accountEmail = root.querySelector('.orbiq-acct-email');
  if (accountEmail) accountEmail.textContent = effectiveEmail;
  const accountId = root.querySelector('.orbiq-acct-id');
  if (accountId) accountId.textContent = effectiveId;
  const accountPlan = root.querySelector('.orbiq-acct-plan');
  if (accountPlan) accountPlan.textContent = effectivePlan;

  const badge = root.querySelector('.orbiq-acct-badge');
  if (badge) {
    badge.innerHTML = account && account.signedIn
      ? '<div style="width:5px;height:5px;border-radius:50%;background:var(--green)"></div>Signed in'
      : '<div style="width:5px;height:5px;border-radius:50%;background:var(--t4)"></div>Signed out';
  }

  const authAction = root.querySelector('#orbiq-auth-action-btn');
  if (authAction) {
    authAction.innerHTML = account && account.signedIn
      ? '<i data-lucide="log-out" width="12" height="12"></i>Sign Out'
      : '<i data-lucide="log-in" width="12" height="12"></i>Sign In';
  }

  const microsoftCount = profiles.filter((item) => item.profileType === 'microsoft').length;
  const activeProfileName = active && active.name ? active.name : '-';
  const healthMicrosoft = root.querySelector('#accounts-ms-health');
  if (healthMicrosoft) {
    healthMicrosoft.textContent = microsoftCount > 0 ? 'Linked' : 'Not linked';
    healthMicrosoft.className = microsoftCount > 0 ? 'accounts-ok' : 'accounts-warn';
  }
  const healthActive = root.querySelector('#accounts-active-profile');
  if (healthActive) healthActive.textContent = activeProfileName;

  const rows = profiles.map((profile) => {
    const isMicrosoft = profile.profileType === 'microsoft';
    const isActive = !!profile.active;
    let typeClass = isMicrosoft ? 'microsoft' : 'offline';
    let typeText = isMicrosoft ? 'Microsoft' : 'Offline';
    if (isActive && isMicrosoft) {
      typeClass = 'active-microsoft';
      typeText = 'Active';
    } else if (isActive) {
      typeClass = 'active-profile';
      typeText = 'Active';
    }
    const meta = isMicrosoft
      ? `${profile.email || 'Microsoft account'} - Official license`
      : 'Offline profile - Cracked servers only';

    const iconLeft = isMicrosoft
      ? `<div class="acct-profile-platform ms-brand">
           <div class="ms-grid" style="width:14px;height:14px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
         </div>`
      : `<div class="acct-profile-platform offline-brand" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user-round" width="14" height="14" style="color:var(--t3)"></i></div>`;

    const avatar = isMicrosoft
      ? `<div class="acct-profile-avatar">
           <img src="https://mc-heads.net/avatar/${encodeURIComponent(profile.name)}/32" style="width:100%;image-rendering:pixelated" onerror="this.style.display='none'">
         </div>`
      : `<div class="acct-profile-avatar offline-avatar"><i data-lucide="user" width="15" height="15" style="color:var(--t3)"></i></div>`;

    const typeIcon = isActive && isMicrosoft
      ? '<i data-lucide="sparkles" width="10" height="10"></i>'
      : (isActive
        ? '<div style="width:5px;height:5px;border-radius:50%;background:currentColor"></div>'
        : (isMicrosoft ? '<i data-lucide="check-circle" width="10" height="10"></i>' : ''));

    return `
      <div class="acct-profile-row${isActive ? ' active-account' : ''}" onclick="openProfileDetailById(decodeURIComponent('${encodeURIComponent(profile.id)}'))">
        ${iconLeft}
        ${avatar}
        <div class="acct-profile-copy">
          <div class="acct-profile-name">${escapeHtml(profile.name)}</div>
          <div class="acct-profile-meta">${escapeHtml(meta)}</div>
        </div>
        <div class="acct-profile-type ${typeClass}">
          ${typeIcon}
          ${typeText}
        </div>
      </div>
    `;
  }).join('');
  wrap.innerHTML = `
    <div class="acct-linked-head">
      <div class="linked-section-label">Linked Profiles</div>
      <span class="acct-linked-count">${profiles.length}</span>
    </div>
    <div class="acct-profile-list">
      ${rows || '<div class="acct-profile-empty">No profiles found. Add one to start launching.</div>'}
    </div>
    <div class="acct-linked-actions">
      <button class="add-linked-btn" onclick="openModal('link-microsoft')">
        <div class="ms-grid" style="width:12px;height:12px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
        Link Microsoft
      </button>
      <button class="add-linked-btn" onclick="openModal('add-offline-profile')">
        <i data-lucide="user-plus" width="12" height="12"></i>
        Add Offline
      </button>
    </div>
  `;

  lucide.createIcons();
}

function renderOrbiqAccountsPage() {
  const page = document.getElementById('page-accounts');
  if (!page) return;
  renderOrbiqAccountsListInto(page);
  const countEl = document.getElementById('accounts-profile-count');
  if (!countEl) return;
  const count = getRenderableProfiles().length;
  countEl.textContent = count + (count === 1 ? ' profile' : ' profiles');
}

function hydrateMicrosoftDetailModal() {
  let profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) {
    profile = getRenderableProfiles().find((item) => item.profileType === 'microsoft') || null;
    if (profile) ACTIVE_PROFILE_DETAIL_ID = profile.id;
  }
  if (!profile) return;

  const title = modalPop.querySelector('.mh-title');
  if (title) title.textContent = profile.name + ' - Microsoft';

  const header = modalPop.querySelector('.mb > div');
  if (header) {
    const avatar = header.querySelector('img');
    if (avatar) avatar.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(profile.name) + '/64';
    const blocks = header.querySelectorAll('div > div');
    if (blocks && blocks.length >= 2) {
      blocks[0].textContent = profile.name;
      blocks[1].textContent = profile.email || 'Microsoft account';
    }
  }

  const linkedRow = modalPop.querySelectorAll('.info-row .info-val');
  if (linkedRow && linkedRow.length > 3) {
    linkedRow[3].textContent = formatEpochDate(profile.lastAuthenticatedAtEpoch);
  }

  const unlinkBtn = modalPop.querySelector('.mf .btn-danger');
  if (unlinkBtn) unlinkBtn.onclick = unlinkCurrentMicrosoftProfile;
}

function hydrateOfflineDetailModal() {
  let profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) {
    profile = getRenderableProfiles().find((item) => item.profileType !== 'microsoft') || null;
    if (profile) ACTIVE_PROFILE_DETAIL_ID = profile.id;
  }
  if (!profile) return;

  const title = modalPop.querySelector('.mh-title');
  if (title) title.textContent = profile.name + ' - Offline Profile';

  const header = modalPop.querySelector('.mb > div');
  if (header) {
    const blocks = header.querySelectorAll('div > div');
    if (blocks && blocks.length >= 1) {
      blocks[0].textContent = profile.name;
    }
    const badges = header.querySelectorAll('div[style*="inline-flex"]');
    if (badges && badges[0]) {
      badges[0].style.display = profile.active ? 'inline-flex' : 'none';
    }
  }

  const infoVals = modalPop.querySelectorAll('.info-row .info-val');
  if (infoVals && infoVals.length > 3) {
    infoVals[2].textContent = hashPseudoUuid(profile.name);
    infoVals[3].textContent = formatEpochDate(profile.lastAuthenticatedAtEpoch);
  }

  const deleteBtn = modalPop.querySelector('.mf .btn-danger');
  if (deleteBtn) deleteBtn.onclick = removeCurrentOfflineProfile;
  const setActiveBtn = modalPop.querySelector('.mf .btn-primary');
  if (setActiveBtn) {
    setActiveBtn.disabled = !!profile.active;
    setActiveBtn.textContent = profile.active ? 'Active' : 'Set Active';
    setActiveBtn.onclick = setCurrentProfileActive;
  }
}

async function hydrateOrbiqAccountsPage() {
  await refreshProfilesFromBackend();
  renderOrbiqAccountsPage();
}

function openProfileDetailById(profileId) {
  const profile = findProfileById(profileId);
  if (!profile) return;
  ACTIVE_PROFILE_DETAIL_ID = profile.id;
  const nextModalId = profile.profileType === 'microsoft' ? 'ms-linked-detail' : 'offline-profile-detail';
  if (overlay && overlay.style.display !== 'none') {
    closeModal();
    setTimeout(() => openModal(nextModalId), 180);
  } else {
    openModal(nextModalId);
  }
}

async function setCurrentProfileActive() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;
  if (profile.active) {
    showToast('OK', 'Already active', profile.name + ' is already active');
    return;
  }

  const res = await invokeBackend('set_active_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Action failed', 'Could not set active profile');
    return;
  }
  await refreshProfilesFromBackend();

  hydrateOfflineDetailModal();
  showToast('OK', 'Active profile', profile.name + ' is now active');
}

async function removeCurrentOfflineProfile() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;

  const res = await invokeBackend('remove_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Remove failed', 'Could not remove this profile');
    return;
  }
  await refreshProfilesFromBackend();

  closeModal();
  setTimeout(() => goToAccountsPage(), 180);
  showToast('OK', 'Removed', profile.name + ' profile deleted');
}

async function unlinkCurrentMicrosoftProfile() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;

  const res = await invokeBackend('logout_microsoft_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Unlink failed', 'Could not remove Microsoft account');
    return;
  }
  await refreshProfilesFromBackend();

  closeModal();
  setTimeout(() => goToAccountsPage(), 180);
  showToast('OK', 'Unlinked', 'Microsoft account removed');
}

function getInstanceRuntimeConfig(instanceName) {
  if (!instanceName) return null;
  return INSTANCE_RUNTIME[instanceName] || null;
}

function normalizeComparablePath(value) {
  return String(value || '').trim().replace(/[\\/]+/g, '\\').toLowerCase();
}

function pathsMatch(a, b) {
  const left = normalizeComparablePath(a);
  const right = normalizeComparablePath(b);
  if (!left || !right) return false;
  return left === right;
}

function getSelectedInstanceJavaExecutable() {
  const instanceName = getSelectedInstanceName();
  const runtime = getInstanceRuntimeConfig(instanceName) || {};
  const executable = String(runtime.executable || '').trim();
  return executable || '';
}

function formatJavaCandidateOptionLabel(candidate) {
  if (!candidate || typeof candidate !== 'object') return 'Unknown runtime';
  const version = String(candidate.version || '').trim();
  const source = String(candidate.source || '').trim();
  const major = Number(candidate.major || 0);
  const parts = [];
  if (version) parts.push(version);
  else if (major > 0) parts.push('Java ' + major);
  if (source) parts.push(source);
  return parts.length > 0 ? parts.join(' - ') : 'Detected runtime';
}

function buildJavaPathOptionsMarkup(selectedExecutable) {
  const selected = String(selectedExecutable || '').trim();
  const options = [];
  options.push('<option value=""' + (!selected ? ' selected' : '') + '>Auto (launcher default)</option>');

  let matched = !selected;
  const candidates = Array.isArray(JAVA_RUNTIME_INFO.candidates) ? JAVA_RUNTIME_INFO.candidates : [];
  candidates.forEach((candidate) => {
    const path = String(candidate && candidate.path ? candidate.path : '').trim();
    if (!path) return;
    const isSelected = selected && pathsMatch(path, selected);
    if (isSelected) matched = true;
    const label = formatJavaCandidateOptionLabel(candidate);
    options.push(
      '<option value="' + escapeHtml(path) + '"' + (isSelected ? ' selected' : '') + '>' +
      escapeHtml(label + ' (' + path + ')') +
      '</option>'
    );
  });

  if (selected && !matched) {
    options.push(
      '<option value="' + escapeHtml(selected) + '" selected>' +
      escapeHtml('Custom (' + selected + ')') +
      '</option>'
    );
  }

  return options.join('');
}

function parseHeapFlagMb(flag, prefix) {
  const text = String(flag || '').trim();
  const expected = String(prefix || '').toLowerCase();
  if (!text || !expected) return null;
  const lower = text.toLowerCase();
  if (!lower.startsWith(expected)) return null;

  const raw = text.slice(prefix.length).trim();
  const match = raw.match(/^(\d+(?:\.\d+)?)([kmg]?)$/i);
  if (!match) return null;
  const value = Number(match[1]);
  if (!Number.isFinite(value) || value <= 0) return null;
  const unit = String(match[2] || '').toUpperCase();
  if (unit === 'G') return Math.round(value * 1024);
  if (unit === 'K') return Math.max(1, Math.round(value / 1024));
  return Math.round(value);
}

function extractHeapBoundsFromArgs(args) {
  const values = Array.isArray(args) ? args : [];
  let minMb = 0;
  let maxMb = 0;
  values.forEach((arg) => {
    const min = parseHeapFlagMb(arg, '-Xms');
    if (min !== null) minMb = min;
    const max = parseHeapFlagMb(arg, '-Xmx');
    if (max !== null) maxMb = max;
  });
  return { minMb, maxMb };
}

function mbToHeapArgValue(valueMb) {
  const value = Number(valueMb || 0);
  if (!Number.isFinite(value) || value <= 0) return '';
  if (value % 1024 === 0) return Math.round(value / 1024) + 'G';
  return Math.round(value) + 'M';
}

function upsertHeapArgs(args, minMb, maxMb) {
  const baseArgs = Array.isArray(args) ? args : [];
  const filtered = baseArgs.filter((arg) => {
    const text = String(arg || '').trim().toLowerCase();
    return !text.startsWith('-xms') && !text.startsWith('-xmx');
  });

  const prefix = [];
  if (Number(minMb) > 0) {
    const value = mbToHeapArgValue(minMb);
    if (value) prefix.push('-Xms' + value);
  }
  if (Number(maxMb) > 0) {
    const value = mbToHeapArgValue(maxMb);
    if (value) prefix.push('-Xmx' + value);
  }
  return prefix.concat(filtered);
}

function parseMemoryGbInputToMb(value) {
  const text = String(value || '').trim();
  if (!text) return null;
  const parsed = Number(text);
  if (!Number.isFinite(parsed) || parsed <= 0) return Number.NaN;
  return Math.round(parsed * 1024);
}

function formatGbInputValue(valueMb) {
  const value = Number(valueMb || 0);
  if (!Number.isFinite(value) || value <= 0) return '';
  const gb = value / 1024;
  return String(Number(gb.toFixed(2)));
}

function selectedInstanceMemoryBounds() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) return { minMb: 0, maxMb: 0 };

  const runtime = getInstanceRuntimeConfig(instanceName) || {};
  const fromArgs = extractHeapBoundsFromArgs(runtime.args);
  if (fromArgs.minMb > 0 || fromArgs.maxMb > 0) {
    return fromArgs;
  }

  const details = INSTANCE_DATA && INSTANCE_DATA[instanceName] ? INSTANCE_DATA[instanceName] : null;
  const minMb = Number(details && details.memoryMinMb ? details.memoryMinMb : 0);
  const maxMb = Number(details && details.memoryMaxMb ? details.memoryMaxMb : 0);
  return {
    minMb: Number.isFinite(minMb) ? Math.max(0, Math.round(minMb)) : 0,
    maxMb: Number.isFinite(maxMb) ? Math.max(0, Math.round(maxMb)) : 0,
  };
}

function parseArgsInput(text) {
  const src = String(text || '').trim();
  if (!src) return [];
  const out = [];
  let cur = '';
  let quote = null;
  let escaped = false;

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (escaped) {
      cur += ch;
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (quote) {
      if (ch === quote) {
        quote = null;
      } else {
        cur += ch;
      }
      continue;
    }

    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }

    if (/\s/.test(ch)) {
      if (cur.length > 0) {
        out.push(cur);
        cur = '';
      }
      continue;
    }

    cur += ch;
  }

  if (escaped) cur += '\\';
  if (cur.length > 0) {
    out.push(cur);
  }
  return out;
}

function stringifyArgs(args) {
  if (!Array.isArray(args) || args.length === 0) return '';
  return args.map((arg) => {
    const value = String(arg);
    if (value.length === 0) return '""';
    if (!/[\\\s"]/g.test(value)) return value;
    return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }).join(' ');
}

function populateEditInstanceModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    closeModal();
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const cfg = getInstanceRuntimeConfig(instanceName) || {};
  const titleEl = document.getElementById('edit-modal-title');
  const nameEl = document.getElementById('edit-inst-name');
  const execEl = document.getElementById('edit-launch-exec');
  const argsEl = document.getElementById('edit-launch-args');
  const wdEl = document.getElementById('edit-launch-wd');
  const details = INSTANCE_DATA && INSTANCE_DATA[instanceName] ? INSTANCE_DATA[instanceName] : null;
  const existingIconKey = normalizeIconKey(details && details.iconKey ? details.iconKey : '');
  if (titleEl) titleEl.textContent = 'Edit - ' + instanceName;
  if (nameEl) nameEl.value = instanceName;
  if (execEl) execEl.value = cfg.executable || '';
  if (execEl) {
    if (cfg.executable) execEl.placeholder = 'e.g. java or C:\\Java\\bin\\java.exe';
    else if (resolveLauncherDefaultJavaPath()) execEl.placeholder = resolveLauncherDefaultJavaPath();
    else execEl.placeholder = 'e.g. java or C:\\Java\\bin\\java.exe';
  }
  if (argsEl) argsEl.value = stringifyArgs(cfg.args);
  if (wdEl) wdEl.value = cfg.workingDir || '';
  setEditInstanceIconSelection(existingIconKey || resolveAutoInstanceIconKey(instanceName));
  void ensureInstanceIconCatalog().then(() => {
    setEditInstanceIconSelection(existingIconKey || resolveAutoInstanceIconKey(instanceName));
  });
}

function hydrateInstanceInfoJavaModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    closeModal();
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const selectEl = document.getElementById('instance-java-path-select');
  const inputEl = document.getElementById('instance-java-custom-path');
  if (!selectEl || !inputEl) return;

  const currentExecutable = getSelectedInstanceJavaExecutable();
  inputEl.value = '';
  inputEl.placeholder = currentExecutable || 'e.g. C:\\Java\\bin\\java.exe';
  const launcherDefaultJava = resolveLauncherDefaultJavaPath();
  if (!currentExecutable && launcherDefaultJava) {
    inputEl.placeholder = launcherDefaultJava;
  }

  selectEl.addEventListener('change', () => {
    if (String(selectEl.value || '').trim()) {
      inputEl.value = '';
    }
  });
}

function hydrateInstanceInfoMemoryModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    closeModal();
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const minEl = document.getElementById('instance-memory-min-gb');
  const maxEl = document.getElementById('instance-memory-max-gb');
  if (!minEl || !maxEl) return;
  const bounds = selectedInstanceMemoryBounds();
  minEl.value = formatGbInputValue(bounds.minMb);
  maxEl.value = formatGbInputValue(bounds.maxMb);
}

function applyMemoryPresetFromModal(minGb, maxGb) {
  const minEl = document.getElementById('instance-memory-min-gb');
  const maxEl = document.getElementById('instance-memory-max-gb');
  if (!minEl || !maxEl) return;
  minEl.value = minGb ? String(minGb) : '';
  maxEl.value = maxGb ? String(maxGb) : '';
}

function updateInstanceRuntimeCacheFromRecord(record) {
  if (!record || typeof record !== 'object') return;
  const instanceName = String(record.name || '').trim();
  if (!instanceName) return;
  INSTANCE_RUNTIME[instanceName] = {
    executable: record.executable || null,
    args: Array.isArray(record.args) ? record.args : [],
    workingDir: record.workingDir || null,
  };
}

async function saveInstanceJavaFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const selectEl = document.getElementById('instance-java-path-select');
  const customEl = document.getElementById('instance-java-custom-path');
  const customPath = String(customEl && customEl.value ? customEl.value : '').trim();
  const selectedPath = String(selectEl && selectEl.value ? selectEl.value : '').trim();
  const executable = customPath || selectedPath || '';

  const res = await invokeBackend('update_instance_launch_config', {
    request: {
      instanceName,
      executable,
    },
  });
  if (!res.ok) {
    showToast('!', 'Save failed', 'Could not update Java config');
    return;
  }
  updateInstanceRuntimeCacheFromRecord(res.data);

  closeModal();
  await refreshSelectedInstanceInfo(instanceName);
  showToast('OK', 'Java updated', executable ? 'Custom Java configured' : 'Using launcher default Java');
}

async function saveInstanceMemoryFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const minEl = document.getElementById('instance-memory-min-gb');
  const maxEl = document.getElementById('instance-memory-max-gb');
  const minMb = parseMemoryGbInputToMb(minEl ? minEl.value : '');
  const maxMb = parseMemoryGbInputToMb(maxEl ? maxEl.value : '');

  if (Number.isNaN(minMb) || Number.isNaN(maxMb)) {
    showToast('!', 'Invalid memory', 'Use positive numbers like 2, 4, or 6.5');
    return;
  }

  const minValue = minMb || 0;
  const maxValue = maxMb || 0;
  if (minValue > 0 && maxValue > 0 && minValue > maxValue) {
    showToast('!', 'Invalid range', 'Min memory cannot be greater than max memory');
    return;
  }

  const runtime = getInstanceRuntimeConfig(instanceName) || {};
  const baseArgs = Array.isArray(runtime.args) ? runtime.args : [];
  const args = upsertHeapArgs(baseArgs, minValue, maxValue);

  const res = await invokeBackend('update_instance_launch_config', {
    request: {
      instanceName,
      args,
    },
  });
  if (!res.ok) {
    showToast('!', 'Save failed', 'Could not update memory config');
    return;
  }
  updateInstanceRuntimeCacheFromRecord(res.data);

  const details = INSTANCE_DATA && INSTANCE_DATA[instanceName] ? INSTANCE_DATA[instanceName] : null;
  if (details) {
    details.memoryMinMb = minValue;
    details.memoryMaxMb = maxValue;
    details.memory = formatMemoryRange(minValue, maxValue);
  }
  const memoryEl = document.getElementById('di-memory');
  if (memoryEl) memoryEl.textContent = formatMemoryRange(minValue, maxValue);

  closeModal();
  await refreshSelectedInstanceInfo(instanceName);
  showToast('OK', 'Memory updated', 'Launch memory settings saved');
}

async function saveEditInstanceModal() {
  const oldName = getSelectedInstanceName();
  if (!oldName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const nameEl = document.getElementById('edit-inst-name');
  const execEl = document.getElementById('edit-launch-exec');
  const argsEl = document.getElementById('edit-launch-args');
  const wdEl = document.getElementById('edit-launch-wd');
  const iconKeyEl = document.getElementById('edit-inst-icon-key');
  const newName = nameEl ? nameEl.value.trim() : oldName;

  if (!newName) {
    showToast('!', 'Missing name', 'Instance name is required');
    return;
  }

  const executableRaw = execEl ? execEl.value.trim() : '';
  const args = parseArgsInput(argsEl ? argsEl.value : '');
  const workingDirRaw = wdEl ? wdEl.value.trim() : '';
  const iconKey = normalizeIconKey(iconKeyEl ? iconKeyEl.value : '');

  if (newName !== oldName) {
    const renameRes = await invokeBackend('rename_instance', { request: { oldName, newName } });
    if (!renameRes.ok) {
      showToast('!', 'Rename failed', 'Could not rename this instance');
      return;
    }
    renameInstanceNote(oldName, newName);
    renameTrackedInstallsForInstance(oldName, newName);
  }

  const request = {
    instanceName: newName,
    executable: executableRaw || '',
    args,
    workingDir: workingDirRaw || '',
    iconKey: iconKey || '',
  };

  const res = await invokeBackend('update_instance_launch_config', { request });
  if (!res.ok) {
    showToast('!', 'Save failed', 'Could not save launch config');
    return;
  }

  if (oldName !== newName) {
    delete INSTANCE_RUNTIME[oldName];
  }
  INSTANCE_RUNTIME[newName] = {
    executable: executableRaw || null,
    args,
    workingDir: workingDirRaw || null,
  };

  closeModal();
  const refreshed = await refreshInstancesFromBackend(false);
  if (!refreshed) {
    showToast('!', 'Refresh failed', 'Could not refresh instance list');
    return;
  }
  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const updatedCard = cards.find((card) => card.dataset.name === newName);
  if (updatedCard) selectCard(updatedCard);
  showToast('OK', 'Saved', 'Launch config updated');
}

function hydrateDeleteConfirmModal() {
  const name = getSelectedInstanceName();
  const label = document.getElementById('delete-instance-name');
  if (label) label.textContent = name || 'this instance';
}

async function deleteSelectedInstanceFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const res = await invokeBackend('delete_instance', { request: { instanceName } });
  if (!res.ok) {
    showToast('!', 'Delete failed', 'Could not delete this instance');
    return;
  }
  removeInstanceNote(instanceName);
  removeTrackedInstallsForInstance(instanceName);

  closeModal();
  await refreshInstancesFromBackend(false);
  showToast('OK', 'Instance deleted', instanceName + ' removed');
}

async function bootstrapBackendState() {
  await setupLifecycleEventStream();
  await setupProvisionEventStream();
  await setupDeepLinkEventStream();
  await consumeInitialDeepLinkPayload();
  const javaRes = await invokeBackend('get_java_runtime_info', { minimumMajor: 17 });
  if (javaRes.ok && javaRes.data && typeof javaRes.data === 'object') {
    JAVA_RUNTIME_INFO = {
      minimumMajor: Number(javaRes.data.minimumMajor || 17),
      defaultPath: javaRes.data.defaultPath || null,
      candidates: Array.isArray(javaRes.data.candidates) ? javaRes.data.candidates : [],
    };
  }
  await refreshInstancesFromBackend(true);
  await Promise.allSettled([
    refreshProfilesFromBackend(),
    invokeBackend('list_deployments'),
  ]);
}

function applyInstanceLifecycleEvent(payload) {
  if (!payload || !payload.instanceName) return;
  const name = String(payload.instanceName);
  const state = String(payload.state || '').toLowerCase();
  const source = String(payload.source || '').toLowerCase();

  applyActiveLaunchLifecycleProgress(payload);

  const details = INSTANCE_DATA[name];
  if (!details) {
    if (state === 'failed') {
      const reason = payload.reason ? String(payload.reason) : 'Process failed';
      showToast('!', 'Launch failed', reason);
    }
    return;
  }

  if (state === 'starting') {
    details.running = false;
    details.lastExitState = null;
    details.lastExitCode = null;
    details.lastExitReason = null;
    details.lastExitAtEpoch = null;
    details.exitStatus = '-';
  } else if (state === 'running') {
    const runningAt =
      parseLastPlayedEpoch(payload.timestampEpoch) ||
      parseLastPlayedEpoch(details.lastPlayedEpoch) ||
      Math.floor(Date.now() / 1000);
    syncWeeklySessionTrackerStart(name, runningAt);
    details.running = true;
    if (payload.timestampEpoch) {
      details.lastPlayedEpoch = parseLastPlayedEpoch(payload.timestampEpoch);
      details.last = formatLastPlayed(details.lastPlayedEpoch);
    }
    details.lastExitState = null;
    details.lastExitCode = null;
    details.lastExitReason = null;
    details.lastExitAtEpoch = null;
    details.exitStatus = '-';
  } else if (state === 'stopped' || state === 'failed') {
    const stoppedAt = parseLastPlayedEpoch(payload.timestampEpoch) || Math.floor(Date.now() / 1000);
    stopWeeklySessionTracker(name, stoppedAt);
    details.running = false;

    if (state === 'stopped') {
      details.lastExitState = source === 'kill_request' ? 'killed' : 'exited';
    } else {
      details.lastExitState = payload.reason ? 'error' : 'crashed';
    }
    details.lastExitCode = typeof payload.exitCode === 'number' ? payload.exitCode : null;
    details.lastExitReason = payload.reason ? String(payload.reason) : null;
    details.lastExitAtEpoch = parseLastPlayedEpoch(payload.timestampEpoch);
    details.exitStatus = formatExitStatus(
      details.lastExitState,
      details.lastExitCode,
      details.lastExitReason,
      details.lastExitAtEpoch
    );
  }

  const selected = document.querySelector('.instance-card.selected');
  if (selected && selected.dataset.name === name) {
    selectCard(selected);
  }

  if (state === 'failed') {
    if (!ACTIVE_PROVISION || ACTIVE_PROVISION.instanceName !== name) {
      const reason = payload.reason ? String(payload.reason) : 'Process failed';
      showToast('!', 'Launch failed', reason);
    }
  }
}

async function setupLifecycleEventStream() {
  if (!tauriListen) return;
  if (typeof detachLifecycleListener === 'function') return;
  try {
    detachLifecycleListener = await tauriListen('orbiq://instance-lifecycle', (event) => {
      applyInstanceLifecycleEvent(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach lifecycle listener', err);
  }
}

function sleepMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clampProgress(value) {
  return Math.max(0, Math.min(100, Math.floor(Number(value) || 0)));
}

function syncDetailLaunchProgress() {
  const wrap = document.getElementById('detail-launch-progress');
  if (!wrap) return;

  const active = ACTIVE_PROVISION;
  const selectedName = getSelectedInstanceName();
  const shouldShow =
    !!active &&
    !active.cancelRequested &&
    !!selectedName &&
    String(selectedName) === String(active.instanceName || '');

  const launchBtn = document.getElementById('launch-or-kill-btn');
  if (launchBtn) {
    launchBtn.disabled = false;
    launchBtn.style.opacity = '';
    launchBtn.style.cursor = '';
    if (shouldShow) {
      if (launchBtn.dataset.mode !== 'cancel-launch') {
        launchBtn.dataset.mode = 'cancel-launch';
        launchBtn.className = 'det-btn det-btn-running';
        launchBtn.innerHTML = '<i data-lucide="x" width="13" height="13"></i> Cancel Launch';
        lucide.createIcons();
      }
      launchBtn.onclick = () => { void cancelProvisionLaunch(launchBtn); };
    } else {
      const details = selectedName && INSTANCE_DATA && INSTANCE_DATA[selectedName] ? INSTANCE_DATA[selectedName] : null;
      if (details && details.running) {
        if (launchBtn.dataset.mode !== 'kill-game') {
          launchBtn.dataset.mode = 'kill-game';
          launchBtn.className = 'det-btn det-btn-running';
          launchBtn.innerHTML = '<i data-lucide="zap-off" width="13" height="13"></i> Kill Game';
          lucide.createIcons();
        }
        launchBtn.onclick = killInstance;
      } else if (details) {
        if (launchBtn.dataset.mode !== 'launch-game') {
          launchBtn.dataset.mode = 'launch-game';
          launchBtn.className = 'det-btn det-btn-primary';
          launchBtn.innerHTML = '<i data-lucide="play" width="13" height="13"></i> Launch';
          lucide.createIcons();
        }
        launchBtn.onclick = launchSequence;
      }
    }
  }

  if (!shouldShow) {
    wrap.classList.remove('visible');
    return;
  }

  const percent = clampProgress(active.percent || 0);
  const stage = String(active.stageText || 'Launching');
  const label = String(active.labelText || 'Working...');
  const tone = launchProgressTone(stage);

  const nameEl = document.getElementById('detail-launch-name');
  const percentEl = document.getElementById('detail-launch-percent');
  const fillEl = document.getElementById('detail-launch-fill');
  const labelEl = document.getElementById('detail-launch-label');

  if (nameEl) nameEl.textContent = stage;
  if (percentEl) percentEl.textContent = percent + '%';
  if (fillEl) fillEl.style.width = percent + '%';
  if (labelEl) labelEl.textContent = label;
  wrap.classList.remove('tone-preparing', 'tone-provision', 'tone-active', 'tone-success', 'tone-danger');
  wrap.classList.add('tone-' + tone);
  wrap.classList.add('visible');
}

function launchProgressTone(stageText) {
  const stage = String(stageText || '').trim().toLowerCase();
  if (!stage) return 'preparing';
  if (stage.includes('fail') || stage.includes('error') || stage.includes('cancel')) return 'danger';
  if (stage.includes('ready') || stage.includes('running') || stage.includes('done') || stage.includes('stopped')) return 'success';
  if (stage.includes('launch') || stage.includes('verify') || stage.includes('final')) return 'active';
  if (stage.includes('provision') || stage.includes('download') || stage.includes('resolve')) return 'provision';
  return 'preparing';
}

function setLaunchOverlayProgress(percent, label, force, stage) {
  if (!ACTIVE_PROVISION) return;
  const current = Number.isFinite(ACTIVE_PROVISION.percent) ? ACTIVE_PROVISION.percent : 0;
  const next = force ? clampProgress(percent) : Math.max(current, clampProgress(percent));
  ACTIVE_PROVISION.percent = next;
  if (label) ACTIVE_PROVISION.labelText = String(label);
  if (stage) ACTIVE_PROVISION.stageText = String(stage);
  if (ACTIVE_PROVISION.fill) ACTIVE_PROVISION.fill.style.width = next + '%';
  if (ACTIVE_PROVISION.percentEl) ACTIVE_PROVISION.percentEl.textContent = next + '%';
  if (ACTIVE_PROVISION.label && label) ACTIVE_PROVISION.label.textContent = ACTIVE_PROVISION.labelText;
  if (ACTIVE_PROVISION.stageEl && stage) ACTIVE_PROVISION.stageEl.textContent = ACTIVE_PROVISION.stageText;
  syncDetailLaunchProgress();
}

function launchStageForProvisionPhase(phase) {
  const normalized = String(phase || '').toLowerCase();
  const stageMap = {
    init: 'Preparing',
    manifest: 'Resolving metadata',
    version_json: 'Resolving version',
    client: 'Downloading client',
    libraries: 'Downloading libraries',
    loader_manifest: 'Resolving loader',
    loader_base: 'Downloading loader',
    loader_installer: 'Installing loader',
    loader_libraries: 'Downloading loader libs',
    asset_index: 'Resolving assets',
    assets: 'Downloading assets',
    done: 'Provisioned',
  };
  return stageMap[normalized] || 'Provisioning';
}

function inferProvisionProgressByPhase(phase, total, completed, currentPercent) {
  const current = Number.isFinite(currentPercent) ? currentPercent : 0;
  const boundedRatio = total && total > 0 && completed !== null
    ? Math.max(0, Math.min(1, completed / total))
    : null;

  if (phase === 'libraries') {
    return boundedRatio === null ? Math.max(current, 36) : 36 + Math.floor(boundedRatio * 30);
  }
  if (phase === 'loader_libraries') {
    return boundedRatio === null ? Math.max(current, 54) : 54 + Math.floor(boundedRatio * 20);
  }
  if (phase === 'assets') {
    return boundedRatio === null ? Math.max(current, 72) : 72 + Math.floor(boundedRatio * 18);
  }
  if (phase === 'done') return 90;

  const staticMap = {
    init: 8,
    manifest: 12,
    version_json: 18,
    client: 26,
    asset_index: 32,
    loader_manifest: 42,
    loader_base: 48,
    loader_installer: 52,
  };
  if (Object.prototype.hasOwnProperty.call(staticMap, phase)) {
    return Math.max(current, staticMap[phase]);
  }
  return Math.max(current, 10);
}

function lifecycleFailureMessage(payload) {
  if (payload && payload.reason) return String(payload.reason);
  if (payload && typeof payload.exitCode === 'number') {
    return 'Minecraft exited with code ' + payload.exitCode;
  }
  return 'Minecraft process exited during startup';
}

function applyActiveLaunchLifecycleProgress(payload) {
  if (!payload || !payload.instanceName || !ACTIVE_PROVISION) return;
  if (ACTIVE_PROVISION.instanceName !== String(payload.instanceName)) return;

  const state = String(payload.state || '').toLowerCase();
  ACTIVE_PROVISION.lastLifecyclePayload = payload;
  ACTIVE_PROVISION.lastLifecycleState = state;

  if (state === 'starting') {
    setLaunchOverlayProgress(94, 'Starting Minecraft process...', false, 'Launching');
    return;
  }
  if (state === 'running') {
    setLaunchOverlayProgress(97, 'Minecraft process started. Verifying...', false, 'Verifying');
    return;
  }
  if (state === 'failed') {
    setLaunchOverlayProgress(
      Number.isFinite(ACTIVE_PROVISION.percent) ? ACTIVE_PROVISION.percent : 97,
      lifecycleFailureMessage(payload),
      true,
      'Failed'
    );
    return;
  }
  if (state === 'stopped') {
    setLaunchOverlayProgress(99, 'Minecraft process stopped', false, 'Stopped');
  }
}

function applyProvisionProgressEvent(payload) {
  if (!payload || !payload.instanceName || !ACTIVE_PROVISION) return;
  if (ACTIVE_PROVISION.instanceName !== String(payload.instanceName)) return;

  const state = String(payload.state || '').toLowerCase();
  const phase = String(payload.phase || '').toLowerCase();
  const total = typeof payload.total === 'number' ? payload.total : null;
  const completed = typeof payload.completed === 'number' ? payload.completed : null;

  if (state === 'failed') {
    setLaunchOverlayProgress(
      Number.isFinite(ACTIVE_PROVISION.percent) ? ACTIVE_PROVISION.percent : 0,
      payload.message || 'Provision failed',
      true,
      'Failed'
    );
    return;
  }

  const percent = inferProvisionProgressByPhase(
    phase,
    total,
    completed,
    ACTIVE_PROVISION.percent || 0
  );
  setLaunchOverlayProgress(
    percent,
    payload.message || 'Provisioning...',
    false,
    launchStageForProvisionPhase(phase)
  );
}

async function setupProvisionEventStream() {
  if (!tauriListen) return;
  if (typeof detachProvisionListener === 'function') return;
  try {
    detachProvisionListener = await tauriListen(PROVISION_EVENT_NAME, (event) => {
      applyProvisionProgressEvent(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach provisioning listener', err);
  }
}
function buildDynamicSections() {
  const fg = document.getElementById('featured-grid');
  if (fg) {
    fg.innerHTML = [['ATM','All the Mods 9','1.21.1 - Forge','2.4M'],['CRT','Create: Astral','1.20.1 - Fabric','1.1M'],['BMC','Better MC','1.21.4 - Fabric','890K'],['PRO','Prominence II','1.20.1 - Forge','650K']].map(([e,n,v,dl])=>`
      <div class="featured-card" onclick="openModal('install-modpack')">
        <div class="featured-thumb">${e}</div>
        <div class="featured-body"><div class="featured-name">${n}</div><div class="featured-meta">${v}</div><div class="featured-dl"><i data-lucide="download" width="9" height="9"></i>${dl}</div></div>
      </div>`).join('');
  }

  const nl = document.getElementById('news-list');
  if (nl) {
    nl.innerHTML = [
      {icon:'MC',src:'Minecraft',color:'#3d8c4a',title:'Minecraft 1.21.5 - Spring Drop Released',desc:'New flower, leaf litter, and more biome variety.',date:'2 hours ago'},
      {icon:'FB',src:'Fabric',color:'#aa7744',title:'Fabric Loader 0.17 now available',desc:'Major performance improvements and improved mod compatibility.',date:'1 day ago'},
      {icon:'SD',src:'Sodium',color:'#4488cc',title:'Sodium 0.6.3 - Memory leak fix',desc:'Critical fix for a memory leak affecting modded instances.',date:'2 days ago'},
    ].map(n=>`
    <div class="news-card"><div style="padding:12px">
      <div class="news-source"><div class="news-dot" style="background:${n.color}"></div>${n.src}</div>
      <div style="display:flex;align-items:flex-start;gap:10px"><div style="font-size:28px;flex-shrink:0">${n.icon}</div><div><div class="news-title">${n.title}</div><div class="news-desc">${n.desc}</div><div class="news-date">${n.date}</div></div></div>
    </div></div>`).join('');
  }

  const fc = document.getElementById('friends-content');
  if (fc) {
    fc.innerHTML = `
      <div class="section-title">Online (3) <div class="section-title-line"></div></div>
      ${[{name:'Technoblade2',status:'Playing All the Mods 9',color:'#dd5555',online:'game',canJoin:true},{name:'GoodTimesWithScar',status:'Playing Better MC',color:'#44aadd',online:'game',canJoin:false},{name:'Grian',status:'On Orbiq launcher',color:'#ddaa44',online:'on',canJoin:false}].map(f=>`
      <div class="friend-row"><div class="friend-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(f.name.replace(/\d+/,''))}/32" onerror="this.parentNode.style.background='${f.color}33'"></div><div class="online-dot ${f.online==='game'?'game':'on'}"></div><div style="flex:1"><div class="friend-name">${f.name}</div><div class="friend-status">${f.status}</div></div><div class="friend-actions">${f.canJoin?`<button class="friend-btn join" onclick="openModal('shared-session')"><i data-lucide="arrow-right" width="10" height="10"></i>Join</button>`:''}<button class="friend-btn"><i data-lucide="message-square" width="10" height="10"></i></button></div></div>`).join('')}
      <div class="section-title" style="margin-top:14px">Offline (2) <div class="section-title-line"></div></div>
      ${[{name:'Dream',status:'Last seen 2h ago'},{name:'GeorgeNotFound',status:'Last seen yesterday'}].map(f=>`<div class="friend-row" style="opacity:0.5"><div class="friend-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(f.name)}/32" onerror="this.parentNode.style.background='#333'"></div><div class="online-dot off"></div><div style="flex:1"><div class="friend-name">${f.name}</div><div class="friend-status">${f.status}</div></div></div>`).join('')}`;
  }

  // Server wizard
  const nav = document.getElementById('srv-nav-container');
  if (nav) {
    nav.innerHTML = [['server','1','Basic Info'],['box','2','Game Settings'],['puzzle','3','Mods & Plugins'],['cloud','4','Deploy']].map(([ic,n,label])=>`
      <div class="srv-step-nav" id="srv-nav-${n}" onclick="goSrvStep(${n})" style="display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:8px;cursor:pointer;transition:all 0.12s;${n==='1'?'background:var(--s3);color:var(--t1);':'color:var(--t3);'}">
        <div id="srv-num-${n}" style="width:20px;height:20px;border-radius:50%;background:${n==='1'?'var(--t2)':'var(--s4)'};border:1px solid ${n==='1'?'var(--b4)':'var(--b2)'};display:flex;align-items:center;justify-content:center;font-size:10px;font-family:var(--mono);color:${n==='1'?'#000':'var(--t4)'};flex-shrink:0;font-weight:700;">${n}</div>
        <span style="font-size:12px;font-weight:600;font-family:var(--sans);">${label}</span>
      </div>`).join('');
  }

  const rulesEl = document.getElementById('srv-rules');
  if (rulesEl) {
    rulesEl.innerHTML = [['PvP enabled',true],['Online mode (auth)',true],['Whitelist',false],['Command blocks',false],['Flight allowed',false]].map(([label,on])=>`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid var(--b1);" class="info-row">
        <span style="font-size:12px;font-family:var(--mono);color:var(--t2);">${label}</span>
        <div class="check-box ${on?'on':''}" onclick="toggleCheck(this)">${on?'<i data-lucide="check" width="10" height="10" style="color:#000"></i>':''}</div>
      </div>`).join('');
  }

  const sigGrid = document.getElementById('srv-icon-grid');
  if (sigGrid) sigGrid.innerHTML = [['castle','castle'],['sword','sword'],['globe','globe'],['flame','flame'],['waves','waves'],['settings','settings'],['sparkles','sparkles'],['leaf','leaf'],['mountain','mountain'],['gem','gem']].map(([ic,name],i)=>`<div class="icon-cell${i===0?' sel':''}" onclick="selectSrvIcon(this,'${name}')"><i data-lucide="${ic}" width="16" height="16" style="pointer-events:none;color:var(--t2)"></i></div>`).join('');
  lucide.createIcons();

  const spl = document.getElementById('srv-plugins-list');
  if (spl) {
    spl.innerHTML = [['EX','EssentialsX','Core commands','Plugin','3.2M'],['WE','WorldEdit','In-game editor','Plugin','8.1M'],['LP','LuckPerms','Permissions','Plugin','5.4M'],['SP','Spark','Performance profiler','Mod','1.8M']].map(([e,n,d,type,dl],i)=>`
      <div style="display:flex;align-items:center;gap:10px;padding:9px 11px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:5px;">
        <div style="font-size:20px;">${e}</div>
        <div style="flex:1;"><div style="font-size:12.5px;font-weight:700;color:var(--t1);">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:1px;">${d} - <span style="color:var(--t3)">${dl} downloads</span></div></div>
        <span style="font-size:9.5px;font-family:var(--mono);padding:2px 7px;background:var(--s3);border:1px solid var(--b2);border-radius:4px;color:var(--t4);">${type}</span>
        <button class="srv-add-btn" id="srv-add-${i}" onclick="toggleSrvAdd(this,'${n}')" style="height:26px;padding:0 10px;border-radius:6px;border:1px solid var(--b2);background:var(--s3);font-size:10.5px;font-family:var(--mono);color:var(--t2);cursor:pointer;transition:all 0.12s;flex-shrink:0;">+ Add</button>
      </div>`).join('');
  }

  const hostOpts = document.getElementById('srv-host-opts');
  if (hostOpts) {
    hostOpts.innerHTML = [['PC','This Computer','Run locally on this device','local']].map(([e,n,d,val],i)=>`
      <div class="srv-host-card${i===0?' selected':''}" data-val="${val}" onclick="selectSrvHost(this)" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:${i===0?'var(--s3)':'var(--s2)'};border:1px solid ${i===0?'var(--b4)':'var(--b2)'};border-radius:9px;cursor:pointer;transition:all 0.12s;">
        <div style="font-size:22px;">${e}</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--t1);">${n}</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);margin-top:2px;">${d}</div></div>
        <div class="srv-radio" style="width:14px;height:14px;border-radius:50%;border:2px solid ${i===0?'var(--t2)':'var(--b3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i===0?'<div style="width:6px;height:6px;border-radius:50%;background:var(--t2);"></div>':''}</div>
      </div>`).join('');
  }

  const psl = document.getElementById('prev-steps-list');
  if (psl) {
    psl.innerHTML = ['Basic Info','Game Settings','Mods & Plugins','Deploy'].map((s,i)=>`
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;" id="prev-step-${i+1}">
        <div style="width:14px;height:14px;border-radius:50%;border:1px solid var(--b3);background:${i===0?'var(--t2)':'var(--s3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          ${i===0?'<i data-lucide="check" width="8" height="8" style="color:#000"></i>':''}
        </div>
        <span style="font-size:11px;font-family:var(--mono);color:${i===0?'var(--t2)':'var(--t4)'};">${s}</span>
      </div>`).join('');
  }
}

lucide.createIcons();
buildDynamicSections();
onSrvIdleToggle();
void refreshServerDeployments();
startServerManagerPolling();
window.addEventListener('beforeunload', () => {
  void stopStopOnCloseDeployments();
});
initWindowControls();
initTitlebarDrag();
initAuthDropdown();
initSelectContextMenus();
setupInstanceRuntimeStatePolling();
loadOrbiqAccountState();
bootstrapBackendState();
installMojibakeSanitizer();
sanitizeMojibakeDom(document);
lucide.createIcons();

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// PAGE SWITCHING
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function setPage(pageId, clickedItem) {
  const normalizedPageId = pageId === 'launch' ? 'instances' : pageId;
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const pg = document.getElementById('page-' + normalizedPageId);
  if (pg) pg.classList.add('active');

  document.querySelectorAll('.sb-item').forEach((i) => i.classList.remove('active'));
  const fallbackItemByPage = {
    instances: document.getElementById('sb-instances-all'),
    accounts: document.getElementById('sb-accounts'),
    server: document.getElementById('sb-create-server'),
    'my-servers': document.getElementById('sb-my-servers'),
    modrinth: document.getElementById('sb-modrinth'),
    curseforge: document.getElementById('sb-curseforge'),
  };
  const activeItem = clickedItem || fallbackItemByPage[normalizedPageId] || null;
  if (activeItem) activeItem.classList.add('active');

  if (normalizedPageId === 'accounts') {
    void hydrateOrbiqAccountsPage();
  } else if (normalizedPageId === 'server' || normalizedPageId === 'my-servers') {
    void refreshServerDeployments();
  } else if (normalizedPageId === 'modrinth' || normalizedPageId === 'curseforge') {
    void ensureBrowseProviderLoaded(normalizedPageId);
  }
}

function syncSidebarInstanceActiveState(instanceName) {
  const items = Array.from(document.querySelectorAll('.sb-instance-item'));
  items.forEach((item) => item.classList.remove('active'));
  const targetName = String(instanceName || '').trim();
  if (!targetName) return;
  const target = items.find((item) => String(item.dataset.instanceName || '').trim() === targetName);
  if (!target) return;
  target.classList.add('active');
  const allBtn = document.getElementById('sb-instances-all');
  const instancesPage = document.getElementById('page-instances');
  if (allBtn && instancesPage && instancesPage.classList.contains('active')) {
    allBtn.classList.remove('active');
  }
}

function renderSidebarInstanceList(instances) {
  const listEl = document.getElementById('sb-instance-list');
  if (!listEl) return;
  const rows = Array.isArray(instances) ? instances : [];
  if (rows.length === 0) {
    listEl.innerHTML = '<div class="sb-instance-empty">No instances yet</div>';
    return;
  }
  listEl.innerHTML = rows
    .map((row) => {
      const name = String(row && row.name ? row.name : '').trim();
      if (!name) return '';
      const running = !!(row && row.running);
      const runningMarkup = running ? '<span class="sb-instance-running-dot"></span>' : '';
      const iconMarkup = sidebarInstanceIconMarkup(row);
      return `
        <button class="sb-item sb-instance-item" data-instance-name="${escapeHtml(name)}" onclick="openInstanceFromSidebar(event,this)" title="${escapeHtml(name)}">
          ${iconMarkup}
          <span class="sb-instance-name">${escapeHtml(name)}</span>
          ${runningMarkup}
        </button>
      `;
    })
    .filter(Boolean)
    .join('');
  lucide.createIcons();
}

function sidebarInstanceIconMarkup(row) {
  const loader = normalizeLoader(row && row.loader ? row.loader : 'vanilla');
  const name = String(row && row.name ? row.name : '').trim();
  const iconKey = normalizeIconKey(row && row.iconKey ? row.iconKey : '') || resolveAutoInstanceIconKey(name || loader || 'instance');
  const src = loaderArtPath(loader, iconKey);
  const fallback = loaderIcon(loader);
  const label = escapeHtml(loaderLabel(loader));
  if (!src) {
    return `<span class="sb-instance-icon"><i data-lucide="${fallback}" width="11" height="11"></i></span>`;
  }
  return `
    <span class="sb-instance-icon">
      <img class="sb-instance-icon-img" src="${src}" alt="${label} icon" loading="lazy"
           onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='inline-block';">
      <i data-lucide="${fallback}" width="11" height="11" style="display:none"></i>
    </span>
  `;
}

function openInstanceFromSidebar(event, button) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const name = button && button.dataset ? String(button.dataset.instanceName || '').trim() : '';
  if (!name) {
    setPage('instances', document.getElementById('sb-instances-all'));
    return;
  }

  setPage('instances', button);
  INSTANCE_FILTER_TYPE = 'all';
  INSTANCE_SEARCH_QUERY = '';
  setActiveFilterChip('all');
  applyInstanceVisibility();

  const searchInput = document.querySelector('.titlebar .search-input');
  if (searchInput) searchInput.value = '';

  focusInstanceCardByName(name);
}

function focusInstanceCardByName(instanceName) {
  const name = String(instanceName || '').trim();
  if (!name) return false;
  const selected = Array.from(document.querySelectorAll('.instance-card')).find(
    (card) => String(card.dataset.name || '').trim() === name
  );
  if (!selected) {
    showToast('!', 'Missing instance', name + ' not found');
    return false;
  }
  const parentGrid = selected.closest('.instance-grid');
  if (parentGrid && parentGrid.style.display === 'none') {
    parentGrid.style.display = '';
    const header = parentGrid.previousElementSibling;
    const chevron = header && header.querySelector ? header.querySelector('.group-chevron') : null;
    if (chevron) chevron.classList.remove('collapsed');
    const groupId = header && header.dataset ? String(header.dataset.groupId || '') : '';
    const group = groupId ? findInstanceGroupById(groupId) : null;
    if (group && group.collapsed) {
      group.collapsed = false;
      persistInstanceGroups();
    }
  }
  selectCard(selected);
  selected.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  return true;
}

function openInstancesSidebarContextMenu(e) {
  e.preventDefault();
  e.stopPropagation();

  const instances = Array.isArray(INSTANCE_LIST_CACHE) ? [...INSTANCE_LIST_CACHE] : [];
  const selectedName = getSelectedInstanceName();
  const topInstances = instances
    .sort((left, right) => {
      const leftRunning = !!left.running;
      const rightRunning = !!right.running;
      if (leftRunning !== rightRunning) return leftRunning ? -1 : 1;
      const leftPlayed = parseLastPlayedEpoch(left.lastPlayed) || 0;
      const rightPlayed = parseLastPlayedEpoch(right.lastPlayed) || 0;
      if (leftPlayed !== rightPlayed) return rightPlayed - leftPlayed;
      return String(left.name || '').localeCompare(String(right.name || ''), undefined, { sensitivity: 'base', numeric: true });
    });

  const quickListMarkup = topInstances.length > 0
    ? topInstances.map((item) => {
      const name = String(item && item.name ? item.name : '').trim();
      if (!name) return '';
      const safeName = escapeHtml(name);
      const escapedName = name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      const running = !!item.running;
      const active = selectedName && selectedName === name ? ' active' : '';
      const iconMarkup = sidebarInstanceIconMarkup(item);
      return `
        <div class="ctx-item${active}" onclick="hideCtx();setPage('instances',document.getElementById('sb-instances-all'));focusInstanceCardByName('${escapedName}')">
          ${iconMarkup}
          <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${safeName}</span>
          ${running ? '<span class="sb-instance-running-dot"></span>' : ''}
        </div>
      `;
    }).filter(Boolean).join('')
    : '<div class="ctx-item" style="opacity:.7;cursor:default">No instances</div>';

  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '240px';

  ctxMenu.innerHTML = `
    <div class="ctx-item" onclick="hideCtx();setPage('instances',document.getElementById('sb-instances-all'))"><i data-lucide="layout-grid" width="12" height="12"></i>Open Instances</div>
    <div class="ctx-item" onclick="hideCtx();openModal('add-instance')"><i data-lucide="plus" width="12" height="12"></i>Add Instance</div>
    <div class="ctx-item" onclick="hideCtx();openModal('create-group')"><i data-lucide="folder-plus" width="12" height="12"></i>Create Group</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();setPage('instances',document.getElementById('sb-instances-all'));sortInstances('name')"><i data-lucide="arrow-up-a-z" width="12" height="12"></i>Sort by Name</div>
    <div class="ctx-item" onclick="hideCtx();setPage('instances',document.getElementById('sb-instances-all'));sortInstances('recent')"><i data-lucide="clock-3" width="12" height="12"></i>Sort by Recent</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" style="opacity:.7;cursor:default"><i data-lucide="list" width="12" height="12"></i>Quick Select (${topInstances.length})</div>
    <div class="ctx-quick-select-scroll">
      ${quickListMarkup}
    </div>
  `;
  ctxMenu.style.display = 'block';
  const x = Math.min(Math.max(8, e.clientX), window.innerWidth - 248);
  const y = Math.min(Math.max(8, e.clientY), window.innerHeight - ctxMenu.scrollHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function goToAccountsPage(clickedItem) {
  const sidebarBtn = document.getElementById('sb-accounts');
  const nextItem = clickedItem && clickedItem.classList && clickedItem.classList.contains('sb-item')
    ? clickedItem
    : sidebarBtn;
  setPage('accounts', nextItem);
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// MODAL LOGIC
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
const overlay  = document.getElementById('overlay');
const modalPop = document.getElementById('modal-popup');
let ACTIVE_MODAL_ID = '';
let ADD_INSTANCE_PREFILL = null;
let PENDING_BROWSE_INSTALL_CONTEXT = null;
let ACTIVE_WORLD_DETAIL_NAME = '';
let WORLD_DETAIL_TAB = 'overview';
let WORLD_DETAIL_CURRENT = null;
let WORLD_DETAIL_PLAYERS = [];
let WORLD_DETAIL_SELECTED_PLAYER = '';
let WORLD_DETAIL_PLAYER_CACHE = {};
const WORLD_ITEM_TEXTURE_DATA_URI_CACHE = new Map();
const WORLD_ITEM_TEXTURE_DATA_URI_PENDING = new Map();
const INSTANCE_ASSET_MODAL_CACHE = {};
const VERSION_SELECTOR_CACHE = new Map();
let VERSION_SELECTOR_STATE = { mode: 'release', query: '', selected: '' };
let VERSION_SELECTOR_RETURN_CONTEXT = null;
let LAST_AUTH_RELINK_PROMPT_AT = 0;
let LAST_AUTH_SECURITY_PROMPT_AT = 0;
let SKIN_MANAGER_STATE = {
  profileId: '',
  profileName: '',
  profileType: '',
  variant: 'classic',
  imageBase64: '',
  localPreviewDataUrl: '',
  fileName: '',
  applying: false,
  previewNonce: 0,
  currentSkinUrl: '',
  currentCapeUrl: '',
  currentSkinVariant: '',
  lastSyncAt: 0,
  syncedProfileId: '',
  syncingCurrent: false,
  history: [],
  lastValidation: null,
  localCapePreviewDataUrl: '',
  capeFileName: '',
  recentLoaded: false,
  recentSkins: [],
};
let SKIN_VIEWER_RUNTIME = {
  viewer: null,
  controls: null,
  canvas: null,
  resizeObserver: null,
  autoRotate: true,
  defaultSkinDataUrl: '',
};
let MODAL_CLOSE_TIMER = null;
let MODAL_CLOSE_TOKEN = 0;
function openModal(id) {
  if (!overlay || !modalPop) return;
  const fn = MODALS[id];
  if (!fn) return;
  if (ACTIVE_MODAL_ID === 'skin-manager' && id !== 'skin-manager') {
    destroySkinViewerRuntime();
  }
  MODAL_CLOSE_TOKEN += 1;
  if (MODAL_CLOSE_TIMER) {
    clearTimeout(MODAL_CLOSE_TIMER);
    MODAL_CLOSE_TIMER = null;
  }
  overlay.classList.remove('closing');
  overlay.style.display = 'flex';
  ACTIVE_MODAL_ID = String(id || '').trim();
  modalPop.classList.remove('modal-wide');
  modalPop.classList.remove('modal-manage-mods');
  modalPop.classList.remove('modal-settings');
  modalPop.classList.remove('modal-skin-manager');
  if (ACTIVE_MODAL_ID === 'world-detail') {
    modalPop.classList.add('modal-wide');
  } else if (ACTIVE_MODAL_ID === 'manage-mods') {
    modalPop.classList.add('modal-manage-mods');
  } else if (ACTIVE_MODAL_ID === 'settings') {
    modalPop.classList.add('modal-settings');
  } else if (ACTIVE_MODAL_ID === 'skin-manager') {
    modalPop.classList.add('modal-skin-manager');
  }
  modalPop.innerHTML = fn();
  if (id === 'edit-instance') {
    populateEditInstanceModal();
  } else if (id === 'instance-info-java') {
    hydrateInstanceInfoJavaModal();
  } else if (id === 'instance-info-memory') {
    hydrateInstanceInfoMemoryModal();
  } else if (id === 'add-instance') {
    void hydrateAddInstanceModal();
  } else if (id === 'delete-confirm') {
    hydrateDeleteConfirmModal();
  } else if (id === 'profile-select-launch') {
    hydrateLaunchProfileModal();
  } else if (id === 'orbiq-login') {
    hydrateOrbiqLoginModal();
  } else if (id === 'orbiq-register') {
    hydrateOrbiqRegisterModal();
  } else if (id === 'orbiq-register-success') {
    hydrateOrbiqRegisterSuccessModal();
  } else if (id === 'ms-linked-detail') {
    hydrateMicrosoftDetailModal();
  } else if (id === 'offline-profile-detail') {
    hydrateOfflineDetailModal();
  } else if (id === 'link-microsoft' || id === 'ms-login') {
    void hydrateMicrosoftLinkModal();
  } else if (id === 'banner-picker') {
    hydrateBannerPickerModal();
  } else if (id === 'notes') {
    hydrateNotesModal();
  } else if (id === 'skin-manager') {
    hydrateSkinManagerModal();
  } else if (id === 'manage-mods') {
    void hydrateManagedModsModal();
  } else if (id === 'create-group') {
    hydrateCreateGroupModal();
  } else if (id === 'rename-group') {
    hydrateRenameGroupModal();
  } else if (id === 'delete-group') {
    hydrateDeleteGroupModal();
  } else if (id === 'browse-install') {
    void hydrateBrowseInstallModal();
  } else if (id === 'launch-missing-required') {
    hydrateLaunchMissingDialogModal();
  } else if (id === 'launch-preflight') {
    hydrateLaunchPreflightDialogModal();
  } else if (id === 'diagnostics') {
    hydrateDiagnosticsModal();
  } else if (id === 'world-manager') {
    void hydrateWorldManagerModal();
  } else if (id === 'world-detail') {
    void hydrateWorldDetailModal();
  } else if (id === 'screenshots') {
    void hydrateScreenshotsModal();
  } else if (id === 'resource-packs' || id === 'shader-packs') {
    void hydrateInstanceAssetModal(id);
  } else if (id === 'datapacks') {
    void hydrateDatapacksModal();
  } else if (id === 'java-manager') {
    void hydrateJavaManagerModal();
  } else if (id === 'console') {
    void hydrateConsoleModal();
  } else if (id === 'version-selector') {
    void hydrateVersionSelectorModal();
  } else if (id === 'dependencies') {
    void hydrateDependenciesModal();
  } else if (id === 'mod-updates') {
    void hydrateModUpdatesModal();
  } else if (id === 'mod-conflict') {
    void hydrateModConflictModal();
  } else if (id === 'settings') {
    hydrateSettingsModal();
  }
  sanitizeMojibakeDom(modalPop);
  lucide.createIcons();
}

async function hydrateAddInstanceModal() {
  const loaderSelect = document.getElementById('add-inst-loader');
  const versionSelect = document.getElementById('add-inst-version');
  const loaderVersionSelect = document.getElementById('add-inst-loader-version');
  const nameInput = document.getElementById('add-inst-name');
  if (!versionSelect || !loaderSelect || !loaderVersionSelect) return;
  const prefill = ADD_INSTANCE_PREFILL && typeof ADD_INSTANCE_PREFILL === 'object'
    ? Object.assign({}, ADD_INSTANCE_PREFILL)
    : null;
  ADD_INSTANCE_PREFILL = null;

  if (nameInput) {
    const prefillBaseName = prefill && prefill.nameBase ? String(prefill.nameBase).trim() : '';
    const current = String(nameInput.value || '').trim();
    if (prefillBaseName) {
      nameInput.value = suggestNextInstanceName(prefillBaseName);
    } else if (!current || /^my instance(?:\s+\d+)?$/i.test(current)) {
      nameInput.value = suggestNextInstanceName('My Instance');
    }
  }
  setAddInstanceIconSelection(pickRandomInstanceIconKey());
  void ensureInstanceIconCatalog().then(() => {
    const current = normalizeIconKey(document.getElementById('add-inst-icon-key') ? document.getElementById('add-inst-icon-key').value : '');
    if (current) {
      setAddInstanceIconSelection(current);
    } else {
      setAddInstanceIconSelection(pickRandomInstanceIconKey());
    }
  });

  const applyVersionOptions = (versions, preferredValue) => {
    const finalVersions = Array.isArray(versions) ? versions : [];
    if (!finalVersions.length) {
      versionSelect.innerHTML = '<option value="">No versions available</option>';
      versionSelect.value = '';
      versionSelect.disabled = true;
      return;
    }
    versionSelect.innerHTML = finalVersions
      .map((version) => `<option>${escapeHtml(version)}</option>`)
      .join('');

    const preferred = String(preferredValue || '').trim();
    if (preferred && finalVersions.includes(preferred)) {
      versionSelect.value = preferred;
    } else if (finalVersions.length) {
      versionSelect.value = finalVersions[0];
    }
    versionSelect.disabled = false;
  };

  const applyLoaderVersionOptions = (loaderLabel, versions, preferredValue) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    if (normalizedLoader === 'vanilla') {
      loaderVersionSelect.innerHTML = '<option value="">Not required for Vanilla</option>';
      loaderVersionSelect.value = '';
      loaderVersionSelect.disabled = true;
      return;
    }

    const finalVersions = Array.isArray(versions) ? versions : [];
    loaderVersionSelect.innerHTML = '<option value="">Auto (latest)</option>' + finalVersions
      .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
      .join('');

    const preferred = String(preferredValue || '').trim();
    if (preferred && finalVersions.includes(preferred)) {
      loaderVersionSelect.value = preferred;
    } else {
      loaderVersionSelect.value = '';
    }
    loaderVersionSelect.disabled = false;
  };

  const fetchLoaderVersions = async (loaderLabel, gameVersion, preferredLoaderVersion) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    const selectedGameVersion = String(gameVersion || '').trim();
    if (normalizedLoader === 'vanilla') {
      applyLoaderVersionOptions(loaderLabel, [], '');
      return;
    }
    if (!selectedGameVersion || /^loading versions/i.test(selectedGameVersion)) {
      loaderVersionSelect.disabled = true;
      loaderVersionSelect.innerHTML = '<option value="">Loading loader versions...</option>';
      return;
    }

    const cacheKey = (normalizedLoader || 'vanilla') + '|' + selectedGameVersion;
    if (ADD_INSTANCE_LOADER_VERSION_CACHE.has(cacheKey)) {
      applyLoaderVersionOptions(
        loaderLabel,
        ADD_INSTANCE_LOADER_VERSION_CACHE.get(cacheKey) || [],
        preferredLoaderVersion
      );
      return;
    }

    loaderVersionSelect.disabled = true;
    loaderVersionSelect.innerHTML = '<option value="">Loading loader versions...</option>';
    const res = await invokeBackend('list_loader_versions', {
      loader: normalizedLoader,
      gameVersion: selectedGameVersion,
      limit: 300,
    });
    const versions = res.ok && Array.isArray(res.data)
      ? res.data.map((item) => String(item || '').trim()).filter((item) => item.length > 0)
      : [];
    const unique = Array.from(new Set(versions));
    ADD_INSTANCE_LOADER_VERSION_CACHE.set(cacheKey, unique);
    applyLoaderVersionOptions(loaderLabel, unique, preferredLoaderVersion);
  };

  const fetchVersionsForLoader = async (
    loaderLabel,
    preferredMinecraftVersion,
    preferredLoaderVersion
  ) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    const cacheKey = normalizedLoader || 'vanilla';
    if (ADD_INSTANCE_VERSION_CACHE.has(cacheKey)) {
      const cachedVersions = ADD_INSTANCE_VERSION_CACHE.get(cacheKey) || [];
      applyVersionOptions(cachedVersions, preferredMinecraftVersion);
      await fetchLoaderVersions(loaderLabel, versionSelect.value, preferredLoaderVersion);
      return;
    }

    versionSelect.disabled = true;
    versionSelect.innerHTML = '<option>Loading versions...</option>';

    const res = await invokeBackend('list_loader_supported_versions', {
      loader: normalizedLoader,
      includeSnapshots: false,
      limit: 300,
    });
    const versions = res.ok && Array.isArray(res.data)
      ? res.data.map((item) => String(item || '').trim()).filter((item) => item.length > 0)
      : [];
    const unique = Array.from(new Set(versions));
    ADD_INSTANCE_VERSION_CACHE.set(cacheKey, unique);
    applyVersionOptions(unique, preferredMinecraftVersion);
    await fetchLoaderVersions(loaderLabel, versionSelect.value, preferredLoaderVersion);
  };

  const prefillLoader = normalizeLoader(prefill && prefill.loader ? prefill.loader : '');
  const loaderOptionValues = Array.from(loaderSelect.options || []).map((option) => String(option.value || '').trim());
  const prefillLoaderLabel = prefillLoader
    ? loaderOptionValues.find((value) => normalizeLoader(value) === prefillLoader) || ''
    : '';
  if (prefillLoaderLabel) loaderSelect.value = prefillLoaderLabel;

  loaderSelect.addEventListener('change', () => {
    const preferredMinecraftVersion = versionSelect.value;
    const preferredLoaderVersion = loaderVersionSelect.value;
    void fetchVersionsForLoader(
      loaderSelect.value,
      preferredMinecraftVersion,
      preferredLoaderVersion
    );
  });

  versionSelect.addEventListener('change', () => {
    void fetchLoaderVersions(loaderSelect.value, versionSelect.value, loaderVersionSelect.value);
  });

  void fetchVersionsForLoader(
    loaderSelect.value,
    prefill && prefill.version ? String(prefill.version).trim() : versionSelect.value,
    prefill && prefill.loaderVersion ? String(prefill.loaderVersion).trim() : loaderVersionSelect.value
  );
}

function collectExistingInstanceNames() {
  const names = new Set();
  document.querySelectorAll('.instance-card').forEach((card) => {
    const value = String(card.dataset && card.dataset.name ? card.dataset.name : '').trim();
    if (value) names.add(value.toLowerCase());
  });
  if (typeof INSTANCE_DATA === 'object' && INSTANCE_DATA) {
    Object.keys(INSTANCE_DATA).forEach((name) => {
      const value = String(name || '').trim();
      if (value) names.add(value.toLowerCase());
    });
  }
  return names;
}

function suggestNextInstanceName(baseName) {
  const base = String(baseName || 'My Instance').trim() || 'My Instance';
  const used = collectExistingInstanceNames();
  if (!used.has(base.toLowerCase())) return base;
  let index = 2;
  while (index < 1000) {
    const candidate = `${base} ${index}`;
    if (!used.has(candidate.toLowerCase())) return candidate;
    index += 1;
  }
  return `${base} ${Date.now()}`;
}

function closeModal() {
  if (!overlay || !modalPop || overlay.style.display === 'none') {
    ACTIVE_MODAL_ID = '';
    return;
  }
  clearMicrosoftAuthPoll();
  if (ACTIVE_MODAL_ID === 'launch-missing-required' && LAUNCH_MISSING_DIALOG_STATE && !LAUNCH_MISSING_DIALOG_STATE.settled) {
    const resolver = LAUNCH_MISSING_DIALOG_STATE.resolve;
    LAUNCH_MISSING_DIALOG_STATE.settled = true;
    LAUNCH_MISSING_DIALOG_STATE = null;
    if (typeof resolver === 'function') resolver('cancel');
  }
  if (ACTIVE_MODAL_ID === 'add-instance') {
    ADD_INSTANCE_PREFILL = null;
    PENDING_BROWSE_INSTALL_CONTEXT = null;
  }
  if (ACTIVE_MODAL_ID === 'skin-manager') {
    destroySkinViewerRuntime();
  }
  if (overlay.classList.contains('closing')) return;
  const closeToken = ++MODAL_CLOSE_TOKEN;
  overlay.classList.add('closing');
  if (MODAL_CLOSE_TIMER) clearTimeout(MODAL_CLOSE_TIMER);
  MODAL_CLOSE_TIMER = setTimeout(() => {
    if (closeToken !== MODAL_CLOSE_TOKEN) return;
    overlay.style.display = 'none';
    overlay.classList.remove('closing');
    ACTIVE_MODAL_ID = '';
    MODAL_CLOSE_TIMER = null;
  }, 180);
}

function handleOverlayClick(e) {
  if (e.target === overlay) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.style.display !== 'none') closeModal();
});

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// TOAST SYSTEM
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½

async function createInstanceFromModal() {
  const nameEl = document.getElementById('add-inst-name');
  const versionEl = document.getElementById('add-inst-version');
  const loaderEl = document.getElementById('add-inst-loader');
  const loaderVersionEl = document.getElementById('add-inst-loader-version');
  const iconKeyEl = document.getElementById('add-inst-icon-key');
  const name = nameEl ? nameEl.value.trim() : '';
  const version = versionEl ? versionEl.value.trim() : '1.21.4';
  const loader = loaderEl ? loaderEl.value.trim() : 'Vanilla';
  const loaderVersionRaw = loaderVersionEl ? loaderVersionEl.value : '';
  const loaderVersion = String(loaderVersionRaw || '').trim();
  const iconKey = normalizeIconKey(iconKeyEl ? iconKeyEl.value : '');
  const normalizedLoader = normalizeLoader(loader);

  if (!name) {
    showToast('!', 'Missing name', 'Instance name is required');
    return;
  }
  if (!version || /^loading versions/i.test(version)) {
    showToast('!', 'Please wait', 'Version list is still loading');
    return;
  }
  if (
    versionEl &&
    versionEl.disabled &&
    versionEl.options &&
    versionEl.options.length > 0 &&
    /^no versions/i.test(String(versionEl.options[0].text || ''))
  ) {
    showToast('!', 'No versions', 'No Minecraft versions returned from API');
    return;
  }
  if (
    normalizedLoader !== 'vanilla' &&
    loaderVersionEl &&
    loaderVersionEl.disabled &&
    loaderVersionEl.options &&
    loaderVersionEl.options.length > 0 &&
    /^loading/i.test(String(loaderVersionEl.options[0].text || ''))
  ) {
    showToast('!', 'Please wait', 'Loader version list is still loading');
    return;
  }

  const resolvedIconKey = iconKey || pickRandomInstanceIconKey();
  const request = {
    name,
    version,
    loader,
    iconKey: resolvedIconKey || null,
    loaderVersion: normalizedLoader === 'vanilla' ? null : (loaderVersion || null),
  };
  const res = await invokeBackend('create_instance', { request });
  if (!res.ok) {
    const reason = String(res.error || '').trim();
    if (/already exists/i.test(reason)) {
      const suggested = suggestNextInstanceName(name);
      if (nameEl) {
        nameEl.value = suggested;
        nameEl.focus();
        nameEl.select();
      }
      showToast('!', 'Name exists', 'Try: ' + suggested);
      return;
    }
    showToast('!', 'Create failed', reason || 'Backend rejected this instance');
    return;
  }

  const reopenBrowseInstall = PENDING_BROWSE_INSTALL_CONTEXT && typeof PENDING_BROWSE_INSTALL_CONTEXT === 'object'
    ? Object.assign({}, PENDING_BROWSE_INSTALL_CONTEXT)
    : null;
  PENDING_BROWSE_INSTALL_CONTEXT = null;

  closeModal();
  await refreshInstancesFromBackend(false);
  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const createdCard = cards.find((card) => card.dataset.name === name);
  if (createdCard) selectCard(createdCard);
  showToast('OK', 'Instance created', 'New instance added successfully');

  if (
    reopenBrowseInstall &&
    reopenBrowseInstall.provider &&
    reopenBrowseInstall.itemId
  ) {
    setTimeout(() => {
      openBrowseInstallModal(
        String(reopenBrowseInstall.provider),
        encodeURIComponent(String(reopenBrowseInstall.itemId))
      );
    }, 180);
  }
}

async function duplicateSelectedInstanceFromModal() {
  const sourceName = getSelectedInstanceName();
  if (!sourceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const nameEl = document.getElementById('duplicate-inst-name');
  const newName = nameEl ? nameEl.value.trim() : '';
  if (!newName) {
    showToast('!', 'Missing name', 'Duplicate name is required');
    return;
  }

  const res = await invokeBackend('duplicate_instance', {
    request: {
      sourceName,
      newName,
    },
  });
  if (!res.ok) {
    showToast('!', 'Duplicate failed', 'Could not duplicate this instance');
    return;
  }
  copyInstanceNote(sourceName, newName);
  copyTrackedInstallsForInstance(sourceName, newName);

  closeModal();
  const refreshed = await refreshInstancesFromBackend(false);
  if (!refreshed) {
    showToast('!', 'Refresh failed', 'Instance was duplicated but list refresh failed');
    return;
  }
  selectInstanceByName(newName);
  showToast('OK', 'Duplicated', newName + ' created');
}

async function openSelectedInstanceFolder(target) {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const normalizedTarget = String(target || 'root').trim().toLowerCase() || 'root';

  const res = await invokeBackend('open_instance_directory', {
    request: {
      instanceName,
      target: normalizedTarget,
      ensureExists: true,
    },
  });

  if (!res.ok) {
    showToast('!', 'Open folder failed', 'Could not open instance folder');
    return;
  }

  const labels = {
    root: 'Instance folder',
    mods: 'Mods folder',
    worlds: 'Worlds folder',
    saves: 'Worlds folder',
    screenshots: 'Screenshots folder',
    shots: 'Screenshots folder',
    logs: 'Logs folder',
    resourcepacks: 'Resource packs',
    shaderpacks: 'Shaderpacks',
  };
  const folderLabel = labels[normalizedTarget] || 'Folder';
  showToast('OK', folderLabel, 'Opened for ' + instanceName);
}

async function resolveSelectedInstanceFolderPath(target, ensureExists) {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return null;
  }
  const normalizedTarget = String(target || 'root').trim().toLowerCase() || 'root';
  const res = await invokeBackend('resolve_instance_directory', {
    request: {
      instanceName,
      target: normalizedTarget,
      ensureExists: ensureExists !== false,
    },
  });
  if (!res.ok || !res.data || typeof res.data !== 'object') {
    showToast('!', 'Resolve failed', 'Could not resolve instance folder');
    return null;
  }
  return res.data;
}

async function copySelectedInstanceFolderPath(target) {
  const details = await resolveSelectedInstanceFolderPath(target, true);
  if (!details) return;
  const path = String(details.path || '').trim();
  if (!path) {
    showToast('!', 'Copy failed', 'Folder path is empty');
    return;
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(path);
      showToast('OK', 'Path copied', path);
      return;
    } catch (err) {
      console.warn('[instance-folder] clipboard write failed', err);
    }
  }

  showToast('!', 'Clipboard unavailable', path);
}

async function openSelectedInstanceFolderInTerminal(target) {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const normalizedTarget = String(target || 'root').trim().toLowerCase() || 'root';
  const res = await invokeBackend('open_instance_directory_in_terminal', {
    request: {
      instanceName,
      target: normalizedTarget,
      ensureExists: true,
    },
  });
  if (!res.ok) {
    showToast('!', 'Terminal failed', 'Could not open terminal here');
    return;
  }
  showToast('OK', 'Terminal opened', 'Ready in ' + instanceName);
}

async function copyShareLinkFromModal() {
  const valueEl = document.getElementById('share-link-value');
  const value = valueEl ? valueEl.textContent.trim() : '';
  if (!value) {
    showToast('!', 'Share link', 'Could not resolve share link');
    return;
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(value);
      showToast('OK', 'Copied', 'Share link copied to clipboard');
      return;
    } catch (err) {
      console.warn('[share-link] clipboard write failed', err);
    }
  }

  showToast('!', 'Clipboard unavailable', value);
}

async function createOfflineProfileFromModal() {
  const nameEl = document.getElementById('offline-username');
  const name = nameEl ? nameEl.value.trim() : '';
  if (!name) {
    showToast('!', 'Missing username', 'Please enter an offline username');
    return;
  }

  const res = await invokeBackend('create_offline_profile', {
    request: {
      name,
      setActive: false,
    },
  });
  if (!res.ok) {
    showToast('!', 'Create failed', 'Could not add this offline profile');
    return;
  }

  await refreshProfilesFromBackend();
  closeModal();
  showToast('OK', 'Profile added', name + ' is ready');
}

async function openExternalHttpUrl(url) {
  const target = String(url || '').trim();
  if (!/^https?:\/\//i.test(target)) return false;

  const backendRes = await invokeBackend('open_external_url', {
    request: { url: target },
  });
  if (backendRes.ok) return true;

  if (typeof window.open === 'function') {
    const popup = window.open(target, '_blank', 'noopener,noreferrer');
    return !!popup;
  }
  return false;
}

function rememberHandledMicrosoftOauthCallback(rawCode, oauthState) {
  const code = String(rawCode || '').trim();
  const state = String(oauthState || '').trim();
  if (!code || !state) return false;
  const key = `${state}::${code}`;
  if (HANDLED_MICROSOFT_OAUTH_CALLBACKS.has(key)) return true;
  HANDLED_MICROSOFT_OAUTH_CALLBACKS.add(key);
  if (HANDLED_MICROSOFT_OAUTH_CALLBACKS.size > MAX_HANDLED_MICROSOFT_OAUTH_CALLBACKS) {
    const first = HANDLED_MICROSOFT_OAUTH_CALLBACKS.values().next();
    if (!first.done) HANDLED_MICROSOFT_OAUTH_CALLBACKS.delete(first.value);
  }
  return false;
}

const BROWSE_PROVIDER_FETCH_LIMIT = 50;
const BROWSE_PROVIDER_MAX_PAGES = 40;
const BROWSE_UI_PAGE_SIZE = 20;
const BROWSE_PROVIDER_LIMIT = BROWSE_PROVIDER_FETCH_LIMIT;
const BROWSE_SEARCH_DEBOUNCE_MS = 280;
const BROWSE_NO_IMAGE_PATH = 'assets/no-image.svg';
const BROWSE_VERSION_LIMIT = 5000;
const BROWSE_CATEGORY_OPTIONS = {
  modrinth: [
    { id: 'modpack', label: 'Modpacks' },
    { id: 'mod', label: 'Mods' },
    { id: 'resourcepack', label: 'Resource Packs' },
    { id: 'shader', label: 'Shaders' },
  ],
  curseforge: [
    { id: 'modpack', label: 'Modpacks', classId: '4471' },
    { id: 'mod', label: 'Mods', classId: '6' },
    { id: 'resourcepack', label: 'Resource Packs', classId: '12' },
    { id: 'world', label: 'Worlds', classId: '17' },
  ],
};
const BROWSE_API_STATE = {
  modrinth: {
    loading: false,
    loaded: false,
    query: '',
    category: 'modpack',
    items: [],
    error: '',
  },
  curseforge: {
    loading: false,
    loaded: false,
    query: '',
    category: 'modpack',
    items: [],
    error: '',
  },
};
const BROWSE_SEARCH_TIMERS = {
  modrinth: null,
  curseforge: null,
};
const BROWSE_RESULTS_HEIGHT_SYNC_TIMERS = {
  modrinth: null,
  curseforge: null,
};
const BROWSE_INSTALL_IN_FLIGHT = {
  modrinth: {},
  curseforge: {},
};
let BROWSE_INSTALL_MODAL_STATE = null;
let BROWSE_GLOBAL_VERSIONS_CACHE = null;
let BROWSE_GLOBAL_VERSIONS_PROMISE = null;

function getBrowseProviderLabel(provider) {
  const key = String(provider || '').trim().toLowerCase();
  if (key === 'modrinth') return 'Modrinth';
  if (key === 'curseforge') return 'CurseForge';
  return 'Browse';
}

function getBrowseCategoryOptions(provider) {
  const key = String(provider || '').trim().toLowerCase();
  return Array.isArray(BROWSE_CATEGORY_OPTIONS[key]) ? BROWSE_CATEGORY_OPTIONS[key] : [];
}

function getBrowseCategoryLabel(provider, categoryId) {
  const key = String(provider || '').trim().toLowerCase();
  const category = String(categoryId || '').trim().toLowerCase();
  const options = getBrowseCategoryOptions(key);
  const found = options.find((item) => String(item.id || '').toLowerCase() === category);
  return found && found.label ? String(found.label) : 'Category';
}

function renderBrowseProviderCategories(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = BROWSE_API_STATE[key];
  const container = document.getElementById(key + '-browse-categories');
  if (!state || !container) return;
  const activeCategory = String(state.category || '').trim().toLowerCase();
  const options = getBrowseCategoryOptions(key);
  if (!options.length) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = options
    .map((option) => {
      const id = String(option.id || '').trim().toLowerCase();
      const label = escapeHtml(String(option.label || id || 'Category'));
      const activeClass = id === activeCategory ? ' active' : '';
      return (
        '<button class="browse-cat-chip' + activeClass + '" onclick="setBrowseCategory(\'' + key + '\', \'' + id + '\')">' +
        label +
        '</button>'
      );
    })
    .join('');
}

function formatCompactNumber(value) {
  const number = Number(value || 0);
  if (!Number.isFinite(number) || number <= 0) return '0';
  if (number >= 1000000000) return (number / 1000000000).toFixed(number >= 10000000000 ? 0 : 1) + 'B';
  if (number >= 1000000) return (number / 1000000).toFixed(number >= 10000000 ? 0 : 1) + 'M';
  if (number >= 1000) return (number / 1000).toFixed(number >= 10000 ? 0 : 1) + 'K';
  return String(Math.round(number));
}

function formatRelativeDate(value) {
  const input = String(value || '').trim();
  if (!input) return 'Unknown';
  const stamp = Date.parse(input);
  if (!Number.isFinite(stamp)) return 'Unknown';
  const deltaMs = Date.now() - stamp;
  if (deltaMs <= 0) return 'Just now';
  const minutes = Math.floor(deltaMs / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return minutes + 'm ago';
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + 'h ago';
  const days = Math.floor(hours / 24);
  if (days < 7) return days + 'd ago';
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks + 'w ago';
  const months = Math.floor(days / 30);
  if (months < 12) return months + 'mo ago';
  const years = Math.floor(days / 365);
  return years + 'y ago';
}

function cleanBrowseVersions(values, limit) {
  if (!Array.isArray(values)) return [];
  const out = [];
  const seen = new Set();
  for (const value of values) {
    const text = String(value || '').trim();
    if (!text) continue;
    if (seen.has(text)) continue;
    seen.add(text);
    out.push(text);
    if (out.length >= limit) break;
  }
  return out;
}

function updateBrowseProviderStatus(provider, text) {
  const key = String(provider || '').trim().toLowerCase();
  const statusEl = document.getElementById(key + '-browse-status');
  if (statusEl) statusEl.textContent = String(text || 'Browse');
}

async function openBrowseItemFromFeed(encodedUrl) {
  const target = decodeURIComponent(String(encodedUrl || '').trim());
  if (!target) {
    showToast('!', 'Open failed', 'Missing provider URL');
    return false;
  }
  const opened = await openExternalHttpUrl(target);
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open browser automatically');
    return false;
  }
  return true;
}

const BROWSE_LAYOUT_TOP_TABS = [
  { id: 'mods', label: 'Mods', modrinth: 'mod', curseforgeClassId: '6' },
  { id: 'modpacks', label: 'Modpacks', modrinth: 'modpack', curseforgeClassId: '4471' },
  { id: 'resourcepacks', label: 'Resource Packs', modrinth: 'resourcepack', curseforgeClassId: '12' },
  { id: 'shaders', label: 'Shaders', modrinth: 'shader', curseforgeClassId: '6552' },
];
const BROWSE_LAYOUT_SECONDARY = {
  mods: [
    ['all', 'All', []],
    ['performance', 'Performance', ['performance', 'optimization', 'fps']],
    ['utility', 'Utility', ['utility', 'qol', 'tweaks']],
    ['adventure', 'Adventure', ['adventure', 'exploration', 'dungeon']],
    ['magic', 'Magic', ['magic', 'mana', 'spell']],
    ['technology', 'Technology', ['technology', 'tech', 'automation', 'machine']],
    ['world_gen', 'World Gen', ['worldgen', 'world generation', 'biome', 'terrain']],
    ['cosmetic', 'Cosmetic', ['cosmetic', 'visual', 'decoration']],
    ['storage', 'Storage', ['storage', 'inventory', 'chest']],
    ['library', 'Library', ['library', 'api']],
  ],
  modpacks: [
    ['all', 'All', []],
    ['vanilla_plus', 'Vanilla+', ['vanilla+', 'vanilla plus']],
    ['tech', 'Tech', ['tech', 'technology']],
    ['magic', 'Magic', ['magic']],
    ['adventure', 'Adventure', ['adventure']],
    ['rpg', 'RPG', ['rpg', 'roleplay']],
    ['skyblock', 'Skyblock', ['skyblock']],
    ['quest', 'Quest', ['quest']],
    ['hardcore', 'Hardcore', ['hardcore']],
    ['lightweight', 'Lightweight', ['lightweight', 'lite']],
  ],
  resourcepacks: [
    ['all', 'All', []],
    ['vanilla_plus', 'Vanilla+', ['vanilla+', 'vanilla plus']],
    ['pvp', 'PvP', ['pvp']],
    ['realistic', 'Realistic', ['realistic']],
    ['cartoon', 'Cartoon', ['cartoon']],
    ['medieval', 'Medieval', ['medieval']],
    ['simplistic', 'Simplistic', ['simplistic', 'simple']],
    ['themed', 'Themed', ['themed', 'theme']],
  ],
  shaders: [
    ['all', 'All', []],
    ['lightweight', 'Lightweight', ['lightweight', 'lite']],
    ['balanced', 'Balanced', ['balanced']],
    ['cinematic', 'Cinematic', ['cinematic']],
    ['realistic', 'Realistic', ['realistic']],
    ['fantasy', 'Fantasy', ['fantasy']],
    ['vanilla_style', 'Vanilla Style', ['vanilla style', 'vanilla']],
  ],
};
const BROWSE_LAYOUT_LOADER = [
  ['any', 'Any'],
  ['fabric', 'Fabric'],
  ['forge', 'Forge'],
  ['quilt', 'Quilt'],
  ['neoforge', 'NeoForge'],
];
const BROWSE_LAYOUT_SORT = [
  ['popular', 'Popular'],
  ['newest', 'Newest'],
  ['updated', 'Updated'],
];
const BROWSE_FILTER_ICON_MAP = {
  category: {
    all: 'list',
    performance: 'gauge',
    utility: 'wrench',
    adventure: 'compass',
    magic: 'sparkles',
    technology: 'cpu',
    world_gen: 'mountain',
    cosmetic: 'palette',
    storage: 'archive',
    library: 'book-open',
    vanilla_plus: 'leaf',
    tech: 'cpu',
    rpg: 'swords',
    skyblock: 'cloud',
    quest: 'scroll-text',
    hardcore: 'shield-alert',
    lightweight: 'feather',
    pvp: 'crosshair',
    realistic: 'camera',
    cartoon: 'pen-line',
    medieval: 'castle',
    simplistic: 'circle',
    themed: 'shapes',
    balanced: 'scale',
    cinematic: 'clapperboard',
    fantasy: 'wand-sparkles',
    vanilla_style: 'ice-cream-cone',
  },
  loader: {
    any: 'boxes',
    fabric: 'wind',
    forge: 'hammer',
    quilt: 'shirt',
    neoforge: 'anvil',
  },
  version: {
    any: 'hash',
  },
  sort: {
    popular: 'flame',
    newest: 'clock-3',
    updated: 'refresh-cw',
  },
};

function getBrowseTopTabConfig(topTabId) {
  const key = String(topTabId || '').trim().toLowerCase();
  return BROWSE_LAYOUT_TOP_TABS.find((item) => item.id === key) || BROWSE_LAYOUT_TOP_TABS[0];
}

function getBrowseSecondaryRows(topTabId) {
  const key = String(topTabId || '').trim().toLowerCase();
  return BROWSE_LAYOUT_SECONDARY[key] || BROWSE_LAYOUT_SECONDARY.mods;
}

function browseTopTabUsesLoader(topTabId) {
  const key = String(topTabId || '').trim().toLowerCase();
  return key === 'mods' || key === 'modpacks';
}

function getBrowseInstallTargetFromTopTab(topTabId) {
  const key = String(topTabId || '').trim().toLowerCase();
  if (key === 'mods') return 'mods';
  if (key === 'resourcepacks') return 'resourcepacks';
  if (key === 'shaders') return 'shaderpacks';
  if (key === 'modpacks') return 'modpacks';
  return 'mods';
}

function mapModrinthProjectTypeToTopTab(projectType) {
  const type = String(projectType || '').trim().toLowerCase();
  if (type === 'mod') return 'mods';
  if (type === 'modpack') return 'modpacks';
  if (type === 'resourcepack') return 'resourcepacks';
  if (type === 'shader') return 'shaders';
  return '';
}

function mapCurseforgeClassIdToTopTab(classId) {
  const value = String(classId || '').trim();
  if (value === '6') return 'mods';
  if (value === '4471') return 'modpacks';
  if (value === '12') return 'resourcepacks';
  if (value === '6552') return 'shaders';
  return '';
}

function buildBrowseDependencyInstallState(baseInstallState, dependencyTopTab) {
  const parentTopTab = getBrowseTopTabConfig(baseInstallState && baseInstallState.topTab ? baseInstallState.topTab : 'mods').id;
  const depTopTab = getBrowseTopTabConfig(dependencyTopTab).id;
  const next = Object.assign({}, baseInstallState || {}, { topTab: depTopTab });
  if (
    (parentTopTab === 'shaders' || parentTopTab === 'resourcepacks') &&
    browseTopTabUsesLoader(depTopTab)
  ) {
    // Shader/resource packs dependency resolution should not hard-lock by loader.
    next.loader = 'any';
  }
  return next;
}

function getBrowseInstallTargetLabel(target) {
  const key = String(target || '').trim().toLowerCase();
  if (key === 'mods') return 'Mods';
  if (key === 'resourcepacks') return 'Resource Packs';
  if (key === 'shaderpacks') return 'Shaderpacks';
  if (key === 'modpacks') return 'Modpacks';
  return key || 'files';
}

function ensureBrowseLayoutState(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = BROWSE_API_STATE[key];
  if (!state) return null;
  if (!state.topTab) state.topTab = 'mods';
  if (!state.secondary) state.secondary = 'all';
  if (!state.loader) state.loader = 'any';
  if (!state.version) state.version = 'any';
  if (!state.sort) state.sort = 'popular';
  if (!Number.isFinite(Number(state.page)) || Number(state.page) < 1) state.page = 1;
  if (!Number.isFinite(Number(state.totalRows)) || Number(state.totalRows) < 0) state.totalRows = 0;
  if (!Array.isArray(state.availableVersions)) state.availableVersions = [];
  if (!state.filterPanels || typeof state.filterPanels !== 'object') {
    state.filterPanels = {
      category: false,
      loader: false,
      version: false,
      sort: false,
    };
  }
  return state;
}

function syncBrowseResultsHeight(provider) {
  const key = String(provider || '').trim().toLowerCase();
  if (!key) return;
  const results = document.querySelector('#page-' + key + ' .browse-results');
  if (!results) return;
  results.style.removeProperty('height');
  results.style.removeProperty('max-height');
}

function scheduleBrowseResultsHeightSync(provider, delayMs) {
  const key = String(provider || '').trim().toLowerCase();
  if (!Object.prototype.hasOwnProperty.call(BROWSE_RESULTS_HEIGHT_SYNC_TIMERS, key)) return;
  const delay = Math.max(0, Number(delayMs) || 0);
  const pending = BROWSE_RESULTS_HEIGHT_SYNC_TIMERS[key];
  if (pending) clearTimeout(pending);
  BROWSE_RESULTS_HEIGHT_SYNC_TIMERS[key] = setTimeout(() => {
    window.requestAnimationFrame(() => syncBrowseResultsHeight(key));
  }, delay);
}

function getBrowseFilterOptionIcon(groupId, optionId) {
  const groupKey = String(groupId || '').trim().toLowerCase();
  const optionKey = String(optionId || '').trim().toLowerCase();
  const groupMap = BROWSE_FILTER_ICON_MAP[groupKey] && typeof BROWSE_FILTER_ICON_MAP[groupKey] === 'object'
    ? BROWSE_FILTER_ICON_MAP[groupKey]
    : {};
  return groupMap[optionKey] || (groupKey === 'version' ? 'hash' : 'tag');
}

function toggleBrowseFilterGroup(provider, groupId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const panelKey = String(groupId || '').trim().toLowerCase();
  if (!panelKey) return;
  if (!state.filterPanels || typeof state.filterPanels !== 'object') state.filterPanels = {};
  const collapsed = !Boolean(state.filterPanels[panelKey]);
  state.filterPanels[panelKey] = collapsed;

  const filters = document.getElementById(key + '-browse-filters');
  if (!filters) {
    renderBrowseProviderFeed(key);
    return;
  }
  const groupEl = filters.querySelector('.browse-filter-group-card[data-filter-group="' + panelKey + '"]');
  if (!groupEl) {
    renderBrowseProviderFeed(key);
    return;
  }
  const bodyEl = groupEl.querySelector('.browse-filter-body');
  groupEl.classList.toggle('collapsed', collapsed);
  if (bodyEl) bodyEl.classList.toggle('collapsed', collapsed);
  scheduleBrowseResultsHeightSync(key, 0);
  scheduleBrowseResultsHeightSync(key, 280);
}

function parseMcVersionTuple(value) {
  const text = String(value || '').trim().replace(/^v/i, '');
  const match = text.match(/^(\d+)\.(\d+)(?:\.(\d+))?/);
  if (!match) return null;
  return [Number(match[1] || 0), Number(match[2] || 0), Number(match[3] || 0)];
}

function compareMcVersionDesc(left, right) {
  const a = parseMcVersionTuple(left);
  const b = parseMcVersionTuple(right);
  if (!a && !b) return String(right).localeCompare(String(left));
  if (!a) return 1;
  if (!b) return -1;
  for (let i = 0; i < 3; i += 1) {
    if (a[i] !== b[i]) return b[i] - a[i];
  }
  return 0;
}

function setBrowseTopTab(provider, topTabId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const next = getBrowseTopTabConfig(topTabId).id;
  if (state.topTab === next) return;
  state.topTab = next;
  state.secondary = 'all';
  state.loader = 'any';
  state.version = 'any';
  state.page = 1;
  state.totalRows = 0;
  state.loaded = false;
  state.error = '';
  renderBrowseProviderFeed(key);
  void refreshBrowseProvider(key, true);
}

function setBrowseSecondary(provider, secondaryId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const options = getBrowseSecondaryRows(state.topTab);
  const normalized = String(secondaryId || '').trim().toLowerCase();
  const next = (options.find((item) => item[0] === normalized) || options[0])[0];
  if (state.secondary === next) return;
  state.secondary = next;
  state.page = 1;
  state.totalRows = 0;
  renderBrowseProviderFeed(key);
  void refreshBrowseProvider(key, true);
}

function setBrowseLoader(provider, loaderId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const normalized = String(loaderId || '').trim().toLowerCase();
  const next = (BROWSE_LAYOUT_LOADER.find((item) => item[0] === normalized) || BROWSE_LAYOUT_LOADER[0])[0];
  if (state.loader === next) return;
  state.loader = next;
  state.page = 1;
  state.totalRows = 0;
  state.loaded = false;
  state.error = '';
  renderBrowseProviderFeed(key);
  void refreshBrowseProvider(key, true);
}

function setBrowseVersion(provider, versionId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const next = String(versionId || 'any').trim() || 'any';
  if (state.version === next) return;
  state.version = next;
  state.page = 1;
  state.totalRows = 0;
  state.loaded = false;
  state.error = '';
  renderBrowseProviderFeed(key);
  void refreshBrowseProvider(key, true);
}

function setBrowseSort(provider, sortId) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const normalized = String(sortId || '').trim().toLowerCase();
  const next = (BROWSE_LAYOUT_SORT.find((item) => item[0] === normalized) || BROWSE_LAYOUT_SORT[0])[0];
  if (state.sort === next) return;
  state.sort = next;
  state.page = 1;
  state.totalRows = 0;
  renderBrowseProviderFeed(key);
}

function getActiveBrowseFilterCount(provider) {
  const state = ensureBrowseLayoutState(provider);
  if (!state) return 0;
  let count = 0;
  if (String(state.secondary || 'all').toLowerCase() !== 'all') count += 1;
  if (browseTopTabUsesLoader(state.topTab) && String(state.loader || 'any').toLowerCase() !== 'any') {
    count += 1;
  }
  if (String(state.version || 'any').toLowerCase() !== 'any') count += 1;
  return count;
}

function updateBrowseFilterButtons(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const loaderBtn = document.getElementById(key + '-browse-filter-loader-btn');
  const versionBtn = document.getElementById(key + '-browse-filter-version-btn');
  const sortBtn = document.getElementById(key + '-browse-filter-sort-btn');

  if (loaderBtn) {
    const loaderDisabled = !browseTopTabUsesLoader(state.topTab);
    const active = !loaderDisabled && String(state.loader || 'any').toLowerCase() !== 'any';
    loaderBtn.disabled = loaderDisabled;
    loaderBtn.classList.toggle('active', active);
  }
  if (versionBtn) {
    const active = String(state.version || 'any').toLowerCase() !== 'any';
    versionBtn.classList.toggle('active', active);
  }
  if (sortBtn) {
    const active = String(state.sort || 'popular').toLowerCase() !== 'popular';
    sortBtn.classList.toggle('active', active);
  }
}

function openBrowseFilterMenu(e, provider, targetGroup) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state || !ctxMenu) return;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;

  const items = [];
  const addSectionLabel = (label) => {
    items.push('<div class="ctx-item ctx-label">' + escapeHtml(label) + '</div>');
  };
  const addOption = (groupId, optionId, label, selected, icon) => {
    const selectedClass = selected ? ' selected' : '';
    const encodedValue = encodeURIComponent(String(optionId || ''));
    const iconHtml = icon ? '<i data-lucide="' + escapeHtml(icon) + '" width="12" height="12"></i>' : '';
    items.push(
      '<div class="ctx-item' + selectedClass + '" onclick="applyBrowseFilterMenuOption(\'' +
      key + '\', \'' + groupId + '\', \'' + encodedValue + '\')">' +
      iconHtml + '<span>' + escapeHtml(label) + '</span></div>'
    );
  };
  const group = String(targetGroup || '').trim().toLowerCase();
  if (group === 'secondary' || !group) {
    addSectionLabel('Category');
    getBrowseSecondaryRows(state.topTab).forEach((row) => {
      addOption('secondary', row[0], row[1], row[0] === state.secondary, getBrowseFilterOptionIcon('category', row[0]));
    });
  } else if (group === 'loader') {
    addSectionLabel('Loader');
    if (!browseTopTabUsesLoader(state.topTab)) {
      items.push('<div class="ctx-item disabled"><i data-lucide="ban" width="12" height="12"></i><span>Not used for this tab</span></div>');
    } else {
      BROWSE_LAYOUT_LOADER.forEach((row) => {
        addOption('loader', row[0], row[1], row[0] === state.loader, getBrowseFilterOptionIcon('loader', row[0]));
      });
    }
  } else if (group === 'version') {
    addSectionLabel('Version');
    const versionRows = ['any'].concat(Array.isArray(state.availableVersions) ? state.availableVersions : []);
    versionRows.forEach((value) => {
      const label = value === 'any' ? 'Any' : value;
      addOption('version', value, label, value === state.version, getBrowseFilterOptionIcon('version', value));
    });
  } else if (group === 'sort') {
    addSectionLabel('Sort');
    BROWSE_LAYOUT_SORT.forEach((row) => {
      addOption('sort', row[0], row[1], row[0] === state.sort, getBrowseFilterOptionIcon('sort', row[0]));
    });
  }

  if (!items.length) return;

  ctxMenu.innerHTML = items.join('');
  ctxMenu.classList.add('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.display = 'block';

  const anchor = e && e.currentTarget && typeof e.currentTarget.getBoundingClientRect === 'function'
    ? e.currentTarget
    : null;
  const rect = anchor ? anchor.getBoundingClientRect() : { left: 8, bottom: 8, width: 220 };
  const menuWidth = Math.max(220, Math.floor(rect.width));
  const maxHeight = Math.max(220, Math.min(480, window.innerHeight - 24));
  ctxMenu.style.minWidth = menuWidth + 'px';
  ctxMenu.style.maxHeight = maxHeight + 'px';
  ctxMenu.style.overflowY = 'auto';
  ctxMenu.style.overflowX = 'hidden';
  const menuHeight = Math.min(ctxMenu.scrollHeight, maxHeight);
  const x = Math.min(Math.max(8, Math.floor(rect.left)), window.innerWidth - menuWidth - 8);
  const y = Math.min(Math.floor(rect.bottom + 4), window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';

  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function applyBrowseFilterMenuOption(provider, groupId, encodedValue) {
  const key = String(provider || '').trim().toLowerCase();
  const group = String(groupId || '').trim().toLowerCase();
  const value = decodeURIComponent(String(encodedValue || ''));

  if (group === 'reset') {
    const state = ensureBrowseLayoutState(key);
    if (!state) return;
    state.secondary = 'all';
    state.loader = 'any';
    state.version = 'any';
    state.sort = 'popular';
    state.page = 1;
    state.totalRows = 0;
    renderBrowseProviderFeed(key);
    hideCtx();
    return;
  }

  if (group === 'secondary') setBrowseSecondary(key, value);
  else if (group === 'loader') setBrowseLoader(key, value);
  else if (group === 'version') setBrowseVersion(key, value);
  else if (group === 'sort') setBrowseSort(key, value);

  hideCtx();
}

function setBrowsePage(provider, pageNumber) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  const next = Math.max(1, Number(pageNumber) || 1);
  if (state.page === next) return;
  state.page = next;
  void refreshBrowseProvider(key, true);
  const feed = document.getElementById(key + '-browse-feed');
  if (feed) feed.scrollTop = 0;
}

function renderBrowsePagination(provider, currentPage, totalPages) {
  const key = String(provider || '').trim().toLowerCase();
  const current = Math.max(1, Number(currentPage) || 1);
  const total = Math.max(1, Number(totalPages) || 1);
  if (total <= 1) return '';
  const numbers = [];
  const maxButtons = 5;
  let start = Math.max(1, current - Math.floor(maxButtons / 2));
  let end = Math.min(total, start + maxButtons - 1);
  start = Math.max(1, end - maxButtons + 1);
  for (let page = start; page <= end; page += 1) numbers.push(page);

  const prevDisabled = current <= 1 ? ' disabled' : '';
  const nextDisabled = current >= total ? ' disabled' : '';
  let html =
    '<button class="browse-page-btn' + prevDisabled + '" onclick="setBrowsePage(\'' + key + '\', ' + String(current - 1) + ')"' + (current <= 1 ? ' disabled' : '') + '>‹</button>';
  if (start > 1) {
    html += '<button class="browse-page-btn" onclick="setBrowsePage(\'' + key + '\', 1)">1</button>';
    if (start > 2) html += '<span class="browse-page-gap">…</span>';
  }
  html += numbers
    .map((page) => {
      const active = page === current ? ' active' : '';
      return '<button class="browse-page-btn' + active + '" onclick="setBrowsePage(\'' + key + '\', ' + String(page) + ')">' + String(page) + '</button>';
    })
    .join('');
  if (end < total) {
    if (end < total - 1) html += '<span class="browse-page-gap">…</span>';
    html += '<button class="browse-page-btn" onclick="setBrowsePage(\'' + key + '\', ' + String(total) + ')">' + String(total) + '</button>';
  }
  html +=
    '<button class="browse-page-btn' + nextDisabled + '" onclick="setBrowsePage(\'' + key + '\', ' + String(current + 1) + ')"' + (current >= total ? ' disabled' : '') + '>›</button>';
  return html;
}

function mapCurseforgeLoaderToken(value) {
  const code = Number(value);
  if (code === 1) return 'forge';
  if (code === 4) return 'fabric';
  if (code === 5) return 'quilt';
  if (code === 6) return 'neoforge';
  return '';
}

function mapBrowseLoaderToCurseforgeType(loaderId) {
  const key = String(loaderId || '').trim().toLowerCase();
  if (key === 'forge') return 1;
  if (key === 'fabric') return 4;
  if (key === 'quilt') return 5;
  if (key === 'neoforge') return 6;
  return 0;
}

async function ensureBrowseGlobalMinecraftVersions() {
  if (Array.isArray(BROWSE_GLOBAL_VERSIONS_CACHE) && BROWSE_GLOBAL_VERSIONS_CACHE.length) {
    return BROWSE_GLOBAL_VERSIONS_CACHE.slice();
  }
  if (BROWSE_GLOBAL_VERSIONS_PROMISE) {
    return BROWSE_GLOBAL_VERSIONS_PROMISE;
  }
  BROWSE_GLOBAL_VERSIONS_PROMISE = (async () => {
    const res = await invokeBackend('list_minecraft_versions', {
      includeSnapshots: true,
      limit: BROWSE_VERSION_LIMIT,
    });
    const rows = res.ok && Array.isArray(res.data) ? res.data : [];
    const cleaned = cleanBrowseVersions(
      rows.map((value) => String(value || '').trim()),
      BROWSE_VERSION_LIMIT
    );
    cleaned.sort(compareMcVersionDesc);
    BROWSE_GLOBAL_VERSIONS_CACHE = cleaned;
    return cleaned.slice();
  })()
    .catch(() => [])
    .finally(() => {
      BROWSE_GLOBAL_VERSIONS_PROMISE = null;
    });
  return BROWSE_GLOBAL_VERSIONS_PROMISE;
}

function resolveBrowseImageUrl(value) {
  if (!value) return '';
  if (typeof value === 'string') return String(value).trim();
  if (typeof value !== 'object') return '';
  const keys = ['raw_url', 'url', 'thumbnail_url', 'thumbnailUrl', 'image_url', 'imageUrl'];
  for (const key of keys) {
    const url = String(value[key] || '').trim();
    if (url) return url;
  }
  return '';
}

function pickBrowseImageFromList(values) {
  if (!Array.isArray(values)) return '';
  for (const value of values) {
    const url = resolveBrowseImageUrl(value);
    if (url) return url;
  }
  return '';
}

function getModrinthHeroImage(source) {
  const featuredGallery = Array.isArray(source.featured_gallery) ? source.featured_gallery : [];
  const gallery = Array.isArray(source.gallery) ? source.gallery : [];
  return pickBrowseImageFromList(featuredGallery) || pickBrowseImageFromList(gallery);
}

async function hydrateModrinthHeroImages(items) {
  const rows = Array.isArray(items) ? items : [];
  const missingIds = rows
    .filter((item) => item && !item.heroImage && item.id)
    .map((item) => String(item.id).trim())
    .filter(Boolean)
    .slice(0, 12);
  if (!missingIds.length) return rows;
  const heroById = new Map();
  await Promise.all(
    missingIds.map(async (projectId) => {
      try {
        const response = await fetch('https://api.modrinth.com/v2/project/' + encodeURIComponent(projectId), {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) return;
        const payload = await response.json();
        const heroImage = getModrinthHeroImage(payload && typeof payload === 'object' ? payload : {});
        if (heroImage) heroById.set(projectId, heroImage);
      } catch (_) {
        // Keep browse responsive if hero enrichment fails.
      }
    })
  );
  if (!heroById.size) return rows;
  return rows.map((item) => {
    const id = String((item && item.id) || '').trim();
    if (!id) return item;
    const heroImage = heroById.get(id);
    if (!heroImage) return item;
    return Object.assign({}, item, { heroImage });
  });
}

function mapModrinthBrowseItem(hit) {
  const source = hit && typeof hit === 'object' ? hit : {};
  const projectType = String(source.project_type || 'mod').toLowerCase();
  const pathMap = { mod: 'mod', modpack: 'modpack', resourcepack: 'resourcepack', shader: 'shader' };
  const categories = (Array.isArray(source.categories) ? source.categories : [])
    .map((item) => String(item || '').toLowerCase())
    .filter(Boolean);
  const displayCategories = (Array.isArray(source.display_categories) ? source.display_categories : [])
    .map((item) => String(item || '').toLowerCase())
    .filter(Boolean);
  const loaders = cleanBrowseVersions(
    categories.filter((item) => item === 'fabric' || item === 'forge' || item === 'quilt' || item === 'neoforge'),
    4
  );
  const versions = cleanBrowseVersions(source.versions || [], BROWSE_VERSION_LIMIT);
  const searchText = [source.title, source.description, categories.join(' '), displayCategories.join(' ')]
    .map((item) => String(item || '').toLowerCase())
    .join(' ');
  const slug = String(source.slug || '').trim();
  const heroImage = getModrinthHeroImage(source);
  return {
    id: String(source.project_id || slug || source.title || Math.random()),
    projectType,
    title: String(source.title || 'Untitled').trim(),
    description: String(source.description || '').trim(),
    downloads: Number(source.downloads || 0),
    createdAt: source.date_created || source.date_modified || '',
    updatedAt: source.date_modified || source.date_created || '',
    iconUrl: String(source.icon_url || '').trim(),
    heroImage,
    url: slug ? 'https://modrinth.com/' + (pathMap[projectType] || 'mod') + '/' + slug : '',
    versions,
    loaders,
    searchText,
  };
}

function mapCurseforgeBrowseItem(entry, topTab) {
  const source = entry && typeof entry === 'object' ? entry : {};
  const indexes = Array.isArray(source.latestFilesIndexes) ? source.latestFilesIndexes : [];
  const versions = cleanBrowseVersions(
    indexes
      .map((item) => String(item && item.gameVersion ? item.gameVersion : '').trim())
      .filter((value) => /^\d+\.\d+(\.\d+)?$/.test(value)),
    BROWSE_VERSION_LIMIT
  );
  const loaders = cleanBrowseVersions(indexes.map((item) => mapCurseforgeLoaderToken(item && item.modLoader)).filter(Boolean), 4);
  const categories = Array.isArray(source.categories)
    ? source.categories.map((item) => String((item && item.name) || '').toLowerCase()).filter(Boolean)
    : [];
  const pathMap = { mods: 'mc-mods', modpacks: 'modpacks', resourcepacks: 'texture-packs', shaders: 'shaders' };
  const website = source.links && typeof source.links === 'object' ? String(source.links.websiteUrl || '').trim() : '';
  const fallbackUrl = 'https://www.curseforge.com/minecraft/' + (pathMap[topTab] || 'mc-mods') + '/' + String(source.slug || '').trim();
  const screenshots = Array.isArray(source.screenshots) ? source.screenshots : [];
  const heroImage = pickBrowseImageFromList(screenshots);
  const searchText = [source.name, source.summary, categories.join(' ')].map((item) => String(item || '').toLowerCase()).join(' ');
  return {
    id: String(source.id || source.slug || source.name || Math.random()),
    classId: String(source.classId || '').trim(),
    title: String(source.name || 'Untitled').trim(),
    description: String(source.summary || '').trim(),
    downloads: Number(source.downloadCount || 0),
    createdAt: source.dateCreated || source.dateReleased || '',
    updatedAt: source.dateModified || source.dateReleased || '',
    iconUrl:
      source.logo && typeof source.logo === 'object'
        ? String(source.logo.thumbnailUrl || source.logo.url || '').trim()
        : '',
    heroImage,
    url: website || fallbackUrl,
    versions,
    loaders,
    searchText,
  };
}

async function fetchModrinthBrowseItems(query, category, pageNumber, filters) {
  const topConfig = getBrowseTopTabConfig(category);
  const page = Math.max(1, Number(pageNumber) || 1);
  const selectedLoader = String(filters && filters.loader ? filters.loader : 'any').trim().toLowerCase() || 'any';
  const selectedVersion = String(filters && filters.version ? filters.version : 'any').trim().toLowerCase() || 'any';
  const params = new URLSearchParams();
  const facets = [['project_type:' + topConfig.modrinth]];
  if (browseTopTabUsesLoader(topConfig.id) && selectedLoader !== 'any') {
    facets.push(['categories:' + selectedLoader]);
  }
  if (selectedVersion !== 'any') {
    facets.push(['versions:' + selectedVersion]);
  }
  params.set('limit', String(BROWSE_UI_PAGE_SIZE));
  params.set('offset', String((page - 1) * BROWSE_UI_PAGE_SIZE));
  params.set('index', 'downloads');
  params.set('facets', JSON.stringify(facets));
  if (query) params.set('query', query);
  const response = await fetch('https://api.modrinth.com/v2/search?' + params.toString(), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error('Modrinth API failed with status ' + response.status);
  const payload = await response.json();
  const maybeTotal = Number(payload && (payload.total_hits || payload.total || payload.totalHits));
  const totalRows = Number.isFinite(maybeTotal) && maybeTotal >= 0 ? maybeTotal : 0;
  const hits = Array.isArray(payload && payload.hits) ? payload.hits : [];
  const mapped = hits.map(mapModrinthBrowseItem).filter((item) => item.url);
  const deduped = [];
  const seen = new Set();
  for (const item of mapped) {
    const id = String((item && item.id) || '').trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    deduped.push(item);
  }
  const items = await hydrateModrinthHeroImages(deduped);
  return {
    items,
    totalRows,
  };
}

async function fetchCurseforgeBrowseItems(query, category, pageNumber, filters) {
  const topConfig = getBrowseTopTabConfig(category);
  const page = Math.max(1, Number(pageNumber) || 1);
  const selectedLoader = String(filters && filters.loader ? filters.loader : 'any').trim().toLowerCase() || 'any';
  const selectedVersion = String(filters && filters.version ? filters.version : 'any').trim().toLowerCase() || 'any';
  const params = new URLSearchParams();
  params.set('gameId', '432');
  params.set('classId', String(topConfig.curseforgeClassId || '6'));
  params.set('pageSize', String(BROWSE_UI_PAGE_SIZE));
  params.set('index', String((page - 1) * BROWSE_UI_PAGE_SIZE));
  params.set('sortField', '2');
  params.set('sortOrder', 'desc');
  if (browseTopTabUsesLoader(topConfig.id) && selectedLoader !== 'any') {
    const modLoaderType = mapBrowseLoaderToCurseforgeType(selectedLoader);
    if (modLoaderType > 0) params.set('modLoaderType', String(modLoaderType));
  }
  if (selectedVersion !== 'any') {
    params.set('gameVersion', selectedVersion);
  }
  if (query) params.set('searchFilter', query);
  const response = await fetch('https://api.curse.tools/v1/cf/mods/search?' + params.toString(), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error('CurseForge API failed with status ' + response.status);
  const payload = await response.json();
  const pagination = payload && payload.pagination && typeof payload.pagination === 'object' ? payload.pagination : {};
  const maybeTotal = Number(
    pagination.totalCount ||
    pagination.resultCount ||
    (payload && payload.totalCount) ||
    (payload && payload.total)
  );
  const totalRows = Number.isFinite(maybeTotal) && maybeTotal >= 0 ? maybeTotal : 0;
  const rows = Array.isArray(payload && payload.data) ? payload.data : [];
  const mapped = rows.map((entry) => mapCurseforgeBrowseItem(entry, topConfig.id)).filter((item) => item.url);
  const deduped = [];
  const seen = new Set();
  for (const item of mapped) {
    const id = String((item && item.id) || '').trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    deduped.push(item);
  }
  return {
    items: deduped,
    totalRows,
  };
}

async function fetchBrowseProviderItems(provider, query, category, pageNumber, filters) {
  const key = String(provider || '').trim().toLowerCase();
  if (key === 'modrinth') return fetchModrinthBrowseItems(query, category, pageNumber, filters);
  if (key === 'curseforge') return fetchCurseforgeBrowseItems(query, category, pageNumber, filters);
  throw new Error('Unsupported browse provider');
}

function findBrowseItemById(provider, itemId) {
  const key = String(provider || '').trim().toLowerCase();
  const targetId = String(itemId || '').trim();
  if (!targetId) return null;
  const state = ensureBrowseLayoutState(key);
  if (!state) return null;
  const rows = Array.isArray(state.items) ? state.items : [];
  return rows.find((item) => String((item && item.id) || '').trim() === targetId) || null;
}

function parseDateMs(value) {
  const parsed = Date.parse(String(value || ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

function pickModrinthPrimaryFile(version) {
  const files = Array.isArray(version && version.files) ? version.files : [];
  if (!files.length) return null;
  return files.find((file) => !!(file && file.primary)) || files[0] || null;
}

async function resolveModrinthInstallArtifact(item, state) {
  const projectId = String((item && item.id) || '').trim();
  if (!projectId) throw new Error('Missing Modrinth project id');

  const topTab = getBrowseTopTabConfig(state ? state.topTab : 'mods').id;
  const selectedLoader = String((state && state.loader) || 'any').trim().toLowerCase();
  const selectedVersion = String((state && state.version) || 'any').trim().toLowerCase();

  const endpoint = 'https://api.modrinth.com/v2/project/' + encodeURIComponent(projectId) + '/version';
  const params = new URLSearchParams();
  if (browseTopTabUsesLoader(topTab) && selectedLoader !== 'any') {
    params.set('loaders', JSON.stringify([selectedLoader]));
  }
  if (selectedVersion !== 'any') {
    params.set('game_versions', JSON.stringify([selectedVersion]));
  }

  let response = await fetch(
    endpoint + (params.toString() ? ('?' + params.toString()) : ''),
    { method: 'GET', headers: { Accept: 'application/json' } }
  );
  if (!response.ok) {
    throw new Error('Modrinth versions API failed with status ' + response.status);
  }
  let versions = await response.json();
  versions = Array.isArray(versions) ? versions : [];

  if (!versions.length && params.toString()) {
    const fallbackRes = await fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' } });
    if (fallbackRes.ok) {
      const fallbackRows = await fallbackRes.json();
      versions = Array.isArray(fallbackRows) ? fallbackRows : [];
    }
  }
  if (!versions.length) {
    throw new Error('No downloadable Modrinth files matched this filter');
  }

  versions.sort((a, b) => parseDateMs(b && b.date_published) - parseDateMs(a && a.date_published));
  for (const version of versions) {
    const file = pickModrinthPrimaryFile(version);
    const url = String(file && file.url ? file.url : '').trim();
    const fileName = String(file && file.filename ? file.filename : '').trim();
    if (!url) continue;
    const dependencyRefs = [];
    const dependencyRows = Array.isArray(version && version.dependencies) ? version.dependencies : [];
    const dependencyMap = new Map();
    dependencyRows.forEach((dep) => {
      const projectId = String(dep && dep.project_id ? dep.project_id : '').trim();
      if (!projectId) return;
      const depType = String(dep && dep.dependency_type ? dep.dependency_type : '').toLowerCase();
      if (depType !== 'required' && depType !== 'optional') return;
      const required = depType === 'required';
      const previous = dependencyMap.get(projectId);
      dependencyMap.set(projectId, previous ? (previous || required) : required);
    });
    dependencyMap.forEach((required, id) => {
      dependencyRefs.push({ id, required: Boolean(required) });
    });
    return {
      url,
      fileName,
      target: getBrowseInstallTargetFromTopTab(topTab),
      dependencyRefs,
    };
  }

  throw new Error('Modrinth returned versions but no downloadable files');
}

function fileMatchesVersionFilter(file, selectedVersion) {
  const filter = String(selectedVersion || 'any').trim().toLowerCase();
  if (!filter || filter === 'any') return true;
  const versions = Array.isArray(file && file.gameVersions) ? file.gameVersions : [];
  return versions.some((value) => String(value || '').toLowerCase().startsWith(filter));
}

function fileMatchesLoaderFilter(file, selectedLoader, topTab) {
  const loader = String(selectedLoader || 'any').trim().toLowerCase();
  if (!browseTopTabUsesLoader(topTab) || !loader || loader === 'any') return true;
  const versions = Array.isArray(file && file.gameVersions) ? file.gameVersions : [];
  return versions.some((value) => String(value || '').toLowerCase().includes(loader));
}

async function resolveCurseforgeInstallArtifact(item, state) {
  const projectId = Number(item && item.id ? item.id : 0);
  if (!Number.isFinite(projectId) || projectId <= 0) {
    throw new Error('Missing CurseForge project id');
  }

  const topTab = getBrowseTopTabConfig(state ? state.topTab : 'mods').id;
  const selectedLoader = String((state && state.loader) || 'any').trim().toLowerCase();
  const selectedVersion = String((state && state.version) || 'any').trim().toLowerCase();
  const endpoint = 'https://api.curse.tools/v1/cf/mods/' + String(projectId) + '/files?pageSize=50&index=0';
  const response = await fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' } });
  if (!response.ok) {
    throw new Error('CurseForge files API failed with status ' + response.status);
  }
  const payload = await response.json();
  const rows = Array.isArray(payload && payload.data) ? payload.data : [];
  if (!rows.length) {
    throw new Error('No downloadable CurseForge files found');
  }

  const matched = rows
    .filter((file) => !!String(file && file.downloadUrl ? file.downloadUrl : '').trim())
    .filter((file) => fileMatchesVersionFilter(file, selectedVersion))
    .filter((file) => fileMatchesLoaderFilter(file, selectedLoader, topTab))
    .sort((a, b) => parseDateMs(b && b.fileDate) - parseDateMs(a && a.fileDate));
  const candidate = matched[0];
  if (!candidate) {
    throw new Error('No CurseForge file matched this loader/version');
  }

  const dependencyRefs = [];
  const dependencyMap = new Map();
  const dependencyRows = Array.isArray(candidate && candidate.dependencies) ? candidate.dependencies : [];
  dependencyRows.forEach((dep) => {
    const modId = Number(dep && dep.modId);
    if (!Number.isFinite(modId) || modId <= 0) return;
    const relationType = Number(dep && dep.relationType);
    if (relationType !== 3 && relationType !== 2) return;
    const required = relationType === 3;
    const previous = dependencyMap.get(modId);
    dependencyMap.set(modId, previous ? (previous || required) : required);
  });
  dependencyMap.forEach((required, id) => {
    dependencyRefs.push({ id, required: Boolean(required) });
  });

  return {
    url: String(candidate.downloadUrl || '').trim(),
    fileName: String(candidate.fileName || candidate.displayName || '').trim(),
    target: getBrowseInstallTargetFromTopTab(topTab),
    dependencyRefs,
  };
}

async function resolveBrowseInstallArtifact(provider, item, state) {
  const key = String(provider || '').trim().toLowerCase();
  if (key === 'modrinth') return resolveModrinthInstallArtifact(item, state);
  if (key === 'curseforge') return resolveCurseforgeInstallArtifact(item, state);
  throw new Error('Unsupported provider');
}

async function installBrowseArtifactToInstance(instanceName, artifact, existsPolicy) {
  const policy = String(existsPolicy || '').trim().toLowerCase() || 'overwrite';
  const installRes = await invokeBackend('install_browse_item', {
    request: {
      instanceName,
      target: artifact.target,
      url: artifact.url,
      fileName: artifact.fileName || '',
      ifExists: policy,
    },
  });
  if (!installRes.ok || !installRes.data) {
    throw new Error(formatBackendError(installRes.error, 'Backend rejected install'));
  }
  return installRes.data;
}

function instanceSupportsBrowseItem(instanceName, item, browseState) {
  const details = INSTANCE_DATA && INSTANCE_DATA[instanceName] ? INSTANCE_DATA[instanceName] : null;
  if (!details) {
    return { supported: false, reason: 'Missing instance details' };
  }

  const topTab = getBrowseTopTabConfig(browseState ? browseState.topTab : 'mods').id;
  const instanceLoader = normalizeLoader(details.loaderKey || details.loader || 'vanilla');
  const instanceVersion = String(details.version || '').trim().toLowerCase();
  const itemLoaders = Array.isArray(item && item.loaders) ? item.loaders.map((value) => String(value || '').toLowerCase()) : [];
  const itemVersions = Array.isArray(item && item.versions) ? item.versions.map((value) => String(value || '').toLowerCase()) : [];

  if (topTab === 'shaders' && instanceLoader === 'vanilla') {
    return {
      supported: false,
      reason: 'Shaders need Fabric/Quilt/Forge/NeoForge instance (Iris/Oculus runtime required)',
    };
  }

  if (browseTopTabUsesLoader(topTab) && itemLoaders.length && !itemLoaders.includes(instanceLoader)) {
    return {
      supported: false,
      reason: 'Needs loader: ' + itemLoaders.join(', '),
    };
  }
  if (instanceVersion && itemVersions.length) {
    const hasVersion = itemVersions.some((value) => {
      return value === instanceVersion || value.startsWith(instanceVersion) || instanceVersion.startsWith(value);
    });
    if (!hasVersion) {
      return {
        supported: false,
        reason: 'Needs version: ' + itemVersions.slice(0, 3).join(', '),
      };
    }
  }

  return { supported: true, reason: 'Compatible' };
}

function buildBrowseInstallStateFromInstance(baseState, instanceName) {
  const details = INSTANCE_DATA && INSTANCE_DATA[instanceName] ? INSTANCE_DATA[instanceName] : null;
  const loader = normalizeLoader(details && (details.loaderKey || details.loader) ? (details.loaderKey || details.loader) : (baseState.loader || 'any'));
  const version = String(details && details.version ? details.version : (baseState.version || 'any')).trim().toLowerCase() || 'any';
  return {
    topTab: String(baseState.topTab || 'mods'),
    loader,
    version,
  };
}

function pickBrowseAddInstanceLoader(item, browseState) {
  const itemLoaders = Array.isArray(item && item.loaders)
    ? item.loaders.map((value) => normalizeLoader(value)).filter(Boolean)
    : [];
  const supported = ['fabric', 'forge', 'quilt', 'neoforge', 'vanilla'];
  const fromItem = itemLoaders.find((loader) => supported.includes(loader) && loader !== 'any');
  if (fromItem) return fromItem;
  const fromFilter = normalizeLoader(browseState && browseState.loader ? browseState.loader : 'any');
  if (fromFilter && fromFilter !== 'any' && supported.includes(fromFilter)) return fromFilter;
  return 'vanilla';
}

function pickBrowseAddInstanceVersion(item, browseState) {
  const itemVersions = cleanBrowseVersions(
    Array.isArray(item && item.versions) ? item.versions.filter((value) => parseMcVersionTuple(value)) : [],
    BROWSE_VERSION_LIMIT
  ).sort(compareMcVersionDesc);
  if (itemVersions.length) return itemVersions[0];
  const filteredVersion = String(browseState && browseState.version ? browseState.version : 'any').trim();
  if (filteredVersion && filteredVersion.toLowerCase() !== 'any') return filteredVersion;
  return '';
}

function buildBrowseAddInstanceNameBase(item, topTab) {
  const sourceTitle = String(item && item.title ? item.title : '').trim() || 'Instance';
  const safe = sourceTitle
    .replace(/[\\/:*?"<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 22);
  const suffixMap = {
    mods: 'Mods',
    modpacks: 'Pack',
    resourcepacks: 'Resource Pack',
    shaders: 'Shaders',
  };
  const suffix = suffixMap[String(topTab || '').trim().toLowerCase()] || 'Instance';
  return (safe ? (safe + ' ' + suffix) : suffix).trim();
}

function setBrowseInstallModalStatus(text, isError) {
  const statusEl = document.getElementById('browse-install-status');
  if (!statusEl) return;
  statusEl.textContent = String(text || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function renderBrowseInstallLog() {
  const logEl = document.getElementById('browse-install-log');
  if (!logEl) return;
  const state = BROWSE_INSTALL_MODAL_STATE;
  const logs = state && Array.isArray(state.logs) ? state.logs : [];
  if (!logs.length) {
    logEl.innerHTML = '<div style="padding:6px 2px;color:var(--t4)">No activity yet.</div>';
    return;
  }
  logEl.innerHTML = logs
    .map((row) => {
      const level = String(row && row.level ? row.level : 'info').toLowerCase();
      const color = level === 'error'
        ? 'var(--red)'
        : level === 'warn'
          ? '#c49b5a'
          : level === 'ok'
            ? 'var(--green)'
            : 'var(--t4)';
      const text = escapeHtml(String(row && row.text ? row.text : ''));
      return '<div style="padding:3px 2px;color:' + color + '">' + text + '</div>';
    })
    .join('');
  logEl.scrollTop = logEl.scrollHeight;
}

function pushBrowseInstallLog(level, text) {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state) return;
  if (!Array.isArray(state.logs)) state.logs = [];
  const entryText = String(text || '').trim();
  if (!entryText) return;
  state.logs.push({
    at: Date.now(),
    level: String(level || 'info').trim().toLowerCase() || 'info',
    text: entryText,
  });
  if (state.logs.length > 200) {
    state.logs.splice(0, state.logs.length - 200);
  }
  renderBrowseInstallLog();
}

function onBrowseInstallExistsPolicyChange() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  const selectEl = document.getElementById('browse-install-exists-policy');
  if (!state || !selectEl) return;
  const next = String(selectEl.value || 'skip').trim().toLowerCase();
  state.existsPolicy = next === 'overwrite' ? 'overwrite' : 'skip';
  pushBrowseInstallLog('info', 'Install policy: ' + (state.existsPolicy === 'skip' ? 'skip existing files' : 'overwrite existing files'));
}

function setBrowseInstallConfirmButton(enabled, busy) {
  const confirmBtn = document.getElementById('browse-install-confirm');
  if (!confirmBtn) return;
  confirmBtn.disabled = !enabled;
  if (busy) {
    confirmBtn.innerHTML = '<i data-lucide="loader-circle" width="12" height="12"></i>Installing...';
  } else {
    confirmBtn.innerHTML = '<i data-lucide="download" width="12" height="12"></i>Install';
  }
  lucide.createIcons();
}

function renderBrowseInstallDependencyList() {
  const depsEl = document.getElementById('browse-install-deps');
  if (!depsEl) return;
  const state = BROWSE_INSTALL_MODAL_STATE;
  const deps = state && Array.isArray(state.dependencies) ? state.dependencies : [];
  if (!deps.length) {
    depsEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:var(--t4);padding:6px 2px">No extra dependencies detected.</div>';
    return;
  }
  depsEl.innerHTML = deps
    .map((dep, index) => {
      const checked = dep.required ? true : Boolean(dep.checked);
      const checkedClass = checked ? ' on' : '';
      const disabledStyle = dep.error || dep.required ? 'opacity:0.78;cursor:default' : '';
      const iconHtml = checked ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : '';
      const toggleAttr = dep.error || dep.required ? '' : ' onclick="toggleBrowseInstallDependency(' + String(index) + ')"';
      const statusText = dep.error
        ? '<span style="font-size:10px;font-family:var(--mono);color:var(--red)">Unresolved</span>'
        : '<span style="font-size:10px;font-family:var(--mono);color:var(--t4)">' + escapeHtml(dep.required ? 'Required' : 'Optional') + '</span>';
      return (
        '<div class="check-row" style="' + disabledStyle + '">' +
        '<div class="check-box' + checkedClass + '"' + toggleAttr + '>' + iconHtml + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:2px;min-width:0">' +
        '<span class="check-label" style="max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(dep.title || 'Dependency') + '</span>' +
        statusText +
        '</div>' +
        '</div>'
      );
    })
    .join('');
  lucide.createIcons();
}

function toggleBrowseInstallDependency(index) {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state || !Array.isArray(state.dependencies)) return;
  const target = state.dependencies[index];
  if (!target || target.error || target.required) return;
  target.checked = !target.checked;
  renderBrowseInstallDependencyList();
}

async function resolveShaderRuntimeDependencies(installState) {
  const topTab = getBrowseTopTabConfig(installState && installState.topTab ? installState.topTab : 'mods').id;
  if (topTab !== 'shaders') return [];
  const loader = normalizeLoader(installState && installState.loader ? installState.loader : 'vanilla');
  const runtimeModState = Object.assign({}, installState || {}, { topTab: 'mods' });
  const queue = [];
  if (loader === 'fabric' || loader === 'quilt') {
    queue.push({ id: 'iris', title: 'Iris Shaders' });
  } else if (loader === 'forge' || loader === 'neoforge') {
    queue.push({ id: 'oculus', title: 'Oculus' });
    queue.push({ id: 'embeddium', title: 'Embeddium' });
  } else {
    return [];
  }

  const out = [];
  for (const runtime of queue) {
    const projectId = String(runtime.id || '').trim();
    if (!projectId) continue;
    try {
      const artifact = await resolveModrinthInstallArtifact(
        { id: projectId, title: String(runtime.title || projectId) },
        runtimeModState
      );
      out.push({
        id: 'modrinth:' + projectId,
        title: String(runtime.title || projectId),
        required: true,
        checked: true,
        artifact,
        error: null,
      });
      const nested = await resolveBrowseDependencyArtifacts(
        'modrinth',
        artifact,
        Object.assign({}, runtimeModState, { itemId: projectId })
      );
      nested.forEach((row) => out.push(row));
    } catch (err) {
      out.push({
        id: 'modrinth:' + projectId,
        title: String(runtime.title || projectId),
        required: true,
        checked: true,
        artifact: null,
        error: err && err.message ? String(err.message) : 'Dependency resolve failed',
      });
    }
  }
  return out;
}

function mergeBrowseDependencies(primaryDeps, extraDeps) {
  const out = [];
  const seen = new Set();
  const push = (dep) => {
    if (!dep || typeof dep !== 'object') return;
    const artifactUrl = String(dep.artifact && dep.artifact.url ? dep.artifact.url : '').trim();
    const key = artifactUrl || String(dep.id || '').trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(dep);
  };
  (Array.isArray(primaryDeps) ? primaryDeps : []).forEach(push);
  (Array.isArray(extraDeps) ? extraDeps : []).forEach(push);
  return out;
}

async function resolveBrowseDependencyArtifacts(provider, mainArtifact, installState) {
  const key = String(provider || '').trim().toLowerCase();
  const refs = Array.isArray(mainArtifact && mainArtifact.dependencyRefs) ? mainArtifact.dependencyRefs : [];
  const maxDepth = 4;
  const maxEntries = 48;
  const entries = [];
  const seen = new Set();
  const mainId = String(installState && installState.itemId ? installState.itemId : '').trim();
  const queue = refs.slice(0, maxEntries).map((ref) => ({
    ref,
    required: ref && typeof ref === 'object' ? Boolean(ref.required) : true,
    depth: 1,
  }));

  while (queue.length > 0 && entries.length < maxEntries) {
    const current = queue.shift();
    if (!current) break;
    const ref = current.ref;
    const refValue = ref && typeof ref === 'object' ? ref.id : ref;
    const isRequired = Boolean(current.required);
    const depth = Number(current.depth || 1);
    if (depth > maxDepth) continue;

    if (key === 'modrinth') {
      const projectId = String(refValue || '').trim();
      if (!projectId) continue;
      if (mainId && projectId === mainId) continue;
      const seenKey = 'modrinth:' + projectId;
      if (seen.has(seenKey)) continue;
      seen.add(seenKey);
      try {
        const infoRes = await fetch('https://api.modrinth.com/v2/project/' + encodeURIComponent(projectId), {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });
        const info = infoRes.ok ? await infoRes.json() : {};
        const title = String(info && info.title ? info.title : projectId).trim();
        const modrinthProjectType = String(info && info.project_type ? info.project_type : '').trim().toLowerCase();
        const modrinthSlug = String(info && info.slug ? info.slug : '').trim();
        const modrinthPathMap = { mod: 'mod', modpack: 'modpack', resourcepack: 'resourcepack', shader: 'shader' };
        const pageUrl = modrinthSlug
          ? 'https://modrinth.com/' + (modrinthPathMap[modrinthProjectType] || 'project') + '/' + modrinthSlug
          : 'https://modrinth.com/project/' + encodeURIComponent(projectId);
        const iconUrl = String(info && info.icon_url ? info.icon_url : '').trim();
        const depTopTab = mapModrinthProjectTypeToTopTab(info && info.project_type) || String(installState && installState.topTab ? installState.topTab : 'mods');
        const depInstallState = buildBrowseDependencyInstallState(installState, depTopTab);
        const artifact = await resolveModrinthInstallArtifact({ id: projectId, title }, depInstallState);
        entries.push({
          id: seenKey,
          title,
          required: isRequired,
          checked: isRequired,
          artifact,
          error: null,
          url: pageUrl,
          iconUrl,
          depth,
        });

        if (isRequired && depth < maxDepth) {
          const childRefs = Array.isArray(artifact && artifact.dependencyRefs)
            ? artifact.dependencyRefs
                .filter((child) => {
                  const childRequired = child && typeof child === 'object' ? Boolean(child.required) : true;
                  return childRequired;
                })
                .slice(0, maxEntries)
            : [];
          childRefs.forEach((childRef) => {
            queue.push({
              ref: childRef,
              required: true,
              depth: depth + 1,
            });
          });
        }
      } catch (err) {
        entries.push({
          id: seenKey,
          title: projectId,
          required: isRequired,
          checked: false,
          artifact: null,
          error: err && err.message ? String(err.message) : 'Dependency resolve failed',
          depth,
        });
      }
    } else if (key === 'curseforge') {
      const modId = Number(refValue);
      if (!Number.isFinite(modId) || modId <= 0) continue;
      if (mainId && String(modId) === mainId) continue;
      const seenKey = 'curseforge:' + String(modId);
      if (seen.has(seenKey)) continue;
      seen.add(seenKey);
      try {
        const infoRes = await fetch('https://api.curse.tools/v1/cf/mods/' + String(modId), {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });
        const infoPayload = infoRes.ok ? await infoRes.json() : {};
        const row = infoPayload && infoPayload.data ? infoPayload.data : {};
        const title = String(row && row.name ? row.name : String(modId)).trim();
        const curseClassId = String(row && row.classId ? row.classId : '').trim();
        const curseSlug = String(row && row.slug ? row.slug : '').trim();
        const curseLinks = row && typeof row.links === 'object' ? row.links : {};
        const websiteUrl = String(curseLinks.websiteUrl || '').trim();
        const cursePathMap = { '6': 'mc-mods', '4471': 'modpacks', '12': 'texture-packs', '6552': 'shaders' };
        const pageUrl = websiteUrl || (curseSlug ? ('https://www.curseforge.com/minecraft/' + (cursePathMap[curseClassId] || 'mc-mods') + '/' + curseSlug) : '');
        const iconUrl = row && row.logo && typeof row.logo === 'object'
          ? String(row.logo.thumbnailUrl || row.logo.url || '').trim()
          : '';
        const depTopTab = mapCurseforgeClassIdToTopTab(row && row.classId) || String(installState && installState.topTab ? installState.topTab : 'mods');
        const depInstallState = buildBrowseDependencyInstallState(installState, depTopTab);
        const artifact = await resolveCurseforgeInstallArtifact({ id: String(modId), title }, depInstallState);
        entries.push({
          id: seenKey,
          title,
          required: isRequired,
          checked: isRequired,
          artifact,
          error: null,
          url: pageUrl,
          iconUrl,
          depth,
        });

        if (isRequired && depth < maxDepth) {
          const childRefs = Array.isArray(artifact && artifact.dependencyRefs)
            ? artifact.dependencyRefs
                .filter((child) => {
                  const childRequired = child && typeof child === 'object' ? Boolean(child.required) : true;
                  return childRequired;
                })
                .slice(0, maxEntries)
            : [];
          childRefs.forEach((childRef) => {
            queue.push({
              ref: childRef,
              required: true,
              depth: depth + 1,
            });
          });
        }
      } catch (err) {
        entries.push({
          id: seenKey,
          title: String(modId),
          required: isRequired,
          checked: false,
          artifact: null,
          error: err && err.message ? String(err.message) : 'Dependency resolve failed',
          depth,
        });
      }
    }
  }
  return entries;
}

function openAddInstanceForBrowseItem() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state || !state.item) {
    showToast('!', 'Create instance', 'No browse item selected');
    return;
  }

  const topTab = getBrowseTopTabConfig(state.browseState && state.browseState.topTab ? state.browseState.topTab : 'mods').id;
  const loader = pickBrowseAddInstanceLoader(state.item, state.browseState);
  const version = pickBrowseAddInstanceVersion(state.item, state.browseState);
  const nameBase = buildBrowseAddInstanceNameBase(state.item, topTab);

  ADD_INSTANCE_PREFILL = {
    nameBase,
    loader,
    version: version || '',
    loaderVersion: '',
  };
  PENDING_BROWSE_INSTALL_CONTEXT = {
    provider: state.provider,
    itemId: state.itemId,
  };

  closeModal();
  setTimeout(() => openModal('add-instance'), 180);
}

function openBrowseInstallModal(provider, encodedItemId) {
  const key = String(provider || '').trim().toLowerCase();
  const itemId = decodeURIComponent(String(encodedItemId || '').trim());
  const browseState = ensureBrowseLayoutState(key);
  const item = findBrowseItemById(key, itemId);
  if (!browseState || !item) {
    showToast('!', 'Install failed', 'Item no longer exists in this page');
    return;
  }

  BROWSE_INSTALL_MODAL_STATE = {
    provider: key,
    itemId,
    item,
    browseState: {
      topTab: browseState.topTab,
      loader: browseState.loader,
      version: browseState.version,
    },
    selectedInstance: null,
    dependencies: [],
    mainArtifact: null,
    resolveToken: null,
    existsPolicy: 'skip',
    logs: [],
  };
  openModal('browse-install');
}

async function hydrateBrowseInstallModal() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state || !state.item) {
    closeModal();
    showToast('!', 'Install failed', 'Missing install state');
    return;
  }

  const summaryEl = document.getElementById('browse-install-summary');
  const selectEl = document.getElementById('browse-install-instance');
  const policyEl = document.getElementById('browse-install-exists-policy');
  if (!summaryEl || !selectEl) return;

  const providerLabel = getBrowseProviderLabel(state.provider);
  const topTabLabel = getBrowseTopTabConfig(state.browseState.topTab).label;
  summaryEl.innerHTML =
    '<strong style="color:var(--t2)">' + escapeHtml(state.item.title || 'Item') + '</strong>' +
    '<div style="margin-top:4px;color:var(--t4)">' + escapeHtml(providerLabel) + ' - ' + escapeHtml(topTabLabel) + '</div>';
  if (policyEl) {
    policyEl.value = state.existsPolicy === 'overwrite' ? 'overwrite' : 'skip';
  }
  state.logs = [];
  pushBrowseInstallLog('info', 'Opened install planner for ' + String(state.item.title || 'Item'));

  const instanceNames = Object.keys(INSTANCE_DATA || {}).sort((left, right) =>
    left.localeCompare(right, undefined, { sensitivity: 'base', numeric: true })
  );
  const compatibilityRows = instanceNames.map((instanceName) => {
    const compatibility = instanceSupportsBrowseItem(instanceName, state.item, state.browseState);
    return {
      name: instanceName,
      supported: compatibility.supported,
      reason: compatibility.reason,
    };
  });
  const supportedRows = compatibilityRows.filter((row) => row.supported);
  selectEl.innerHTML = compatibilityRows
    .map((row) => {
      const disabled = row.supported ? '' : ' disabled';
      const suffix = row.supported ? '' : ' - Unsupported';
      return '<option value="' + escapeHtml(row.name) + '"' + disabled + '>' + escapeHtml(row.name + suffix) + '</option>';
    })
    .join('');

  if (!compatibilityRows.length) {
    selectEl.innerHTML = '<option value="">No instances found</option>';
    selectEl.disabled = true;
    setBrowseInstallModalStatus('Create an instance first, then install.', true);
    setBrowseInstallConfirmButton(false, false);
    pushBrowseInstallLog('error', 'No instances found');
    return;
  }
  if (!supportedRows.length) {
    selectEl.disabled = true;
    setBrowseInstallModalStatus('No compatible instances for this item.', true);
    setBrowseInstallConfirmButton(false, false);
    pushBrowseInstallLog('error', 'No compatible instances for this item');
    return;
  }

  const currentlySelected = getSelectedInstanceName();
  const preferred = supportedRows.find((row) => row.name === currentlySelected)
    || supportedRows[0];
  selectEl.value = preferred.name;
  state.selectedInstance = preferred.name;
  selectEl.disabled = false;
  pushBrowseInstallLog('info', 'Selected instance: ' + preferred.name);

  await refreshBrowseInstallPlanForInstance();
}

async function onBrowseInstallInstanceChange() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state) return;
  const selectEl = document.getElementById('browse-install-instance');
  if (!selectEl) return;
  state.selectedInstance = String(selectEl.value || '').trim();
  pushBrowseInstallLog('info', 'Switched instance: ' + state.selectedInstance);
  await refreshBrowseInstallPlanForInstance();
}

async function refreshBrowseInstallPlanForInstance() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state || !state.item) return;
  const instanceName = String(state.selectedInstance || '').trim();
  const compatEl = document.getElementById('browse-install-compat');
  if (!instanceName) {
    setBrowseInstallModalStatus('Select instance to continue.', true);
    setBrowseInstallConfirmButton(false, false);
    pushBrowseInstallLog('error', 'Instance selection is empty');
    return;
  }

  const compatibility = instanceSupportsBrowseItem(instanceName, state.item, state.browseState);
  if (compatEl) {
    compatEl.textContent = compatibility.reason;
    compatEl.style.color = compatibility.supported ? 'var(--green)' : 'var(--red)';
  }
  if (!compatibility.supported) {
    state.mainArtifact = null;
    state.dependencies = [];
    renderBrowseInstallDependencyList();
    setBrowseInstallModalStatus('This instance is not compatible with selected item.', true);
    setBrowseInstallConfirmButton(false, false);
    pushBrowseInstallLog('error', 'Compatibility failed: ' + compatibility.reason);
    return;
  }

  setBrowseInstallModalStatus('Resolving download and dependencies...', false);
  setBrowseInstallConfirmButton(false, true);
  pushBrowseInstallLog('info', 'Resolving artifact + dependencies...');
  const token = Date.now() + '-' + Math.random().toString(36).slice(2, 7);
  state.resolveToken = token;

  try {
    const installState = buildBrowseInstallStateFromInstance(state.browseState, instanceName);
    installState.itemId = state.itemId;
    const mainArtifact = await resolveBrowseInstallArtifact(state.provider, state.item, installState);
    const dependencies = await resolveBrowseDependencyArtifacts(state.provider, mainArtifact, installState);
    const shaderRuntimeDeps = await resolveShaderRuntimeDependencies(installState);
    const mergedDependencies = mergeBrowseDependencies(dependencies, shaderRuntimeDeps);
    if (!BROWSE_INSTALL_MODAL_STATE || BROWSE_INSTALL_MODAL_STATE.resolveToken !== token) return;
    state.mainArtifact = mainArtifact;
    state.dependencies = mergedDependencies;
    renderBrowseInstallDependencyList();
    const unresolvedRequired = mergedDependencies.filter((dep) => dep && dep.required && dep.error).length;
    const unresolvedOptional = mergedDependencies.filter((dep) => dep && !dep.required && dep.error).length;
    const status = unresolvedRequired > 0
      ? 'Blocked: ' + unresolvedRequired + ' required dependency could not be resolved.'
      : unresolvedOptional > 0
        ? 'Ready with warnings: ' + unresolvedOptional + ' optional dependency unresolved.'
      : 'Ready to install.';
    setBrowseInstallModalStatus(status, unresolvedRequired > 0 || unresolvedOptional > 0);
    setBrowseInstallConfirmButton(unresolvedRequired === 0, false);
    pushBrowseInstallLog(
      unresolvedRequired > 0 ? 'error' : (unresolvedOptional > 0 ? 'warn' : 'ok'),
      'Plan ready: main + ' + String(mergedDependencies.length) + ' dependencies'
    );
  } catch (err) {
    if (!BROWSE_INSTALL_MODAL_STATE || BROWSE_INSTALL_MODAL_STATE.resolveToken !== token) return;
    state.mainArtifact = null;
    state.dependencies = [];
    renderBrowseInstallDependencyList();
    const reason = err && err.message ? String(err.message) : 'Could not resolve install file';
    setBrowseInstallModalStatus(reason, true);
    setBrowseInstallConfirmButton(false, false);
    pushBrowseInstallLog('error', 'Resolve failed: ' + reason);
  }
}

function providerFromDependencyId(value, fallbackProvider) {
  const text = String(value || '').trim().toLowerCase();
  if (text.startsWith('modrinth:')) return 'modrinth';
  if (text.startsWith('curseforge:')) return 'curseforge';
  return String(fallbackProvider || 'browse').trim().toLowerCase() || 'browse';
}

function buildBrowseInstallQueueFromState(state) {
  const queue = [];
  const seen = new Set();
  const push = (entry) => {
    if (!entry || !entry.artifact) return;
    const artifact = entry.artifact;
    const key = String(artifact.target || 'mods') + '|' + String(artifact.fileName || '') + '|' + String(artifact.url || '');
    if (!key || seen.has(key)) return;
    seen.add(key);
    queue.push(entry);
  };

  (state.dependencies || []).forEach((dep) => {
    if (!dep || dep.error || !dep.artifact || !(dep.required || dep.checked)) return;
    push({
      title: String(dep.title || dep.artifact.fileName || 'Dependency'),
      required: !!dep.required,
      sourceType: 'dependency',
      provider: providerFromDependencyId(dep.id, state.provider),
      itemId: String(dep.id || ''),
      pageUrl: String(dep.url || '').trim(),
      iconUrl: String(dep.iconUrl || '').trim(),
      rootTitle: String(state.item && state.item.title ? state.item.title : ''),
      artifact: dep.artifact,
    });
  });

  push({
    title: String(state.item && state.item.title ? state.item.title : 'Item'),
    required: true,
    sourceType: 'main',
    provider: state.provider,
    itemId: state.itemId,
    pageUrl: String(state.item && state.item.url ? state.item.url : '').trim(),
    iconUrl: String(state.item && state.item.iconUrl ? state.item.iconUrl : '').trim(),
    rootTitle: String(state.item && state.item.title ? state.item.title : ''),
    artifact: state.mainArtifact,
  });
  return queue;
}

async function confirmBrowseInstallFromModal() {
  const state = BROWSE_INSTALL_MODAL_STATE;
  if (!state || !state.item || !state.mainArtifact) {
    showToast('!', 'Install failed', 'Install plan is not ready');
    return;
  }
  const instanceName = String(state.selectedInstance || '').trim();
  if (!instanceName) {
    showToast('!', 'Install failed', 'Instance is required');
    return;
  }
  const policy = String(state.existsPolicy || 'skip').trim().toLowerCase() === 'overwrite'
    ? 'overwrite'
    : 'skip';
  const queue = buildBrowseInstallQueueFromState(state);
  if (!queue.length) {
    showToast('!', 'Install failed', 'No install targets selected');
    return;
  }

  setBrowseInstallConfirmButton(false, true);
  pushBrowseInstallLog('info', 'Starting install (' + String(queue.length) + ' files, policy: ' + policy + ')');
  try {
    for (let i = 0; i < queue.length; i += 1) {
      const row = queue[i];
      const artifact = row.artifact;
      const name = String(artifact && artifact.fileName ? artifact.fileName : row.title || 'file');
      setBrowseInstallModalStatus(
        'Installing ' + String(i + 1) + '/' + String(queue.length) + ': ' + name,
        false
      );
      const result = await installBrowseArtifactToInstance(instanceName, artifact, policy);
      const status = String(result && result.status ? result.status : 'installed').toLowerCase();
      if (status === 'skipped_exists') {
        upsertTrackedInstallForInstance(instanceName, {
          id: String(artifact.target || 'mods') + ':' + String((result && result.file_name) || artifact.fileName || '').toLowerCase(),
          title: row.title || name,
          provider: row.provider || state.provider,
          itemId: row.itemId || state.itemId || '',
          target: result && result.target ? result.target : artifact.target,
          fileName: (result && result.file_name) || artifact.fileName || '',
          url: artifact.url || '',
          path: result && result.path ? result.path : '',
          bytesWritten: 0,
          installedAt: Date.now(),
          required: !!row.required,
          enabled: true,
          sourceType: row.sourceType || 'main',
          rootTitle: row.rootTitle || String(state.item && state.item.title ? state.item.title : ''),
          pageUrl: String(row.pageUrl || '').trim(),
          iconUrl: String(row.iconUrl || '').trim(),
        });
        pushBrowseInstallLog('warn', 'Skipped existing: ' + name);
        continue;
      }
      upsertTrackedInstallForInstance(instanceName, {
        id: String(artifact.target || 'mods') + ':' + String((result && result.file_name) || artifact.fileName || '').toLowerCase(),
        title: row.title || name,
        provider: row.provider || state.provider,
        itemId: row.itemId || state.itemId || '',
        target: result && result.target ? result.target : artifact.target,
        fileName: (result && result.file_name) || artifact.fileName || '',
        url: artifact.url || '',
        path: result && result.path ? result.path : '',
        bytesWritten: Number(result && result.bytes_written ? result.bytes_written : 0),
        installedAt: Date.now(),
        required: !!row.required,
        enabled: true,
        sourceType: row.sourceType || 'main',
        rootTitle: row.rootTitle || String(state.item && state.item.title ? state.item.title : ''),
        pageUrl: String(row.pageUrl || '').trim(),
        iconUrl: String(row.iconUrl || '').trim(),
      });
      pushBrowseInstallLog('ok', 'Installed: ' + name);
    }
    closeModal();
    await refreshInstancesFromBackend(false);
    await refreshSelectedInstanceInfo(instanceName);
    refreshInstanceTrackedInstallSummary(instanceName);
    showToast('OK', 'Installed', String(state.item.title || 'Item') + ' installed to ' + instanceName);
  } catch (err) {
    const reason = err && err.message ? String(err.message) : 'Install failed';
    setBrowseInstallModalStatus(reason, true);
    setBrowseInstallConfirmButton(true, false);
    pushBrowseInstallLog('error', 'Install failed: ' + reason);
    showToast('!', 'Install failed', reason);
  }
}

async function installBrowseItemFromFeed(buttonEl, provider, encodedItemId) {
  const key = String(provider || '').trim().toLowerCase();
  const itemId = decodeURIComponent(String(encodedItemId || '').trim());
  if (!itemId) {
    showToast('!', 'Install failed', 'Missing item id');
    return;
  }
  if (!Object.prototype.hasOwnProperty.call(BROWSE_INSTALL_IN_FLIGHT, key)) return;
  if (BROWSE_INSTALL_IN_FLIGHT[key][itemId]) return;
  const button = buttonEl && buttonEl.tagName ? buttonEl : null;
  if (button) {
    button.disabled = true;
    const originalHtml = button.innerHTML;
    button.innerHTML = '<i data-lucide="loader-circle" width="12" height="12"></i><span>Preparing...</span>';
    lucide.createIcons();
    setTimeout(() => {
      button.disabled = false;
      button.innerHTML = originalHtml;
      lucide.createIcons();
    }, 1200);
  }
  openBrowseInstallModal(key, encodeURIComponent(itemId));
}

function getFilteredBrowseItems(provider) {
  const state = ensureBrowseLayoutState(provider);
  if (!state) return [];
  const secondaryOption =
    getBrowseSecondaryRows(state.topTab).find((row) => row[0] === state.secondary) ||
    getBrowseSecondaryRows(state.topTab)[0];
  const secondaryKeywords = secondaryOption && Array.isArray(secondaryOption[2]) ? secondaryOption[2] : [];
  const selectedVersion = String(state.version || 'any').toLowerCase();
  const selectedLoader = String(state.loader || 'any').toLowerCase();
  const items = (state.items || []).filter((item) => {
    if (secondaryKeywords.length) {
      const haystack = String(item.searchText || '').toLowerCase();
      if (!secondaryKeywords.some((token) => haystack.includes(String(token).toLowerCase()))) return false;
    }
    if (browseTopTabUsesLoader(state.topTab) && selectedLoader !== 'any') {
      const loaders = Array.isArray(item.loaders) ? item.loaders : [];
      if (!loaders.includes(selectedLoader)) return false;
    }
    if (selectedVersion !== 'any') {
      const versions = Array.isArray(item.versions) ? item.versions : [];
      if (!versions.some((value) => String(value || '').toLowerCase().startsWith(selectedVersion))) return false;
    }
    return true;
  });
  const sorted = items.slice();
  if (state.sort === 'newest') {
    sorted.sort((a, b) => Date.parse(String(b.createdAt || '')) - Date.parse(String(a.createdAt || '')));
  } else if (state.sort === 'updated') {
    sorted.sort((a, b) => Date.parse(String(b.updatedAt || '')) - Date.parse(String(a.updatedAt || '')));
  } else {
    sorted.sort((a, b) => Number(b.downloads || 0) - Number(a.downloads || 0));
  }
  return sorted;
}

function buildBrowseRemoteQuery(state) {
  const baseQuery = String((state && state.query) || '').trim();
  if (!state) return baseQuery;
  const secondaryOption =
    getBrowseSecondaryRows(state.topTab).find((row) => row[0] === state.secondary) ||
    getBrowseSecondaryRows(state.topTab)[0];
  const secondaryKeywords = secondaryOption && Array.isArray(secondaryOption[2]) ? secondaryOption[2] : [];
  const keyword = String((secondaryKeywords && secondaryKeywords[0]) || '').trim();
  if (!keyword) return baseQuery;
  if (!baseQuery) return keyword;
  if (baseQuery.toLowerCase().includes(keyword.toLowerCase())) return baseQuery;
  return baseQuery + ' ' + keyword;
}

function renderBrowseProviderFeed(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  const feed = document.getElementById(key + '-browse-feed');
  const tabs = document.getElementById(key + '-browse-top-tabs');
  const filters = document.getElementById(key + '-browse-filters');
  const paginationEl = document.getElementById(key + '-browse-pagination');
  const paginationBottomEl = document.getElementById(key + '-browse-pagination-bottom');
  if (!state || !feed) return;

  if (tabs) {
    tabs.innerHTML = BROWSE_LAYOUT_TOP_TABS
      .map((tab) => {
        const activeClass = tab.id === state.topTab ? ' active' : '';
        return '<button class="browse-tab-chip' + activeClass + '" onclick="setBrowseTopTab(\'' + key + '\', \'' + tab.id + '\')">' + escapeHtml(tab.label) + '</button>';
      })
      .join('');
  }
  if (filters) {
    const renderOption = (groupId, optionId, label, activeClass, onclick) =>
      '<button class="browse-filter-option' + activeClass + '" onclick="' + onclick + '">' +
      '<i data-lucide="' + getBrowseFilterOptionIcon(groupId, optionId) + '" width="12" height="12"></i>' +
      '<span>' + escapeHtml(label) + '</span>' +
      '</button>';
    const panels = state.filterPanels || {};
    const renderGroup = (groupId, title, body, scrollable) => {
      const collapsed = Boolean(panels[groupId]);
      const bodyClass = 'browse-filter-body' + (collapsed ? ' collapsed' : '') + (scrollable ? ' scrollable' : '');
      return (
        '<section class="browse-filter-group-card' + (collapsed ? ' collapsed' : '') + '" data-filter-group="' + groupId + '">' +
        '<button class="browse-filter-head" onclick="toggleBrowseFilterGroup(\'' + key + '\', \'' + groupId + '\')">' +
        '<span class="browse-filter-title">' + escapeHtml(title) + '</span>' +
        '<span class="browse-filter-chevron" aria-hidden="true">›</span>' +
        '</button>' +
        '<div class="' + bodyClass + '">' + body + '</div>' +
        '</section>'
      );
    };
    const secondary = getBrowseSecondaryRows(state.topTab)
      .map((row) => {
        const activeClass = row[0] === state.secondary ? ' active' : '';
        return renderOption('category', row[0], row[1], activeClass, 'setBrowseSecondary(\'' + key + '\', \'' + row[0] + '\')');
      })
      .join('');
    const loaders = BROWSE_LAYOUT_LOADER
      .map((row) => {
        const activeClass = row[0] === state.loader ? ' active' : '';
        return renderOption('loader', row[0], row[1], activeClass, 'setBrowseLoader(\'' + key + '\', \'' + row[0] + '\')');
      })
      .join('');
    const versionOptions = ['any'].concat(Array.isArray(state.availableVersions) ? state.availableVersions : []);
    const versions = versionOptions
      .map((value) => {
        const activeClass = value === state.version ? ' active' : '';
        const label = value === 'any' ? 'Any' : value;
        return renderOption(
          'version',
          String(value),
          label,
          activeClass,
          'setBrowseVersion(\'' + key + '\', \'' + escapeHtml(String(value)) + '\')'
        );
      })
      .join('');
    filters.innerHTML =
      renderGroup('category', 'Category', secondary, true) +
      (browseTopTabUsesLoader(state.topTab) ? renderGroup('loader', 'Loader', loaders, false) : '') +
      renderGroup('version', 'Version', versions, true);
  }
  lucide.createIcons();
  scheduleBrowseResultsHeightSync(key, 0);

  const topLabel = getBrowseTopTabConfig(state.topTab).label;
  if (state.loading && !(state.items || []).length) {
    feed.innerHTML = '<div class="browse-feed-state">Loading catalog...</div>';
    if (paginationEl) paginationEl.innerHTML = '';
    if (paginationBottomEl) paginationBottomEl.innerHTML = '';
    updateBrowseProviderStatus(key, topLabel + ' - Loading...');
    scheduleBrowseResultsHeightSync(key, 0);
    return;
  }
  if (state.error) {
    feed.innerHTML = '<div class="browse-feed-state"><div style="display:flex;flex-direction:column;gap:8px;align-items:center;"><div>' + escapeHtml(state.error) + '</div><button class="browse-item-btn" onclick="refreshBrowseProvider(\'' + key + '\', true)">Retry</button></div></div>';
    if (paginationEl) paginationEl.innerHTML = '';
    if (paginationBottomEl) paginationBottomEl.innerHTML = '';
    updateBrowseProviderStatus(key, topLabel + ' - Error');
    scheduleBrowseResultsHeightSync(key, 0);
    return;
  }

  const rows = getFilteredBrowseItems(key);
  if (!rows.length) {
    const query = state.query ? ' for "' + escapeHtml(state.query) + '"' : '';
    const hintedTotalRows = Math.max(0, Number(state.totalRows) || 0);
    const hintedTotalPages = Math.max(1, Math.ceil(hintedTotalRows / BROWSE_UI_PAGE_SIZE));
    if (hintedTotalRows > 0 && hintedTotalPages > 1) {
      feed.innerHTML = '<div class="browse-feed-state">No results on this page' + query + '. Try another page or adjust filters.</div>';
      const paginationMarkup = renderBrowsePagination(key, state.page, hintedTotalPages);
      if (paginationEl) paginationEl.innerHTML = paginationMarkup;
      if (paginationBottomEl) paginationBottomEl.innerHTML = paginationMarkup;
      updateBrowseProviderStatus(key, topLabel + ' - ' + hintedTotalRows);
    } else {
      feed.innerHTML = '<div class="browse-feed-state">No results' + query + '.</div>';
      if (paginationEl) paginationEl.innerHTML = '';
      if (paginationBottomEl) paginationBottomEl.innerHTML = '';
      updateBrowseProviderStatus(key, topLabel + ' - 0');
    }
    scheduleBrowseResultsHeightSync(key, 0);
    return;
  }
  const totalRows = Math.max(rows.length, Number(state.totalRows) || 0);
  const totalPages = Math.max(1, Math.ceil(totalRows / BROWSE_UI_PAGE_SIZE));
  if (!Number.isFinite(Number(state.page)) || Number(state.page) < 1) state.page = 1;
  if (state.page > totalPages) state.page = totalPages;

  feed.innerHTML = rows.map((item, index) => {
    const title = escapeHtml(item.title || 'Untitled');
    const desc = escapeHtml(item.description || 'No description');
    const downloads = escapeHtml(formatCompactNumber(item.downloads || 0));
    const updated = escapeHtml(formatRelativeDate(item.updatedAt));
    const encodedUrl = encodeURIComponent(String(item.url || '').trim());
    const encodedItemId = encodeURIComponent(String(item.id || '').trim());
    const safeIcon = escapeHtml(String(item.iconUrl || '').trim());
    const safeHero = escapeHtml(String(item.heroImage || '').trim());
    const fallbackHero = escapeHtml(BROWSE_NO_IMAGE_PATH);
    const fallbackLetter = escapeHtml(String(item.title || 'M').charAt(0).toUpperCase() || 'M');
    const fallbackPair = escapeHtml(
      String(item.title || '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('') || fallbackLetter
    );
    const iconMarkup = safeIcon
      ? '<img class="browse-item-logo-img" src="' + safeIcon + '" loading="lazy" alt="' + title + '">'
      : '<span class="browse-item-logo-fallback">' + fallbackPair + '</span>';
    const heroMarkup = safeHero
      ? '<img class="browse-item-hero-img" src="' + safeHero + '" loading="lazy" alt="' + title + '" onerror="this.onerror=null;this.classList.add(\'browse-item-hero-placeholder\');this.src=\'' + fallbackHero + '\'">'
      : safeIcon
        ? '<img class="browse-item-hero-img browse-item-hero-derived" src="' + safeIcon + '" loading="lazy" alt="' + title + '" onerror="this.onerror=null;this.classList.remove(\'browse-item-hero-derived\');this.classList.add(\'browse-item-hero-placeholder\');this.src=\'' + fallbackHero + '\'">'
        : '<img class="browse-item-hero-img browse-item-hero-placeholder" src="' + fallbackHero + '" loading="lazy" alt="' + title + '">';
    const versionMarkup = cleanBrowseVersions(item.versions || [], 2).map((v) => '<span class="browse-version-chip">' + escapeHtml(v) + '</span>').join('');
    const loaderMarkup = cleanBrowseVersions(item.loaders || [], 2).map((v) => '<span class="browse-version-chip">' + escapeHtml(v) + '</span>').join('');
    return (
      '<div class="browse-item browse-item-provider-' + key + '" style="--bidx:' + String(index) + '">' +
      heroMarkup +
      '<div class="browse-item-hero-shade"></div>' +
      '<div class="browse-item-layer">' +
      '<div class="browse-item-logo">' + iconMarkup + '</div>' +
      '<div class="browse-item-content">' +
      '<div class="browse-item-headline">' +
      '<div class="browse-item-title">' + title + '</div>' +
      '</div>' +
      '<div class="browse-item-desc">' + desc + '</div>' +
      '<div class="browse-item-meta"><span><i data-lucide="download" width="10" height="10"></i>' + downloads + '</span><span><i data-lucide="clock-3" width="10" height="10"></i>' + updated + '</span>' + loaderMarkup + versionMarkup + '</div>' +
      '</div>' +
      '<div class="browse-item-actions">' +
      '<button class="browse-item-btn browse-item-btn-detail" onclick="openBrowseItemFromFeed(\'' + encodedUrl + '\')"><i data-lucide="external-link" width="12" height="12"></i><span>Open</span></button>' +
      '<button class="browse-item-btn browse-item-btn-install" onclick="installBrowseItemFromFeed(this, \'' + key + '\', \'' + encodedItemId + '\')"><i data-lucide="download" width="12" height="12"></i><span>Install</span></button>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }).join('');

  const paginationMarkup = renderBrowsePagination(key, state.page, totalPages);
  if (paginationEl) paginationEl.innerHTML = paginationMarkup;
  if (paginationBottomEl) paginationBottomEl.innerHTML = paginationMarkup;
  updateBrowseProviderStatus(key, topLabel + ' - ' + totalRows);
  sanitizeMojibakeDom(feed);
  lucide.createIcons();
  scheduleBrowseResultsHeightSync(key, 0);
}

async function ensureBrowseProviderLoaded(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  renderBrowseProviderFeed(key);
  if (state.loaded || state.loading) return;
  await refreshBrowseProvider(key, true);
}

async function refreshBrowseProvider(provider, force) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  if (state.loading) return;
  if (!force && state.loaded && !state.error) {
    renderBrowseProviderFeed(key);
    return;
  }
  state.loading = true;
  state.error = '';
  renderBrowseProviderFeed(key);
  try {
    const payload = await fetchBrowseProviderItems(
      key,
      buildBrowseRemoteQuery(state),
      state.topTab,
      state.page,
      {
        loader: state.loader,
        version: state.version,
      }
    );
    const items = payload && Array.isArray(payload.items) ? payload.items : [];
    const totalRows = payload && Number.isFinite(Number(payload.totalRows)) ? Number(payload.totalRows) : 0;
    state.items = items;
    state.totalRows = totalRows;
    state.loaded = true;
    const globalVersions = await ensureBrowseGlobalMinecraftVersions();
    const versions = cleanBrowseVersions(
      (state.items || []).flatMap((item) => (item.versions || [])).concat(globalVersions),
      BROWSE_VERSION_LIMIT
    );
    versions.sort(compareMcVersionDesc);
    state.availableVersions = versions;
    if (state.version !== 'any' && !state.availableVersions.includes(state.version)) state.version = 'any';
  } catch (err) {
    state.error = err && err.message ? String(err.message) : 'Failed to load catalog';
  } finally {
    state.loading = false;
    renderBrowseProviderFeed(key);
  }
}

function onBrowseSearchInput(provider, value) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  if (!state) return;
  state.query = String(value || '').trim();
  state.page = 1;
  state.totalRows = 0;
  const pending = BROWSE_SEARCH_TIMERS[key];
  if (pending) clearTimeout(pending);
  BROWSE_SEARCH_TIMERS[key] = setTimeout(() => {
    void refreshBrowseProvider(key, true);
  }, BROWSE_SEARCH_DEBOUNCE_MS);
}

async function openBrowseProviderWebsite(provider) {
  const key = String(provider || '').trim().toLowerCase();
  const state = ensureBrowseLayoutState(key);
  const topTab = getBrowseTopTabConfig(state ? state.topTab : 'modpacks').id;
  const urlMap = {
    modrinth: {
      mods: 'https://modrinth.com/mods',
      modpacks: 'https://modrinth.com/modpacks',
      resourcepacks: 'https://modrinth.com/resourcepacks',
      shaders: 'https://modrinth.com/shaders',
    },
    curseforge: {
      mods: 'https://www.curseforge.com/minecraft/mc-mods',
      modpacks: 'https://www.curseforge.com/minecraft/modpacks',
      resourcepacks: 'https://www.curseforge.com/minecraft/texture-packs',
      shaders: 'https://www.curseforge.com/minecraft/shaders',
    },
  };
  const target = (urlMap[key] && urlMap[key][topTab]) || '';
  if (!target) {
    showToast('!', 'Unknown provider', 'Unsupported browse provider');
    return false;
  }
  const opened = await openExternalHttpUrl(target);
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open browser automatically');
    return false;
  }
  return true;
}

function formatMicrosoftDeviceSeconds(totalSeconds) {
  const value = Number(totalSeconds || 0);
  if (!Number.isFinite(value) || value <= 0) return '0s';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  if (minutes <= 0) return String(seconds) + 's';
  return String(minutes) + 'm ' + String(seconds) + 's';
}

function buildMicrosoftQrImageUrl(payload) {
  const data = String(payload || '').trim();
  if (!data) return '';
  return 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&data=' + encodeURIComponent(data);
}

function setMicrosoftDeviceStatus(text, isError) {
  const statusEl = document.getElementById('ms-device-status');
  if (!statusEl) return;
  statusEl.textContent = String(text || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function updateMicrosoftDeviceModalContent() {
  const code = String(MICROSOFT_DEVICE_STATE.userCode || '').trim() || '--------';
  const verificationUri = String(MICROSOFT_DEVICE_STATE.verificationUri || 'https://www.microsoft.com/link').trim() || 'https://www.microsoft.com/link';
  const verificationUriComplete = String(MICROSOFT_DEVICE_STATE.verificationUriComplete || '').trim();
  const qrPayload = verificationUriComplete || (verificationUri + '?otc=' + encodeURIComponent(code));
  const qrImageUrl = buildMicrosoftQrImageUrl(qrPayload);

  const codeEls = ['ms-link-code', 'ms-link-inline-code', 'ms-device-user-code'];
  codeEls.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = code;
  });

  const linkEls = ['ms-link-url', 'ms-device-link-url'];
  linkEls.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = verificationUri;
    el.href = verificationUri;
  });

  const qrImgEl = document.getElementById('ms-link-qr-image');
  const qrFallbackEl = document.getElementById('ms-link-qr-fallback');
  const heroQrImgEl = document.getElementById('ms-device-hero-qr-image');
  const heroQrFallbackEl = document.getElementById('ms-device-hero-qr-fallback');
  const applyQrState = (imgEl, fallbackEl) => {
    if (!imgEl) return;
    if (qrImageUrl) {
      imgEl.src = qrImageUrl;
      imgEl.style.display = 'block';
      imgEl.onerror = () => {
        imgEl.style.display = 'none';
        if (fallbackEl) fallbackEl.style.display = 'flex';
      };
      if (fallbackEl) fallbackEl.style.display = 'none';
    } else {
      imgEl.removeAttribute('src');
      imgEl.style.display = 'none';
      if (fallbackEl) fallbackEl.style.display = 'flex';
    }
  };
  applyQrState(qrImgEl, qrFallbackEl);
  applyQrState(heroQrImgEl, heroQrFallbackEl);

  const openBtns = ['ms-link-open-btn', 'ms-device-open-btn'];
  openBtns.forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const disabled = !MICROSOFT_DEVICE_STATE.sessionId || MICROSOFT_DEVICE_STATE.loading;
    btn.disabled = disabled;
    btn.style.opacity = disabled ? '0.7' : '1';
    btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
  });
}

function stopMicrosoftDeviceCodePolling() {
  MICROSOFT_DEVICE_POLL_BUSY = false;
  clearMicrosoftAuthPoll();
}

async function pollMicrosoftDeviceCodeLogin() {
  if (MICROSOFT_DEVICE_POLL_BUSY) return;
  const sessionId = String(MICROSOFT_DEVICE_STATE.sessionId || '').trim();
  if (!sessionId) return;
  MICROSOFT_DEVICE_POLL_BUSY = true;
  try {
    const pollRes = await invokeBackend('poll_microsoft_device_code_login', {
      request: { sessionId },
    });
    if (!pollRes.ok || !pollRes.data) {
      const reason = formatBackendError(pollRes.error, 'Could not check Microsoft sign-in status');
      setMicrosoftDeviceStatus(reason, true);
      return;
    }

    const status = String(pollRes.data.status || '').trim().toLowerCase();
    if (status === 'authorized') {
      stopMicrosoftDeviceCodePolling();
      const profileName = pollRes.data.profile && pollRes.data.profile.name
        ? String(pollRes.data.profile.name)
        : 'Microsoft profile';
      await completeMicrosoftLinkSuccess(profileName);
      return;
    }

    if (status === 'pending') {
      const expiresAt = Number(MICROSOFT_DEVICE_STATE.expiresAtEpoch || 0) || 0;
      const remaining = expiresAt > 0 ? Math.max(0, expiresAt - Math.floor(Date.now() / 1000)) : 0;
      const nextPoll = Number(pollRes.data.nextPollAfterSeconds || pollRes.data.next_poll_after_seconds || MICROSOFT_DEVICE_STATE.intervalSeconds || 5) || 5;
      setMicrosoftDeviceStatus(
        remaining > 0
          ? 'Waiting for approval... expires in ' + formatMicrosoftDeviceSeconds(remaining) + ' (checks every ' + String(nextPoll) + 's)'
          : 'Waiting for approval...',
        false
      );
      return;
    }

    if (status === 'denied' || status === 'expired') {
      stopMicrosoftDeviceCodePolling();
      const reason = String(pollRes.data.reason || '').trim() || (status === 'expired' ? 'Device code expired' : 'Sign-in was denied');
      setMicrosoftDeviceStatus(reason, true);
      showToast('!', status === 'expired' ? 'Code expired' : 'Sign-in denied', reason);
      return;
    }

    setMicrosoftDeviceStatus('Unknown sign-in status: ' + status, true);
  } finally {
    MICROSOFT_DEVICE_POLL_BUSY = false;
  }
}

function startMicrosoftDeviceCodePolling() {
  stopMicrosoftDeviceCodePolling();
  const intervalMs = Math.max(2, Number(MICROSOFT_DEVICE_STATE.intervalSeconds || 5)) * 1000;
  MICROSOFT_AUTH_POLL = setInterval(() => {
    void pollMicrosoftDeviceCodeLogin();
  }, intervalMs);
}

async function refreshMicrosoftDeviceCodeFlow(showNewCodeToast) {
  if (MICROSOFT_DEVICE_STATE.loading) return;
  MICROSOFT_DEVICE_STATE.loading = true;
  stopMicrosoftDeviceCodePolling();
  setMicrosoftDeviceStatus('Requesting Microsoft link code...', false);
  updateMicrosoftDeviceModalContent();

  const startRes = await invokeBackend('start_microsoft_device_code_login', {
    request: {},
  });
  MICROSOFT_DEVICE_STATE.loading = false;
  if (!startRes.ok || !startRes.data) {
    const reason = formatBackendError(startRes.error, 'Could not request Microsoft link code');
    setMicrosoftDeviceStatus(reason, true);
    showToast('!', 'Microsoft code failed', reason);
    updateMicrosoftDeviceModalContent();
    return;
  }

  MICROSOFT_DEVICE_STATE.sessionId = String(startRes.data.sessionId || startRes.data.session_id || '').trim();
  MICROSOFT_DEVICE_STATE.userCode = String(startRes.data.userCode || startRes.data.user_code || '').trim();
  MICROSOFT_DEVICE_STATE.verificationUri = String(startRes.data.verificationUri || startRes.data.verification_uri || 'https://www.microsoft.com/link').trim();
  MICROSOFT_DEVICE_STATE.verificationUriComplete = String(startRes.data.verificationUriComplete || startRes.data.verification_uri_complete || '').trim();
  MICROSOFT_DEVICE_STATE.intervalSeconds = Number(startRes.data.intervalSeconds || startRes.data.interval_seconds || 5) || 5;
  MICROSOFT_DEVICE_STATE.expiresAtEpoch = Number(startRes.data.expiresAtEpoch || startRes.data.expires_at_epoch || 0) || 0;

  updateMicrosoftDeviceModalContent();
  startMicrosoftDeviceCodePolling();
  void pollMicrosoftDeviceCodeLogin();
  const remaining = MICROSOFT_DEVICE_STATE.expiresAtEpoch > 0
    ? Math.max(0, MICROSOFT_DEVICE_STATE.expiresAtEpoch - Math.floor(Date.now() / 1000))
    : 0;
  setMicrosoftDeviceStatus(
    'Code ready. Expires in ' + formatMicrosoftDeviceSeconds(remaining) + '. Open link and approve.',
    false
  );
  if (showNewCodeToast) {
    showToast('OK', 'New code generated', MICROSOFT_DEVICE_STATE.userCode || 'Microsoft link code');
  }
}

async function copyMicrosoftDeviceCode(showSuccessToast) {
  const code = String(MICROSOFT_DEVICE_STATE.userCode || '').trim();
  if (!code) {
    showToast('!', 'Missing code', 'Generate Microsoft link code first');
    return false;
  }
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(code);
      if (showSuccessToast) showToast('OK', 'Copied', 'Microsoft code copied');
      return true;
    } catch (err) {
      console.warn('[ms-device] clipboard write failed', err);
    }
  }
  showToast('!', 'Clipboard unavailable', code);
  return false;
}

async function openMicrosoftDeviceLinkOnly() {
  const target = String(MICROSOFT_DEVICE_STATE.verificationUri || 'https://www.microsoft.com/link').trim();
  const opened = await openExternalHttpUrl(target);
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open microsoft.com/link automatically');
    return false;
  }
  return true;
}

async function openMicrosoftDeviceLinkAndCopy() {
  const sessionId = String(MICROSOFT_DEVICE_STATE.sessionId || '').trim();
  if (!sessionId) {
    await refreshMicrosoftDeviceCodeFlow(false);
    if (!String(MICROSOFT_DEVICE_STATE.sessionId || '').trim()) return;
  }
  const target = String(MICROSOFT_DEVICE_STATE.verificationUriComplete || MICROSOFT_DEVICE_STATE.verificationUri || 'https://www.microsoft.com/link').trim();
  const opened = await openExternalHttpUrl(target);
  const copied = await copyMicrosoftDeviceCode(false);
  if (opened && copied) {
    showToast('MS', 'Link opened', 'Browser opened and code copied');
  } else if (opened) {
    showToast('MS', 'Link opened', 'Browser opened. Copy code manually from the card.');
  } else if (copied) {
    showToast('MS', 'Copied', 'Code copied. Open microsoft.com/link manually.');
  } else {
    showToast('!', 'Open failed', 'Could not open link or copy code automatically');
  }
}

async function hydrateMicrosoftLinkModal() {
  updateMicrosoftDeviceModalContent();
  const nowEpoch = Math.floor(Date.now() / 1000);
  const stillValid = String(MICROSOFT_DEVICE_STATE.sessionId || '').trim()
    && Number(MICROSOFT_DEVICE_STATE.expiresAtEpoch || 0) > nowEpoch + 12;
  if (stillValid) {
    startMicrosoftDeviceCodePolling();
    void pollMicrosoftDeviceCodeLogin();
    return;
  }
  await refreshMicrosoftDeviceCodeFlow(false);
}

async function startMicrosoftLoginFlow() {
  await refreshMicrosoftDeviceCodeFlow(false);
  await openMicrosoftDeviceLinkAndCopy();
}

// Debug helpers for deep-link smoke tests (call from devtools if needed)
window.orbiqDebugDeepLink = function (url) {
  const value = String(url || '').trim();
  if (!value) return false;
  void handleOrbiqDeepLink(value);
  return true;
};
window.orbiqGetLastMicrosoftAuthUrl = function () {
  return String(window.__ORBIQ_LAST_MS_AUTH_URL || '');
};

function showToast(icon, title, msg, action) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  const normalizedIcon = normalizeMojibakeText(String(icon || '')).trim();
  const iconToken = /^[A-Za-z0-9+*!?.-]{1,3}$/.test(normalizedIcon) ? normalizedIcon : '';
  const safeIcon = escapeHtml(iconToken || '*');
  const safeTitle = escapeHtml(normalizeMojibakeText(String(title || '')));
  const safeMsg = escapeHtml(normalizeMojibakeText(String(msg || '')));
  t.className = 'toast';
  t.innerHTML = `<span style="font-size:16px">${safeIcon}</span><div style="flex:1;min-width:0"><div style="font-size:11.5px;font-weight:700;color:var(--t1);margin-bottom:1px">${safeTitle}</div><div style="font-size:10.5px;color:var(--t3)">${safeMsg}</div></div>`;
  if (action && typeof action === 'object' && typeof action.label === 'string' && action.label.trim()) {
    const button = document.createElement('button');
    button.className = 'btn btn-ghost';
    button.style.height = '24px';
    button.style.padding = '0 8px';
    button.style.fontSize = '10px';
    button.style.marginLeft = '6px';
    button.textContent = action.label.trim();
    button.addEventListener('click', () => {
      try {
        if (typeof action.onClick === 'function') action.onClick();
      } catch (err) {
        console.warn('toast action failed', err);
      }
    });
    t.appendChild(button);
  }
  c.appendChild(t);
  sanitizeMojibakeDom(t);
  setTimeout(() => {
    t.classList.add('removing');
    t.addEventListener('animationend', () => t.remove(), {once:true});
  }, 3200);
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// LAUNCH SEQUENCE
// Bug fix: launchSequence now opens profile picker first.
// doLaunchSequence was missing `const fill` declaration ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½?" fixed.
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
async function launchSequence() {
  await refreshProfilesFromBackend();
  openModal('profile-select-launch');
}

function openProvisionOverlay(instanceName, subtitle) {
  if (ACTIVE_PROVISION && ACTIVE_PROVISION.overlay) ACTIVE_PROVISION.overlay.remove();

  ACTIVE_PROVISION = {
    instanceName,
    overlay: null,
    fill: null,
    label: null,
    stageEl: null,
    percentEl: null,
    percent: 0,
    lastLifecycleState: null,
    lastLifecyclePayload: null,
    cancelRequested: false,
    launchRequested: false,
    killRequested: false,
    stageText: 'Preparing',
    labelText: 'Preparing runtime...',
    hidden: true,
  };

  setLaunchOverlayProgress(6, 'Preparing runtime...', true, 'Preparing');
  syncDetailLaunchProgress();
}
function dismissProvisionOverlay(btn) {
  if (!ACTIVE_PROVISION) return;
  ACTIVE_PROVISION.hidden = true;
  syncDetailLaunchProgress();
}

async function cancelProvisionLaunch(btn) {
  if (!ACTIVE_PROVISION) {
    return;
  }

  const active = ACTIVE_PROVISION;
  if (active.cancelRequested) return;
  active.cancelRequested = true;
  active.hidden = true;
  active.stageText = 'Canceling';
  active.labelText = 'Cancel requested...';
  if (active.stageEl) active.stageEl.textContent = 'Canceling';
  if (active.label) active.label.textContent = 'Cancel requested...';

  if (btn) {
    const isPrimaryLaunchButton = btn.id === 'launch-or-kill-btn';
    if (!isPrimaryLaunchButton) {
      btn.disabled = true;
      btn.style.opacity = '0.65';
      btn.style.cursor = 'not-allowed';
    }
  }
  if (active.overlay) active.overlay.remove();
  active.overlay = null;
  active.fill = null;
  active.label = null;
  active.stageEl = null;
  active.percentEl = null;
  syncDetailLaunchProgress();

  showToast('STOP', 'Cancel requested', active.instanceName + ' launch will stop');

  if (active.launchRequested && !active.killRequested) {
    active.killRequested = true;
    const killRes = await invokeBackend('kill_instance', { request: { instanceName: active.instanceName } });
    if (!killRes.ok) {
      console.warn('[launch] cancel kill_instance failed', killRes.error);
    }
  }
}

function finishProvisionOverlay(icon, title, message) {
  if (!ACTIVE_PROVISION) return;
  const active = ACTIVE_PROVISION;
  setLaunchOverlayProgress(100, message, true, 'Ready');
  const finalize = () => {
    if (ACTIVE_PROVISION === active) ACTIVE_PROVISION = null;
    syncDetailLaunchProgress();
    showToast(icon, title, message);
  };
  if (active.overlay) {
    const overlay = active.overlay;
    setTimeout(() => {
      overlay.classList.add('hiding');
      overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
      finalize();
    }, 550);
    return;
  }
  finalize();
}

function failProvisionOverlay(message, title) {
  if (!ACTIVE_PROVISION) return;
  const isRelink = isAuthRelinkFailureMessage(message);
  const isSecurityInterrupt = isAuthSecurityInterruptMessage(message);
  setLaunchOverlayProgress(
    Number.isFinite(ACTIVE_PROVISION.percent) ? ACTIVE_PROVISION.percent : 0,
    message,
    true,
    'Failed'
  );
  if (isSecurityInterrupt) {
    promptAuthSecurityInterruptGuidance('launch-fail');
  } else if (isRelink) {
    promptAuthRelinkGuidance('launch-fail');
  } else {
    showToast('!', title || 'Launch failed', message, {
      label: 'Diagnostics',
      onClick: () => openModal('diagnostics'),
    });
  }
  const active = ACTIVE_PROVISION;
  const clearState = () => {
    if (ACTIVE_PROVISION === active) ACTIVE_PROVISION = null;
    syncDetailLaunchProgress();
  };
  if (!active.overlay) {
    clearState();
    return;
  }
  setTimeout(() => {
    if (ACTIVE_PROVISION && ACTIVE_PROVISION.overlay) {
      ACTIVE_PROVISION.overlay.classList.add('hiding');
      ACTIVE_PROVISION.overlay.addEventListener(
        'animationend',
        () => ACTIVE_PROVISION && ACTIVE_PROVISION.overlay && ACTIVE_PROVISION.overlay.remove(),
        { once: true }
      );
    }
    clearState();
  }, 900);
}

function findInstanceRecordByName(rows, instanceName) {
  if (!Array.isArray(rows)) return null;
  const target = String(instanceName || '').trim().toLowerCase();
  if (!target) return null;
  return rows.find((item) => String(item && item.name ? item.name : '').trim().toLowerCase() === target) || null;
}

function formatLaunchExitMessage(instanceRow) {
  if (!instanceRow || typeof instanceRow !== 'object') {
    return 'Minecraft process exited during startup';
  }
  if (instanceRow.lastExitReason) return String(instanceRow.lastExitReason);
  if (typeof instanceRow.lastExitCode === 'number') {
    return 'Minecraft exited with code ' + instanceRow.lastExitCode;
  }
  if (instanceRow.lastExitState) {
    return 'Minecraft stopped: ' + String(instanceRow.lastExitState);
  }
  return 'Minecraft process exited during startup';
}

function isActiveProvisionCanceled(instanceName) {
  if (!ACTIVE_PROVISION || ACTIVE_PROVISION.instanceName !== instanceName) return true;
  return !!ACTIVE_PROVISION.cancelRequested;
}

async function finalizeCanceledLaunch(instanceName, killProcess) {
  const active = ACTIVE_PROVISION && ACTIVE_PROVISION.instanceName === instanceName ? ACTIVE_PROVISION : null;
  const needsKill = !!killProcess && !(active && active.killRequested);
  if (needsKill) {
    if (active) active.killRequested = true;
    const killRes = await invokeBackend('kill_instance', { request: { instanceName } });
    if (!killRes.ok) {
      console.warn('[launch] finalize cancellation kill_instance failed', killRes.error);
    }
  }
  if (ACTIVE_PROVISION && ACTIVE_PROVISION.instanceName === instanceName) {
    ACTIVE_PROVISION = null;
  }
  syncDetailLaunchProgress();
  await refreshInstancesFromBackend(true);
}

async function waitForLaunchStartup(instanceName, launchStartedAtMs) {
  let stableRunningCount = 0;
  const deadline = Date.now() + LAUNCH_STARTUP_TIMEOUT_MS;
  const launchStartedAt = Number.isFinite(launchStartedAtMs) ? launchStartedAtMs : Date.now();

  while (Date.now() < deadline) {
    if (isActiveProvisionCanceled(instanceName)) {
      return { ok: false, canceled: true, error: 'Launch was canceled' };
    }

    if (ACTIVE_PROVISION.lastLifecycleState === 'failed') {
      return {
        ok: false,
        error: lifecycleFailureMessage(ACTIVE_PROVISION.lastLifecyclePayload),
      };
    }

    const listRes = await invokeBackend('list_instances');
    if (!listRes.ok || !Array.isArray(listRes.data)) {
      setLaunchOverlayProgress(96, 'Checking process state...', false, 'Verifying');
      await sleepMs(LAUNCH_STARTUP_POLL_MS);
      continue;
    }

    const instanceRow = findInstanceRecordByName(listRes.data, instanceName);
    if (!instanceRow) {
      return { ok: false, error: 'Instance not found after launch' };
    }

    if (instanceRow.running) {
      stableRunningCount += 1;
      const aliveMs = Math.max(0, Date.now() - launchStartedAt);
      const aliveGateMet = aliveMs >= LAUNCH_READY_MIN_ALIVE_MS;
      const stabilityProgress = 95 + Math.min(3, stableRunningCount);
      const aliveProgress = 95 + Math.min(4, Math.floor((aliveMs / LAUNCH_READY_MIN_ALIVE_MS) * 4));
      const overlayProgress = Math.min(99, Math.max(stabilityProgress, aliveProgress));
      const remainingSecs = Math.max(0, Math.ceil((LAUNCH_READY_MIN_ALIVE_MS - aliveMs) / 1000));

      setLaunchOverlayProgress(
        overlayProgress,
        aliveGateMet && stableRunningCount >= LAUNCH_STABLE_POLLS
          ? 'Minecraft is running'
          : remainingSecs > 0
            ? 'Minecraft started. Finalizing startup... ' + remainingSecs + 's'
            : 'Minecraft started. Finalizing startup...',
        false,
        aliveGateMet && stableRunningCount >= LAUNCH_STABLE_POLLS ? 'Ready' : 'Finalizing'
      );
      if (stableRunningCount >= LAUNCH_STABLE_POLLS && aliveGateMet) {
        return { ok: true };
      }
    } else {
      stableRunningCount = 0;
      if (instanceRow.lastExitState || instanceRow.lastExitReason || typeof instanceRow.lastExitCode === 'number') {
        return { ok: false, error: formatLaunchExitMessage(instanceRow) };
      }
      setLaunchOverlayProgress(95, 'Process started. Waiting for state...', false, 'Launching');
    }

    await sleepMs(LAUNCH_STARTUP_POLL_MS);
  }

  return { ok: false, error: 'Timed out while waiting for Minecraft to start' };
}

async function getMissingRequiredTrackedInstalls(instanceName) {
  const key = String(instanceName || '').trim();
  if (!key) return [];
  const rows = getTrackedInstallsForInstance(key);
  const hydrated = await resolveTrackedInstallMissingState(key, rows);
  return hydrated.filter((row) => row && row.required && row.missing);
}

function setLaunchMissingDialogStatus(text, isError) {
  const el = document.getElementById('launch-missing-status');
  if (!el) return;
  el.textContent = String(text || '');
  el.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function hydrateLaunchMissingDialogModal() {
  const state = LAUNCH_MISSING_DIALOG_STATE;
  const listEl = document.getElementById('launch-missing-list');
  if (!state || !listEl) return;
  const rows = Array.isArray(state.rows) ? state.rows : [];
  if (!rows.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No missing required files.</div>';
    setLaunchMissingDialogStatus('No missing files detected.', false);
    return;
  }
  listEl.innerHTML = rows
    .map((row) => {
      const hasSource = !!String(row && row.url ? row.url : '').trim();
      const sourceChip = hasSource
        ? '<span style="padding:1px 6px;border-radius:999px;border:1px solid rgba(70,150,90,0.35);font-size:9px;font-family:var(--mono);color:#67b37a">Auto Install</span>'
        : '<span style="padding:1px 6px;border-radius:999px;border:1px solid rgba(220,80,80,0.4);font-size:9px;font-family:var(--mono);color:#d56f6f">No Source URL</span>';
      return (
        '<div class="list-item" style="align-items:flex-start;gap:8px">' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
        escapeHtml(row.title || row.fileName || 'Dependency') +
        '</div>' +
        '<div style="margin-top:2px;font-size:10px;font-family:var(--mono);color:var(--t4)">' +
        escapeHtml(getBrowseInstallTargetLabel(row.target)) +
        '</div>' +
        '<div style="margin-top:4px;font-size:9.5px;font-family:var(--mono);color:var(--t4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
        escapeHtml(row.fileName || '') +
        '</div>' +
        '<div style="margin-top:6px">' + sourceChip + '</div>' +
        '</div>' +
        '</div>'
      );
    })
    .join('');
  const installableCount = rows.filter((row) => !!String(row && row.url ? row.url : '').trim()).length;
  const installBtn = document.getElementById('launch-missing-install-btn');
  if (installBtn) {
    installBtn.disabled = installableCount === 0 || !!state.busy;
    installBtn.innerHTML = state.busy
      ? '<i data-lucide="loader-circle" width="12" height="12"></i>Installing...'
      : '<i data-lucide="download" width="12" height="12"></i>Install Missing' + (installableCount > 0 ? ' (' + String(installableCount) + ')' : '');
  }
  const anywayBtn = document.getElementById('launch-missing-anyway-btn');
  if (anywayBtn) anywayBtn.disabled = !!state.busy;
  setLaunchMissingDialogStatus(
    'Missing required files: ' + String(rows.length) + (installableCount < rows.length ? ' (' + String(rows.length - installableCount) + ' need manual install)' : ''),
    installableCount < rows.length
  );
  lucide.createIcons();
}

function resolveLaunchMissingDialog(decision) {
  const state = LAUNCH_MISSING_DIALOG_STATE;
  if (!state || state.settled) return;
  state.settled = true;
  const resolver = state.resolve;
  LAUNCH_MISSING_DIALOG_STATE = null;
  closeModal();
  if (typeof resolver === 'function') resolver(decision);
}

function cancelLaunchMissingDialog() {
  resolveLaunchMissingDialog('cancel');
}

function proceedLaunchWithMissingDialog() {
  resolveLaunchMissingDialog('continue');
}

async function installMissingAndContinueLaunch() {
  const state = LAUNCH_MISSING_DIALOG_STATE;
  if (!state || state.busy) return;
  state.busy = true;
  hydrateLaunchMissingDialogModal();
  const installable = (state.rows || []).filter((row) => !!String(row && row.url ? row.url : '').trim());
  if (!installable.length) {
    state.busy = false;
    hydrateLaunchMissingDialogModal();
    setLaunchMissingDialogStatus('Cannot auto-install: source URL is missing for all items.', true);
    return;
  }

  const outcome = await installTrackedRowsToInstance(state.instanceName, installable, 'overwrite', (index, total, row, phase) => {
    const title = String(row && (row.title || row.fileName) ? (row.title || row.fileName) : 'Item');
    if (phase === 'working') {
      setLaunchMissingDialogStatus(
        'Installing ' + String(index + 1) + '/' + String(total) + ': ' + title,
        false
      );
    }
  });
  const remaining = await getMissingRequiredTrackedInstalls(state.instanceName);
  state.rows = remaining;
  state.busy = false;
  hydrateLaunchMissingDialogModal();
  if (remaining.length > 0) {
    setLaunchMissingDialogStatus(
      'Still missing ' + String(remaining.length) + ' required file(s). Install manually or launch anyway.',
      true
    );
    return;
  }
  if (outcome.failed > 0 || outcome.unresolved > 0) {
    setLaunchMissingDialogStatus('Some items failed but required set is now satisfied.', false);
  }
  resolveLaunchMissingDialog('continue');
}

function openLaunchMissingDialog(instanceName, missingRows) {
  return new Promise((resolve) => {
    LAUNCH_MISSING_DIALOG_STATE = {
      instanceName: String(instanceName || '').trim(),
      rows: Array.isArray(missingRows) ? missingRows.slice() : [],
      busy: false,
      settled: false,
      resolve,
    };
    openModal('launch-missing-required');
  });
}

function setDiagnosticsLaunchContext(instanceName, profileId, profileName, version) {
  DIAGNOSTICS_STATE.lastLaunchRequest = {
    instanceName: String(instanceName || ''),
    profileId: String(profileId || ''),
    profileName: String(profileName || ''),
    version: String(version || ''),
    at: new Date().toISOString(),
  };
}

function setDiagnosticsLastLaunchCommand(command, payload) {
  DIAGNOSTICS_STATE.lastLaunchCommand = {
    command: String(command || ''),
    payload: payload || {},
    at: new Date().toISOString(),
  };
}

function hydrateDiagnosticsModal() {
  const latestEl = document.getElementById('diagnostics-latest-error');
  const launchEl = document.getElementById('diagnostics-last-launch');
  const statusEl = document.getElementById('diagnostics-export-status');
  if (latestEl) {
    const latest = DIAGNOSTICS_STATE.latestError;
    if (!latest) {
      latestEl.textContent = 'No backend errors captured in this session.';
    } else {
      latestEl.textContent =
        'Code: ' + String(latest.code || 'N/A') + '\n' +
        'Command: ' + String(latest.command || 'unknown') + '\n' +
        'Time: ' + String(latest.at || '-') + '\n' +
        'Message: ' + String(latest.message || latest.raw || '-');
    }
  }
  if (launchEl) {
    const launchContext = DIAGNOSTICS_STATE.lastLaunchRequest;
    const lastLaunchCommand = DIAGNOSTICS_STATE.lastLaunchCommand;
    if (!launchContext && !lastLaunchCommand) {
      launchEl.textContent = 'No launch context available yet.';
    } else {
      launchEl.textContent =
        'Last Launch Request:\n' + JSON.stringify(launchContext || {}, null, 2) +
        '\n\nLast Launch Command:\n' + JSON.stringify(lastLaunchCommand || {}, null, 2);
    }
  }
  if (statusEl) {
    statusEl.textContent = DIAGNOSTICS_STATE.lastBundlePath
      ? 'Last export: ' + DIAGNOSTICS_STATE.lastBundlePath
      : 'No debug bundle exported yet.';
  }
}

async function openDiagnosticsLogsFolder() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Diagnostics', 'Select an instance first to open its logs folder');
    return;
  }
  const res = await invokeBackend('open_instance_directory', {
    request: { instanceName, target: 'logs', ensureExists: true },
  });
  if (!res.ok) {
    showToast('!', 'Open logs failed', formatBackendError(res.error, 'Could not open logs folder'));
    return;
  }
  showToast('OK', 'Logs opened', instanceName + ' logs folder opened');
}

async function exportDiagnosticsBundle() {
  const statusEl = document.getElementById('diagnostics-export-status');
  if (statusEl) statusEl.textContent = 'Exporting debug bundle...';
  const instanceName = getSelectedInstanceName();
  const res = await invokeBackend('export_debug_bundle', {
    request: {
      instanceName: instanceName || null,
      includeLogs: true,
    },
  });
  if (!res.ok || !res.data) {
    const reason = formatBackendError(res.error, 'Could not export debug bundle');
    if (statusEl) statusEl.textContent = reason;
    showToast('!', 'Export failed', reason);
    return;
  }
  DIAGNOSTICS_STATE.lastBundlePath = String(res.data.path || '');
  if (statusEl) {
    statusEl.textContent =
      'Exported: ' + String(res.data.path || '') + ' (' + String(res.data.size || 0) + ' bytes)';
  }
  showToast('OK', 'Bundle exported', String(res.data.path || 'debug bundle created'));
}

function setLaunchPreflightStatus(text, isError) {
  const el = document.getElementById('launch-preflight-status');
  if (!el) return;
  el.textContent = String(text || '');
  el.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function hydrateLaunchPreflightDialogModal() {
  const state = LAUNCH_PREFLIGHT_DIALOG_STATE;
  const listEl = document.getElementById('launch-preflight-list');
  if (!state || !listEl) return;

  const issues = Array.isArray(state.issues) ? state.issues : [];
  if (!issues.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No issues detected.</div>';
  } else {
    listEl.innerHTML = issues
      .map((issue) => {
        const severity = String(issue && issue.severity ? issue.severity : 'warning').toLowerCase();
        const isBlocking = severity === 'blocking';
        const borderColor = isBlocking ? 'rgba(215,90,90,0.35)' : 'rgba(180,180,180,0.2)';
        const code = String(issue && issue.code ? issue.code : 'PREFLIGHT_UNKNOWN');
        const message = String(issue && issue.message ? issue.message : 'Issue detected');
        const action = String(issue && issue.action ? issue.action : '').trim();
        const fixable = !!(issue && issue.fixable);
        return (
          '<div style="padding:8px 10px;border:1px solid ' + borderColor + ';border-radius:8px;background:var(--s2);margin-bottom:7px">' +
          '<div style="display:flex;justify-content:space-between;gap:10px;align-items:center">' +
          '<strong style="font-size:10px;font-family:var(--mono);color:' + (isBlocking ? '#d46f6f' : 'var(--t3)') + '">' + escapeHtml(code) + '</strong>' +
          '<span style="font-size:9px;font-family:var(--mono);color:var(--t4)">' + (isBlocking ? 'blocking' : 'warning') + (fixable ? ' - fixable' : '') + '</span>' +
          '</div>' +
          '<div style="margin-top:5px;font-size:10.5px;font-family:var(--mono);color:var(--t2);line-height:1.5">' + escapeHtml(message) + '</div>' +
          (action ? '<div style="margin-top:5px;font-size:9.8px;font-family:var(--mono);color:var(--t4)">Action: ' + escapeHtml(action) + '</div>' : '') +
          '</div>'
        );
      })
      .join('');
  }

  const blockingCount = issues.filter((item) => String(item && item.severity || '').toLowerCase() === 'blocking').length;
  const fixableCount = issues.filter((item) => !!(item && item.fixable)).length;
  const continueBtn = document.getElementById('launch-preflight-anyway-btn');
  const fixBtn = document.getElementById('launch-preflight-fix-btn');
  const cancelBtn = document.getElementById('launch-preflight-cancel-btn');
  if (continueBtn) continueBtn.disabled = state.busy || blockingCount > 0;
  if (fixBtn) fixBtn.disabled = state.busy || (!issues.length);
  if (cancelBtn) cancelBtn.disabled = state.busy;
  if (fixBtn) {
    fixBtn.innerHTML = state.busy
      ? '<i data-lucide="loader-circle" width="12" height="12"></i>Fixing...'
      : '<i data-lucide="wrench" width="12" height="12"></i>Fix Now' + (fixableCount > 0 ? ' (' + String(fixableCount) + ')' : '');
  }

  if (!issues.length) {
    setLaunchPreflightStatus('No compatibility issues.', false);
  } else if (blockingCount > 0) {
    setLaunchPreflightStatus('Blocking issues: ' + String(blockingCount), true);
  } else {
    setLaunchPreflightStatus('Warnings: ' + String(issues.length), false);
  }
  lucide.createIcons();
}

function resolveLaunchPreflightDialog(decision) {
  const state = LAUNCH_PREFLIGHT_DIALOG_STATE;
  if (!state || state.settled) return;
  state.settled = true;
  const resolver = state.resolve;
  LAUNCH_PREFLIGHT_DIALOG_STATE = null;
  closeModal();
  if (typeof resolver === 'function') resolver(decision);
}

function cancelLaunchPreflightDialog() {
  resolveLaunchPreflightDialog('cancel');
}

function proceedLaunchPreflightDialog() {
  const state = LAUNCH_PREFLIGHT_DIALOG_STATE;
  if (!state || state.busy) return;
  const hasBlocking = (state.issues || []).some((row) => String(row && row.severity || '').toLowerCase() === 'blocking');
  if (hasBlocking) {
    setLaunchPreflightStatus('Resolve blocking issues first.', true);
    return;
  }
  resolveLaunchPreflightDialog('continue');
}

async function runLaunchPreflight(instanceName, profileId, profileName) {
  const res = await invokeBackend('preflight_instance_launch', {
    request: {
      instanceName: String(instanceName || ''),
      profileId: profileId || null,
      profileName: profileName || null,
    },
  });
  if (!res.ok || !res.data) {
    return {
      ok: false,
      error: formatBackendError(res.error, 'Preflight check failed'),
      issues: [],
    };
  }
  const issues = Array.isArray(res.data.issues) ? res.data.issues : [];
  return { ok: true, issues, data: res.data };
}

async function fixLaunchPreflightDialog() {
  const state = LAUNCH_PREFLIGHT_DIALOG_STATE;
  if (!state || state.busy) return;
  state.busy = true;
  hydrateLaunchPreflightDialogModal();

  const missingRequired = await getMissingRequiredTrackedInstalls(state.instanceName);
  const installable = missingRequired.filter((row) => !!String(row && row.url ? row.url : '').trim());
  if (installable.length > 0) {
    await installTrackedRowsToInstance(state.instanceName, installable, 'overwrite', (index, total, row, phase) => {
      if (phase === 'working') {
        setLaunchPreflightStatus(
          'Installing ' + String(index + 1) + '/' + String(total) + ': ' + String((row && (row.title || row.fileName)) || 'Dependency'),
          false
        );
      }
    });
  }

  const next = await runLaunchPreflight(state.instanceName, state.profileId, state.profileName);
  state.busy = false;
  if (!next.ok) {
    setLaunchPreflightStatus(next.error || 'Preflight check failed', true);
    hydrateLaunchPreflightDialogModal();
    return;
  }

  state.issues = Array.isArray(next.issues) ? next.issues.slice() : [];
  hydrateLaunchPreflightDialogModal();
  const blockingCount = state.issues.filter((row) => String(row && row.severity || '').toLowerCase() === 'blocking').length;
  if (blockingCount === 0) {
    resolveLaunchPreflightDialog('continue');
  } else {
    setLaunchPreflightStatus('Blocking issues remain: ' + String(blockingCount), true);
  }
}

function openLaunchPreflightDialog(instanceName, profileId, profileName, issues) {
  return new Promise((resolve) => {
    LAUNCH_PREFLIGHT_DIALOG_STATE = {
      instanceName: String(instanceName || '').trim(),
      profileId: profileId || '',
      profileName: profileName || '',
      issues: Array.isArray(issues) ? issues.slice() : [],
      busy: false,
      settled: false,
      resolve,
    };
    openModal('launch-preflight');
  });
}

function buildLaunchProfileCandidates(profiles, preferredId, preferredName) {
  const rows = Array.isArray(profiles) ? profiles.slice() : [];
  const ordered = [];
  const used = new Set();
  const pushCandidate = (profile) => {
    if (!profile || typeof profile !== 'object') return;
    const id = String(profile.id || '').trim().toLowerCase();
    if (!id || used.has(id)) return;
    used.add(id);
    ordered.push(profile);
  };

  const normalizedId = String(preferredId || '').trim().toLowerCase();
  if (normalizedId) {
    pushCandidate(rows.find((item) => String(item && item.id ? item.id : '').trim().toLowerCase() === normalizedId));
  }

  const normalizedName = String(preferredName || '').trim().toLowerCase();
  if (normalizedName) {
    pushCandidate(rows.find((item) => String(item && item.name ? item.name : '').trim().toLowerCase() === normalizedName));
  }

  pushCandidate(rows.find((item) => !!(item && item.active)));

  rows
    .filter((item) => String(item && item.profileType ? item.profileType : '').toLowerCase() === 'microsoft')
    .forEach(pushCandidate);
  rows
    .filter((item) => String(item && item.profileType ? item.profileType : '').toLowerCase() !== 'microsoft')
    .forEach(pushCandidate);

  return ordered;
}

async function resolveLaunchProfileForProvision(preferredId, preferredName) {
  await refreshProfilesFromBackend();
  const profiles = getRenderableProfiles();
  if (!profiles.length) {
    return { ok: false, error: 'No launch profiles are available.' };
  }

  const normalizedPreferredId = String(preferredId || '').trim().toLowerCase();
  const preferredProfile = normalizedPreferredId
    ? profiles.find((item) => String(item && item.id ? item.id : '').trim().toLowerCase() === normalizedPreferredId)
    : null;
  const activeProfile = profiles.find((item) => !!(item && item.active)) || null;
  const requireMicrosoft = String(
    (preferredProfile && preferredProfile.profileType) || (activeProfile && activeProfile.profileType) || ''
  ).toLowerCase() === 'microsoft';

  const candidates = buildLaunchProfileCandidates(profiles, preferredId, preferredName);
  let relinkError = '';
  let securityInterruptError = '';

  for (const candidate of candidates) {
    const profileType = String(candidate.profileType || '').toLowerCase();
    if (profileType !== 'microsoft') {
      if (requireMicrosoft && (relinkError || securityInterruptError)) {
        continue;
      }
      return {
        ok: true,
        profileId: String(candidate.id || ''),
        profileName: String(candidate.name || ''),
        profileType,
      };
    }

    const refreshRes = await invokeBackend('refresh_microsoft_profile_token', {
      request: { profileId: String(candidate.id || '') },
    });
    if (refreshRes.ok) {
      return {
        ok: true,
        profileId: String(candidate.id || ''),
        profileName: String(candidate.name || ''),
        profileType,
      };
    }

    const refreshError = String(refreshRes.error || '');
    if (isAuthSecurityInterruptMessage(refreshError)) {
      securityInterruptError = refreshError || securityInterruptError;
      continue;
    }
    if (isMicrosoftTokenMissingError(refreshError)) {
      relinkError = refreshError || relinkError;
      continue;
    }
    if (isAuthRelinkFailureMessage(refreshError)) {
      relinkError = refreshError || relinkError;
      continue;
    }
    return { ok: false, error: refreshError || 'Failed to refresh Microsoft session.' };
  }

  if (securityInterruptError) {
    return { ok: false, securityInterrupt: true, error: securityInterruptError };
  }
  if (relinkError) {
    return { ok: false, relinkRequired: true, error: relinkError };
  }

  return { ok: false, error: 'Could not resolve a launch profile for this instance.' };
}

async function doLaunchSequence() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const selectedProfileName = getSelectedLaunchProfileName();
  const selectedProfileId = getSelectedLaunchProfileId();
  const profileResolution = await resolveLaunchProfileForProvision(selectedProfileId, selectedProfileName);
  if (!profileResolution.ok) {
    const reason = String(profileResolution.error || 'Could not resolve launch profile');
    if (profileResolution.securityInterrupt || isAuthSecurityInterruptMessage(reason)) {
      promptAuthSecurityInterruptGuidance('launch-profile-resolution');
      showToast('MS', 'Verify Microsoft account', 'Complete account security check, then link Microsoft again.');
    } else if (profileResolution.relinkRequired || isAuthRelinkFailureMessage(reason)) {
      promptAuthRelinkGuidance('launch-profile-resolution');
      showToast('MS', 'Microsoft relink required', 'Link Microsoft again to continue launching.');
    } else {
      showToast('!', 'Profile check failed', reason, {
        label: 'Accounts',
        onClick: () => goToAccountsPage(),
      });
    }
    return;
  }

  const profileName = profileResolution.profileName || selectedProfileName;
  const profileId = profileResolution.profileId || selectedProfileId;
  const details = INSTANCE_DATA[instanceName];
  if (!details) {
    showToast('!', 'Missing instance', 'Please select a valid instance first');
    return;
  }
  setDiagnosticsLaunchContext(instanceName, profileId, profileName, details.version);

  const preflight = await runLaunchPreflight(instanceName, profileId, profileName);
  if (!preflight.ok) {
    showToast('!', 'Preflight failed', preflight.error || 'Could not run preflight', {
      label: 'Diagnostics',
      onClick: () => openModal('diagnostics'),
    });
    return;
  }
  if (preflight.issues.length > 0) {
    const decision = await openLaunchPreflightDialog(instanceName, profileId, profileName, preflight.issues);
    if (decision !== 'continue') {
      showToast('!', 'Launch canceled', 'Preflight did not pass');
      return;
    }
  }

  const missingRequired = await getMissingRequiredTrackedInstalls(instanceName);
  if (missingRequired.length > 0) {
    const decision = await openLaunchMissingDialog(instanceName, missingRequired);
    if (decision !== 'continue') {
      showToast('!', 'Launch canceled', 'Missing required files were not installed');
      return;
    }
  }

  openProvisionOverlay(instanceName, details.sub);
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  if (isActiveProvisionCanceled(instanceName)) {
    await finalizeCanceledLaunch(instanceName, false);
    return;
  }
  setLaunchOverlayProgress(8, 'Provisioning runtime files...', false, 'Provisioning');
  setDiagnosticsLastLaunchCommand('provision_instance', {
    instanceName,
    version: details.version,
    profileId,
    profileName,
    forceRedownload: false,
    maxConcurrency: 4,
  });
  const provisionRes = await invokeBackend('provision_instance', {
    request: {
      instanceName,
      version: details.version,
      profileId,
      profileName,
      forceRedownload: false,
      maxConcurrency: 4,
    },
  });
  if (isActiveProvisionCanceled(instanceName)) {
    await finalizeCanceledLaunch(instanceName, false);
    return;
  }
  if (!provisionRes.ok) {
    failProvisionOverlay(String(provisionRes.error || 'Provision command failed'), 'Provision failed');
    return;
  }

  setLaunchOverlayProgress(91, 'Provision complete. Launching Minecraft...', false, 'Provisioned');
  await refreshInstancesFromBackend(true);
  const launchOverrides = buildLaunchSettingsOverrides(instanceName);
  const launchRequest = {
    instanceName,
    profileName,
    executable: launchOverrides.executable || '',
    args: launchOverrides.args,
    workingDir: '',
  };
  if (ACTIVE_PROVISION && ACTIVE_PROVISION.instanceName === instanceName) {
    ACTIVE_PROVISION.launchRequested = false;
  }
  setDiagnosticsLastLaunchCommand('launch_instance', launchRequest);
  const launchRes = await invokeBackend('launch_instance', { request: launchRequest });
  if (launchRes.ok && ACTIVE_PROVISION && ACTIVE_PROVISION.instanceName === instanceName) {
    ACTIVE_PROVISION.launchRequested = true;
  }
  if (isActiveProvisionCanceled(instanceName)) {
    await finalizeCanceledLaunch(instanceName, !!launchRes.ok);
    return;
  }
  if (!launchRes.ok) {
    failProvisionOverlay(String(launchRes.error || 'Launch command failed'), 'Launch failed');
    await refreshInstancesFromBackend(true);
    return;
  }

  setLaunchOverlayProgress(95, 'Process created. Verifying startup...', false, 'Launching');
  const startupOutcome = await waitForLaunchStartup(instanceName, Date.now());
  if (!startupOutcome.ok) {
    if (startupOutcome.canceled) {
      await finalizeCanceledLaunch(instanceName, true);
      return;
    }
    failProvisionOverlay(startupOutcome.error || 'Minecraft failed to start', 'Launch failed');
    await refreshInstancesFromBackend(true);
    return;
  }

  const launcherSettings = getLauncherSettings();
  if (launcherSettings.closeToTray) {
    void runWindowCommand('minimize', 'plugin:window|minimize');
  }
  finishProvisionOverlay('OK', 'Game launched', instanceName + ' is now running');
  await refreshInstancesFromBackend(true);
}
function cancelLaunch(btn) {
  void cancelProvisionLaunch(btn);
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// PROFILE SELECT
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function selectLaunchProfile(el) {
  document.querySelectorAll('.profile-select-item').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// OFFLINE UUID GENERATOR
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function updateOfflineUUID(name) {
  const el = document.getElementById('offline-uuid-preview');
  if (!el) return;
  if (!name) { el.textContent = 'Enter a username to preview UUID'; return; }
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (Math.imul(31, hash) + name.charCodeAt(i)) | 0;
  const hex = Math.abs(hash).toString(16).padStart(8,'0');
  el.textContent = `OfflinePlayer:${name} - ${hex}-xxxx-3xxx-yxxx-xxxxxxxxxxxx`;
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// CONTEXT MENU
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
const ctxMenu = document.getElementById('ctx-menu');
let activeSelectMenu = null;
let activeIconPickerInput = null;
let activeIconPickerTrigger = null;
let activeGroupPicker = null;
if (ctxMenu) {
  ctxMenu.addEventListener('click', (event) => event.stopPropagation());
}

function showCtxMenu(e, target) {
  e.preventDefault();
  e.stopPropagation();
  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '170px';

  let selected = false;
  if (target && typeof target === 'object' && target.classList && target.classList.contains('instance-card')) {
    selectCard(target);
    selected = true;
  } else {
    const cardFromEvent = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('.instance-card')
      : null;
    if (cardFromEvent) {
      selectCard(cardFromEvent);
      selected = true;
    } else if (typeof target === 'string' && target.trim()) {
      selected = selectInstanceByName(target);
    }
  }

  if (!selected && !getSelectedInstanceName()) return;

  ctxMenu.innerHTML = `
    <div class="ctx-item" onclick="hideCtx();launchSequence()"><i data-lucide="play" width="12" height="12"></i>Launch</div>
    <div class="ctx-item" onclick="hideCtx();openModal('edit-instance')"><i data-lucide="pencil" width="12" height="12"></i>Edit</div>
    <div class="ctx-item" onclick="hideCtx();openSelectedInstanceFolder('root')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</div>
    <div class="ctx-item" onclick="hideCtx();openModal('manage-mods')"><i data-lucide="puzzle" width="12" height="12"></i>Mods</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();openModal('duplicate')"><i data-lucide="copy" width="12" height="12"></i>Duplicate</div>
    <div class="ctx-item" onclick="hideCtx();openModal('export')"><i data-lucide="package-open" width="12" height="12"></i>Export</div>
    <div class="ctx-item" onclick="hideCtx();openModal('share-link')"><i data-lucide="share-2" width="12" height="12"></i>Share Link</div>
    <div class="ctx-item" onclick="hideCtx();openModal('banner-picker')"><i data-lucide="image" width="12" height="12"></i>Set Banner</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();openModal('move-group')"><i data-lucide="folder-input" width="12" height="12"></i>Move to Group</div>
    <div class="ctx-item" onclick="hideCtx();openModal('server-connect')"><i data-lucide="plug" width="12" height="12"></i>Connect to Server</div>
    <div class="ctx-item" onclick="hideCtx();openModal('notes')"><i data-lucide="notebook-pen" width="12" height="12"></i>Notes</div>
    <div class="ctx-item" onclick="hideCtx();openModal('backup')"><i data-lucide="archive" width="12" height="12"></i>Backup</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger" onclick="hideCtx();openModal('delete-confirm')"><i data-lucide="trash-2" width="12" height="12"></i>Delete</div>
  `;
  ctxMenu.style.display = 'block';
  const x = Math.min(e.clientX, window.innerWidth - 185);
  const y = Math.min(e.clientY, window.innerHeight - ctxMenu.scrollHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top  = y + 'px';
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, {once:true}), 0);
}

function showInstanceInfoRowContextMenu(e, target) {
  e.preventDefault();
  e.stopPropagation();

  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const normalizedTarget = String(target || 'root').trim().toLowerCase();
  const effectiveTarget = normalizedTarget === 'worlds' || normalizedTarget === 'saves'
    ? 'worlds'
    : normalizedTarget === 'mods'
      ? 'mods'
      : 'root';
  const label = effectiveTarget === 'worlds' ? 'Worlds' : effectiveTarget === 'mods' ? 'Mods' : 'Instance';
  const manageAction = effectiveTarget === 'mods'
    ? `<div class="ctx-item" onclick="hideCtx();openModal('manage-mods')"><i data-lucide="list" width="12" height="12"></i>Manage Installed</div><div class="ctx-sep"></div>`
    : '';

  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '198px';

  ctxMenu.innerHTML = `
    ${manageAction}
    <div class="ctx-item" onclick="hideCtx();openSelectedInstanceFolder('${effectiveTarget}')"><i data-lucide="folder-open" width="12" height="12"></i>Open ${label} Folder</div>
    <div class="ctx-item" onclick="hideCtx();openSelectedInstanceFolderInTerminal('${effectiveTarget}')"><i data-lucide="terminal" width="12" height="12"></i>Open in Terminal</div>
    <div class="ctx-item" onclick="hideCtx();copySelectedInstanceFolderPath('${effectiveTarget}')"><i data-lucide="copy" width="12" height="12"></i>Copy Path</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();openSelectedInstanceFolder('root')"><i data-lucide="folder" width="12" height="12"></i>Open Instance Root</div>
  `;
  ctxMenu.style.display = 'block';

  const x = Math.min(Math.max(8, e.clientX), window.innerWidth - 206);
  const y = Math.min(Math.max(8, e.clientY), window.innerHeight - ctxMenu.scrollHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function openGroupHeaderContextMenu(e, groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) return;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '190px';

  const collapseLabel = group.collapsed ? 'Expand Group' : 'Collapse Group';
  const safeId = String(group.id || '').replace(/'/g, "\\'");
  ctxMenu.innerHTML = `
    <div class="ctx-item" onclick="hideCtx();openRenameGroupModal('${safeId}')"><i data-lucide="pencil" width="12" height="12"></i>Rename Group</div>
    <div class="ctx-item" onclick="hideCtx();cycleInstanceGroupColor('${safeId}')"><i data-lucide="palette" width="12" height="12"></i>Cycle Color</div>
    <div class="ctx-item" onclick="hideCtx();toggleInstanceGroupById('${safeId}')"><i data-lucide="chevrons-up-down" width="12" height="12"></i>${collapseLabel}</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger" onclick="hideCtx();openDeleteGroupModal('${safeId}')"><i data-lucide="trash-2" width="12" height="12"></i>Delete Group</div>
  `;
  ctxMenu.style.display = 'block';

  const anchor = e && e.currentTarget && typeof e.currentTarget.getBoundingClientRect === 'function'
    ? e.currentTarget.getBoundingClientRect()
    : null;
  if (anchor) {
    const x = Math.min(Math.max(8, Math.floor(anchor.left)), window.innerWidth - 198);
    const y = Math.min(Math.floor(anchor.bottom + 4), window.innerHeight - ctxMenu.scrollHeight - 8);
    ctxMenu.style.left = x + 'px';
    ctxMenu.style.top = y + 'px';
  } else if (e) {
    const x = Math.min(e.clientX, window.innerWidth - 198);
    const y = Math.min(e.clientY, window.innerHeight - ctxMenu.scrollHeight - 8);
    ctxMenu.style.left = x + 'px';
    ctxMenu.style.top = y + 'px';
  }
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function showSelectContextMenu(e, selectEl) {
  if (!selectEl || selectEl.disabled) return;
  e.preventDefault();
  e.stopPropagation();
  activeSelectMenu = selectEl;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;

  const options = Array.from(selectEl.options || []);
  if (options.length === 0) return;

  const groupedItems = [];
  let previousGroup = '';
  options.forEach((option, index) => {
    const rawLabel = String(option.textContent || option.label || option.value || '').trim();
    const groupMatch = rawLabel.match(/^(\d+)\.(\d+)(?:\.\d+)?$/);
    const currentGroup = groupMatch ? `${groupMatch[1]}.${groupMatch[2]}` : '';
    if (currentGroup && previousGroup && currentGroup !== previousGroup) {
      groupedItems.push('<div class="ctx-sep"></div>');
    }
    if (currentGroup) previousGroup = currentGroup;

    const selected = index === selectEl.selectedIndex ? ' selected' : '';
    const disabled = option.disabled ? ' disabled' : '';
    const label = escapeHtml(rawLabel);
    groupedItems.push(`<div class="ctx-item${selected}${disabled}" data-option-index="${index}" onclick="pickSelectMenuOption(${index})">${label}</div>`);
  });
  ctxMenu.innerHTML = groupedItems.join('');

  const rect = selectEl.getBoundingClientRect();
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.classList.add('select-menu');
  ctxMenu.style.display = 'block';
  ctxMenu.style.minWidth = Math.max(170, Math.floor(rect.width)) + 'px';
  const maxHeight = Math.max(180, window.innerHeight - 24);
  ctxMenu.style.maxHeight = maxHeight + 'px';
  ctxMenu.style.overflowY = 'auto';
  ctxMenu.style.overflowX = 'hidden';

  const menuHeight = Math.min(ctxMenu.scrollHeight, maxHeight);
  const x = Math.min(Math.max(8, Math.floor(rect.left)), window.innerWidth - Math.max(170, Math.floor(rect.width)) - 8);
  const y = Math.min(Math.floor(rect.bottom + 4), window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  const selectedItem = ctxMenu.querySelector('.ctx-item.selected');
  if (selectedItem && typeof selectedItem.scrollIntoView === 'function') {
    selectedItem.scrollIntoView({ block: 'nearest' });
  }

  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

async function openInstanceIconMenuFor(e, inputId, triggerId) {
  const input = document.getElementById(inputId);
  const trigger = document.getElementById(triggerId);
  if (!input || !trigger) return;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const icons = await ensureInstanceIconCatalog();
  const current = normalizeIconKey(input.value) || resolveDefaultInstanceIconKey();
  const selected = icons.includes(current) ? current : (icons[0] || '');
  if (!selected) return;

  if (inputId === 'edit-inst-icon-key') setEditInstanceIconSelection(selected);
  else setAddInstanceIconSelection(selected);
  activeSelectMenu = null;
  activeIconPickerInput = input;
  activeIconPickerTrigger = trigger;
  activeGroupPicker = null;

  const items = icons.map((iconKey) => {
    const selectedClass = iconKey === selected ? ' selected' : '';
    const label = escapeHtml(iconLabelFromKey(iconKey));
    const path = instanceIconPath(iconKey);
    return `<div class="ctx-item icon-picker-item${selectedClass}" data-icon-key="${iconKey}" onclick="pickIconMenuOption('${iconKey}')"><img src="${path}" alt="${label} icon" loading="lazy"><span>${label}</span></div>`;
  });
  ctxMenu.innerHTML = items.join('');

  const rect = trigger.getBoundingClientRect();
  ctxMenu.classList.add('select-menu');
  ctxMenu.classList.add('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.display = 'block';
  ctxMenu.style.minWidth = Math.max(260, Math.floor(rect.width)) + 'px';
  const maxHeight = Math.max(220, window.innerHeight - 24);
  ctxMenu.style.maxHeight = maxHeight + 'px';
  ctxMenu.style.overflowY = 'auto';
  ctxMenu.style.overflowX = 'hidden';

  const menuHeight = Math.min(ctxMenu.scrollHeight, maxHeight);
  const menuWidth = Math.max(260, Math.floor(rect.width));
  const x = Math.min(Math.max(8, Math.floor(rect.left)), window.innerWidth - menuWidth - 8);
  const y = Math.min(Math.floor(rect.bottom + 4), window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  const selectedItem = ctxMenu.querySelector('.ctx-item.selected');
  if (selectedItem && typeof selectedItem.scrollIntoView === 'function') {
    selectedItem.scrollIntoView({ block: 'nearest' });
  }
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

async function openAddInstanceIconMenu(e) {
  await openInstanceIconMenuFor(e, 'add-inst-icon-key', 'add-inst-icon-trigger');
}

async function openEditInstanceIconMenu(e) {
  await openInstanceIconMenuFor(e, 'edit-inst-icon-key', 'edit-inst-icon-trigger');
}

function pickIconMenuOption(iconKey) {
  if (!activeIconPickerInput) return;
  const selected = normalizeIconKey(iconKey);
  if (!selected) return;
  activeIconPickerInput.value = selected;
  if (activeIconPickerInput.id === 'edit-inst-icon-key') {
    setEditInstanceIconSelection(selected);
  } else {
    setAddInstanceIconSelection(selected);
  }
  hideCtx();
}

function pickSelectMenuOption(index) {
  if (!activeSelectMenu) return;
  const selectEl = activeSelectMenu;
  const option = selectEl.options && selectEl.options[index];
  if (!option || option.disabled) return;
  selectEl.selectedIndex = index;
  selectEl.dispatchEvent(new Event('input', { bubbles: true }));
  selectEl.dispatchEvent(new Event('change', { bubbles: true }));
  hideCtx();
}

function openGroupInstancePicker(e, groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) return;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  ensureInstanceGroupsLoaded();
  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;

  const names = INSTANCE_LIST_CACHE
    .map((instance) => String(instance && instance.name ? instance.name : '').trim())
    .filter(Boolean);
  const uniqueNames = Array.from(new Set(names));
  const candidateNames = uniqueNames.filter((name) => {
    const assigned = resolveInstanceGroupId(name);
    return !assigned || assigned === group.id;
  });
  const initialNames = new Set(
    candidateNames.filter((name) => resolveInstanceGroupId(name) === group.id)
  );
  activeGroupPicker = {
    groupId: group.id,
    candidateNames,
    selectedNames: new Set(initialNames),
    initialNames,
  };

  ctxMenu.innerHTML = '';
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.add('group-picker-menu');
  ctxMenu.style.display = 'block';
  ctxMenu.style.minWidth = '230px';
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';

  if (candidateNames.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'group-picker-empty';
    empty.textContent = 'No available instances';
    ctxMenu.appendChild(empty);
  } else {
    candidateNames.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'group-picker-row';
      if (activeGroupPicker.selectedNames.has(name)) row.classList.add('selected');
      row.dataset.instanceName = name;
      row.innerHTML = `
        <span class="group-picker-dot"></span>
        <span class="group-picker-name">${escapeHtml(name)}</span>
      `;
      row.addEventListener('click', () => {
        if (!activeGroupPicker) return;
        if (activeGroupPicker.selectedNames.has(name)) {
          activeGroupPicker.selectedNames.delete(name);
          row.classList.remove('selected');
        } else {
          activeGroupPicker.selectedNames.add(name);
          row.classList.add('selected');
        }
      });
      ctxMenu.appendChild(row);
    });
  }

  const sep = document.createElement('div');
  sep.className = 'ctx-sep';
  ctxMenu.appendChild(sep);

  const actions = document.createElement('div');
  actions.className = 'group-picker-actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'group-icon-btn';
  cancelBtn.type = 'button';
  cancelBtn.title = 'Cancel';
  cancelBtn.innerHTML = '<i data-lucide="x" width="12" height="12"></i>';
  cancelBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    hideCtx();
  });
  actions.appendChild(cancelBtn);

  const applyBtn = document.createElement('button');
  applyBtn.className = 'group-icon-btn';
  applyBtn.type = 'button';
  applyBtn.title = 'Apply';
  applyBtn.innerHTML = '<i data-lucide="check" width="12" height="12"></i>';
  applyBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    applyGroupPickerSelection();
  });
  actions.appendChild(applyBtn);
  ctxMenu.appendChild(actions);

  const anchor = e && e.currentTarget && typeof e.currentTarget.getBoundingClientRect === 'function'
    ? e.currentTarget
    : null;
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    const menuHeight = Math.min(ctxMenu.scrollHeight, Math.max(220, window.innerHeight - 24));
    const menuWidth = 230;
    const x = Math.min(Math.max(8, Math.floor(rect.left)), window.innerWidth - menuWidth - 8);
    const y = Math.min(Math.floor(rect.bottom + 4), window.innerHeight - menuHeight - 8);
    ctxMenu.style.left = x + 'px';
    ctxMenu.style.top = y + 'px';
  }
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function applyGroupPickerSelection() {
  if (!activeGroupPicker) return;
  const { groupId, candidateNames, selectedNames, initialNames } = activeGroupPicker;
  let changed = false;
  candidateNames.forEach((name) => {
    const isSelected = selectedNames.has(name);
    const wasSelected = initialNames.has(name);
    if (isSelected && !wasSelected) {
      INSTANCE_GROUP_ASSIGNMENTS[name] = groupId;
      changed = true;
      return;
    }
    if (!isSelected && wasSelected) {
      delete INSTANCE_GROUP_ASSIGNMENTS[name];
      changed = true;
    }
  });

  hideCtx();
  if (!changed) return;
  persistInstanceGroups();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  const group = findInstanceGroupById(groupId);
  const groupName = group ? group.name : 'Group';
  showToast('OK', 'Group updated', groupName + ' membership saved');
}

function initSelectContextMenus() {
  document.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    const target = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('select')
      : null;
    if (!target) return;
    if (target.multiple || Number(target.size || 0) > 1) return;
    // Block the browser's native select popup so only custom ctx menu is shown.
    e.preventDefault();
  }, true);

  document.addEventListener('click', (e) => {
    if (e.button !== 0) return;
    const target = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('select')
      : null;
    if (!target) return;
    if (target.multiple || Number(target.size || 0) > 1) return;
    showSelectContextMenu(e, target);
  }, true);
}

function canScrollElementInDirection(element, deltaY) {
  if (!element || !deltaY) return false;
  const maxScrollTop = element.scrollHeight - element.clientHeight;
  if (maxScrollTop <= 0) return false;
  if (deltaY < 0) return element.scrollTop > 0;
  if (deltaY > 0) return element.scrollTop < maxScrollTop - 1;
  return false;
}

function initBrowseWheelDelegation() {
  document.querySelectorAll('.browse-layout').forEach((layout) => {
    layout.addEventListener('wheel', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const nestedScrollable = target.closest('.browse-filter-body.scrollable, .browse-filters, .browse-feed');
      if (nestedScrollable && canScrollElementInDirection(nestedScrollable, event.deltaY)) {
        return;
      }

      const feed = layout.querySelector('.browse-feed');
      if (!feed) return;
      if (!canScrollElementInDirection(feed, event.deltaY)) return;

      feed.scrollTop += event.deltaY;
      if (event.deltaX) feed.scrollLeft += event.deltaX;
      event.preventDefault();
    }, { passive: false });
  });
}

function hideCtx() {
  ctxMenu.style.display = 'none';
  ctxMenu.classList.remove('select-menu');
  ctxMenu.classList.remove('icon-picker-menu');
  ctxMenu.classList.remove('group-picker-menu');
  ctxMenu.style.minWidth = '170px';
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  activeSelectMenu = null;
  activeIconPickerInput = null;
  activeIconPickerTrigger = null;
  activeGroupPicker = null;
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// RUNNING STATE
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function formatSessionDuration(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${String(s).padStart(2, '0')}s`;
}

function normalizeWeeklyPlaytimeStore(raw) {
  const root = raw && typeof raw === 'object' ? raw : {};
  const byInstanceRaw = root.byInstance && typeof root.byInstance === 'object' ? root.byInstance : {};
  const byInstance = {};
  Object.entries(byInstanceRaw).forEach(([instanceName, value]) => {
    const name = String(instanceName || '').trim();
    if (!name) return;
    const row = value && typeof value === 'object' ? value : {};
    const daysRaw = row.days && typeof row.days === 'object' ? row.days : {};
    const days = {};
    Object.entries(daysRaw).forEach(([dayKey, seconds]) => {
      const key = String(dayKey || '').trim();
      const amount = Number(seconds || 0);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return;
      if (!Number.isFinite(amount) || amount <= 0) return;
      days[key] = Math.floor(amount);
    });
    byInstance[name] = {
      days,
      lastSessionKey: row.lastSessionKey ? String(row.lastSessionKey) : '',
    };
  });
  return { byInstance };
}

function getWeeklyPlaytimeStore() {
  if (WEEKLY_PLAYTIME_CACHE && typeof WEEKLY_PLAYTIME_CACHE === 'object') {
    return WEEKLY_PLAYTIME_CACHE;
  }
  let parsed = null;
  try {
    if (window.localStorage) {
      const raw = window.localStorage.getItem(WEEKLY_PLAYTIME_STORE_KEY);
      if (raw) parsed = JSON.parse(raw);
    }
  } catch (err) {
    console.warn('[weekly] failed to load store', err);
  }
  WEEKLY_PLAYTIME_CACHE = normalizeWeeklyPlaytimeStore(parsed);
  return WEEKLY_PLAYTIME_CACHE;
}

function saveWeeklyPlaytimeStore() {
  try {
    if (!window.localStorage) return;
    const store = getWeeklyPlaytimeStore();
    window.localStorage.setItem(WEEKLY_PLAYTIME_STORE_KEY, JSON.stringify(store));
  } catch (err) {
    console.warn('[weekly] failed to save store', err);
  }
}

function formatDayKeyFromEpoch(epoch) {
  const date = new Date(Number(epoch || 0) * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function buildRecentWeeklyDays(dayCount) {
  const count = Math.max(1, Number(dayCount || WEEKLY_PLAYTIME_DAY_COUNT));
  const now = new Date();
  const rows = [];
  for (let offset = count - 1; offset >= 0; offset -= 1) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - offset);
    const epoch = Math.floor(date.getTime() / 1000);
    const isToday = offset === 0;
    rows.push({
      key: formatDayKeyFromEpoch(epoch),
      label: isToday
        ? 'Today'
        : date.toLocaleDateString(undefined, { weekday: 'short' }),
      isToday,
    });
  }
  return rows;
}

function ensureWeeklyPlaytimeEntry(instanceName) {
  const name = String(instanceName || '').trim();
  if (!name) return null;
  const store = getWeeklyPlaytimeStore();
  if (!store.byInstance[name]) {
    store.byInstance[name] = { days: {}, lastSessionKey: '' };
  }
  return store.byInstance[name];
}

function pruneWeeklyPlaytimeEntry(entry, nowEpoch) {
  if (!entry || !entry.days || typeof entry.days !== 'object') return;
  const cutoff = Number(nowEpoch || Math.floor(Date.now() / 1000)) - (WEEKLY_PLAYTIME_RETENTION_DAYS * 86400);
  Object.keys(entry.days).forEach((dayKey) => {
    const dayEpoch = parseLastPlayedEpoch(dayKey + 'T00:00:00');
    if (!dayEpoch || dayEpoch < cutoff) {
      delete entry.days[dayKey];
    }
  });
}

function getWeeklySessionState(instanceName) {
  const name = String(instanceName || '').trim();
  if (!name) return null;
  if (!INSTANCE_WEEKLY_SESSION_STATE[name]) {
    INSTANCE_WEEKLY_SESSION_STATE[name] = {
      running: false,
      startEpoch: 0,
    };
  }
  return INSTANCE_WEEKLY_SESSION_STATE[name];
}

function syncWeeklySessionTrackerStart(instanceName, startEpoch) {
  const state = getWeeklySessionState(instanceName);
  if (!state) return;
  const start = parseLastPlayedEpoch(startEpoch);
  if (!start) return;
  state.running = true;
  state.startEpoch = start;
}

function commitWeeklyTrackedSession(instanceName, startEpoch, endEpoch) {
  const name = String(instanceName || '').trim();
  if (!name) return false;
  const start = parseLastPlayedEpoch(startEpoch);
  const end = parseLastPlayedEpoch(endEpoch) || Math.floor(Date.now() / 1000);
  if (!start || !end || end <= start) return false;

  const entry = ensureWeeklyPlaytimeEntry(name);
  if (!entry) return false;

  const sessionKey = `${start}:${end}`;
  if (entry.lastSessionKey && entry.lastSessionKey === sessionKey) {
    return false;
  }

  let cursor = start;
  while (cursor < end) {
    const cursorDate = new Date(cursor * 1000);
    const nextMidnight = Math.floor(
      new Date(
        cursorDate.getFullYear(),
        cursorDate.getMonth(),
        cursorDate.getDate() + 1,
        0,
        0,
        0,
        0
      ).getTime() / 1000
    );
    const chunkEnd = Math.min(end, nextMidnight);
    const dayKey = formatDayKeyFromEpoch(cursor);
    const delta = Math.max(0, chunkEnd - cursor);
    if (delta > 0) {
      const current = Number(entry.days[dayKey] || 0);
      entry.days[dayKey] = current + delta;
    }
    cursor = chunkEnd;
  }

  entry.lastSessionKey = sessionKey;
  pruneWeeklyPlaytimeEntry(entry, end);
  saveWeeklyPlaytimeStore();
  return true;
}

function stopWeeklySessionTracker(instanceName, endEpoch) {
  const state = getWeeklySessionState(instanceName);
  if (!state || !state.running || !state.startEpoch) return false;
  const stopAt = parseLastPlayedEpoch(endEpoch) || Math.floor(Date.now() / 1000);
  const changed = commitWeeklyTrackedSession(instanceName, state.startEpoch, stopAt);
  state.running = false;
  state.startEpoch = 0;
  return changed;
}

function reconcileWeeklyPlaytimeTracker(previousMap, nextMap) {
  const previous = previousMap && typeof previousMap === 'object' ? previousMap : {};
  const next = nextMap && typeof nextMap === 'object' ? nextMap : {};
  const names = new Set([...Object.keys(previous), ...Object.keys(next)]);
  const nowEpoch = Math.floor(Date.now() / 1000);

  names.forEach((name) => {
    const prevDetails = previous[name] || null;
    const nextDetails = next[name] || null;
    const wasRunning = !!(prevDetails && prevDetails.running);
    const isRunning = !!(nextDetails && nextDetails.running);
    const nextStartEpoch = parseLastPlayedEpoch(nextDetails && nextDetails.lastPlayedEpoch);
    const stopEpoch = parseLastPlayedEpoch(nextDetails && nextDetails.lastExitAtEpoch) || nowEpoch;

    if (!wasRunning && isRunning) {
      syncWeeklySessionTrackerStart(name, nextStartEpoch || nowEpoch);
      return;
    }

    if (wasRunning && !isRunning) {
      stopWeeklySessionTracker(name, stopEpoch);
      return;
    }

    if (isRunning) {
      const state = getWeeklySessionState(name);
      if (!state || !state.running) {
        syncWeeklySessionTrackerStart(name, nextStartEpoch || nowEpoch);
      } else if (nextStartEpoch && Math.abs(nextStartEpoch - state.startEpoch) > 30) {
        state.startEpoch = nextStartEpoch;
      }
    } else if (!nextDetails) {
      delete INSTANCE_WEEKLY_SESSION_STATE[name];
    }
  });
}

function buildWeeklyPlaytimeSnapshot(instanceName, includeLive) {
  const name = String(instanceName || '').trim();
  const result = {};
  if (!name) return result;

  const store = getWeeklyPlaytimeStore();
  const entry = store.byInstance && store.byInstance[name] ? store.byInstance[name] : null;
  if (entry && entry.days && typeof entry.days === 'object') {
    Object.entries(entry.days).forEach(([dayKey, seconds]) => {
      const value = Number(seconds || 0);
      if (!Number.isFinite(value) || value <= 0) return;
      result[dayKey] = Math.floor(value);
    });
  }

  if (includeLive) {
    const details = INSTANCE_DATA && INSTANCE_DATA[name] ? INSTANCE_DATA[name] : null;
    const state = getWeeklySessionState(name);
    const runningStart = state && state.running
      ? state.startEpoch
      : parseLastPlayedEpoch(details && details.lastPlayedEpoch);
    const nowEpoch = Math.floor(Date.now() / 1000);
    if (details && details.running && runningStart && nowEpoch > runningStart) {
      let cursor = runningStart;
      while (cursor < nowEpoch) {
        const cursorDate = new Date(cursor * 1000);
        const nextMidnight = Math.floor(
          new Date(
            cursorDate.getFullYear(),
            cursorDate.getMonth(),
            cursorDate.getDate() + 1,
            0,
            0,
            0,
            0
          ).getTime() / 1000
        );
        const chunkEnd = Math.min(nowEpoch, nextMidnight);
        const dayKey = formatDayKeyFromEpoch(cursor);
        const delta = Math.max(0, chunkEnd - cursor);
        if (delta > 0) {
          result[dayKey] = Number(result[dayKey] || 0) + delta;
        }
        cursor = chunkEnd;
      }
    }
  }

  return result;
}

function formatWeeklyPlaytimeText(totalSeconds) {
  const seconds = Math.max(0, Math.floor(Number(totalSeconds || 0)));
  if (seconds <= 0) return '-';
  const minutes = Math.max(1, Math.ceil(seconds / 60));
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours <= 0) return `${mins}m`;
  return `${hours}h ${mins}m`;
}

function renderWeeklyPlaytimeBars(instanceName) {
  const container = document.getElementById('detail-pt-bars');
  if (!container) return;

  const name = String(instanceName || '').trim();
  if (!name || !INSTANCE_DATA || !INSTANCE_DATA[name]) {
    container.innerHTML = '';
    container.dataset.renderKey = '';
    return;
  }

  const days = buildRecentWeeklyDays(WEEKLY_PLAYTIME_DAY_COUNT);
  const snapshot = buildWeeklyPlaytimeSnapshot(name, true);
  const values = days.map((day) => Number(snapshot[day.key] || 0));
  const maxSeconds = Math.max(1, ...values);
  const renderKey = days.map((day) => `${day.key}:${Math.floor(Number(snapshot[day.key] || 0))}`).join('|');
  if (container.dataset.renderKey === renderKey) return;
  container.dataset.renderKey = renderKey;

  container.innerHTML = days.map((day) => {
    const seconds = Number(snapshot[day.key] || 0);
    const width = seconds > 0 ? Math.max(2, Math.round((seconds / maxSeconds) * 100)) : 0;
    const rowClass = day.isToday ? 'pt-row today' : 'pt-row';
    return `
      <div class="${rowClass}">
        <span class="pt-label">${day.label}</span>
        <div class="pt-bar"><div class="pt-fill" style="width:${width}%"></div></div>
        <span class="pt-val">${formatWeeklyPlaytimeText(seconds)}</span>
      </div>
    `;
  }).join('');
}

function getInstanceSessionSeconds(details, instanceName) {
  if (!details || !details.running) return 0;
  const name = String(instanceName || '').trim();
  const state = name ? getWeeklySessionState(name) : null;
  const trackedStart = state && state.running ? state.startEpoch : 0;
  const started = parseLastPlayedEpoch(trackedStart || details.lastPlayedEpoch || null);
  if (!started) return 0;
  const now = Math.floor(Date.now() / 1000);
  return Math.max(0, now - started);
}

function refreshSelectedSessionLabel() {
  const selectedName = getSelectedInstanceName();
  const sessionEl = document.getElementById('detail-session');
  if (!sessionEl) return;
  if (!selectedName || !INSTANCE_DATA[selectedName]) {
    sessionEl.textContent = 'Session: -';
    renderWeeklyPlaytimeBars('');
    return;
  }
  const details = INSTANCE_DATA[selectedName];
  if (!details.running) {
    sessionEl.textContent = 'Session: -';
    renderWeeklyPlaytimeBars(selectedName);
    return;
  }
  sessionEl.textContent = 'Session: ' + formatSessionDuration(getInstanceSessionSeconds(details, selectedName));
  renderWeeklyPlaytimeBars(selectedName);
}

setInterval(refreshSelectedSessionLabel, 1000);

function shouldPollInstanceRuntimeState() {
  if (ACTIVE_PROVISION) return true;
  if (!INSTANCE_DATA || typeof INSTANCE_DATA !== 'object') return false;
  return Object.values(INSTANCE_DATA).some((details) => details && details.running);
}

function buildInstanceRuntimePollSignature(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return '';
  const normalized = rows
    .map((row) => ({
      name: String(row && row.name ? row.name : '').trim(),
      running: !!(row && row.running),
      lastPlayed: parseLastPlayedEpoch(row && row.lastPlayed),
      lastExitState: String((row && row.lastExitState) || '').trim().toLowerCase(),
      lastExitCode:
        row && typeof row.lastExitCode === 'number' && Number.isFinite(row.lastExitCode)
          ? row.lastExitCode
          : '',
      lastExitReason: String((row && row.lastExitReason) || '').trim(),
      lastExitAt: parseLastPlayedEpoch(row && row.lastExitAtEpoch),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base', numeric: true }));
  return normalized
    .map(
      (item) =>
        item.name +
        '~' +
        (item.running ? '1' : '0') +
        '~' +
        item.lastPlayed +
        '~' +
        item.lastExitState +
        '~' +
        item.lastExitCode +
        '~' +
        item.lastExitReason +
        '~' +
        item.lastExitAt
    )
    .join('|');
}

async function pollInstanceRuntimeStateTick() {
  if (INSTANCE_RUNTIME_POLL_IN_FLIGHT) return;
  if (!shouldPollInstanceRuntimeState()) return;
  INSTANCE_RUNTIME_POLL_IN_FLIGHT = true;
  try {
    const listRes = await invokeBackend('list_instances');
    if (!listRes.ok || !Array.isArray(listRes.data)) return;
    const nextSignature = buildInstanceRuntimePollSignature(listRes.data);
    if (nextSignature === INSTANCE_RUNTIME_POLL_SIGNATURE) return;
    INSTANCE_RUNTIME_POLL_SIGNATURE = nextSignature;
    renderInstancesFromBackend(listRes.data, true);
  } finally {
    INSTANCE_RUNTIME_POLL_IN_FLIGHT = false;
  }
}

function setupInstanceRuntimeStatePolling() {
  if (INSTANCE_RUNTIME_POLL_TIMER) return;
  INSTANCE_RUNTIME_POLL_TIMER = setInterval(() => {
    void pollInstanceRuntimeStateTick();
  }, INSTANCE_RUNTIME_POLL_MS);
}

async function killInstance() {
  closeModal();
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const killRes = await invokeBackend('kill_instance', { request: { instanceName } });
  if (!killRes.ok) {
    showToast('!', 'Kill failed', formatBackendError(killRes.error, 'Could not stop the game process'));
    return;
  }
  showToast('STOP','Game stopped', instanceName + ' session ended');
  await refreshInstancesFromBackend(true);
  document.querySelectorAll('.instance-card.running').forEach(c => c.classList.remove('running'));
  const rb = document.getElementById('detail-running-bar');
  if (rb) rb.classList.remove('visible');
  const lb = document.getElementById('launch-or-kill-btn');
  if (lb) {
    lb.className = 'det-btn det-btn-primary';
    lb.onclick = launchSequence;
    lb.innerHTML = '<i data-lucide="play" width="13" height="13"></i> Launch';
    lucide.createIcons();
  }
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// FILTER & SEARCH
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function setFilter(chip, type) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  INSTANCE_FILTER_TYPE = type || 'all';
  applyInstanceVisibility();
}

function filterByLoader(type) {
  if (type === 'vanilla') INSTANCE_FILTER_TYPE = 'vanilla';
  else if (type === 'modded') INSTANCE_FILTER_TYPE = 'modded';
  else INSTANCE_FILTER_TYPE = 'all';
  applyInstanceVisibility();
}

function filterInstancesByType(type) {
  INSTANCE_FILTER_TYPE = type || 'all';
  applyInstanceVisibility();
}

function shouldShowByFilter(card, filterType) {
  const loader = (card.dataset.loader || 'vanilla').toLowerCase();
  const running = card.classList.contains('running');
  const filter = String(filterType || 'all').toLowerCase();
  if (filter === 'all') return true;
  if (filter === 'running') return running;
  if (filter === 'modded') return loader === 'fabric' || loader === 'forge' || loader === 'neoforge' || loader === 'quilt';
  return loader === filter;
}

function applyInstanceVisibility() {
  const query = String(INSTANCE_SEARCH_QUERY || '').toLowerCase();
  document.querySelectorAll('.instance-card').forEach(card => {
    const name = String(card.dataset.name || '').toLowerCase();
    const showByFilter = shouldShowByFilter(card, INSTANCE_FILTER_TYPE);
    const showBySearch = !query || name.includes(query);
    const show = showByFilter && showBySearch;
    card.style.display = show ? '' : 'none';
  });
}

function setActiveFilterChip(type) {
  const chips = Array.from(document.querySelectorAll('.filter-chip'));
  chips.forEach((chip) => chip.classList.remove('active'));
  const target = chips.find((chip) => {
    const handler = String(chip.getAttribute('onclick') || '');
    return handler.includes(`'${type}'`);
  });
  if (target) target.classList.add('active');
}

function filterInstances(q) {
  INSTANCE_SEARCH_QUERY = String(q || '').trim();
  applyInstanceVisibility();
}

function sortInstances(val, silent) {
  const grids = Array.from(document.querySelectorAll('.instance-grid[data-role="instance-grid"]'));

  const naturalCompare = (a, b) => String(a || '').localeCompare(String(b || ''), undefined, { numeric: true, sensitivity: 'base' });
  const parseVersion = (input) => String(input || '').split('.').map((part) => Number(part) || 0);
  const compareVersion = (a, b) => {
    const va = parseVersion(a);
    const vb = parseVersion(b);
    const maxLen = Math.max(va.length, vb.length);
    for (let i = 0; i < maxLen; i++) {
      const da = va[i] || 0;
      const db = vb[i] || 0;
      if (da !== db) return db - da;
    }
    return 0;
  };

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll('.instance-card'));
    cards.sort((left, right) => {
      const leftName = left.dataset.name || '';
      const rightName = right.dataset.name || '';
      if (val === 'recent') {
        const leftEpoch = (INSTANCE_DATA[leftName] && INSTANCE_DATA[leftName].lastPlayedEpoch) || 0;
        const rightEpoch = (INSTANCE_DATA[rightName] && INSTANCE_DATA[rightName].lastPlayedEpoch) || 0;
        return rightEpoch - leftEpoch || naturalCompare(leftName, rightName);
      }
      if (val === 'version') {
        const result = compareVersion(left.dataset.version, right.dataset.version);
        return result || naturalCompare(leftName, rightName);
      }
      if (val === 'playtime') {
        const leftPlaytime = Number(left.dataset.playtime || 0);
        const rightPlaytime = Number(right.dataset.playtime || 0);
        return rightPlaytime - leftPlaytime || naturalCompare(leftName, rightName);
      }
      return naturalCompare(leftName, rightName);
    });

    cards.forEach((card) => grid.appendChild(card));
    const addCard = grid.querySelector('.add-card');
    if (addCard) grid.appendChild(addCard);
  });

  if (!silent) {
    showToast('OK', 'Sorted', 'Instances sorted by ' + val);
  }
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// GROUP COLLAPSE
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function toggleGroup(header) {
  if (!header) return;
  const chevron = header.querySelector('.group-chevron');
  const grid = header.nextElementSibling;
  if (!chevron || !grid || !grid.classList.contains('instance-grid')) return;
  const collapsed = chevron.classList.contains('collapsed');
  const nextCollapsed = !collapsed;
  chevron.classList.toggle('collapsed', nextCollapsed);
  grid.style.display = nextCollapsed ? 'none' : '';

  const groupId = String(header.dataset.groupId || '').trim();
  if (!groupId) return;
  const group = findInstanceGroupById(groupId);
  if (!group) return;
  group.collapsed = nextCollapsed;
  persistInstanceGroups();
}

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// DRAG & DROP
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
let draggedCard = null;
function dragStart(e) {
  draggedCard = e.currentTarget;
  draggedCard.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function dragOver(e) {
  e.preventDefault();
  const target = e.currentTarget;
  if (target !== draggedCard && target.classList.contains('instance-card')) {
    target.classList.add('drag-over');
  }
}
function dropCard(e) {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.remove('drag-over');
  if (draggedCard && target !== draggedCard && target.classList.contains('instance-card')) {
    const parent = target.parentNode;
    const cards  = [...parent.querySelectorAll('.instance-card')];
    const fromIdx = cards.indexOf(draggedCard);
    const toIdx   = cards.indexOf(target);
    if (fromIdx < toIdx) parent.insertBefore(draggedCard, target.nextSibling);
    else parent.insertBefore(draggedCard, target);
    draggedCard.classList.remove('dragging');
    draggedCard = null;
    showToast('OK','Reordered','Instance order updated');
  }
}
document.addEventListener('dragend', () => {
  if (draggedCard) { draggedCard.classList.remove('dragging'); draggedCard = null; }
  document.querySelectorAll('.drag-over').forEach(c => c.classList.remove('drag-over'));
});

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// HELPERS
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
function toggleCheck(el) {
  const on = !el.classList.contains('on');
  el.classList.toggle('on', on);
  el.innerHTML = on ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : '';
  if (on) lucide.createIcons();
}

function selectIcon(el) {
  document.querySelectorAll('.icon-cell').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function normalizeBannerKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\.webp$/i, '')
    .replace(/[^a-z0-9_]/g, '');
}

function bannerKeyFromFile(file) {
  return normalizeBannerKey(file);
}

function bannerFileBySeed(seed) {
  const files = Array.isArray(BANNER_IMAGE_FILES) ? BANNER_IMAGE_FILES : [];
  const seedText = String(seed || 'banner');
  if (!files.length) return '';
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) {
    hash = ((hash << 5) - hash + seedText.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % files.length;
  return files[index];
}

function bannerKeyBySeed(seed) {
  return bannerKeyFromFile(bannerFileBySeed(seed));
}

function bannerFileFromKey(bannerKey) {
  const key = normalizeBannerKey(bannerKey);
  if (!key) return '';
  const candidate = key + '.webp';
  if (Array.isArray(BANNER_IMAGE_FILES) && BANNER_IMAGE_FILES.includes(candidate)) return candidate;
  return '';
}

function bannerImagePathByKey(bannerKey) {
  const file = bannerFileFromKey(bannerKey);
  if (!file) return '';
  return 'assets/banner/' + file;
}

function resolveInstanceBannerKey(value, seed) {
  const explicit = normalizeBannerKey(value);
  if (explicit && bannerFileFromKey(explicit)) return explicit;
  return bannerKeyBySeed(seed);
}

function bannerImagePathBySeed(seed) {
  const file = bannerFileBySeed(seed);
  if (file) return 'assets/banner/' + file;
  const seedText = String(seed || 'banner');
  return 'https://picsum.photos/seed/' + encodeURIComponent(seedText) + '/300/100';
}

function normalizeIconKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

function iconLabelFromKey(iconKey) {
  const normalized = normalizeIconKey(iconKey);
  if (!normalized) return 'Select icon';
  return normalized
    .split('_')
    .filter((token) => token.length > 0)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}

function instanceIconPath(iconKey) {
  const normalized = normalizeIconKey(iconKey);
  if (!normalized) return '';
  return 'assets/instance-icons/isometric-256/' + normalized + '.png';
}

function getKnownInstanceIcons() {
  return INSTANCE_ICON_KEYS.length ? INSTANCE_ICON_KEYS : INSTANCE_ICON_FALLBACK_KEYS;
}

function resolveDefaultInstanceIconKey() {
  const icons = getKnownInstanceIcons();
  return icons.length ? icons[0] : '';
}

function stableHashIndex(seed, length) {
  const size = Number(length) || 0;
  if (size <= 0) return -1;
  const seedText = String(seed || 'icon');
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) {
    hash = ((hash << 5) - hash + seedText.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % size;
}

function resolveAutoInstanceIconKey(seed) {
  const icons = getKnownInstanceIcons();
  if (!icons.length) return '';
  const index = stableHashIndex(seed, icons.length);
  return icons[index] || icons[0];
}

function pickRandomInstanceIconKey() {
  const icons = getKnownInstanceIcons();
  if (!icons.length) return '';
  if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return icons[arr[0] % icons.length] || icons[0];
  }
  const index = Math.floor(Math.random() * icons.length);
  return icons[index] || icons[0];
}

async function ensureInstanceIconCatalog() {
  if (INSTANCE_ICON_KEYS.length) return INSTANCE_ICON_KEYS;
  if (INSTANCE_ICON_MANIFEST_PROMISE) return INSTANCE_ICON_MANIFEST_PROMISE;
  INSTANCE_ICON_MANIFEST_PROMISE = (async () => {
    try {
      const res = await fetch(INSTANCE_ICON_MANIFEST_PATH, { cache: 'no-store' });
      if (!res.ok) throw new Error('status ' + res.status);
      const payload = await res.json();
      const icons = Array.isArray(payload && payload.icons)
        ? payload.icons.map(normalizeIconKey).filter((key) => key.length > 0)
        : [];
      const unique = Array.from(new Set(icons));
      if (unique.length) {
        INSTANCE_ICON_KEYS = unique;
      }
    } catch (err) {
      console.warn('[icons] failed to load 256px manifest', err);
    }
    if (!INSTANCE_ICON_KEYS.length) {
      INSTANCE_ICON_KEYS = INSTANCE_ICON_FALLBACK_KEYS.slice();
    }
    return INSTANCE_ICON_KEYS;
  })();
  return INSTANCE_ICON_MANIFEST_PROMISE;
}

function setInstanceIconSelectionByIds(inputId, triggerId, previewId, labelId, iconKey) {
  const hidden = document.getElementById(inputId);
  const trigger = document.getElementById(triggerId);
  const preview = document.getElementById(previewId);
  const label = document.getElementById(labelId);
  if (!hidden || !trigger || !preview || !label) return;

  const known = getKnownInstanceIcons();
  let selected = normalizeIconKey(iconKey) || normalizeIconKey(hidden.value);
  if (!selected) selected = resolveDefaultInstanceIconKey();
  if (known.length && !known.includes(selected)) selected = resolveAutoInstanceIconKey(selected || trigger.id || inputId);

  hidden.value = selected;
  trigger.dataset.iconKey = selected;
  label.textContent = iconLabelFromKey(selected);

  const src = instanceIconPath(selected);
  preview.style.opacity = '1';
  preview.src = src;
  preview.alt = iconLabelFromKey(selected) + ' icon';
  preview.onerror = () => {
    preview.style.opacity = '0.35';
  };
  preview.onload = () => {
    preview.style.opacity = '1';
  };
}

function setAddInstanceIconSelection(iconKey) {
  setInstanceIconSelectionByIds(
    'add-inst-icon-key',
    'add-inst-icon-trigger',
    'add-inst-icon-preview-img',
    'add-inst-icon-preview-label',
    iconKey
  );
}

function setEditInstanceIconSelection(iconKey) {
  setInstanceIconSelectionByIds(
    'edit-inst-icon-key',
    'edit-inst-icon-trigger',
    'edit-inst-icon-preview-img',
    'edit-inst-icon-preview-label',
    iconKey
  );
}

function resolveInstanceBannerKeyForName(instanceName) {
  const name = String(instanceName || '').trim();
  const details = name && INSTANCE_DATA && INSTANCE_DATA[name] ? INSTANCE_DATA[name] : null;
  return resolveInstanceBannerKey(details && details.bannerKey ? details.bannerKey : '', name || 'banner');
}

function setDetailBannerByKey(instanceName, bannerKey) {
  const layer = document.getElementById('detail-banner-image');
  if (!layer) return;
  const resolvedKey = resolveInstanceBannerKey(bannerKey, instanceName || 'banner');
  const src = bannerImagePathByKey(resolvedKey) || bannerImagePathBySeed(instanceName || 'banner');
  layer.style.backgroundImage = `url('${src}')`;
  layer.dataset.bannerKey = resolvedKey;
}

function pickBannerFromModal(bannerKey) {
  const selected = resolveInstanceBannerKey(bannerKey, getSelectedInstanceName() || selectedInstanceNameForModal());
  const hidden = document.getElementById('banner-picker-selected-key');
  if (hidden) hidden.value = selected;
  document.querySelectorAll('#banner-picker-grid .banner-cell').forEach((cell) => {
    cell.classList.toggle('selected', cell.dataset.bannerKey === selected);
  });
}

function hydrateBannerPickerModal() {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  pickBannerFromModal(resolveInstanceBannerKeyForName(instanceName));
}

async function applyBannerFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const hidden = document.getElementById('banner-picker-selected-key');
  const selectedKey = resolveInstanceBannerKey(hidden ? hidden.value : '', instanceName);
  const res = await invokeBackend('update_instance_launch_config', {
    request: {
      instanceName,
      bannerKey: selectedKey || '',
    },
  });
  if (!res.ok) {
    showToast('!', 'Banner failed', 'Could not update instance banner');
    return;
  }

  closeModal();
  await refreshInstancesFromBackend(true);
  showToast('OK', 'Banner updated', 'Card and details banner synced');
}

function switchTab(el) {
  el.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

let INSTANCE_DATA = {};
let INSTANCE_RUNTIME = {};
let INSTANCE_FILTER_TYPE = 'all';
let INSTANCE_SEARCH_QUERY = '';
let INSTANCE_LIST_CACHE = [];
let INSTANCE_VIEW_MODE = 'grid';
let INSTANCE_GROUPS = [];
let INSTANCE_GROUP_ASSIGNMENTS = {};
let INSTANCE_GROUPS_LOADED = false;
let ACTIVE_INSTANCE_INFO_REQUEST_ID = 0;

function normalizeInstanceViewMode(value) {
  const mode = String(value || '').trim().toLowerCase();
  return mode === 'list' ? 'list' : 'grid';
}

function applyInstanceViewMode(mode) {
  INSTANCE_VIEW_MODE = normalizeInstanceViewMode(mode || INSTANCE_VIEW_MODE);
  const panelContent = document.getElementById('panel-content');
  if (panelContent) {
    panelContent.classList.toggle('view-list', INSTANCE_VIEW_MODE === 'list');
    panelContent.dataset.viewMode = INSTANCE_VIEW_MODE;
  }
  document.querySelectorAll('.view-btn').forEach((btn) => {
    const btnMode = normalizeInstanceViewMode(btn.dataset.view || btn.getAttribute('data-view'));
    btn.classList.toggle('active', btnMode === INSTANCE_VIEW_MODE);
  });
}

function setInstanceViewMode(mode, persist) {
  INSTANCE_VIEW_MODE = normalizeInstanceViewMode(mode);
  applyInstanceViewMode(INSTANCE_VIEW_MODE);
  if (persist === false) return;
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(INSTANCE_VIEW_STORE_KEY, INSTANCE_VIEW_MODE);
  } catch (err) {
    console.warn('[view] failed to persist mode', err);
  }
}

function initInstanceViewMode() {
  let storedMode = 'grid';
  try {
    if (window.localStorage) {
      storedMode = window.localStorage.getItem(INSTANCE_VIEW_STORE_KEY) || 'grid';
    }
  } catch (err) {
    console.warn('[view] failed to load mode', err);
  }
  applyInstanceViewMode(storedMode);
  document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setInstanceViewMode(btn.dataset.view || 'grid', true);
    });
  });
}

function ensureInstanceNotesLoaded() {
  if (INSTANCE_NOTES_LOADED) return;
  INSTANCE_NOTES_LOADED = true;
  INSTANCE_NOTES = {};
  try {
    if (!window.localStorage) return;
    const raw = window.localStorage.getItem(INSTANCE_NOTES_STORE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    Object.keys(parsed).forEach((key) => {
      const name = String(key || '').trim();
      const note = String(parsed[key] || '');
      if (!name || !note.trim()) return;
      INSTANCE_NOTES[name] = note;
    });
  } catch (err) {
    console.warn('[notes] failed to load notes', err);
    INSTANCE_NOTES = {};
  }
}

function persistInstanceNotes() {
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(INSTANCE_NOTES_STORE_KEY, JSON.stringify(INSTANCE_NOTES));
  } catch (err) {
    console.warn('[notes] failed to persist notes', err);
  }
}

function normalizeInstanceNoteText(value) {
  return String(value || '').replace(/\r\n/g, '\n').trim();
}

function getInstanceNote(instanceName) {
  ensureInstanceNotesLoaded();
  const key = String(instanceName || '').trim();
  if (!key) return '';
  return String(INSTANCE_NOTES[key] || '');
}

function setInstanceNote(instanceName, noteText) {
  ensureInstanceNotesLoaded();
  const key = String(instanceName || '').trim();
  if (!key) return;
  const note = normalizeInstanceNoteText(noteText);
  if (!note) delete INSTANCE_NOTES[key];
  else INSTANCE_NOTES[key] = note;
  persistInstanceNotes();
}

function removeInstanceNote(instanceName) {
  ensureInstanceNotesLoaded();
  const key = String(instanceName || '').trim();
  if (!key || !(key in INSTANCE_NOTES)) return;
  delete INSTANCE_NOTES[key];
  persistInstanceNotes();
}

function renameInstanceNote(oldName, newName) {
  ensureInstanceNotesLoaded();
  const from = String(oldName || '').trim();
  const to = String(newName || '').trim();
  if (!from || !to || from === to) return;
  const note = getInstanceNote(from);
  if (!note) return;
  setInstanceNote(to, note);
  removeInstanceNote(from);
}

function copyInstanceNote(sourceName, targetName) {
  ensureInstanceNotesLoaded();
  const source = String(sourceName || '').trim();
  const target = String(targetName || '').trim();
  if (!source || !target || source === target) return;
  const note = getInstanceNote(source);
  if (!note) return;
  setInstanceNote(target, note);
}

function normalizeTrackedInstallTarget(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === 'mods') return 'mods';
  if (normalized === 'resourcepacks') return 'resourcepacks';
  if (normalized === 'shaderpacks') return 'shaderpacks';
  if (normalized === 'modpacks') return 'modpacks';
  return 'mods';
}

function getDisabledTrackedFileName(fileName) {
  const value = String(fileName || '').trim();
  if (!value) return '';
  if (value.toLowerCase().endsWith('.disabled')) return value;
  return value + '.disabled';
}

function normalizeTrackedInstallEntry(value) {
  const row = value && typeof value === 'object' ? value : {};
  const target = normalizeTrackedInstallTarget(row.target);
  const fileName = String(row.fileName || row.file_name || '').trim();
  const entryId = String(row.id || (target + ':' + fileName.toLowerCase())).trim();
  if (!fileName || !entryId) return null;
  return {
    id: entryId,
    title: String(row.title || fileName).trim() || fileName,
    provider: String(row.provider || '').trim().toLowerCase() || 'browse',
    itemId: String(row.itemId || row.item_id || '').trim(),
    target,
    fileName,
    url: String(row.url || '').trim(),
    path: String(row.path || '').trim(),
    bytesWritten: Number(row.bytesWritten || row.bytes_written || 0) || 0,
    installedAt: Number(row.installedAt || row.installed_at || Date.now()) || Date.now(),
    required: !!row.required,
    enabled: row.enabled !== false,
    sourceType: String(row.sourceType || row.source_type || 'main').trim(),
    rootTitle: String(row.rootTitle || row.root_title || '').trim(),
    pageUrl: String(row.pageUrl || row.page_url || '').trim(),
    iconUrl: String(row.iconUrl || row.icon_url || '').trim(),
  };
}

function ensureInstanceInstallsLoaded() {
  if (INSTANCE_INSTALLS_LOADED) return;
  INSTANCE_INSTALLS_LOADED = true;
  INSTANCE_INSTALLS = {};
  try {
    if (!window.localStorage) return;
    const raw = window.localStorage.getItem(INSTANCE_INSTALLS_STORE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    Object.keys(parsed).forEach((instanceName) => {
      const key = String(instanceName || '').trim();
      if (!key) return;
      const rows = Array.isArray(parsed[instanceName]) ? parsed[instanceName] : [];
      const cleaned = rows
        .map(normalizeTrackedInstallEntry)
        .filter(Boolean);
      if (cleaned.length) INSTANCE_INSTALLS[key] = cleaned;
    });
  } catch (err) {
    console.warn('[installs] failed to load install registry', err);
    INSTANCE_INSTALLS = {};
  }
}

function persistInstanceInstalls() {
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(INSTANCE_INSTALLS_STORE_KEY, JSON.stringify(INSTANCE_INSTALLS));
  } catch (err) {
    console.warn('[installs] failed to persist install registry', err);
  }
}

function getTrackedInstallsForInstance(instanceName) {
  ensureInstanceInstallsLoaded();
  const key = String(instanceName || '').trim();
  if (!key) return [];
  const rows = Array.isArray(INSTANCE_INSTALLS[key]) ? INSTANCE_INSTALLS[key] : [];
  return rows
    .slice()
    .sort((left, right) => Number(right.installedAt || 0) - Number(left.installedAt || 0));
}

function countTrackedInstallsForTarget(instanceName, target) {
  const normalizedTarget = normalizeTrackedInstallTarget(target);
  return getTrackedInstallsForInstance(instanceName).filter((row) => row.target === normalizedTarget).length;
}

function upsertTrackedInstallForInstance(instanceName, row) {
  ensureInstanceInstallsLoaded();
  const key = String(instanceName || '').trim();
  if (!key) return;
  const entry = normalizeTrackedInstallEntry(row);
  if (!entry) return;
  const rows = Array.isArray(INSTANCE_INSTALLS[key]) ? INSTANCE_INSTALLS[key].slice() : [];
  const nextRows = rows.filter((item) => String(item.id || '').trim() !== entry.id);
  nextRows.push(entry);
  INSTANCE_INSTALLS[key] = nextRows;
  persistInstanceInstalls();
}

function removeTrackedInstallForInstance(instanceName, entryId) {
  ensureInstanceInstallsLoaded();
  const key = String(instanceName || '').trim();
  const targetId = String(entryId || '').trim();
  if (!key || !targetId) return false;
  const rows = Array.isArray(INSTANCE_INSTALLS[key]) ? INSTANCE_INSTALLS[key] : [];
  const nextRows = rows.filter((item) => String(item.id || '').trim() !== targetId);
  if (nextRows.length === rows.length) return false;
  if (nextRows.length) INSTANCE_INSTALLS[key] = nextRows;
  else delete INSTANCE_INSTALLS[key];
  persistInstanceInstalls();
  return true;
}

function removeTrackedInstallsForInstance(instanceName) {
  ensureInstanceInstallsLoaded();
  const key = String(instanceName || '').trim();
  if (!key || !Object.prototype.hasOwnProperty.call(INSTANCE_INSTALLS, key)) return;
  delete INSTANCE_INSTALLS[key];
  persistInstanceInstalls();
}

function renameTrackedInstallsForInstance(oldName, newName) {
  ensureInstanceInstallsLoaded();
  const from = String(oldName || '').trim();
  const to = String(newName || '').trim();
  if (!from || !to || from === to) return;
  const rows = Array.isArray(INSTANCE_INSTALLS[from]) ? INSTANCE_INSTALLS[from].slice() : [];
  if (!rows.length) return;
  const current = Array.isArray(INSTANCE_INSTALLS[to]) ? INSTANCE_INSTALLS[to].slice() : [];
  const mergedMap = new Map();
  current.concat(rows).forEach((row) => {
    const normalized = normalizeTrackedInstallEntry(row);
    if (!normalized) return;
    mergedMap.set(normalized.id, normalized);
  });
  INSTANCE_INSTALLS[to] = Array.from(mergedMap.values());
  delete INSTANCE_INSTALLS[from];
  persistInstanceInstalls();
}

function copyTrackedInstallsForInstance(sourceName, targetName) {
  ensureInstanceInstallsLoaded();
  const source = String(sourceName || '').trim();
  const target = String(targetName || '').trim();
  if (!source || !target || source === target) return;
  const rows = Array.isArray(INSTANCE_INSTALLS[source]) ? INSTANCE_INSTALLS[source] : [];
  if (!rows.length) return;
  const current = Array.isArray(INSTANCE_INSTALLS[target]) ? INSTANCE_INSTALLS[target].slice() : [];
  const mergedMap = new Map();
  current.forEach((row) => {
    const normalized = normalizeTrackedInstallEntry(row);
    if (!normalized) return;
    mergedMap.set(normalized.id, normalized);
  });
  rows.forEach((row) => {
    const normalized = normalizeTrackedInstallEntry(Object.assign({}, row, { installedAt: Date.now() }));
    if (!normalized) return;
    mergedMap.set(normalized.id, normalized);
  });
  INSTANCE_INSTALLS[target] = Array.from(mergedMap.values());
  persistInstanceInstalls();
}

function getTrackedInstallEntry(instanceName, entryId) {
  const key = String(instanceName || '').trim();
  const targetId = String(entryId || '').trim();
  if (!key || !targetId) return null;
  const rows = getTrackedInstallsForInstance(key);
  return rows.find((row) => String(row.id || '').trim() === targetId) || null;
}

function formatTrackedInstallAge(installedAt) {
  const stamp = Number(installedAt || 0);
  if (!Number.isFinite(stamp) || stamp <= 0) return 'unknown';
  return formatRelativeDate(new Date(stamp).toISOString());
}

function dedupeFileNamesForCheck(rows) {
  const seen = new Set();
  const out = [];
  (Array.isArray(rows) ? rows : []).forEach((name) => {
    const value = String(name || '').trim();
    if (!value) return;
    const key = value.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push(value);
  });
  return out;
}

async function checkInstanceFilesForTarget(instanceName, target, fileNames) {
  const list = dedupeFileNamesForCheck(fileNames);
  if (!list.length) return new Map();
  const res = await invokeBackend('check_instance_files', {
    request: {
      instanceName,
      target,
      fileNames: list,
    },
  });
  const out = new Map();
  if (!res.ok || !res.data || !Array.isArray(res.data.files)) {
    list.forEach((name) => out.set(String(name).toLowerCase(), true));
    return out;
  }
  res.data.files.forEach((row) => {
    const fileName = String(row && row.file_name ? row.file_name : row && row.fileName ? row.fileName : '').trim();
    if (!fileName) return;
    out.set(fileName.toLowerCase(), Boolean(row && row.exists));
  });
  return out;
}

async function listInstanceFilesForTarget(instanceName, target) {
  const res = await invokeBackend('list_instance_files', {
    request: {
      instanceName,
      target,
    },
  });
  if (!res.ok || !res.data || !Array.isArray(res.data.files)) return [];
  return res.data.files
    .map((value) => String(value || '').trim())
    .filter(Boolean);
}

async function listInstanceDirectoryEntriesForTarget(instanceName, target, options) {
  const request = {
    instanceName,
    target,
    includeFiles: !(options && options.includeFiles === false),
    includeDirectories: !(options && options.includeDirectories === false),
  };
  const res = await invokeBackend('list_instance_directory_entries', { request });
  if (!res.ok || !res.data || !Array.isArray(res.data.entries)) {
    throw new Error(formatBackendError(res.error, 'Could not list instance entries'));
  }
  return res.data.entries.map((entry) => ({
    name: String(entry && entry.name ? entry.name : '').trim(),
    isDirectory: !!(entry && (entry.isDirectory || entry.is_directory)),
    sizeBytes: Number(entry && (entry.sizeBytes || entry.size_bytes) ? (entry.sizeBytes || entry.size_bytes) : 0) || 0,
    modifiedAtEpoch: Number(
      entry && (entry.modifiedAtEpoch || entry.modified_at_epoch)
        ? (entry.modifiedAtEpoch || entry.modified_at_epoch)
        : 0
    ) || 0,
  })).filter((entry) => !!entry.name);
}

function formatBytesCompact(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = value;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  const decimals = size >= 100 ? 0 : size >= 10 ? 1 : 2;
  return size.toFixed(decimals) + ' ' + units[unit];
}

function formatEpochRelative(epoch) {
  const stamp = Number(epoch || 0);
  if (!Number.isFinite(stamp) || stamp <= 0) return 'Unknown';
  return formatRelativeDate(new Date(stamp * 1000).toISOString());
}

function resolveInstanceAssetModalConfig(modalId) {
  const key = String(modalId || '').trim();
  if (key === 'resource-packs') {
    return {
      modalId: key,
      target: 'resourcepacks',
      listId: 'resource-packs-list',
      statusId: 'resource-packs-status',
      label: 'resource packs',
      includeDirectories: true,
    };
  }
  if (key === 'shader-packs') {
    return {
      modalId: key,
      target: 'shaderpacks',
      listId: 'shader-packs-list',
      statusId: 'shader-packs-status',
      label: 'shader packs',
      includeDirectories: true,
    };
  }
  return null;
}

function normalizeAssetBaseName(name) {
  const value = String(name || '').trim();
  if (!value) return '';
  if (value.toLowerCase().endsWith('.disabled')) {
    return value.slice(0, -'.disabled'.length).trim();
  }
  return value;
}

function normalizeInstanceAssetEntries(entries, includeDirectories) {
  const dirRows = [];
  const fileRowsByKey = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const name = String(entry && entry.name ? entry.name : '').trim();
    if (!name) return;
    const isDirectory = !!(entry && entry.isDirectory);
    const sizeBytes = Number(entry && entry.sizeBytes ? entry.sizeBytes : 0) || 0;
    const modifiedAtEpoch = Number(entry && entry.modifiedAtEpoch ? entry.modifiedAtEpoch : 0) || 0;
    if (isDirectory) {
      if (!includeDirectories) return;
      dirRows.push({
        name,
        currentFileName: name,
        isDirectory: true,
        enabled: true,
        sizeBytes,
        modifiedAtEpoch,
      });
      return;
    }

    const baseName = normalizeAssetBaseName(name);
    if (!baseName) return;
    const lowerKey = baseName.toLowerCase();
    const enabled = !name.toLowerCase().endsWith('.disabled');
    const row = {
      name: baseName,
      currentFileName: name,
      isDirectory: false,
      enabled,
      sizeBytes,
      modifiedAtEpoch,
    };
    const prev = fileRowsByKey.get(lowerKey);
    if (!prev) {
      fileRowsByKey.set(lowerKey, row);
      return;
    }
    if (row.enabled && !prev.enabled) {
      fileRowsByKey.set(lowerKey, row);
      return;
    }
    if (row.enabled === prev.enabled && row.modifiedAtEpoch > prev.modifiedAtEpoch) {
      fileRowsByKey.set(lowerKey, row);
    }
  });

  const files = Array.from(fileRowsByKey.values());
  dirRows.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  files.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  return dirRows.concat(files);
}

function renderInstanceAssetRows(modalId, rows) {
  return (Array.isArray(rows) ? rows : [])
    .map((row) => {
      const encoded = encodeURIComponent(String(row.name || ''));
      const icon = row.isDirectory ? 'folder' : (row.enabled ? 'file-check-2' : 'file-x-2');
      const stateText = row.isDirectory
        ? 'directory'
        : (row.enabled ? 'enabled' : 'disabled');
      const metaParts = [];
      if (Number(row.sizeBytes || 0) > 0) metaParts.push(formatBytesCompact(row.sizeBytes));
      metaParts.push(formatEpochRelative(row.modifiedAtEpoch));
      const meta = metaParts.join(' - ');
      const actions = row.isDirectory
        ? '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" disabled><i data-lucide="slash" width="11" height="11"></i>No actions</button>'
        : (
          '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" onclick="toggleInstanceAssetFromModal(\'' + escapeHtml(modalId) + '\', \'' + encoded + '\', ' + (row.enabled ? 'false' : 'true') + ')">' +
          '<i data-lucide="' + (row.enabled ? 'pause' : 'play') + '" width="11" height="11"></i>' + (row.enabled ? 'Disable' : 'Enable') +
          '</button>' +
          '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px;color:var(--red)" onclick="removeInstanceAssetFromModal(\'' + escapeHtml(modalId) + '\', \'' + encoded + '\')">' +
          '<i data-lucide="trash-2" width="11" height="11"></i>Remove</button>'
        );
      return (
        '<div class="list-item" style="align-items:flex-start;gap:10px">' +
        '<i data-lucide="' + icon + '" width="14" height="14" style="color:var(--t4);margin-top:3px;flex-shrink:0"></i>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2);line-height:1.4;word-break:break-word">' + escapeHtml(String(row.name || '')) + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">' + escapeHtml(stateText) + ' - ' + escapeHtml(meta) + '</div>' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">' + actions + '</div>' +
        '</div>'
      );
    })
    .join('');
}

async function hydrateInstanceAssetModal(modalId) {
  const config = resolveInstanceAssetModalConfig(modalId);
  if (!config) return;
  const listEl = document.getElementById(config.listId);
  const statusEl = document.getElementById(config.statusId);
  if (!listEl || !statusEl) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    return;
  }
  statusEl.textContent = 'Loading ' + config.label + '...';
  try {
    const entries = await listInstanceDirectoryEntriesForTarget(instanceName, config.target, {
      includeFiles: true,
      includeDirectories: !!config.includeDirectories,
    });
    const rows = normalizeInstanceAssetEntries(entries, !!config.includeDirectories);
    INSTANCE_ASSET_MODAL_CACHE[config.modalId] = { instanceName, target: config.target, rows };
    if (!rows.length) {
      listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No ' + escapeHtml(config.label) + ' found yet.</div>';
      statusEl.textContent = '0 items';
      return;
    }
    listEl.innerHTML = renderInstanceAssetRows(config.modalId, rows);
    const fileCount = rows.filter((row) => !row.isDirectory).length;
    const enabledCount = rows.filter((row) => !row.isDirectory && row.enabled).length;
    statusEl.textContent = String(rows.length) + ' items - ' + String(enabledCount) + '/' + String(fileCount) + ' files enabled';
    lucide.createIcons();
  } catch (error) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:#b56262">Could not load entries.</div>';
    statusEl.textContent = formatBackendError(error && error.message ? error.message : String(error || ''), 'Load failed');
  }
}

function refreshInstanceAssetModal(modalId) {
  void hydrateInstanceAssetModal(modalId);
}

function openInstanceAssetFolder(target) {
  void openSelectedInstanceFolder(target);
}

async function toggleInstanceAssetFromModal(modalId, encodedName, enabled) {
  const config = resolveInstanceAssetModalConfig(modalId);
  if (!config) return;
  const cache = INSTANCE_ASSET_MODAL_CACHE[config.modalId];
  if (!cache || !cache.instanceName) return;
  const decodedName = decodeURIComponent(String(encodedName || '').trim());
  const row = (Array.isArray(cache.rows) ? cache.rows : []).find(
    (item) => !item.isDirectory && String(item.name || '').toLowerCase() === decodedName.toLowerCase()
  );
  if (!row) {
    showToast('!', 'Toggle failed', 'File entry was not found');
    return;
  }

  const res = await invokeBackend('set_instance_file_enabled', {
    request: {
      instanceName: cache.instanceName,
      target: cache.target,
      fileName: row.name,
      enabled: !!enabled,
    },
  });
  if (!res.ok) {
    showToast('!', 'Toggle failed', formatBackendError(res.error, 'Could not update file state'));
    return;
  }
  await hydrateInstanceAssetModal(config.modalId);
  await refreshSelectedInstanceInfo(cache.instanceName);
  showToast('OK', enabled ? 'Enabled' : 'Disabled', row.name);
}

async function removeInstanceAssetFromModal(modalId, encodedName) {
  const config = resolveInstanceAssetModalConfig(modalId);
  if (!config) return;
  const cache = INSTANCE_ASSET_MODAL_CACHE[config.modalId];
  if (!cache || !cache.instanceName) return;
  const decodedName = decodeURIComponent(String(encodedName || '').trim());
  const row = (Array.isArray(cache.rows) ? cache.rows : []).find(
    (item) => !item.isDirectory && String(item.name || '').toLowerCase() === decodedName.toLowerCase()
  );
  if (!row) {
    showToast('!', 'Remove failed', 'File entry was not found');
    return;
  }
  const fileName = String(row.currentFileName || row.name || '').trim();
  if (!fileName) {
    showToast('!', 'Remove failed', 'File name is missing');
    return;
  }
  const res = await invokeBackend('remove_instance_file', {
    request: {
      instanceName: cache.instanceName,
      target: cache.target,
      fileName,
    },
  });
  if (!res.ok) {
    showToast('!', 'Remove failed', formatBackendError(res.error, 'Could not remove file'));
    return;
  }
  await hydrateInstanceAssetModal(config.modalId);
  await refreshSelectedInstanceInfo(cache.instanceName);
  showToast('OK', 'Removed', row.name);
}

async function hydrateJavaManagerModal(forceRefresh) {
  const listEl = document.getElementById('java-manager-list');
  const statusEl = document.getElementById('java-manager-status');
  if (!listEl || !statusEl) return;
  if (forceRefresh || !Array.isArray(JAVA_RUNTIME_INFO.candidates) || !JAVA_RUNTIME_INFO.candidates.length) {
    statusEl.textContent = 'Detecting Java runtimes...';
    const javaRes = await invokeBackend('get_java_runtime_info', { minimumMajor: 17 });
    if (javaRes.ok && javaRes.data && typeof javaRes.data === 'object') {
      JAVA_RUNTIME_INFO = {
        minimumMajor: Number(javaRes.data.minimumMajor || 17),
        defaultPath: javaRes.data.defaultPath || null,
        candidates: Array.isArray(javaRes.data.candidates) ? javaRes.data.candidates : [],
      };
    } else if (!javaRes.ok) {
      statusEl.textContent = formatBackendError(javaRes.error, 'Could not detect Java');
    }
  }

  const candidates = Array.isArray(JAVA_RUNTIME_INFO.candidates) ? JAVA_RUNTIME_INFO.candidates : [];
  if (!candidates.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No Java runtimes detected.</div>';
    if (!statusEl.textContent) statusEl.textContent = 'No Java runtimes found';
    return;
  }

  listEl.innerHTML = candidates
    .map((candidate) => {
      const path = String(candidate && candidate.path ? candidate.path : '').trim();
      const version = String(candidate && candidate.version ? candidate.version : '').trim();
      const source = String(candidate && candidate.source ? candidate.source : '').trim();
      const major = Number(candidate && candidate.major ? candidate.major : 0) || 0;
      const isDefault = JAVA_RUNTIME_INFO.defaultPath && pathsMatch(path, JAVA_RUNTIME_INFO.defaultPath);
      return (
        '<div class="list-item" style="align-items:flex-start;gap:9px">' +
        '<div class="li-dot ' + (isDefault ? 'on' : '') + '" style="margin-top:5px"></div>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2)">' + escapeHtml(version || ('Java ' + (major || '?'))) + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px;word-break:break-word">' + escapeHtml(path) + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">Source: ' + escapeHtml(source || 'unknown') + '</div>' +
        '</div>' +
        (isDefault ? '<span style="font-size:10px;font-family:var(--mono);color:var(--green)">Default</span>' : '') +
        '</div>'
      );
    })
    .join('');
  statusEl.textContent = String(candidates.length) + ' Java runtime(s) detected';
}

function refreshJavaManagerModal() {
  void hydrateJavaManagerModal(true);
}

async function hydrateConsoleModal() {
  const listEl = document.getElementById('console-log-files');
  const statusEl = document.getElementById('console-log-status');
  if (!listEl || !statusEl) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    return;
  }
  statusEl.textContent = 'Loading log files...';
  try {
    const entries = await listInstanceDirectoryEntriesForTarget(instanceName, 'logs', {
      includeFiles: true,
      includeDirectories: false,
    });
    if (!entries.length) {
      listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No log files found yet.</div>';
      statusEl.textContent = '0 log files';
      return;
    }
    listEl.innerHTML = entries
      .map((entry) => (
        '<div class="list-item" style="align-items:flex-start;gap:9px">' +
        '<i data-lucide="file-text" width="14" height="14" style="color:var(--t4);margin-top:3px;flex-shrink:0"></i>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2);word-break:break-word">' + escapeHtml(entry.name) + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">' + escapeHtml(formatBytesCompact(entry.sizeBytes)) + ' - ' + escapeHtml(formatEpochRelative(entry.modifiedAtEpoch)) + '</div>' +
        '</div>' +
        '</div>'
      ))
      .join('');
    statusEl.textContent = String(entries.length) + ' log file(s)';
    lucide.createIcons();
  } catch (error) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:#b56262">Could not load logs.</div>';
    statusEl.textContent = formatBackendError(error && error.message ? error.message : String(error || ''), 'Could not read logs');
  }
}

function refreshConsoleModal() {
  void hydrateConsoleModal();
}

async function hydrateDatapacksModal() {
  const listEl = document.getElementById('datapacks-list');
  const statusEl = document.getElementById('datapacks-status');
  if (!listEl || !statusEl) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    return;
  }
  statusEl.textContent = 'Loading worlds...';
  try {
    const worldsState = await listInstanceWorlds(instanceName);
    const worlds = Array.isArray(worldsState.worlds) ? worldsState.worlds : [];
    if (!worlds.length) {
      listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No worlds found in this instance.</div>';
      statusEl.textContent = worldsState.running ? 'Game is running' : '0 worlds';
      return;
    }
    listEl.innerHTML = worlds
      .map((world) => {
        const encodedWorld = encodeURIComponent(String(world.worldName || '').trim());
        return (
          '<div class="list-item" style="align-items:flex-start;gap:9px">' +
          '<i data-lucide="globe" width="14" height="14" style="color:var(--t4);margin-top:3px;flex-shrink:0"></i>' +
          '<div style="flex:1;min-width:0">' +
          '<div style="font-size:12px;font-family:var(--mono);color:var(--t2);word-break:break-word">' + escapeHtml(world.displayName || world.worldName) + '</div>' +
          '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">' +
          escapeHtml((world.gameMode || 'Unknown') + ' - ' + formatPlaytimeText(world.playtimeMinutes) + ' - ' + formatEpochRelative(world.lastPlayedEpoch)) +
          '</div>' +
          '</div>' +
          '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" onclick="openWorldDetailFromManager(\'' + encodedWorld + '\')"><i data-lucide="external-link" width="11" height="11"></i>Detail</button>' +
          '</div>'
        );
      })
      .join('');
    statusEl.textContent =
      String(worlds.length) + ' world(s)' + (worldsState.running ? ' - close game to safely edit datapacks' : '');
    lucide.createIcons();
  } catch (error) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:#b56262">Could not load worlds.</div>';
    statusEl.textContent = formatBackendError(error && error.message ? error.message : String(error || ''), 'Could not load worlds');
  }
}

function refreshDatapacksModal() {
  void hydrateDatapacksModal();
}

function normalizeVersionSelectorMode(mode) {
  const value = String(mode || '').trim().toLowerCase();
  if (value === 'snapshot' || value === 'old') return value;
  return 'release';
}

async function fetchVersionSelectorBase(mode) {
  const normalizedMode = normalizeVersionSelectorMode(mode);
  const includeSnapshots = normalizedMode === 'snapshot';
  const cacheKey = includeSnapshots ? 'snapshots' : 'release';
  if (!VERSION_SELECTOR_CACHE.has(cacheKey)) {
    const res = await invokeBackend('list_minecraft_versions', {
      includeSnapshots,
      limit: 500,
    });
    if (!res.ok || !Array.isArray(res.data)) {
      throw new Error(formatBackendError(res.error, 'Could not fetch versions'));
    }
    VERSION_SELECTOR_CACHE.set(
      cacheKey,
      res.data.map((value) => String(value || '').trim()).filter(Boolean)
    );
  }
  const all = VERSION_SELECTOR_CACHE.get(cacheKey) || [];
  if (normalizedMode === 'old') {
    return all.slice(Math.min(25, all.length));
  }
  return all;
}

function renderVersionSelectorRows(rows) {
  const listEl = document.getElementById('version-selector-list');
  const statusEl = document.getElementById('version-selector-status');
  if (!listEl || !statusEl) return;
  const finalRows = Array.isArray(rows) ? rows : [];
  if (!finalRows.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No versions found.</div>';
    statusEl.textContent = '0 versions';
    return;
  }
  if (!VERSION_SELECTOR_STATE.selected || !finalRows.includes(VERSION_SELECTOR_STATE.selected)) {
    VERSION_SELECTOR_STATE.selected = finalRows[0];
  }
  listEl.innerHTML = finalRows
    .map((value, index) => {
      const selected = value === VERSION_SELECTOR_STATE.selected ? ' sel' : '';
      const badge = index === 0 && VERSION_SELECTOR_STATE.mode !== 'old'
        ? '<span class="ver-badge">Latest</span>'
        : '';
      return (
        '<div class="ver-item' + selected + '" onclick="pickVersionSelectorOption(\'' + escapeHtml(value) + '\')">' +
        '<span class="ver-name">' + escapeHtml(value) + '</span>' +
        badge +
        '</div>'
      );
    })
    .join('');
  statusEl.textContent = String(finalRows.length) + ' version(s)';
}

async function hydrateVersionSelectorModal() {
  const tabs = {
    release: document.getElementById('version-tab-release'),
    snapshot: document.getElementById('version-tab-snapshot'),
    old: document.getElementById('version-tab-old'),
  };
  Object.keys(tabs).forEach((key) => {
    const el = tabs[key];
    if (!el) return;
    el.classList.toggle('active', key === VERSION_SELECTOR_STATE.mode);
  });

  const searchInput = document.getElementById('version-selector-search');
  if (searchInput && searchInput.value !== VERSION_SELECTOR_STATE.query) {
    searchInput.value = VERSION_SELECTOR_STATE.query;
  }

  const statusEl = document.getElementById('version-selector-status');
  if (statusEl) statusEl.textContent = 'Loading versions...';
  try {
    const base = await fetchVersionSelectorBase(VERSION_SELECTOR_STATE.mode);
    const query = String(VERSION_SELECTOR_STATE.query || '').trim().toLowerCase();
    const filtered = query
      ? base.filter((value) => value.toLowerCase().includes(query))
      : base;
    renderVersionSelectorRows(filtered);
  } catch (error) {
    const listEl = document.getElementById('version-selector-list');
    if (listEl) {
      listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:#b56262">Could not load versions.</div>';
    }
    if (statusEl) {
      statusEl.textContent = formatBackendError(error && error.message ? error.message : String(error || ''), 'Could not load versions');
    }
  }
}

function setVersionSelectorMode(mode) {
  VERSION_SELECTOR_STATE.mode = normalizeVersionSelectorMode(mode);
  void hydrateVersionSelectorModal();
}

function onVersionSelectorSearchInput(value) {
  VERSION_SELECTOR_STATE.query = String(value || '');
  void hydrateVersionSelectorModal();
}

function pickVersionSelectorOption(value) {
  VERSION_SELECTOR_STATE.selected = String(value || '').trim();
  void hydrateVersionSelectorModal();
}

function openVersionSelectorFromAddInstance() {
  const loaderSelect = document.getElementById('add-inst-loader');
  const loaderVersionSelect = document.getElementById('add-inst-loader-version');
  const versionSelect = document.getElementById('add-inst-version');
  VERSION_SELECTOR_RETURN_CONTEXT = {
    source: 'add-instance',
    loader: loaderSelect ? String(loaderSelect.value || '').trim() : '',
    loaderVersion: loaderVersionSelect ? String(loaderVersionSelect.value || '').trim() : '',
  };
  VERSION_SELECTOR_STATE.mode = 'release';
  VERSION_SELECTOR_STATE.query = '';
  VERSION_SELECTOR_STATE.selected = versionSelect ? String(versionSelect.value || '').trim() : '';
  openModal('version-selector');
}

function applyVersionSelectorSelection() {
  const selected = String(VERSION_SELECTOR_STATE.selected || '').trim();
  if (!selected) {
    showToast('!', 'Version not selected', 'Pick a version first');
    return;
  }

  const context = VERSION_SELECTOR_RETURN_CONTEXT;
  VERSION_SELECTOR_RETURN_CONTEXT = null;
  if (context && context.source === 'add-instance') {
    ADD_INSTANCE_PREFILL = {
      loader: context.loader || undefined,
      loaderVersion: context.loaderVersion || undefined,
      version: selected,
    };
    openModal('add-instance');
    showToast('OK', 'Version selected', selected + ' applied to Add Instance');
    return;
  }

  const addSelect = document.getElementById('add-inst-version');
  if (addSelect) {
    if (!Array.from(addSelect.options).some((option) => String(option.value || '').trim() === selected)) {
      const option = document.createElement('option');
      option.value = selected;
      option.textContent = selected;
      addSelect.appendChild(option);
    }
    addSelect.value = selected;
    addSelect.dispatchEvent(new Event('change', { bubbles: true }));
  }
  closeModal();
  showToast('OK', 'Version selected', selected);
}

function defaultLauncherSettings() {
  return {
    javaPath: '',
    defaultMemoryGb: 4,
    autoUpdate: true,
    analytics: false,
    closeToTray: true,
  };
}

function normalizeLauncherMemoryGb(value) {
  const numeric = Number(value || 0);
  if (!Number.isFinite(numeric) || numeric <= 0) return 4;
  return Math.max(1, Math.min(16, Math.round(numeric)));
}

function ensureLauncherSettingsLoaded() {
  if (LAUNCHER_SETTINGS_LOADED) return;
  LAUNCHER_SETTINGS_LOADED = true;
  LAUNCHER_SETTINGS = defaultLauncherSettings();
  try {
    if (!window.localStorage) return;
    const raw = window.localStorage.getItem(LAUNCHER_SETTINGS_STORE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    LAUNCHER_SETTINGS = Object.assign({}, LAUNCHER_SETTINGS, parsed);
  } catch (err) {
    console.warn('[launcher-settings] failed to load', err);
    LAUNCHER_SETTINGS = defaultLauncherSettings();
  }
  LAUNCHER_SETTINGS.javaPath = String(LAUNCHER_SETTINGS.javaPath || '').trim();
  LAUNCHER_SETTINGS.defaultMemoryGb = normalizeLauncherMemoryGb(LAUNCHER_SETTINGS.defaultMemoryGb);
  LAUNCHER_SETTINGS.autoUpdate = !!LAUNCHER_SETTINGS.autoUpdate;
  LAUNCHER_SETTINGS.analytics = !!LAUNCHER_SETTINGS.analytics;
  LAUNCHER_SETTINGS.closeToTray = !!LAUNCHER_SETTINGS.closeToTray;
}

function persistLauncherSettings() {
  try {
    if (!window.localStorage) return;
    window.localStorage.setItem(LAUNCHER_SETTINGS_STORE_KEY, JSON.stringify(LAUNCHER_SETTINGS || defaultLauncherSettings()));
  } catch (err) {
    console.warn('[launcher-settings] failed to persist', err);
  }
}

function getLauncherSettings() {
  ensureLauncherSettingsLoaded();
  return Object.assign({}, LAUNCHER_SETTINGS);
}

function setLauncherSettings(next) {
  ensureLauncherSettingsLoaded();
  LAUNCHER_SETTINGS = Object.assign({}, defaultLauncherSettings(), next || {});
  LAUNCHER_SETTINGS.javaPath = String(LAUNCHER_SETTINGS.javaPath || '').trim();
  LAUNCHER_SETTINGS.defaultMemoryGb = normalizeLauncherMemoryGb(LAUNCHER_SETTINGS.defaultMemoryGb);
  LAUNCHER_SETTINGS.autoUpdate = !!LAUNCHER_SETTINGS.autoUpdate;
  LAUNCHER_SETTINGS.analytics = !!LAUNCHER_SETTINGS.analytics;
  LAUNCHER_SETTINGS.closeToTray = !!LAUNCHER_SETTINGS.closeToTray;
  persistLauncherSettings();
}

function resolveLauncherDefaultJavaPath() {
  const settings = getLauncherSettings();
  const saved = String(settings.javaPath || '').trim();
  if (saved) return saved;
  return String(JAVA_RUNTIME_INFO && JAVA_RUNTIME_INFO.defaultPath ? JAVA_RUNTIME_INFO.defaultPath : '').trim();
}

function updateSettingsMemoryLabel() {
  const slider = document.getElementById('settings-default-memory');
  const valueEl = document.getElementById('settings-default-memory-value');
  if (!slider || !valueEl) return;
  const gb = normalizeLauncherMemoryGb(slider.value);
  valueEl.textContent = String(gb) + ' GB';
}

function hydrateSettingsModal() {
  const settings = getLauncherSettings();
  const javaPathInput = document.getElementById('settings-java-path');
  const memorySlider = document.getElementById('settings-default-memory');
  const statusEl = document.getElementById('settings-status');

  if (javaPathInput) {
    javaPathInput.value = settings.javaPath || '';
    javaPathInput.placeholder = resolveLauncherDefaultJavaPath() || 'Auto (launcher default)';
  }
  if (memorySlider) memorySlider.value = String(normalizeLauncherMemoryGb(settings.defaultMemoryGb));

  setCheckBoxState(document.getElementById('settings-auto-update-check'), !!settings.autoUpdate);
  setCheckBoxState(document.getElementById('settings-analytics-check'), !!settings.analytics);
  setCheckBoxState(document.getElementById('settings-close-to-tray-check'), !!settings.closeToTray);
  updateSettingsMemoryLabel();
  if (statusEl) statusEl.textContent = 'Saved defaults are applied when instance launch settings are Auto.';
  lucide.createIcons();
}

function resetSettingsModal() {
  setLauncherSettings(defaultLauncherSettings());
  hydrateSettingsModal();
  showToast('OK', 'Reset complete', 'Settings restored to defaults');
}

function saveSettingsModal() {
  const javaPathInput = document.getElementById('settings-java-path');
  const memorySlider = document.getElementById('settings-default-memory');
  const statusEl = document.getElementById('settings-status');
  const next = {
    javaPath: String(javaPathInput && javaPathInput.value ? javaPathInput.value : '').trim(),
    defaultMemoryGb: normalizeLauncherMemoryGb(memorySlider && memorySlider.value ? memorySlider.value : 4),
    autoUpdate: readCheckBoxState(document.getElementById('settings-auto-update-check')),
    analytics: readCheckBoxState(document.getElementById('settings-analytics-check')),
    closeToTray: readCheckBoxState(document.getElementById('settings-close-to-tray-check')),
  };
  setLauncherSettings(next);
  if (statusEl) statusEl.textContent = 'Saved.';
  closeModal();
  showToast('OK', 'Settings saved', 'Global settings updated');
}

function buildLaunchSettingsOverrides(instanceName) {
  const settings = getLauncherSettings();
  const runtime = getInstanceRuntimeConfig(instanceName) || {};
  const runtimeExecutable = String(runtime.executable || '').trim();
  const runtimeArgs = Array.isArray(runtime.args) ? runtime.args.slice() : [];
  const bounds = extractHeapBoundsFromArgs(runtimeArgs);

  const executableOverride = runtimeExecutable ? '' : String(settings.javaPath || '').trim();
  let argsOverride = null;
  if (bounds.minMb <= 0 && bounds.maxMb <= 0) {
    const maxMb = normalizeLauncherMemoryGb(settings.defaultMemoryGb) * 1024;
    const minMb = Math.min(maxMb, 1024);
    const mergedArgs = upsertHeapArgs(runtimeArgs, minMb, maxMb);
    if (JSON.stringify(mergedArgs) !== JSON.stringify(runtimeArgs)) {
      argsOverride = mergedArgs;
    }
  }
  return {
    executable: executableOverride,
    args: argsOverride,
  };
}

function setCheckBoxState(checkEl, checked) {
  if (!checkEl) return;
  const isOn = !!checked;
  checkEl.classList.toggle('on', isOn);
  checkEl.innerHTML = isOn
    ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>'
    : '';
}

function readCheckBoxState(checkEl) {
  return !!(checkEl && checkEl.classList && checkEl.classList.contains('on'));
}

async function resolveModalDependencyData(instanceName) {
  const key = String(instanceName || '').trim();
  if (!key) {
    return {
      missingRows: [],
      installableRows: [],
      preflightIssues: [],
    };
  }
  const trackedRows = getTrackedInstallsForInstance(key);
  const hydratedRows = await resolveTrackedInstallMissingState(key, trackedRows);
  const missingRows = getMissingRequiredTrackedRows(hydratedRows);
  const preflight = await runLaunchPreflight(
    key,
    getSelectedLaunchProfileId(),
    getSelectedLaunchProfileName()
  );
  const preflightIssues = preflight.ok && Array.isArray(preflight.issues)
    ? preflight.issues
    : [];
  const installableRows = missingRows.filter((row) => !!String(row && row.url ? row.url : '').trim());
  return {
    missingRows,
    installableRows,
    preflightIssues,
  };
}

function renderDependenciesModalRows(missingRows, preflightIssues) {
  const trackedMarkup = (Array.isArray(missingRows) ? missingRows : [])
    .map((row) => {
      const sourceReady = !!String(row && row.url ? row.url : '').trim();
      return (
        '<div class="list-item" style="align-items:flex-start;gap:8px">' +
        '<div class="li-dot ' + (sourceReady ? 'warn' : 'err') + '" style="margin-top:5px"></div>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2)">' + escapeHtml(row.title || row.fileName || 'Dependency') + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">' + escapeHtml(getBrowseInstallTargetLabel(row.target)) + ' - ' + escapeHtml(row.fileName || '') + '</div>' +
        '<div style="margin-top:5px">' +
        (sourceReady
          ? '<span style="padding:1px 6px;border-radius:999px;border:1px solid rgba(70,150,90,0.35);font-size:9px;font-family:var(--mono);color:#67b37a">Auto-fix ready</span>'
          : '<span style="padding:1px 6px;border-radius:999px;border:1px solid rgba(220,80,80,0.4);font-size:9px;font-family:var(--mono);color:#d56f6f">Manual required</span>') +
        '</div>' +
        '</div>' +
        '</div>'
      );
    })
    .join('');

  const preflightMarkup = (Array.isArray(preflightIssues) ? preflightIssues : [])
    .filter((issue) => String(issue && issue.severity ? issue.severity : '').toLowerCase() === 'blocking')
    .map((issue) => (
      '<div class="list-item" style="align-items:flex-start;gap:8px">' +
      '<div class="li-dot err" style="margin-top:5px"></div>' +
      '<div style="flex:1;min-width:0">' +
      '<div style="font-size:11px;font-family:var(--mono);color:#d56f6f">' + escapeHtml(String(issue && issue.code ? issue.code : 'PREFLIGHT')) + '</div>' +
      '<div style="font-size:10px;font-family:var(--mono);color:var(--t3);margin-top:2px;line-height:1.5">' + escapeHtml(String(issue && issue.message ? issue.message : 'Issue detected')) + '</div>' +
      (issue && issue.action
        ? '<div style="font-size:9.5px;font-family:var(--mono);color:var(--t4);margin-top:4px">Action: ' + escapeHtml(String(issue.action)) + '</div>'
        : '') +
      '</div>' +
      '</div>'
    ))
    .join('');

  if (!trackedMarkup && !preflightMarkup) {
    return '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No dependency issues detected.</div>';
  }
  return trackedMarkup + preflightMarkup;
}

async function hydrateDependenciesModal() {
  const listEl = document.getElementById('dependencies-list');
  const statusEl = document.getElementById('dependencies-status');
  const installBtn = document.getElementById('dependencies-install-btn');
  if (!listEl || !statusEl || !installBtn) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    MOD_DEPENDENCIES_MODAL_STATE = { instanceName: '', rows: [] };
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    installBtn.disabled = true;
    return;
  }
  statusEl.textContent = 'Scanning dependencies...';
  const data = await resolveModalDependencyData(instanceName);
  MOD_DEPENDENCIES_MODAL_STATE = { instanceName, rows: data.installableRows };
  listEl.innerHTML = renderDependenciesModalRows(data.missingRows, data.preflightIssues);
  const blockingPreflight = data.preflightIssues.filter((row) => String(row && row.severity ? row.severity : '').toLowerCase() === 'blocking').length;
  const installableCount = data.installableRows.length;
  const missingCount = data.missingRows.length;
  installBtn.disabled = installableCount === 0;
  installBtn.innerHTML = '<i data-lucide="download" width="12" height="12"></i>Install Required' + (installableCount > 0 ? ' (' + String(installableCount) + ')' : '');
  statusEl.textContent =
    'Missing required: ' + String(missingCount) +
    (blockingPreflight > 0 ? ' | Blocking preflight: ' + String(blockingPreflight) : '');
  lucide.createIcons();
}

function refreshDependenciesModal() {
  void hydrateDependenciesModal();
}

async function installDependenciesFromModal() {
  const state = MOD_DEPENDENCIES_MODAL_STATE;
  const statusEl = document.getElementById('dependencies-status');
  const installBtn = document.getElementById('dependencies-install-btn');
  if (!state || !state.instanceName) return;
  const rows = Array.isArray(state.rows) ? state.rows : [];
  if (!rows.length) {
    showToast('!', 'No installable items', 'No dependency with source URL is available');
    return;
  }
  if (installBtn) {
    installBtn.disabled = true;
    installBtn.innerHTML = '<i data-lucide="loader-circle" width="12" height="12"></i>Installing...';
  }
  if (statusEl) statusEl.textContent = 'Installing dependencies...';
  const outcome = await installTrackedRowsToInstance(state.instanceName, rows, 'overwrite', (index, total, row, phase) => {
    if (!statusEl || phase !== 'working') return;
    statusEl.textContent = 'Installing ' + String(index + 1) + '/' + String(total) + ': ' + String((row && (row.title || row.fileName)) || 'Dependency');
  });
  await hydrateDependenciesModal();
  await refreshModConflictModal();
  if (outcome.failed > 0 || outcome.unresolved > 0) {
    showToast('!', 'Dependency install incomplete', 'Installed ' + String(outcome.installed) + '/' + String(outcome.total));
    return;
  }
  showToast('OK', 'Dependencies installed', String(outcome.installed) + ' item(s) installed');
}

async function hydrateModConflictModal() {
  const listEl = document.getElementById('mod-conflict-list');
  const statusEl = document.getElementById('mod-conflict-status');
  const fixBtn = document.getElementById('mod-conflict-fix-btn');
  if (!listEl || !statusEl || !fixBtn) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    MOD_CONFLICT_MODAL_STATE = { instanceName: '', issues: [] };
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    fixBtn.disabled = true;
    return;
  }
  statusEl.textContent = 'Checking conflicts...';
  const preflight = await runLaunchPreflight(instanceName, getSelectedLaunchProfileId(), getSelectedLaunchProfileName());
  if (!preflight.ok) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:#b56262">Could not run preflight checks.</div>';
    statusEl.textContent = preflight.error || 'Preflight failed';
    fixBtn.disabled = false;
    return;
  }
  const issues = (Array.isArray(preflight.issues) ? preflight.issues : [])
    .filter((issue) => String(issue && issue.severity ? issue.severity : '').toLowerCase() === 'blocking');
  MOD_CONFLICT_MODAL_STATE = { instanceName, issues };
  if (!issues.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No blocking conflicts detected.</div>';
    statusEl.textContent = 'No blocking conflicts';
    fixBtn.disabled = true;
    fixBtn.innerHTML = '<i data-lucide="check-circle" width="12" height="12"></i>No Fix Needed';
    lucide.createIcons();
    return;
  }
  listEl.innerHTML = issues
    .map((issue) => (
      '<div class="list-item" style="align-items:flex-start;gap:8px">' +
      '<div class="li-dot warn" style="margin-top:5px"></div>' +
      '<div style="flex:1;min-width:0">' +
      '<div style="font-size:11px;font-family:var(--mono);color:var(--yellow)">' + escapeHtml(String(issue.code || 'PREFLIGHT_ISSUE')) + '</div>' +
      '<div style="font-size:10px;font-family:var(--mono);color:var(--t3);margin-top:2px;line-height:1.5">' + escapeHtml(String(issue.message || 'Conflict detected')) + '</div>' +
      (issue.action
        ? '<div style="font-size:9.5px;font-family:var(--mono);color:var(--t4);margin-top:4px">Action: ' + escapeHtml(String(issue.action)) + '</div>'
        : '') +
      '</div>' +
      '</div>'
    ))
    .join('');
  statusEl.textContent = 'Blocking conflicts: ' + String(issues.length);
  fixBtn.disabled = false;
  fixBtn.innerHTML = '<i data-lucide="wrench" width="12" height="12"></i>Open Fixes';
  lucide.createIcons();
}

function refreshModConflictModal() {
  void hydrateModConflictModal();
}

function isTrackedRowUpdatable(row) {
  if (!row || typeof row !== 'object') return false;
  if (row.inferred) return false;
  const url = String(row.url || '').trim();
  return !!url;
}

async function hydrateModUpdatesModal() {
  const listEl = document.getElementById('mod-updates-list');
  const statusEl = document.getElementById('mod-updates-status');
  const applyBtn = document.getElementById('mod-updates-apply-btn');
  if (!listEl || !statusEl || !applyBtn) return;
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) {
    MOD_UPDATES_MODAL_STATE = { instanceName: '', rows: [], selected: {} };
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    applyBtn.disabled = true;
    return;
  }
  const rows = getTrackedInstallsForInstance(instanceName).filter(isTrackedRowUpdatable);
  if (MOD_UPDATES_MODAL_STATE.instanceName !== instanceName) {
    MOD_UPDATES_MODAL_STATE = { instanceName, rows: [], selected: {} };
  }
  MOD_UPDATES_MODAL_STATE.rows = rows;
  const selectedMap = Object.assign({}, MOD_UPDATES_MODAL_STATE.selected || {});
  rows.forEach((row) => {
    const id = String(row.id || '').trim();
    if (!id) return;
    if (typeof selectedMap[id] !== 'boolean') {
      selectedMap[id] = true;
    }
  });
  MOD_UPDATES_MODAL_STATE.selected = selectedMap;
  if (!rows.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No updatable tracked installs found.</div>';
    statusEl.textContent = '0 updates';
    applyBtn.disabled = true;
    return;
  }
  listEl.innerHTML = rows
    .map((row) => {
      const id = String(row.id || '').trim();
      const encodedId = encodeURIComponent(id);
      const checked = !!selectedMap[id];
      const target = getBrowseInstallTargetLabel(row.target);
      return (
        '<div class="list-item" style="gap:8px">' +
        '<div class="check-box' + (checked ? ' on' : '') + '" onclick="toggleModUpdateSelection(\'' + encodedId + '\')">' +
        (checked ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : '') +
        '</div>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:12px;font-family:var(--mono);color:var(--t2)">' + escapeHtml(row.title || row.fileName) + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">' + escapeHtml(target + ' - ' + formatTrackedInstallAge(row.installedAt)) + '</div>' +
        '</div>' +
        '</div>'
      );
    })
    .join('');
  const selectedCount = rows.filter((row) => !!selectedMap[String(row.id || '').trim()]).length;
  statusEl.textContent = 'Tracked updates: ' + String(rows.length) + ' | Selected: ' + String(selectedCount);
  applyBtn.disabled = selectedCount === 0;
  applyBtn.innerHTML = '<i data-lucide="download" width="12" height="12"></i>Update Selected' + (selectedCount > 0 ? ' (' + String(selectedCount) + ')' : '');
  lucide.createIcons();
}

function refreshModUpdatesModal() {
  void hydrateModUpdatesModal();
}

function toggleModUpdateSelection(encodedId) {
  const id = decodeURIComponent(String(encodedId || '').trim());
  if (!id) return;
  if (!MOD_UPDATES_MODAL_STATE.selected || typeof MOD_UPDATES_MODAL_STATE.selected !== 'object') {
    MOD_UPDATES_MODAL_STATE.selected = {};
  }
  MOD_UPDATES_MODAL_STATE.selected[id] = !MOD_UPDATES_MODAL_STATE.selected[id];
  void hydrateModUpdatesModal();
}

function toggleAllModUpdatesSelection(nextValue) {
  const rows = Array.isArray(MOD_UPDATES_MODAL_STATE.rows) ? MOD_UPDATES_MODAL_STATE.rows : [];
  const selected = {};
  rows.forEach((row) => {
    const id = String(row && row.id ? row.id : '').trim();
    if (!id) return;
    selected[id] = !!nextValue;
  });
  MOD_UPDATES_MODAL_STATE.selected = selected;
  void hydrateModUpdatesModal();
}

async function applyModUpdatesFromModal() {
  const state = MOD_UPDATES_MODAL_STATE;
  const statusEl = document.getElementById('mod-updates-status');
  const applyBtn = document.getElementById('mod-updates-apply-btn');
  if (!state || !state.instanceName) return;
  const rows = (Array.isArray(state.rows) ? state.rows : []).filter((row) => !!state.selected[String(row.id || '').trim()]);
  if (!rows.length) {
    showToast('!', 'No update selected', 'Select one or more tracked installs');
    return;
  }
  if (applyBtn) {
    applyBtn.disabled = true;
    applyBtn.innerHTML = '<i data-lucide="loader-circle" width="12" height="12"></i>Updating...';
  }
  if (statusEl) statusEl.textContent = 'Updating selected tracked installs...';
  const outcome = await installTrackedRowsToInstance(state.instanceName, rows, 'overwrite', (index, total, row, phase) => {
    if (!statusEl || phase !== 'working') return;
    statusEl.textContent = 'Updating ' + String(index + 1) + '/' + String(total) + ': ' + String((row && (row.title || row.fileName)) || 'Item');
  });
  await hydrateModUpdatesModal();
  await refreshManagedModsModal();
  if (outcome.failed > 0 || outcome.unresolved > 0) {
    showToast('!', 'Update incomplete', 'Updated ' + String(outcome.installed) + '/' + String(outcome.total));
    return;
  }
  showToast('OK', 'Updated', String(outcome.installed) + ' tracked install(s) updated');
}

async function listInstanceWorlds(instanceName) {
  const res = await invokeBackend('list_instance_worlds', {
    request: { instanceName },
  });
  if (!res.ok || !res.data) {
    throw new Error(formatBackendError(res.error, 'Could not list worlds'));
  }
  const rows = Array.isArray(res.data.worlds) ? res.data.worlds : [];
  return {
    running: !!res.data.running,
    worldsRoot: String(res.data.worldsRoot || res.data.worlds_root || '').trim(),
    worlds: rows.map((row) => ({
      worldName: String(row && (row.worldName || row.world_name) ? (row.worldName || row.world_name) : '').trim(),
      displayName: String(row && (row.displayName || row.display_name) ? (row.displayName || row.display_name) : '').trim(),
      path: String(row && row.path ? row.path : '').trim(),
      sizeBytes: Number(row && (row.sizeBytes || row.size_bytes) ? (row.sizeBytes || row.size_bytes) : 0) || 0,
      lastPlayedEpoch: Number(
        row && (row.lastPlayedEpoch || row.last_played_epoch)
          ? (row.lastPlayedEpoch || row.last_played_epoch)
          : 0
      ) || 0,
      gameMode: String(row && (row.gameMode || row.game_mode) ? (row.gameMode || row.game_mode) : '').trim(),
      difficulty: String(row && row.difficulty ? row.difficulty : '').trim(),
      seed: String(row && row.seed ? row.seed : '').trim(),
      playtimeMinutes: Number(
        row && (row.playtimeMinutes || row.playtime_minutes)
          ? (row.playtimeMinutes || row.playtime_minutes)
          : 0
      ) || 0,
    })).filter((row) => !!row.worldName),
  };
}

async function getInstanceWorldDetails(instanceName, worldName) {
  const res = await invokeBackend('get_instance_world_details', {
    request: { instanceName, worldName },
  });
  if (!res.ok || !res.data) {
    throw new Error(formatBackendError(res.error, 'Could not load world details'));
  }
  const row = res.data;
  return {
    worldName: String(row.worldName || row.world_name || worldName).trim() || worldName,
    levelName: String(row.levelName || row.level_name || '').trim(),
    path: String(row.path || '').trim(),
    sizeBytes: Number(row.sizeBytes || row.size_bytes || 0) || 0,
    lastPlayedEpoch: Number(row.lastPlayedEpoch || row.last_played_epoch || 0) || 0,
    gameMode: String(row.gameMode || row.game_mode || '').trim(),
    difficulty: String(row.difficulty || '').trim(),
    seed: String(row.seed || '').trim(),
    playtimeMinutes: Number(row.playtimeMinutes || row.playtime_minutes || 0) || 0,
    running: !!row.running,
  };
}

async function listWorldPlayers(instanceName, worldName) {
  const res = await invokeBackend('list_world_players', {
    request: { instanceName, worldName },
  });
  if (!res.ok || !res.data) {
    throw new Error(formatBackendError(res.error, 'Could not load world players'));
  }
  const rows = Array.isArray(res.data.players) ? res.data.players : [];
  return {
    running: !!res.data.running,
    players: rows
      .map((row) => ({
        playerUuid: String(row && (row.playerUuid || row.player_uuid) ? (row.playerUuid || row.player_uuid) : '').trim(),
        path: String(row && row.path ? row.path : '').trim(),
        modifiedAtEpoch: Number(
          row && (row.modifiedAtEpoch || row.modified_at_epoch)
            ? (row.modifiedAtEpoch || row.modified_at_epoch)
            : 0
        ) || 0,
      }))
      .filter((row) => !!row.playerUuid),
  };
}

async function getWorldPlayerInventory(instanceName, worldName, playerUuid) {
  const res = await invokeBackend('get_world_player_inventory', {
    request: { instanceName, worldName, playerUuid },
  });
  if (!res.ok || !res.data) {
    throw new Error(formatBackendError(res.error, 'Could not load player inventory'));
  }
  const mapItems = (rows) => (Array.isArray(rows) ? rows : [])
    .map((row) => ({
      slot: Number(row && row.slot ? row.slot : 0) || 0,
      itemId: String(row && (row.itemId || row.item_id) ? (row.itemId || row.item_id) : '').trim(),
      displayName: String(row && (row.displayName || row.display_name) ? (row.displayName || row.display_name) : '').trim(),
      count: Number(row && row.count ? row.count : 0) || 0,
    }))
    .filter((row) => !!row.itemId || !!row.displayName);

  const row = res.data;
  return {
    instanceName: String(row.instanceName || row.instance_name || instanceName).trim() || instanceName,
    worldName: String(row.worldName || row.world_name || worldName).trim() || worldName,
    playerUuid: String(row.playerUuid || row.player_uuid || playerUuid).trim() || playerUuid,
    running: !!row.running,
    health: Number.isFinite(Number(row.health)) ? Number(row.health) : null,
    foodLevel: Number.isFinite(Number(row.foodLevel || row.food_level))
      ? Number(row.foodLevel || row.food_level)
      : null,
    xpLevel: Number.isFinite(Number(row.xpLevel || row.xp_level))
      ? Number(row.xpLevel || row.xp_level)
      : null,
    position: Array.isArray(row.position) ? row.position.map((value) => Number(value)).filter((value) => Number.isFinite(value)) : [],
    hotbar: mapItems(row.hotbar),
    inventory: mapItems(row.inventory),
    armor: mapItems(row.armor),
    offhand: mapItems(row.offhand),
    enderChest: mapItems(row.enderChest || row.ender_chest),
  };
}

function formatPlaytimeText(minutes) {
  const value = Number(minutes || 0);
  if (!Number.isFinite(value) || value <= 0) return '0m';
  const hours = Math.floor(value / 60);
  const mins = value % 60;
  if (hours <= 0) return mins + 'm';
  if (mins <= 0) return hours + 'h';
  return hours + 'h ' + mins + 'm';
}

function openWorldDetailFromManager(worldName) {
  const name = String(worldName || '').trim();
  if (!name) return;
  ACTIVE_WORLD_DETAIL_NAME = name;
  WORLD_DETAIL_TAB = 'overview';
  WORLD_DETAIL_CURRENT = null;
  WORLD_DETAIL_PLAYERS = [];
  WORLD_DETAIL_SELECTED_PLAYER = '';
  WORLD_DETAIL_PLAYER_CACHE = {};
  openModal('world-detail');
}

function normalizeWorldDetailTab(tab) {
  const value = String(tab || '').trim().toLowerCase();
  if (value === 'players' || value === 'inventory' || value === 'stats') return value;
  return 'overview';
}

function decodeActiveWorldDetailName() {
  const encoded = String(ACTIVE_WORLD_DETAIL_NAME || '').trim();
  if (!encoded) return '';
  try {
    return decodeURIComponent(encoded);
  } catch (_err) {
    return encoded;
  }
}

function worldDetailSelectedPlayer() {
  const selected = String(WORLD_DETAIL_SELECTED_PLAYER || '').trim();
  if (!selected) return null;
  return WORLD_DETAIL_PLAYERS.find((entry) => {
    return String(entry && entry.playerUuid ? entry.playerUuid : '').trim() === selected;
  }) || null;
}

function renderWorldDetailTabButtons() {
  const tabs = ['overview', 'players', 'inventory', 'stats'];
  const activeTab = normalizeWorldDetailTab(WORLD_DETAIL_TAB);
  WORLD_DETAIL_TAB = activeTab;
  tabs.forEach((tab) => {
    const button = document.getElementById('world-tab-' + tab);
    if (!button) return;
    button.classList.toggle('active', tab === activeTab);
  });
}

function formatWorldDetailDate(epoch) {
  const stamp = Number(epoch || 0);
  if (!Number.isFinite(stamp) || stamp <= 0) return 'Unknown';
  return new Date(stamp * 1000).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatWorldDetailPosition(position) {
  if (!Array.isArray(position) || position.length < 3) return 'Unknown';
  const values = position.slice(0, 3).map((value) => Number(value));
  if (values.some((value) => !Number.isFinite(value))) return 'Unknown';
  return values.map((value) => Math.round(value)).join(', ');
}

function renderWorldInventoryRows(items, emptyText) {
  const rows = Array.isArray(items) ? items : [];
  if (!rows.length) {
    return '<div style="font-size:10px;font-family:var(--mono);color:var(--t4)">' + escapeHtml(emptyText || 'No items') + '</div>';
  }
  return rows
    .map((item) => {
      const label = String(item && item.displayName ? item.displayName : '').trim()
        || String(item && item.itemId ? item.itemId : '').trim()
        || 'Unknown Item';
      const itemId = String(item && item.itemId ? item.itemId : '').trim();
      const count = Number(item && item.count ? item.count : 0) || 0;
      const slot = Number(item && item.slot ? item.slot : 0) || 0;
      return `
        <div class="list-item" style="padding:7px 0;align-items:flex-start">
          <div style="flex:1;min-width:0">
            <div style="font-size:11px;color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(label)}</div>
            <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">${escapeHtml(itemId || 'unknown')} - slot ${escapeHtml(String(slot))}</div>
          </div>
          <div style="font-size:10px;font-family:var(--mono);color:var(--t3);padding-left:8px">x${escapeHtml(String(count))}</div>
        </div>
      `;
    })
    .join('');
}

function normalizeWorldItemGlyph(item) {
  const raw = String(item && item.itemId ? item.itemId : '').trim()
    || String(item && item.displayName ? item.displayName : '').trim();
  const normalized = raw
    .split(':')
    .pop()
    .replace(/[_\-]+/g, ' ')
    .trim();
  if (!normalized) return '?';
  const parts = normalized.split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function worldItemTextureCandidates(itemId) {
  const raw = String(itemId || '').trim().toLowerCase();
  if (!raw) return [];
  const [namespaceRaw, pathRaw] = raw.includes(':') ? raw.split(':', 2) : ['minecraft', raw];
  const namespace = String(namespaceRaw || '').trim();
  const path = String(pathRaw || '').trim().replace(/[^a-z0-9_./-]/g, '');
  if (namespace !== 'minecraft' || !path) return [];

  const sources = [
    {
      item: 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21.11/assets/minecraft/textures/item/',
      block: 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21.11/assets/minecraft/textures/block/',
    },
    {
      item: 'https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.4/items/',
      block: 'https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.4/blocks/',
    },
  ];
  const seen = new Set();
  const out = [];
  const push = (url) => {
    const value = String(url || '').trim();
    if (!value || seen.has(value)) return;
    seen.add(value);
    out.push(value);
  };
  sources.forEach((source) => {
    push(source.item + path + '.png');
    push(source.block + path + '.png');
  });
  return out;
}

async function resolveWorldItemTextureDataUri(itemId) {
  const key = String(itemId || '').trim().toLowerCase();
  if (!key) return null;
  if (WORLD_ITEM_TEXTURE_DATA_URI_CACHE.has(key)) {
    return WORLD_ITEM_TEXTURE_DATA_URI_CACHE.get(key) || null;
  }
  if (WORLD_ITEM_TEXTURE_DATA_URI_PENDING.has(key)) {
    return WORLD_ITEM_TEXTURE_DATA_URI_PENDING.get(key);
  }
  const pending = (async () => {
    const res = await invokeBackend('resolve_item_texture', {
      request: { itemId: key },
    });
    if (!res.ok || !res.data) return null;
    const dataUri = String(res.data.dataUri || res.data.data_uri || '').trim();
    if (!dataUri) return null;
    WORLD_ITEM_TEXTURE_DATA_URI_CACHE.set(key, dataUri);
    return dataUri;
  })()
    .catch(() => null)
    .finally(() => {
      WORLD_ITEM_TEXTURE_DATA_URI_PENDING.delete(key);
    });
  WORLD_ITEM_TEXTURE_DATA_URI_PENDING.set(key, pending);
  return pending;
}

function shiftWorldItemAltSource(imgEl) {
  if (!imgEl || !imgEl.dataset) return '';
  const raw = String(imgEl.dataset.altSrc || '').trim();
  if (!raw) return '';
  const parts = raw.split('|').map((value) => String(value || '').trim()).filter(Boolean);
  if (!parts.length) {
    imgEl.dataset.altSrc = '';
    return '';
  }
  const next = parts.shift() || '';
  imgEl.dataset.altSrc = parts.join('|');
  return next;
}

function handleWorldItemTextureLoad(imgEl) {
  if (!imgEl) return;
  const slot = imgEl.closest('.world-hotbar-slot');
  if (!slot) return;
  const glyphEl = slot.querySelector('.world-hotbar-slot-glyph');
  if (glyphEl) glyphEl.classList.add('hidden');
  imgEl.classList.add('loaded');
}

function handleWorldItemTextureError(imgEl) {
  if (!imgEl) return;
  const next = shiftWorldItemAltSource(imgEl);
  if (next) {
    imgEl.src = next;
    return;
  }
  imgEl.classList.remove('loaded');
  imgEl.style.display = 'none';
  const slot = imgEl.closest('.world-hotbar-slot');
  if (!slot) return;
  const glyphEl = slot.querySelector('.world-hotbar-slot-glyph');
  if (glyphEl) glyphEl.classList.remove('hidden');
}

async function hydrateWorldHotbarTextures() {
  const icons = Array.from(document.querySelectorAll('.world-hotbar-slot-icon[data-item-id]'));
  for (const imgEl of icons) {
    if (!imgEl || imgEl.classList.contains('loaded')) continue;
    const itemId = String(imgEl.dataset.itemId || '').trim();
    if (!itemId) continue;
    if (!imgEl.getAttribute('src')) {
      const cached = await resolveWorldItemTextureDataUri(itemId);
      if (cached) {
        imgEl.src = cached;
        continue;
      }
      const primary = String(imgEl.dataset.fallbackPrimary || '').trim();
      if (primary) imgEl.src = primary;
    }
  }
}

function renderWorldHotbar(items) {
  const rows = Array.isArray(items) ? items : [];
  const bySlot = new Map();
  rows.forEach((item) => {
    const slot = Number(item && item.slot ? item.slot : -1);
    if (!Number.isFinite(slot) || slot < 0 || slot > 8 || bySlot.has(slot)) return;
    bySlot.set(slot, item);
  });
  const slotsHtml = Array.from({ length: 9 }, (_value, slot) => {
    const item = bySlot.get(slot);
    if (!item) {
      return `
        <div class="world-hotbar-slot empty">
          <span class="world-hotbar-slot-index">${slot + 1}</span>
        </div>
      `;
    }
    const label = String(item.displayName || item.itemId || 'Unknown Item').trim() || 'Unknown Item';
    const count = Math.max(1, Number(item.count || 1) || 1);
    const textureCandidates = worldItemTextureCandidates(item.itemId);
    const texturePrimary = textureCandidates.length ? textureCandidates[0] : '';
    const textureAlt = textureCandidates.length > 1 ? textureCandidates.slice(1).join('|') : '';
    return `
      <div class="world-hotbar-slot" title="${escapeHtml(label)} x${escapeHtml(String(count))}">
        <div class="world-hotbar-slot-media">
          <img class="world-hotbar-slot-icon" data-item-id="${escapeHtml(String(item.itemId || '').trim())}" data-fallback-primary="${escapeHtml(texturePrimary)}" data-alt-src="${escapeHtml(textureAlt)}" alt="${escapeHtml(label)}" loading="lazy" onload="handleWorldItemTextureLoad(this)" onerror="handleWorldItemTextureError(this)">
          <span class="world-hotbar-slot-glyph">${escapeHtml(normalizeWorldItemGlyph(item))}</span>
        </div>
        <span class="world-hotbar-slot-count">${escapeHtml(String(count))}</span>
      </div>
    `;
  }).join('');
  return `
    <div class="world-hotbar-wrap">
      <div class="world-hotbar-grid">${slotsHtml}</div>
      <div class="world-hotbar-meta">${escapeHtml(String(rows.length))} occupied slots</div>
    </div>
  `;
}

function worldBuildSlotArray(items, slotStart, totalSlots) {
  const rows = Array.isArray(items) ? items : [];
  const total = Number(totalSlots || 0);
  const start = Number(slotStart || 0);
  if (!Number.isFinite(total) || total <= 0) return [];
  const out = new Array(total).fill(null);
  const spill = [];
  rows.forEach((item) => {
    const slot = Number(item && item.slot ? item.slot : NaN);
    if (Number.isFinite(slot)) {
      const idx = slot - start;
      if (idx >= 0 && idx < total && !out[idx]) {
        out[idx] = item;
        return;
      }
    }
    spill.push(item);
  });
  let spillIndex = 0;
  for (let i = 0; i < out.length; i += 1) {
    if (!out[i] && spillIndex < spill.length) {
      out[i] = spill[spillIndex];
      spillIndex += 1;
    }
  }
  return out;
}

function renderWorldUiSlot(item, options) {
  const opts = options && typeof options === 'object' ? options : {};
  const slotIndex = Number(opts.slotIndex || 0);
  const sizeClass = opts.compact ? ' compact' : '';
  const accentClass = opts.accent ? ' accent' : '';
  const showIndex = opts.showIndex !== false;
  const label = String(item && item.displayName ? item.displayName : '').trim()
    || String(item && item.itemId ? item.itemId : '').trim()
    || 'Empty';
  const count = Math.max(0, Number(item && item.count ? item.count : 0) || 0);
  const textureCandidates = worldItemTextureCandidates(item && item.itemId ? item.itemId : '');
  const texturePrimary = textureCandidates.length ? textureCandidates[0] : '';
  const textureAlt = textureCandidates.length > 1 ? textureCandidates.slice(1).join('|') : '';
  const occupied = !!item;
  const classes = 'world-hotbar-slot world-ui-slot' + sizeClass + accentClass + (occupied ? '' : ' empty');
  return `
    <div class="${classes}" title="${escapeHtml(occupied ? (label + (count > 1 ? ' x' + count : '')) : 'Empty slot')}">
      <div class="world-hotbar-slot-media">
        <img class="world-hotbar-slot-icon" data-item-id="${escapeHtml(String(item && item.itemId ? item.itemId : '').trim())}" data-fallback-primary="${escapeHtml(texturePrimary)}" data-alt-src="${escapeHtml(textureAlt)}" alt="${escapeHtml(label)}" loading="lazy" onload="handleWorldItemTextureLoad(this)" onerror="handleWorldItemTextureError(this)">
        <span class="world-hotbar-slot-glyph">${escapeHtml(occupied ? normalizeWorldItemGlyph(item) : (showIndex ? String(slotIndex + 1) : ''))}</span>
      </div>
      ${occupied && count > 1 ? `<span class="world-hotbar-slot-count">${escapeHtml(String(count))}</span>` : ''}
    </div>
  `;
}

function renderWorldUiSlotRow(slotArray, rowStart, rowSize, compact) {
  const rows = Array.isArray(slotArray) ? slotArray : [];
  const start = Number(rowStart || 0);
  const size = Number(rowSize || 0);
  const list = [];
  for (let i = 0; i < size; i += 1) {
    list.push(renderWorldUiSlot(rows[start + i] || null, { slotIndex: start + i, compact: !!compact }));
  }
  return `<div class="world-inv-row">${list.join('')}</div>`;
}

function worldPlayerBodyPreviewUrl(playerUuid) {
  const raw = String(playerUuid || '').trim();
  if (!raw) return '';
  const cleaned = raw.replace(/-/g, '');
  const value = /^[0-9a-fA-F]{32}$/.test(cleaned) ? cleaned : raw;
  return 'https://mc-heads.net/body/' + encodeURIComponent(value) + '/left';
}

function formatWorldHealthText(health) {
  const value = Number(health);
  if (!Number.isFinite(value)) return 'Unknown';
  const rounded = Math.max(0, Math.round(value * 10) / 10);
  return rounded + '/20';
}

function formatWorldFoodText(foodLevel) {
  const value = Number(foodLevel);
  if (!Number.isFinite(value)) return 'Unknown';
  return Math.max(0, Math.round(value)) + '/20';
}

function formatWorldXpText(xpLevel) {
  const value = Number(xpLevel);
  if (!Number.isFinite(value)) return 'Unknown';
  return Math.max(0, Math.round(value)) + ' lvl';
}

function clampWorldPercent(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.min(100, numeric));
}

function renderWorldInventoryDesign(selectedInventory, selectedPlayer) {
  const inventorySlots = worldBuildSlotArray(selectedInventory.inventory, 9, 27);
  const hotbarSlots = worldBuildSlotArray(selectedInventory.hotbar, 0, 9);
  const enderSlots = worldBuildSlotArray(selectedInventory.enderChest, 0, 27);

  const armorItems = Array.isArray(selectedInventory.armor) ? selectedInventory.armor : [];
  const armorBySlot = new Map();
  armorItems.forEach((item) => {
    const slot = Number(item && item.slot ? item.slot : NaN);
    if (Number.isFinite(slot) && !armorBySlot.has(slot)) armorBySlot.set(slot, item);
  });
  const armorSlots = [
    armorBySlot.get(103) || armorItems[0] || null,
    armorBySlot.get(102) || armorItems[1] || null,
    armorBySlot.get(101) || armorItems[2] || null,
    armorBySlot.get(100) || armorItems[3] || null,
  ];
  const offhandItem = Array.isArray(selectedInventory.offhand) && selectedInventory.offhand.length
    ? selectedInventory.offhand[0]
    : null;

  const bodyUrl = worldPlayerBodyPreviewUrl(selectedPlayer && selectedPlayer.playerUuid ? selectedPlayer.playerUuid : '');
  const healthValue = Number(selectedInventory.health);
  const foodValue = Number(selectedInventory.foodLevel);
  const healthPercent = clampWorldPercent((Number.isFinite(healthValue) ? healthValue : 0) / 20 * 100);
  const foodPercent = clampWorldPercent((Number.isFinite(foodValue) ? foodValue : 0) / 20 * 100);
  const xpLevelText = formatWorldXpText(selectedInventory.xpLevel);
  const coordsText = formatWorldDetailPosition(selectedInventory.position);

  return `
    <div class="world-tech-window">
      <div class="world-tech-header">
        <div class="world-tech-header-left">
          <span class="world-tech-header-sub">MINECRAFT</span>
          <h3 class="world-tech-header-title">INVENTORY</h3>
        </div>
        <div class="world-tech-coord-box">
          <div class="world-tech-coord-label">COORDS</div>
          <div class="world-tech-coord-val">${escapeHtml(coordsText)}</div>
        </div>
      </div>

      <div class="world-tech-top">
        <div class="world-tech-panel world-tech-player-panel">
          <span class="world-tech-lbl">PLAYER</span>
          <div class="world-char-card">
            ${bodyUrl ? `<img class="world-char-skin" src="${escapeHtml(bodyUrl)}" alt="Player skin" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
            <div class="world-char-fallback"${bodyUrl ? ' style="display:none"' : ''}>No Skin</div>
          </div>
        </div>

        <div class="world-tech-panel world-tech-mid-panel">
          <div>
            <span class="world-tech-lbl">VITALS & LEVEL</span>
            <div class="world-tech-vitals-row">
              <div class="world-tech-stat">
                <div class="world-tech-stat-head">
                  <span class="world-tech-stat-label">HP</span>
                  <span class="world-tech-stat-val">${escapeHtml(formatWorldHealthText(selectedInventory.health))}</span>
                </div>
                <div class="world-tech-stat-track"><div class="world-tech-stat-fill" style="width:${healthPercent}%"></div></div>
              </div>
              <div class="world-tech-stat">
                <div class="world-tech-stat-head">
                  <span class="world-tech-stat-label">FOOD</span>
                  <span class="world-tech-stat-val">${escapeHtml(formatWorldFoodText(selectedInventory.foodLevel))}</span>
                </div>
                <div class="world-tech-stat-track"><div class="world-tech-stat-fill food" style="width:${foodPercent}%"></div></div>
              </div>
            </div>
          </div>
          <div class="world-tech-craft-row">
            <div>
              <span class="world-tech-lbl">CRAFT</span>
              <div class="world-tech-grid-2">
                ${renderWorldUiSlot(null, { slotIndex: 0, compact: true, accent: true, showIndex: false })}
                ${renderWorldUiSlot(null, { slotIndex: 1, compact: true, accent: true, showIndex: false })}
                ${renderWorldUiSlot(null, { slotIndex: 2, compact: true, accent: true, showIndex: false })}
                ${renderWorldUiSlot(null, { slotIndex: 3, compact: true, accent: true, showIndex: false })}
              </div>
            </div>
            <div class="world-tech-arrow">→</div>
            <div>
              <span class="world-tech-lbl">OUTPUT</span>
              ${renderWorldUiSlot(null, { slotIndex: 4, accent: true, showIndex: false })}
            </div>
          </div>
        </div>

        <div class="world-tech-panel world-tech-right-panel">
          <span class="world-tech-lbl">ARMOR</span>
          <div class="world-armor-stack">
            <div class="world-tech-armor-slot-wrap">${renderWorldUiSlot(armorSlots[0], { slotIndex: 0, compact: true, accent: true })}<span class="world-tech-armor-tag">HEAD</span></div>
            <div class="world-tech-armor-slot-wrap">${renderWorldUiSlot(armorSlots[1], { slotIndex: 1, compact: true, accent: true })}<span class="world-tech-armor-tag">BODY</span></div>
            <div class="world-tech-armor-slot-wrap">${renderWorldUiSlot(armorSlots[2], { slotIndex: 2, compact: true, accent: true })}<span class="world-tech-armor-tag">LEGS</span></div>
            <div class="world-tech-armor-slot-wrap">${renderWorldUiSlot(armorSlots[3], { slotIndex: 3, compact: true, accent: true })}<span class="world-tech-armor-tag">FEET</span></div>
          </div>
          <div class="world-tech-divider-hz"></div>
          <div class="world-tech-armor-slot-wrap">${renderWorldUiSlot(offhandItem, { slotIndex: 0, compact: true, showIndex: false })}<span class="world-tech-armor-tag">OFF</span></div>
        </div>
      </div>

      <div class="world-tech-section">
        <div class="world-tech-section-header">
          <span class="world-tech-lbl" style="margin:0">INVENTORY</span>
        </div>
        <div class="world-tech-grid world-tech-grid-9">
          ${renderWorldUiSlotRow(inventorySlots, 0, 9, false)}
          ${renderWorldUiSlotRow(inventorySlots, 9, 9, false)}
          ${renderWorldUiSlotRow(inventorySlots, 18, 9, false)}
        </div>
      </div>

      <div class="world-tech-section">
        <div class="world-tech-section-header">
          <span class="world-tech-lbl world-tech-hotbar-lbl" style="margin:0">HOTBAR</span>
        </div>
        <div class="world-tech-grid world-tech-grid-9 world-tech-grid-accent">
          ${renderWorldUiSlotRow(hotbarSlots, 0, 9, false)}
        </div>
      </div>

      <div class="world-tech-section">
        <div class="world-tech-section-header">
          <span class="world-tech-lbl world-tech-ender-lbl" style="margin:0">ENDER CHEST</span>
        </div>
        <div class="world-tech-grid world-tech-grid-9">
          ${renderWorldUiSlotRow(enderSlots, 0, 9, true)}
          ${renderWorldUiSlotRow(enderSlots, 9, 9, true)}
          ${renderWorldUiSlotRow(enderSlots, 18, 9, true)}
        </div>
      </div>

      <div class="world-tech-footer">
        <span>JAVA EDITION</span>
        <span>${escapeHtml(xpLevelText === 'Unknown' ? 'LVL: --' : ('LVL: ' + xpLevelText.replace(/\s*lvl$/i, '')))}</span>
        <span>ESC TO CLOSE</span>
      </div>
    </div>
  `;
}

function renderWorldDetailBody() {
  const bodyEl = document.getElementById('world-detail-body');
  if (!bodyEl) return;
  renderWorldDetailTabButtons();
  const details = WORLD_DETAIL_CURRENT;
  if (!details) {
    bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">Loading world details...</div>';
    return;
  }

  const selectedPlayer = worldDetailSelectedPlayer();
  const selectedUuid = selectedPlayer ? selectedPlayer.playerUuid : '';
  const selectedCacheEntry = selectedUuid ? WORLD_DETAIL_PLAYER_CACHE[selectedUuid] : null;
  const selectedInventory = selectedCacheEntry && selectedCacheEntry.status === 'ready'
    ? selectedCacheEntry.data
    : null;

  if (WORLD_DETAIL_TAB === 'players') {
    if (!WORLD_DETAIL_PLAYERS.length) {
      bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">No player data found in this world yet.</div>';
      return;
    }
    bodyEl.innerHTML = `
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:8px">${escapeHtml(String(WORLD_DETAIL_PLAYERS.length))} playerdata file(s)</div>
      <div class="ver-list" style="max-height:260px">
        ${WORLD_DETAIL_PLAYERS.map((entry) => {
          const isSelected = selectedUuid && entry.playerUuid === selectedUuid;
          return `
            <div class="world-row" style="background:${isSelected ? 'var(--s3)' : 'var(--s2)'};border-color:${isSelected ? 'var(--b3)' : 'var(--b1)'}" onclick="selectWorldDetailPlayer('${encodeURIComponent(entry.playerUuid)}')">
              <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--t2);flex-shrink:0">
                <i data-lucide="user-round" width="14" height="14"></i>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-size:11px;font-family:var(--mono);color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entry.playerUuid)}</div>
                <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">${escapeHtml(entry.modifiedAtEpoch ? formatEpochRelative(entry.modifiedAtEpoch) : 'Unknown')}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    lucide.createIcons();
    return;
  }

  if (WORLD_DETAIL_TAB === 'inventory') {
    if (!WORLD_DETAIL_PLAYERS.length) {
      bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">No player inventory data found for this world.</div>';
      return;
    }
    if (!selectedPlayer) {
      bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">Select a player to inspect inventory.</div>';
      return;
    }
    if (selectedCacheEntry && selectedCacheEntry.status === 'error') {
      bodyEl.innerHTML = `
        <div style="font-size:11px;color:#ff8a8a">${escapeHtml(String(selectedCacheEntry.message || 'Could not read player inventory'))}</div>
        <div style="margin-top:8px"><button class="btn btn-ghost" onclick="refreshWorldDetailSelectedPlayerInventory()">Retry</button></div>
      `;
      return;
    }
    if (!selectedInventory) {
      bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">Loading player inventory...</div>';
      return;
    }
    bodyEl.innerHTML = `
      <div class="field" style="margin-bottom:8px">
        <div class="label">Player</div>
        <select class="select" id="world-detail-player-select" onchange="selectWorldDetailPlayer(this.value)">
          ${WORLD_DETAIL_PLAYERS.map((entry) => {
            const encodedUuid = encodeURIComponent(entry.playerUuid);
            const isSelected = entry.playerUuid === selectedPlayer.playerUuid ? ' selected' : '';
            return `<option value="${encodedUuid}"${isSelected}>${escapeHtml(entry.playerUuid)}</option>`;
          }).join('')}
        </select>
      </div>
      ${renderWorldInventoryDesign(selectedInventory, selectedPlayer)}
    `;
    void hydrateWorldHotbarTextures();
    return;
  }

  if (WORLD_DETAIL_TAB === 'stats') {
    const playerRowsHtml = WORLD_DETAIL_PLAYERS.length
      ? WORLD_DETAIL_PLAYERS
        .slice(0, 8)
        .map((entry) => {
          const isSelected = selectedUuid && entry.playerUuid === selectedUuid;
          return `<div style="font-size:10px;font-family:var(--mono);color:${isSelected ? 'var(--t2)' : 'var(--t4)'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entry.playerUuid)}</div>`;
        })
        .join('')
      : '<div style="font-size:10px;font-family:var(--mono);color:var(--t4)">No player data</div>';
    const selectedStatsHtml = selectedInventory
      ? `
        <div class="info-row"><span class="info-key">Health</span><span class="info-val">${escapeHtml(String(selectedInventory.health == null ? 'Unknown' : selectedInventory.health))}</span></div>
        <div class="info-row"><span class="info-key">Food</span><span class="info-val">${escapeHtml(String(selectedInventory.foodLevel == null ? 'Unknown' : selectedInventory.foodLevel))}</span></div>
        <div class="info-row"><span class="info-key">XP Level</span><span class="info-val">${escapeHtml(String(selectedInventory.xpLevel == null ? 'Unknown' : selectedInventory.xpLevel))}</span></div>
        <div class="info-row"><span class="info-key">Position</span><span class="info-val">${escapeHtml(formatWorldDetailPosition(selectedInventory.position))}</span></div>
      `
      : `<div style="font-size:10px;font-family:var(--mono);color:var(--t4)">${selectedUuid ? 'Loading selected player stats...' : 'Select a player from Players tab for live stats.'}</div>`;

    bodyEl.innerHTML = `
      <div style="padding:9px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
        <div style="font-size:13px;font-family:var(--display);color:var(--t1)">${escapeHtml(details.levelName || details.worldName)}</div>
        <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:3px">${escapeHtml(details.path || '')}</div>
      </div>
      <div class="info-row"><span class="info-key">Players</span><span class="info-val">${escapeHtml(String(WORLD_DETAIL_PLAYERS.length))}</span></div>
      <div class="info-row"><span class="info-key">Playtime</span><span class="info-val">${escapeHtml(formatPlaytimeText(details.playtimeMinutes))}</span></div>
      <div class="info-row"><span class="info-key">World Size</span><span class="info-val">${escapeHtml(formatBytesCompact(details.sizeBytes))}</span></div>
      <div style="margin-top:8px;padding:8px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px">
        <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:6px">Known Players</div>
        ${playerRowsHtml}
      </div>
      <div style="margin-top:8px;padding:8px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px">
        <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:6px">Selected Player Stats</div>
        ${selectedStatsHtml}
      </div>
    `;
    return;
  }

  bodyEl.innerHTML = `
    <div style="padding:9px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:13px;font-family:var(--display);color:var(--t1)">${escapeHtml(details.levelName || details.worldName)}</div>
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:3px">${escapeHtml(details.path || '')}</div>
    </div>
    <div class="info-row"><span class="info-key">Last Played</span><span class="info-val">${escapeHtml(formatWorldDetailDate(details.lastPlayedEpoch))}</span></div>
    <div class="info-row"><span class="info-key">Game Mode</span><span class="info-val">${escapeHtml(details.gameMode || 'Unknown')}</span></div>
    <div class="info-row"><span class="info-key">Difficulty</span><span class="info-val">${escapeHtml(details.difficulty || 'Unknown')}</span></div>
    <div class="info-row"><span class="info-key">Seed</span><span class="info-val" style="font-family:var(--mono)">${escapeHtml(details.seed || 'Unknown')}</span></div>
    <div class="info-row"><span class="info-key">Playtime</span><span class="info-val">${escapeHtml(formatPlaytimeText(details.playtimeMinutes))}</span></div>
    <div class="info-row"><span class="info-key">Size</span><span class="info-val">${escapeHtml(formatBytesCompact(details.sizeBytes))}</span></div>
    <div class="info-row"><span class="info-key">Playerdata Files</span><span class="info-val">${escapeHtml(String(WORLD_DETAIL_PLAYERS.length))}</span></div>
  `;
}

async function ensureWorldDetailSelectedPlayerInventory() {
  const instanceName = selectedInstanceNameForModal();
  const world = WORLD_DETAIL_CURRENT;
  const selected = worldDetailSelectedPlayer();
  if (!instanceName || !world || !selected) return null;
  const key = selected.playerUuid;
  const existing = WORLD_DETAIL_PLAYER_CACHE[key];
  if (existing && (existing.status === 'ready' || existing.status === 'loading')) {
    return existing.status === 'ready' ? existing.data : null;
  }
  WORLD_DETAIL_PLAYER_CACHE[key] = { status: 'loading' };
  try {
    const payload = await getWorldPlayerInventory(instanceName, world.worldName, key);
    WORLD_DETAIL_PLAYER_CACHE[key] = { status: 'ready', data: payload };
    return payload;
  } catch (err) {
    WORLD_DETAIL_PLAYER_CACHE[key] = {
      status: 'error',
      message: String(err && err.message ? err.message : err || 'Could not load player inventory'),
    };
    return null;
  }
}

async function renderWorldDetailBodyAsync() {
  if (ACTIVE_MODAL_ID !== 'world-detail') return;
  renderWorldDetailBody();
  if (WORLD_DETAIL_TAB !== 'inventory' && WORLD_DETAIL_TAB !== 'stats') return;
  if (!WORLD_DETAIL_PLAYERS.length) return;
  if (!WORLD_DETAIL_SELECTED_PLAYER) {
    WORLD_DETAIL_SELECTED_PLAYER = WORLD_DETAIL_PLAYERS[0].playerUuid;
    renderWorldDetailBody();
  }
  const selected = worldDetailSelectedPlayer();
  if (!selected) return;
  const cache = WORLD_DETAIL_PLAYER_CACHE[selected.playerUuid];
  if (cache && (cache.status === 'ready' || cache.status === 'loading')) return;
  await ensureWorldDetailSelectedPlayerInventory();
  if (ACTIVE_MODAL_ID === 'world-detail') {
    renderWorldDetailBody();
  }
}

function setWorldDetailTab(tab) {
  WORLD_DETAIL_TAB = normalizeWorldDetailTab(tab);
  void renderWorldDetailBodyAsync();
}

function selectWorldDetailPlayer(playerUuid) {
  let value = String(playerUuid || '').trim();
  if (!value) return;
  try {
    value = decodeURIComponent(value);
  } catch (_err) {
    value = String(playerUuid || '').trim();
  }
  if (!value) return;
  WORLD_DETAIL_SELECTED_PLAYER = value;
  void renderWorldDetailBodyAsync();
}

function refreshWorldDetailSelectedPlayerInventory() {
  const selected = worldDetailSelectedPlayer();
  if (!selected) return;
  delete WORLD_DETAIL_PLAYER_CACHE[selected.playerUuid];
  void renderWorldDetailBodyAsync();
}

async function hydrateWorldManagerModal() {
  const instanceName = selectedInstanceNameForModal();
  const listEl = document.getElementById('world-manager-list');
  const metaEl = document.getElementById('world-manager-meta');
  if (!instanceName || !listEl || !metaEl) return;

  listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:var(--t4)">Loading worlds...</div>';
  metaEl.textContent = 'Loading worlds...';
  try {
    const payload = await listInstanceWorlds(instanceName);
    if (ACTIVE_MODAL_ID !== 'world-manager') return;
    if (payload.running) {
      listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:#ffb066">Minecraft is running. Close the game to view world details safely.</div>';
      metaEl.textContent = 'Viewer disabled while game is running';
      return;
    }
    if (!payload.worlds.length) {
      listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:var(--t4)">No worlds found for this instance.</div>';
      metaEl.textContent = '0 worlds';
      return;
    }
    listEl.innerHTML = payload.worlds
      .map((entry) => `
        <div class="world-row" onclick="openWorldDetailFromManager('${encodeURIComponent(entry.worldName)}')">
          <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--t2);flex-shrink:0">
            <i data-lucide="globe-2" width="16" height="16"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-family:var(--mono);color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entry.displayName || entry.worldName)}</div>
            <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:1px">
              ${entry.gameMode || 'Unknown mode'} - ${entry.difficulty || 'Unknown difficulty'} - ${formatBytesCompact(entry.sizeBytes)}
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;color:var(--t4);padding-left:6px">
            <i data-lucide="chevron-right" width="14" height="14"></i>
          </div>
        </div>
      `)
      .join('');
    metaEl.textContent = payload.worlds.length
      + (payload.worlds.length === 1 ? ' world' : ' worlds')
      + (payload.worldsRoot ? ' - ' + payload.worldsRoot : '');
    lucide.createIcons();
  } catch (err) {
    if (ACTIVE_MODAL_ID !== 'world-manager') return;
    listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:#ff8a8a">' + escapeHtml(String(err && err.message ? err.message : err || 'Failed to load worlds')) + '</div>';
    metaEl.textContent = 'Could not load worlds';
  }
}

async function hydrateWorldDetailModal() {
  const bodyEl = document.getElementById('world-detail-body');
  const instanceName = selectedInstanceNameForModal();
  const worldName = decodeActiveWorldDetailName();
  if (!bodyEl || !instanceName || !worldName) return;

  renderWorldDetailTabButtons();
  bodyEl.innerHTML = '<div style="font-size:11px;color:var(--t4)">Loading world details...</div>';
  WORLD_DETAIL_CURRENT = null;
  WORLD_DETAIL_PLAYERS = [];
  WORLD_DETAIL_SELECTED_PLAYER = '';
  WORLD_DETAIL_PLAYER_CACHE = {};

  try {
    const details = await getInstanceWorldDetails(instanceName, worldName);
    if (ACTIVE_MODAL_ID !== 'world-detail') return;
    WORLD_DETAIL_CURRENT = details;
    WORLD_DETAIL_TAB = normalizeWorldDetailTab(WORLD_DETAIL_TAB);
    renderWorldDetailBody();

    const players = await listWorldPlayers(instanceName, details.worldName || worldName);
    if (ACTIVE_MODAL_ID !== 'world-detail') return;
    if (players.running) {
      bodyEl.innerHTML = '<div style="font-size:11px;color:#ffb066">Minecraft is running. Close the game to inspect world player data.</div>';
      return;
    }
    WORLD_DETAIL_PLAYERS = players.players;
    if (WORLD_DETAIL_PLAYERS.length) {
      WORLD_DETAIL_SELECTED_PLAYER = WORLD_DETAIL_PLAYERS[0].playerUuid;
    }
    await renderWorldDetailBodyAsync();
  } catch (err) {
    if (ACTIVE_MODAL_ID !== 'world-detail') return;
    bodyEl.innerHTML = '<div style="font-size:11px;color:#ff8a8a">' + escapeHtml(String(err && err.message ? err.message : err || 'Failed to load world details')) + '</div>';
  }
}

async function hydrateScreenshotsModal() {
  const instanceName = selectedInstanceNameForModal();
  const listEl = document.getElementById('screenshots-list');
  const metaEl = document.getElementById('screenshots-meta');
  if (!instanceName || !listEl || !metaEl) return;

  listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:var(--t4)">Loading screenshots...</div>';
  metaEl.textContent = 'Loading screenshots...';
  try {
    const entries = await listInstanceDirectoryEntriesForTarget(instanceName, 'screenshots', {
      includeFiles: true,
      includeDirectories: false,
    });
    if (ACTIVE_MODAL_ID !== 'screenshots') return;
    const screenshotEntries = entries.filter((entry) => /\.(png|jpg|jpeg|webp)$/i.test(entry.name));
    const totalBytes = screenshotEntries.reduce((sum, entry) => sum + Number(entry.sizeBytes || 0), 0);
    if (!screenshotEntries.length) {
      listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:var(--t4)">No screenshots found for this instance.</div>';
      metaEl.textContent = '0 screenshots';
      return;
    }
    listEl.innerHTML = screenshotEntries
      .map((entry) => `
        <div class="world-row">
          <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--t2);flex-shrink:0">
            <i data-lucide="camera" width="16" height="16"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-family:var(--mono);color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entry.name)}</div>
            <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:1px">${formatBytesCompact(entry.sizeBytes)} - ${formatEpochRelative(entry.modifiedAtEpoch)}</div>
          </div>
        </div>
      `)
      .join('');
    metaEl.textContent = screenshotEntries.length
      + (screenshotEntries.length === 1 ? ' screenshot' : ' screenshots')
      + ' - '
      + formatBytesCompact(totalBytes);
    lucide.createIcons();
  } catch (err) {
    if (ACTIVE_MODAL_ID !== 'screenshots') return;
    listEl.innerHTML = '<div style="font-size:11px;font-family:var(--mono);color:#ff8a8a">' + escapeHtml(String(err && err.message ? err.message : err || 'Failed to load screenshots')) + '</div>';
    metaEl.textContent = 'Could not load screenshots';
  }
}

function hasJarFileWithToken(files, token) {
  const needle = String(token || '').trim().toLowerCase();
  if (!needle) return false;
  return (Array.isArray(files) ? files : []).some((fileName) => {
    const lower = String(fileName || '').trim().toLowerCase();
    return lower.endsWith('.jar') && lower.includes(needle);
  });
}

function formatDependencyTitleFromToken(token) {
  const value = String(token || '').trim().toLowerCase();
  if (!value) return 'Dependency';
  if (value === 'sodium') return 'Sodium';
  if (value === 'iris') return 'Iris Shaders';
  if (value === 'oculus') return 'Oculus';
  if (value === 'embeddium') return 'Embeddium';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

async function resolveRuntimeArtifactForInstance(instanceName, projectId, title) {
  try {
    const installState = buildBrowseInstallStateFromInstance(
      { topTab: 'mods', loader: 'any', version: 'any' },
      instanceName
    );
    installState.topTab = 'mods';
    return await resolveModrinthInstallArtifact(
      { id: projectId, title },
      installState
    );
  } catch (_err) {
    return null;
  }
}

async function inferShaderRuntimeMissingRows(instanceName, existingRows) {
  const key = String(instanceName || '').trim();
  if (!key) return [];
  const details = INSTANCE_DATA && INSTANCE_DATA[key] ? INSTANCE_DATA[key] : null;
  const loader = normalizeLoader(details && (details.loaderKey || details.loader) ? (details.loaderKey || details.loader) : 'vanilla');
  if (!['fabric', 'quilt', 'forge', 'neoforge'].includes(loader)) return [];

  const shaderFiles = await listInstanceFilesForTarget(key, 'shaderpacks');
  const hasShaderpacks = shaderFiles.some((fileName) => /\.(zip|jar)$/i.test(String(fileName || '')));
  if (!hasShaderpacks) return [];

  const modsFiles = await listInstanceFilesForTarget(key, 'mods');
  const modsFileSet = new Set(modsFiles.map((name) => String(name || '').trim().toLowerCase()).filter(Boolean));
  const runtimeDefs = loader === 'fabric' || loader === 'quilt'
    ? [{ id: 'iris', title: 'Iris Shaders', token: 'iris', fallbackDeps: ['sodium'] }]
    : [
        { id: 'oculus', title: 'Oculus', token: 'oculus', fallbackDeps: [] },
        { id: 'embeddium', title: 'Embeddium', token: 'embeddium', fallbackDeps: [] },
      ];
  const existingKeys = new Set(
    (Array.isArray(existingRows) ? existingRows : []).map((row) => {
      return normalizeTrackedInstallTarget(row && row.target ? row.target : 'mods') + ':' + String(row && row.fileName ? row.fileName : '').trim().toLowerCase();
    })
  );
  const installStateBase = buildBrowseInstallStateFromInstance(
    { topTab: 'mods', loader, version: String(details && details.version ? details.version : 'any').trim().toLowerCase() || 'any' },
    key
  );
  const out = [];
  const pushInferredMissing = (row) => {
    if (!row || typeof row !== 'object') return;
    const target = normalizeTrackedInstallTarget(row.target);
    const fileName = String(row.fileName || '').trim();
    if (!fileName) return;
    const dedupeKey = target + ':' + fileName.toLowerCase();
    if (existingKeys.has(dedupeKey)) return;
    existingKeys.add(dedupeKey);
    out.push(Object.assign({}, row, { target, missing: true, inferred: true, required: true }));
  };

  for (const runtime of runtimeDefs) {
    const artifact = await resolveRuntimeArtifactForInstance(key, runtime.id, runtime.title);
    const runtimeFileName = String(artifact && artifact.fileName ? artifact.fileName : (runtime.token + '.jar')).trim();
    const runtimePresent = artifact && artifact.fileName
      ? modsFileSet.has(String(artifact.fileName).toLowerCase())
      : hasJarFileWithToken(modsFiles, runtime.token);
    if (!runtimePresent) {
      pushInferredMissing({
        id: 'inferred-runtime:' + runtime.id,
        title: runtime.title,
        provider: 'modrinth',
        itemId: runtime.id,
        target: 'mods',
        fileName: runtimeFileName,
        url: String(artifact && artifact.url ? artifact.url : '').trim(),
        path: '',
        bytesWritten: 0,
        installedAt: Date.now(),
        sourceType: 'runtime',
        rootTitle: 'Shader Runtime',
        pageUrl: 'https://modrinth.com/project/' + encodeURIComponent(String(runtime.id || '').trim()),
        iconUrl: '',
      });
    }

    if (artifact) {
      const depState = Object.assign({}, installStateBase, {
        topTab: 'mods',
        itemId: runtime.id,
      });
      const depRows = await resolveBrowseDependencyArtifacts('modrinth', artifact, depState);
      const requiredDeps = (Array.isArray(depRows) ? depRows : []).filter((row) => row && row.required);
      for (const dep of requiredDeps) {
        if (dep.error) {
          continue;
        }
        const depArtifact = dep.artifact || null;
        const depTarget = normalizeTrackedInstallTarget(depArtifact && depArtifact.target ? depArtifact.target : 'mods');
        const depFileName = String(depArtifact && depArtifact.fileName ? depArtifact.fileName : '').trim();
        if (!depFileName) {
          continue;
        }
        const depPresent = depTarget === 'mods'
          ? modsFileSet.has(depFileName.toLowerCase())
          : false;
        if (depPresent) continue;
        const depIdRaw = String(dep.id || '').trim();
        const depItemId = depIdRaw.startsWith('modrinth:') ? depIdRaw.slice('modrinth:'.length) : depIdRaw;
        pushInferredMissing({
          id: 'inferred-runtime-dep:' + runtime.id + ':' + (depIdRaw || depFileName.toLowerCase()),
          title: String(dep.title || depFileName).trim() || depFileName,
          provider: providerFromDependencyId(depIdRaw, 'modrinth'),
          itemId: depItemId,
          target: depTarget,
          fileName: depFileName,
          url: String(depArtifact && depArtifact.url ? depArtifact.url : '').trim(),
          path: '',
          bytesWritten: 0,
          installedAt: Date.now(),
          sourceType: 'runtime-dependency',
          rootTitle: runtime.title,
          pageUrl: String(dep.url || '').trim(),
          iconUrl: String(dep.iconUrl || '').trim(),
        });
      }
    } else if (Array.isArray(runtime.fallbackDeps) && runtime.fallbackDeps.length) {
      runtime.fallbackDeps.forEach((token) => {
        if (hasJarFileWithToken(modsFiles, token)) return;
        pushInferredMissing({
          id: 'inferred-runtime-fallback:' + runtime.id + ':' + token,
          title: formatDependencyTitleFromToken(token),
          provider: 'modrinth',
          itemId: String(token || '').trim(),
          target: 'mods',
          fileName: String(token || '').trim().toLowerCase() + '.jar',
          url: '',
          path: '',
          bytesWritten: 0,
          installedAt: Date.now(),
          sourceType: 'runtime-dependency',
          rootTitle: runtime.title,
        });
      });
    }
  }
  return out;
}

async function resolveTrackedInstallMissingState(instanceName, rows) {
  const normalizedRows = Array.isArray(rows) ? rows.slice() : [];
  if (!instanceName) return normalizedRows;
  const byTarget = new Map();
  normalizedRows.forEach((row) => {
    const target = normalizeTrackedInstallTarget(row && row.target ? row.target : 'mods');
    const fileName = String(row && row.fileName ? row.fileName : '').trim();
    if (!fileName) return;
    if (!byTarget.has(target)) byTarget.set(target, []);
    const disabledName = getDisabledTrackedFileName(fileName);
    byTarget.get(target).push(fileName);
    if (disabledName) byTarget.get(target).push(disabledName);
  });
  const existsByTarget = new Map();
  for (const [target, names] of byTarget.entries()) {
    existsByTarget.set(target, await checkInstanceFilesForTarget(instanceName, target, names));
  }

  const hydratedRows = normalizedRows.map((row) => {
    const target = normalizeTrackedInstallTarget(row && row.target ? row.target : 'mods');
    const fileName = String(row && row.fileName ? row.fileName : '').trim();
    const fileNameLower = fileName.toLowerCase();
    if (!fileNameLower) return Object.assign({}, row, { missing: false, enabled: true, currentFileName: '' });
    const disabledName = getDisabledTrackedFileName(fileName);
    const disabledNameLower = disabledName.toLowerCase();
    const existsMap = existsByTarget.get(target);
    const enabledExists = existsMap ? existsMap.get(fileNameLower) === true : true;
    const disabledExists = disabledNameLower && existsMap ? existsMap.get(disabledNameLower) === true : false;

    if (enabledExists) {
      return Object.assign({}, row, { missing: false, enabled: true, currentFileName: fileName });
    }
    if (disabledExists) {
      return Object.assign({}, row, { missing: false, enabled: false, currentFileName: disabledName });
    }
    return Object.assign({}, row, { missing: true, enabled: row && row.enabled === false ? false : true, currentFileName: fileName });
  });
  const inferredRows = await inferShaderRuntimeMissingRows(instanceName, hydratedRows);
  return hydratedRows.concat(inferredRows);
}

function getMissingRequiredTrackedRows(rows) {
  return (Array.isArray(rows) ? rows : []).filter((row) => row && row.required && row.missing);
}

function updateManagedModsInstallMissingButton(rows) {
  const button = document.getElementById('manage-mods-install-missing');
  if (!button) return;
  const missingRequired = getMissingRequiredTrackedRows(rows);
  if (!missingRequired.length) {
    button.disabled = true;
    button.innerHTML = '<i data-lucide="check-circle" width="12" height="12"></i>No Missing';
    lucide.createIcons();
    return;
  }
  button.disabled = false;
  button.innerHTML = '<i data-lucide="wrench" width="12" height="12"></i>Install Missing (' + String(missingRequired.length) + ')';
  lucide.createIcons();
}

async function installTrackedRowsToInstance(instanceName, rows, existsPolicy, progressCb) {
  const list = Array.isArray(rows) ? rows : [];
  const policy = String(existsPolicy || 'overwrite').trim().toLowerCase() === 'skip' ? 'skip' : 'overwrite';
  const results = {
    total: list.length,
    installed: 0,
    failed: 0,
    unresolved: 0,
    errors: [],
  };
  for (let i = 0; i < list.length; i += 1) {
    const row = list[i];
    const title = String(row && (row.title || row.fileName) ? (row.title || row.fileName) : 'Item').trim();
    if (typeof progressCb === 'function') {
      progressCb(i, list.length, row, 'working');
    }
    const url = String(row && row.url ? row.url : '').trim();
    if (!url) {
      results.unresolved += 1;
      results.errors.push(title + ': missing source URL');
      if (typeof progressCb === 'function') {
        progressCb(i, list.length, row, 'unresolved');
      }
      continue;
    }
    try {
      const result = await installBrowseArtifactToInstance(
        instanceName,
        {
          target: row.target,
          url,
          fileName: row.fileName,
        },
        policy
      );
      const resolvedTarget = result && result.target ? result.target : row.target;
      const resolvedFileName = (result && result.file_name) || row.fileName || '';
      const fallbackId = String(resolvedTarget || 'mods') + ':' + String(resolvedFileName).toLowerCase();
      const inferredId = String(row && row.id ? row.id : '').trim();
      const entryId = (!!row.inferred || inferredId.startsWith('inferred-'))
        ? fallbackId
        : (inferredId || fallbackId);
      upsertTrackedInstallForInstance(instanceName, {
        id: entryId,
        title: row.title,
        provider: row.provider,
        itemId: row.itemId,
        target: resolvedTarget,
        fileName: resolvedFileName,
        url,
        path: (result && result.path) || row.path || '',
        bytesWritten: Number(result && result.bytes_written ? result.bytes_written : 0),
        installedAt: Date.now(),
        required: !!row.required,
        enabled: true,
        sourceType: row.sourceType || 'main',
        rootTitle: row.rootTitle || '',
        pageUrl: String(row.pageUrl || '').trim(),
        iconUrl: String(row.iconUrl || '').trim(),
      });
      results.installed += 1;
      if (typeof progressCb === 'function') {
        progressCb(i, list.length, row, 'ok');
      }
    } catch (err) {
      results.failed += 1;
      const reason = err && err.message ? String(err.message) : 'Install failed';
      results.errors.push(title + ': ' + reason);
      if (typeof progressCb === 'function') {
        progressCb(i, list.length, row, 'failed', reason);
      }
    }
  }
  if (results.installed > 0) {
    await refreshSelectedInstanceInfo(instanceName);
    refreshInstanceTrackedInstallSummary(instanceName);
  }
  return results;
}

function refreshInstanceTrackedInstallSummary(instanceName) {
  const key = String(instanceName || '').trim();
  if (!key) return;
  const details = INSTANCE_DATA && INSTANCE_DATA[key] ? INSTANCE_DATA[key] : null;
  const modsTracked = countTrackedInstallsForTarget(key, 'mods');
  if (details) {
    details.modsTracked = modsTracked;
  }
  const selected = getSelectedInstanceName();
  if (selected !== key) return;
  const modsEl = document.getElementById('di-mods');
  if (!modsEl) return;
  const base = details && details.mods ? String(details.mods) : modsEl.textContent;
  const trackedLabel = modsTracked > 0 ? ' (' + String(modsTracked) + ' tracked)' : '';
  modsEl.textContent = String(base || '0 installed').replace(/\s+\(\d+\s+tracked\)$/i, '') + trackedLabel;
}

function resolveTrackedInstallPageUrl(row) {
  const direct = String(row && row.pageUrl ? row.pageUrl : '').trim();
  if (/^https?:\/\//i.test(direct)) return direct;
  const provider = String(row && row.provider ? row.provider : '').trim().toLowerCase();
  const itemIdRaw = String(row && row.itemId ? row.itemId : '').trim();
  if (provider !== 'modrinth') return '';
  let projectId = itemIdRaw;
  if (projectId.toLowerCase().startsWith('modrinth:')) {
    projectId = projectId.slice('modrinth:'.length);
  }
  projectId = projectId.trim();
  if (!projectId) return '';
  return 'https://modrinth.com/project/' + encodeURIComponent(projectId);
}

function resolveTrackedInstallIconUrl(row) {
  const direct = String(row && row.iconUrl ? row.iconUrl : '').trim();
  return /^https?:\/\//i.test(direct) ? direct : '';
}

async function openTrackedInstallPageFromModal(encodedEntryId) {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const entryId = decodeURIComponent(String(encodedEntryId || '').trim());
  if (!instanceName || !entryId) return;
  const rows = MANAGED_MODS_PRESENCE_CACHE && MANAGED_MODS_PRESENCE_CACHE.instanceName === instanceName
    ? MANAGED_MODS_PRESENCE_CACHE.rows
    : [];
  const row = rows.find((item) => String(item && item.id ? item.id : '').trim() === entryId) || getTrackedInstallEntry(instanceName, entryId);
  if (!row) {
    showToast('!', 'Open failed', 'Tracked entry not found');
    return;
  }
  const url = resolveTrackedInstallPageUrl(row);
  if (!url) {
    showToast('!', 'Open failed', 'Project page URL is missing');
    return;
  }
  const opened = await openExternalHttpUrl(url);
  if (!opened) {
    showToast('!', 'Open failed', 'Could not open browser automatically');
  }
}

async function hydrateManagedModsModal() {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const listEl = document.getElementById('manage-mods-list');
  const statusEl = document.getElementById('manage-mods-status');
  if (!listEl || !statusEl) return;
  if (!instanceName) {
    MANAGED_MODS_PRESENCE_CACHE = { instanceName: '', rows: [] };
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">Select an instance first.</div>';
    statusEl.textContent = '';
    updateManagedModsInstallMissingButton([]);
    return;
  }

  const rows = getTrackedInstallsForInstance(instanceName);
  const hydratedRows = await resolveTrackedInstallMissingState(instanceName, rows);
  MANAGED_MODS_PRESENCE_CACHE = { instanceName, rows: hydratedRows };
  if (!hydratedRows.length) {
    listEl.innerHTML = '<div style="padding:8px 2px;font-size:11px;font-family:var(--mono);color:var(--t4)">No tracked installs yet. Install from Browse to track mods/packs/shaders.</div>';
    statusEl.textContent = 'Tracked installs: 0';
    updateManagedModsInstallMissingButton([]);
    return;
  }

  listEl.innerHTML = hydratedRows
    .map((row) => {
      const encodedId = encodeURIComponent(String(row.id || ''));
      const targetLabel = getBrowseInstallTargetLabel(row.target);
      const isInferred = !!row.inferred;
      const pageUrl = resolveTrackedInstallPageUrl(row);
      const iconUrl = resolveTrackedInstallIconUrl(row);
      const canOpenPage = pageUrl ? '' : ' disabled';
      const openTitle = pageUrl ? 'Open project page' : 'Project page URL is missing';
      const iconFallback = escapeHtml(String(row.title || row.fileName || '?').trim().charAt(0).toUpperCase() || '?');
      const iconMarkup = iconUrl
        ? '<img class="tracked-item-icon-img" src="' + escapeHtml(iconUrl) + '" loading="lazy" alt="' + escapeHtml(row.title || row.fileName || 'Item') + ' logo" onerror="this.onerror=null;this.style.display=\'none\';if(this.nextElementSibling)this.nextElementSibling.style.display=\'flex\'"><span class="tracked-item-icon-fallback" style="display:none">' + iconFallback + '</span>'
        : '<span class="tracked-item-icon-fallback">' + iconFallback + '</span>';
      const canUpdate = row.url && !isInferred ? '' : ' disabled';
      const canRemove = isInferred ? ' disabled' : '';
      const updateTitle = isInferred ? 'Runtime requirement hint' : (row.url ? 'Update from source' : 'No source URL');
      const requiredFrom = String(row.rootTitle || '').trim()
        || (isInferred ? 'Shader runtime checks' : 'Dependency chain');
      const requiredState = row.missing
        ? 'Missing'
        : (row.enabled === false ? 'Disabled' : 'Installed');
      const requiredBadgeMarkup = row.required
        ? (
          '<span class="tracked-required-pop" tabindex="0">' +
          '<span class="tracked-badge tracked-badge-required">Required</span>' +
          '<span class="tracked-required-menu" role="tooltip">' +
          '<span class="tracked-required-menu-title">Required item</span>' +
          '<span class="tracked-required-menu-row"><span class="tracked-required-menu-key">From</span><span class="tracked-required-menu-val">' + escapeHtml(requiredFrom) + '</span></span>' +
          '<span class="tracked-required-menu-row"><span class="tracked-required-menu-key">Status</span><span class="tracked-required-menu-val">' + escapeHtml(requiredState) + '</span></span>' +
          '<span class="tracked-required-menu-row"><span class="tracked-required-menu-key">Target</span><span class="tracked-required-menu-val">' + escapeHtml(targetLabel) + '</span></span>' +
          '<span class="tracked-required-menu-row"><span class="tracked-required-menu-key">File</span><span class="tracked-required-menu-val">' + escapeHtml(String(row.fileName || '-')) + '</span></span>' +
          '</span>' +
          '</span>'
        )
        : '';
      const statusBadges = [
        requiredBadgeMarkup,
        row.missing
          ? '<span class="tracked-badge tracked-badge-missing">Missing</span>'
          : row.enabled === false
            ? '<span class="tracked-badge tracked-badge-disabled">Disabled</span>'
          : '<span class="tracked-badge tracked-badge-installed">Installed</span>',
      ].filter(Boolean).join('');
      const reinstallTitle = row.url ? 'Install this missing item' : 'No source URL';
      const canReinstall = row.missing && row.url ? '' : ' disabled';
      const canToggle = !row.missing && !isInferred;
      const toggleDisabled = canToggle ? '' : ' disabled';
      const toggleTitle = canToggle
        ? (row.enabled === false ? 'Enable this item' : 'Disable this item')
        : (row.missing ? 'File is missing' : 'Runtime requirement hint');
      const toggleChecked = row.enabled === false ? '' : ' checked';
      return (
        '<div class="tracked-install-item">' +
        '<div class="tracked-item-body">' +
        '<div class="tracked-item-icon">' + iconMarkup + '</div>' +
        '<div class="tracked-item-content">' +
        '<div class="tracked-item-title">' + escapeHtml(row.title || row.fileName) + '</div>' +
        '<div class="tracked-item-meta">' +
        escapeHtml(targetLabel) + ' - ' + escapeHtml(String(row.provider || 'browse')) + ' - ' + escapeHtml(formatTrackedInstallAge(row.installedAt)) +
        '</div>' +
        '<div class="tracked-item-file">' + escapeHtml(row.fileName) + '</div>' +
        '<div class="tracked-item-badges">' + statusBadges + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="tracked-item-actions">' +
        '<div class="tracked-item-actions-left">' +
        '<label class="tracked-item-switch" title="' + escapeHtml(toggleTitle) + '">' +
        '<input type="checkbox" onchange="toggleTrackedInstallEnabledFromModal(\'' + encodedId + '\', this.checked)"' + toggleChecked + toggleDisabled + '>' +
        '<span class="tracked-item-switch-slider"></span>' +
        '<span class="tracked-item-switch-label">' + (row.enabled === false ? 'Off' : 'On') + '</span>' +
        '</label>' +
        '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" title="' + escapeHtml(openTitle) + '" onclick="openTrackedInstallPageFromModal(\'' + encodedId + '\')"' + canOpenPage + '><i data-lucide="info" width="11" height="11"></i></button>' +
        '</div>' +
        '<div class="tracked-item-actions-right">' +
        '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" title="' + escapeHtml(reinstallTitle) + '" onclick="installSingleTrackedFromModal(\'' + encodedId + '\')"' + canReinstall + '><i data-lucide="download" width="11" height="11"></i>Install</button>' +
        '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px" title="' + escapeHtml(updateTitle) + '" onclick="updateTrackedInstallFromModal(\'' + encodedId + '\')"' + canUpdate + '><i data-lucide="refresh-cw" width="11" height="11"></i>Update</button>' +
        '<button class="btn btn-ghost" style="height:24px;padding:0 8px;font-size:10px;color:var(--red)" onclick="removeTrackedInstallFromModal(\'' + encodedId + '\')"' + canRemove + '><i data-lucide="trash-2" width="11" height="11"></i>Remove</button>' +
        '</div>' +
        '</div>' +
        '</div>'
      );
    })
    .join('');
  const missingTotal = hydratedRows.filter((row) => row.missing).length;
  const missingRequired = getMissingRequiredTrackedRows(hydratedRows).length;
  statusEl.textContent =
    'Tracked installs: ' +
    String(hydratedRows.length) +
    (missingTotal > 0
      ? (' | Missing: ' + String(missingTotal) + (missingRequired > 0 ? (' (' + String(missingRequired) + ' required)') : ''))
      : '');
  updateManagedModsInstallMissingButton(hydratedRows);
  lucide.createIcons();
}

function refreshManagedModsModal() {
  void hydrateManagedModsModal();
}

async function installSingleTrackedFromModal(encodedEntryId) {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const entryId = decodeURIComponent(String(encodedEntryId || '').trim());
  if (!instanceName || !entryId) return;
  const rows = MANAGED_MODS_PRESENCE_CACHE && MANAGED_MODS_PRESENCE_CACHE.instanceName === instanceName
    ? MANAGED_MODS_PRESENCE_CACHE.rows
    : [];
  const row = rows.find((item) => String(item && item.id ? item.id : '').trim() === entryId) || getTrackedInstallEntry(instanceName, entryId);
  if (!row) {
    showToast('!', 'Install failed', 'Tracked entry not found');
    return;
  }
  const outcome = await installTrackedRowsToInstance(instanceName, [row], 'overwrite');
  await hydrateManagedModsModal();
  if (outcome.installed > 0) {
    showToast('OK', 'Installed', String(row.title || row.fileName || 'Item') + ' installed');
    return;
  }
  const reason = outcome.errors[0] || 'Install failed';
  showToast('!', 'Install failed', reason);
}

async function installMissingTrackedFromModal() {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  if (!instanceName) return;
  const rows = MANAGED_MODS_PRESENCE_CACHE && MANAGED_MODS_PRESENCE_CACHE.instanceName === instanceName
    ? MANAGED_MODS_PRESENCE_CACHE.rows
    : await resolveTrackedInstallMissingState(instanceName, getTrackedInstallsForInstance(instanceName));
  const missingRequired = getMissingRequiredTrackedRows(rows);
  if (!missingRequired.length) {
    showToast('OK', 'No missing files', 'All required tracked items are present');
    return;
  }

  const button = document.getElementById('manage-mods-install-missing');
  if (button) {
    button.disabled = true;
    button.innerHTML = '<i data-lucide="loader-circle" width="12" height="12"></i>Installing...';
    lucide.createIcons();
  }
  const statusEl = document.getElementById('manage-mods-status');
  if (statusEl) {
    statusEl.textContent = 'Installing missing required files...';
    statusEl.style.color = 'var(--t3)';
  }
  const outcome = await installTrackedRowsToInstance(instanceName, missingRequired, 'overwrite');
  await hydrateManagedModsModal();
  if (outcome.failed > 0 || outcome.unresolved > 0) {
    showToast(
      '!',
      'Missing install incomplete',
      'Installed ' + String(outcome.installed) + '/' + String(outcome.total) + ' required files'
    );
    return;
  }
  showToast('OK', 'Missing fixed', 'Installed ' + String(outcome.installed) + ' required files');
}

function openManagedModsBrowseInstall() {
  closeModal();
  setPage('modrinth');
}

async function toggleTrackedInstallEnabledFromModal(encodedEntryId, enabled) {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const entryId = decodeURIComponent(String(encodedEntryId || '').trim());
  if (!instanceName || !entryId) return;
  const rows = MANAGED_MODS_PRESENCE_CACHE && MANAGED_MODS_PRESENCE_CACHE.instanceName === instanceName
    ? MANAGED_MODS_PRESENCE_CACHE.rows
    : [];
  const entry = rows.find((item) => String(item && item.id ? item.id : '').trim() === entryId) || getTrackedInstallEntry(instanceName, entryId);
  if (!entry) {
    showToast('!', 'Toggle failed', 'Tracked install entry not found');
    await hydrateManagedModsModal();
    return;
  }

  const res = await invokeBackend('set_instance_file_enabled', {
    request: {
      instanceName,
      target: entry.target,
      fileName: entry.fileName,
      enabled: !!enabled,
    },
  });
  if (!res.ok || !res.data) {
    const reason = formatBackendError(res.error, 'Could not toggle item state');
    showToast('!', 'Toggle failed', reason);
    await hydrateManagedModsModal();
    return;
  }

  const effectiveEnabled = typeof res.data.enabled === 'boolean' ? res.data.enabled : !!enabled;
  upsertTrackedInstallForInstance(instanceName, Object.assign({}, entry, {
    enabled: effectiveEnabled,
    path: String(res.data.path || entry.path || ''),
  }));
  await refreshSelectedInstanceInfo(instanceName);
  refreshInstanceTrackedInstallSummary(instanceName);
  await hydrateManagedModsModal();

  const statusText = String(res.data.status || '').trim().toLowerCase();
  if (statusText === 'not_found') {
    showToast('!', 'Toggle not applied', 'File not found on disk');
    return;
  }
  showToast('OK', effectiveEnabled ? 'Enabled' : 'Disabled', String(entry.title || entry.fileName || 'Item'));
}

async function removeTrackedInstallFromModal(encodedEntryId) {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const entryId = decodeURIComponent(String(encodedEntryId || '').trim());
  if (!instanceName || !entryId) return;
  const rows = MANAGED_MODS_PRESENCE_CACHE && MANAGED_MODS_PRESENCE_CACHE.instanceName === instanceName
    ? MANAGED_MODS_PRESENCE_CACHE.rows
    : [];
  const entry = rows.find((item) => String(item && item.id ? item.id : '').trim() === entryId) || getTrackedInstallEntry(instanceName, entryId);
  if (!entry) {
    showToast('!', 'Not found', 'Tracked install entry not found');
    return;
  }
  const fileNameForRemove = String(entry.currentFileName || entry.fileName || '').trim() || String(entry.fileName || '').trim();

  const res = await invokeBackend('remove_instance_file', {
    request: {
      instanceName,
      target: entry.target,
      fileName: fileNameForRemove,
    },
  });
  if (!res.ok) {
    showToast('!', 'Remove failed', 'Could not delete file from instance');
    return;
  }
  removeTrackedInstallForInstance(instanceName, entryId);
  await refreshSelectedInstanceInfo(instanceName);
  refreshInstanceTrackedInstallSummary(instanceName);
  await hydrateManagedModsModal();
  showToast('OK', 'Removed', entry.title + ' removed');
}

async function updateTrackedInstallFromModal(encodedEntryId) {
  const instanceName = getSelectedInstanceName() || selectedInstanceNameForModal();
  const entryId = decodeURIComponent(String(encodedEntryId || '').trim());
  if (!instanceName || !entryId) return;
  const entry = getTrackedInstallEntry(instanceName, entryId);
  if (!entry || !entry.url) {
    showToast('!', 'Update failed', 'Source URL is missing');
    return;
  }

  const listEl = document.getElementById('manage-mods-list');
  if (listEl) listEl.style.opacity = '0.75';
  try {
    const result = await installBrowseArtifactToInstance(
      instanceName,
      {
        target: entry.target,
        url: entry.url,
        fileName: entry.fileName,
      },
      'overwrite'
    );
    upsertTrackedInstallForInstance(instanceName, {
      id: entry.id,
      title: entry.title,
      provider: entry.provider,
      itemId: entry.itemId,
      target: entry.target,
      fileName: result.file_name || entry.fileName,
      url: entry.url,
      path: result.path || entry.path,
      bytesWritten: Number(result.bytes_written || 0),
      installedAt: Date.now(),
      required: entry.required,
      enabled: true,
      sourceType: entry.sourceType || 'main',
      rootTitle: entry.rootTitle || '',
      pageUrl: String(entry.pageUrl || '').trim(),
      iconUrl: String(entry.iconUrl || '').trim(),
    });
    await refreshSelectedInstanceInfo(instanceName);
    refreshInstanceTrackedInstallSummary(instanceName);
    await hydrateManagedModsModal();
    showToast('OK', 'Updated', entry.title + ' updated');
  } catch (err) {
    const reason = err && err.message ? String(err.message) : 'Update failed';
    showToast('!', 'Update failed', reason);
  } finally {
    if (listEl) listEl.style.opacity = '';
  }
}

function updateNotesModalMeta() {
  const input = document.getElementById('instance-notes-input');
  const meta = document.getElementById('instance-notes-meta');
  if (!input || !meta) return;
  meta.textContent = String(input.value.length) + ' chars';
}

function hydrateNotesModal() {
  const input = document.getElementById('instance-notes-input');
  if (!input) return;
  input.value = getInstanceNote(getSelectedInstanceName() || selectedInstanceNameForModal());
  input.addEventListener('input', updateNotesModalMeta);
  updateNotesModalMeta();
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function clearNotesFromModal() {
  const input = document.getElementById('instance-notes-input');
  if (!input) return;
  input.value = '';
  updateNotesModalMeta();
  input.focus();
}

function saveNotesFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const input = document.getElementById('instance-notes-input');
  const next = input ? input.value : '';
  setInstanceNote(instanceName, next);
  closeModal();
  showToast('OK', 'Notes saved', 'Saved for ' + instanceName);
}

function sanitizeInstanceGroupName(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, 32);
}

function formatInstanceCountLabel(count) {
  return count + (count === 1 ? ' instance' : ' instances');
}

function groupColorForIndex(index) {
  const palette = INSTANCE_GROUP_COLOR_POOL;
  return palette[index % palette.length];
}

function normalizeInstanceGroupColor(value, index) {
  const color = String(value || '').trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  return groupColorForIndex(index);
}

function generateInstanceGroupId() {
  return 'grp_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

function persistInstanceGroups() {
  try {
    if (!window.localStorage) return;
    const payload = {
      groups: INSTANCE_GROUPS.map((group, index) => ({
        id: String(group.id || ''),
        name: sanitizeInstanceGroupName(group.name || ''),
        color: normalizeInstanceGroupColor(group.color, index),
        collapsed: !!group.collapsed,
      })),
      assignments: { ...INSTANCE_GROUP_ASSIGNMENTS },
    };
    window.localStorage.setItem(INSTANCE_GROUP_STORE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[groups] failed to persist group state', err);
  }
}

function ensureInstanceGroupsLoaded() {
  if (INSTANCE_GROUPS_LOADED) return;
  INSTANCE_GROUPS_LOADED = true;
  INSTANCE_GROUPS = [];
  INSTANCE_GROUP_ASSIGNMENTS = {};

  try {
    if (!window.localStorage) return;
    const raw = window.localStorage.getItem(INSTANCE_GROUP_STORE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const groupEntries = Array.isArray(parsed && parsed.groups) ? parsed.groups : [];
    const seenIds = new Set();
    INSTANCE_GROUPS = groupEntries
      .map((entry, index) => {
        const id = String(entry && entry.id ? entry.id : '').trim();
        const name = sanitizeInstanceGroupName(entry && entry.name ? entry.name : '');
        if (!id || !name || seenIds.has(id)) return null;
        seenIds.add(id);
        return {
          id,
          name,
          color: normalizeInstanceGroupColor(entry.color, index),
          collapsed: !!entry.collapsed,
        };
      })
      .filter(Boolean);

    const assignments = parsed && typeof parsed.assignments === 'object' && parsed.assignments
      ? parsed.assignments
      : {};
    const cleanedAssignments = {};
    Object.keys(assignments).forEach((instanceName) => {
      const key = String(instanceName || '').trim();
      const groupId = String(assignments[instanceName] || '').trim();
      if (!key || !groupId) return;
      cleanedAssignments[key] = groupId;
    });
    INSTANCE_GROUP_ASSIGNMENTS = cleanedAssignments;
  } catch (err) {
    console.warn('[groups] failed to load group state', err);
    INSTANCE_GROUPS = [];
    INSTANCE_GROUP_ASSIGNMENTS = {};
  }
}

function findInstanceGroupById(groupId) {
  const id = String(groupId || '').trim();
  if (!id) return null;
  return INSTANCE_GROUPS.find((group) => group.id === id) || null;
}

function resolveInstanceGroupId(instanceName) {
  const key = String(instanceName || '').trim();
  if (!key) return '';
  const groupId = String(INSTANCE_GROUP_ASSIGNMENTS[key] || '').trim();
  if (!groupId) return '';
  return findInstanceGroupById(groupId) ? groupId : '';
}

function syncInstanceGroupState(instances) {
  ensureInstanceGroupsLoaded();
  const validNames = new Set(
    (Array.isArray(instances) ? instances : [])
      .map((item) => String(item && item.name ? item.name : '').trim())
      .filter(Boolean)
  );
  const validGroupIds = new Set(INSTANCE_GROUPS.map((group) => group.id));
  let dirty = false;

  Object.keys(INSTANCE_GROUP_ASSIGNMENTS).forEach((instanceName) => {
    if (!validNames.has(instanceName)) {
      delete INSTANCE_GROUP_ASSIGNMENTS[instanceName];
      dirty = true;
      return;
    }
    const groupId = String(INSTANCE_GROUP_ASSIGNMENTS[instanceName] || '').trim();
    if (!groupId || !validGroupIds.has(groupId)) {
      delete INSTANCE_GROUP_ASSIGNMENTS[instanceName];
      dirty = true;
    }
  });

  if (dirty) persistInstanceGroups();
}

function createInstanceGroup(rawName) {
  ensureInstanceGroupsLoaded();
  const input = typeof rawName === 'string'
    ? rawName
    : (typeof window.prompt === 'function' ? window.prompt('Group name') : '');
  const name = sanitizeInstanceGroupName(input);
  if (!name) {
    showToast('!', 'Invalid name', 'Group name is required');
    return false;
  }

  const exists = INSTANCE_GROUPS.some(
    (group) => group.name.toLowerCase() === name.toLowerCase()
  );
  if (exists) {
    showToast('!', 'Group exists', 'Choose another name');
    return false;
  }

  INSTANCE_GROUPS.push({
    id: generateInstanceGroupId(),
    name,
    color: groupColorForIndex(INSTANCE_GROUPS.length),
    collapsed: false,
  });
  persistInstanceGroups();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  showToast('OK', 'Group created', name + ' is ready');
  return true;
}

function hydrateCreateGroupModal() {
  const input = document.getElementById('create-group-name');
  if (!input) return;
  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);
}

function submitCreateGroupFromModal() {
  const input = document.getElementById('create-group-name');
  const name = input ? String(input.value || '') : '';
  if (!createInstanceGroup(name)) return;
  closeModal();
}

function openRenameGroupModal(groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) {
    showToast('!', 'Missing group', 'Group was not found');
    return;
  }
  RENAME_GROUP_TARGET_ID = group.id;
  openModal('rename-group');
}

function hydrateRenameGroupModal() {
  const input = document.getElementById('rename-group-name');
  const group = findInstanceGroupById(RENAME_GROUP_TARGET_ID);
  if (!input || !group) return;
  input.value = group.name || '';
  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);
}

function submitRenameGroupFromModal() {
  const group = findInstanceGroupById(RENAME_GROUP_TARGET_ID);
  if (!group) {
    showToast('!', 'Missing group', 'Group was not found');
    return;
  }
  const input = document.getElementById('rename-group-name');
  const nextName = sanitizeInstanceGroupName(input ? input.value : '');
  if (!nextName) {
    showToast('!', 'Invalid name', 'Group name is required');
    return;
  }
  const duplicate = INSTANCE_GROUPS.some((item) => {
    if (!item || item.id === group.id) return false;
    return String(item.name || '').toLowerCase() === nextName.toLowerCase();
  });
  if (duplicate) {
    showToast('!', 'Group exists', 'Choose another name');
    return;
  }
  if (group.name === nextName) {
    closeModal();
    return;
  }
  group.name = nextName;
  persistInstanceGroups();
  closeModal();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  showToast('OK', 'Group renamed', nextName);
}

function cycleInstanceGroupColor(groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) return;
  const pool = INSTANCE_GROUP_COLOR_POOL;
  const currentIndex = pool.findIndex((color) => color.toLowerCase() === String(group.color || '').toLowerCase());
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % pool.length : 0;
  group.color = pool[nextIndex];
  persistInstanceGroups();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  showToast('OK', 'Group updated', group.name + ' color changed');
}

function toggleInstanceGroupById(groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) return;
  group.collapsed = !group.collapsed;
  persistInstanceGroups();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
}

function getInstanceGroupAssignedCount(groupId) {
  const id = String(groupId || '').trim();
  if (!id) return 0;
  return Object.values(INSTANCE_GROUP_ASSIGNMENTS).filter((value) => value === id).length;
}

function openDeleteGroupModal(groupId) {
  const group = findInstanceGroupById(groupId);
  if (!group) {
    showToast('!', 'Missing group', 'Group was not found');
    return;
  }
  DELETE_GROUP_TARGET_ID = group.id;
  openModal('delete-group');
}

function hydrateDeleteGroupModal() {
  const group = findInstanceGroupById(DELETE_GROUP_TARGET_ID);
  const nameEl = document.getElementById('delete-group-name');
  const countEl = document.getElementById('delete-group-count');
  if (!nameEl || !countEl) return;
  if (!group) {
    nameEl.textContent = '-';
    countEl.textContent = '0';
    return;
  }
  const assignedCount = getInstanceGroupAssignedCount(group.id);
  nameEl.textContent = group.name || '-';
  countEl.textContent = String(assignedCount);
}

function submitDeleteGroupFromModal() {
  const group = findInstanceGroupById(DELETE_GROUP_TARGET_ID);
  if (!group) {
    showToast('!', 'Missing group', 'Group was not found');
    closeModal();
    return;
  }

  Object.keys(INSTANCE_GROUP_ASSIGNMENTS).forEach((instanceName) => {
    if (INSTANCE_GROUP_ASSIGNMENTS[instanceName] === group.id) {
      delete INSTANCE_GROUP_ASSIGNMENTS[instanceName];
    }
  });
  INSTANCE_GROUPS = INSTANCE_GROUPS.filter((item) => item.id !== group.id);
  if (RENAME_GROUP_TARGET_ID === group.id) RENAME_GROUP_TARGET_ID = '';
  if (DELETE_GROUP_TARGET_ID === group.id) DELETE_GROUP_TARGET_ID = '';
  persistInstanceGroups();
  closeModal();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  showToast('OK', 'Group deleted', group.name + ' removed');
}

function deleteInstanceGroupWithConfirm(groupId) {
  openDeleteGroupModal(groupId);
}

function moveGroupEntries() {
  ensureInstanceGroupsLoaded();
  const selectedInstance = getSelectedInstanceName();
  const currentGroupId = resolveInstanceGroupId(selectedInstance);
  const entries = [{ id: '', name: 'No group', color: '#3a3a3a' }];
  INSTANCE_GROUPS.forEach((group, index) => {
    entries.push({
      id: group.id,
      name: group.name,
      color: normalizeInstanceGroupColor(group.color, index + 1),
    });
  });
  if (!entries.some((entry) => entry.id === currentGroupId)) {
    MOVE_GROUP_SELECTED_ID = '';
  } else {
    MOVE_GROUP_SELECTED_ID = currentGroupId;
  }
  return entries.map((entry) => {
    const isCurrent = entry.id === currentGroupId;
    const isSelected = entry.id === MOVE_GROUP_SELECTED_ID;
    const labelColor = isSelected ? 'var(--t1)' : 'var(--t2)';
    return `
      <div class="group-row${isSelected ? ' sel' : ''}" data-group-id="${escapeHtml(entry.id)}" onclick="selectMoveGroupOption(this)">
        <div style="width:9px;height:9px;border-radius:2px;background:${entry.color};flex-shrink:0"></div>
        <span style="flex:1;font-size:12px;font-family:var(--mono);color:${labelColor}">${escapeHtml(entry.name)}</span>
        ${isCurrent ? '<span style="font-size:10px;font-family:var(--mono);color:var(--t4)">current</span>' : ''}
      </div>`;
  }).join('');
}

function selectMoveGroupOption(row) {
  if (!row) return;
  document.querySelectorAll('.group-row').forEach((item) => item.classList.remove('sel'));
  row.classList.add('sel');
  MOVE_GROUP_SELECTED_ID = String(row.dataset.groupId || '').trim();
}

function applyMoveGroupFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const groupId = String(MOVE_GROUP_SELECTED_ID || '').trim();
  if (groupId && !findInstanceGroupById(groupId)) {
    showToast('!', 'Invalid group', 'Selected group no longer exists');
    return;
  }
  if (groupId) {
    INSTANCE_GROUP_ASSIGNMENTS[instanceName] = groupId;
  } else {
    delete INSTANCE_GROUP_ASSIGNMENTS[instanceName];
  }
  persistInstanceGroups();
  closeModal();
  renderInstancesFromBackend(INSTANCE_LIST_CACHE, true);
  showToast('OK', 'Moved', instanceName + ' group updated');
}



function normalizeLoader(value) {
  return String(value || 'vanilla').trim().toLowerCase();
}

function loaderLabel(value) {
  const loader = normalizeLoader(value);
  if (!loader) return 'Vanilla';
  return loader.charAt(0).toUpperCase() + loader.slice(1);
}

function loaderDisplayLabel(loaderValue, loaderVersionValue) {
  const base = loaderLabel(loaderValue);
  const loader = normalizeLoader(loaderValue);
  const version = String(loaderVersionValue || '').trim();
  if (!version || loader === 'vanilla') return base;
  return base + ' ' + version;
}

function loaderIcon(value) {
  const loader = normalizeLoader(value);
  if (loader === 'fabric') return 'settings';
  if (loader === 'forge' || loader === 'neoforge') return 'globe';
  if (loader === 'quilt') return 'sparkles';
  return 'package';
}

function loaderArtPath(value, iconKey) {
  const custom = instanceIconPath(iconKey);
  if (custom) return custom;
  const path = loaderLogoAssetPath(value);
  if (path) return path;
  return '';
}

function isOfficialLoaderLogoPath(value) {
  return String(value || '').includes('assets/loader-logos/official/');
}

function loaderLogoAssetPath(value) {
  const loader = normalizeLoader(value);
  const map = {
    vanilla: 'vanilla.png',
    fabric: 'fabric.png',
    forge: 'forge.jpg',
    neoforge: 'neoforge.png',
    quilt: 'quilt.png',
  };
  const file = map[loader];
  if (!file) return '';
  return 'assets/loader-logos/official/' + file;
}

function loaderLogoImgMarkup(loaderValue, className) {
  const path = loaderLogoAssetPath(loaderValue);
  const label = escapeHtml(loaderLabel(loaderValue));
  const classes = className ? ' ' + className : '';
  if (!path) {
    const fallback = loaderIcon(loaderValue);
    return `<i data-lucide="${fallback}" width="12" height="12" style="color:var(--t2)"></i>`;
  }
  return `<img class="loader-logo-img${classes}" src="${path}" alt="${label} logo" loading="lazy">`;
}

function loaderCardTagMarkup(loaderValue, loaderVersionValue) {
  const loader = normalizeLoader(loaderValue);
  const version = String(loaderVersionValue || '').trim();
  const title = escapeHtml(loaderDisplayLabel(loader, version));
  const versionMarkup = version && loader !== 'vanilla'
    ? `<span class="loader-card-ver">${escapeHtml(version)}</span>`
    : '';
  return `
    <span class="card-tag loader-tag" title="${title}">
      ${loaderLogoImgMarkup(loader, 'loader-logo-card')}
      ${versionMarkup}
    </span>
  `;
}

function loaderBadgeMarkup(loaderValue, loaderVersionValue) {
  const loader = normalizeLoader(loaderValue);
  const version = String(loaderVersionValue || '').trim();
  const title = escapeHtml(loaderDisplayLabel(loader, version));
  const versionMarkup = version && loader !== 'vanilla'
    ? `<span class="loader-badge-ver">${escapeHtml(version)}</span>`
    : '';
  return `
    <span class="loader-badge-logo" title="${title}">
      ${loaderLogoImgMarkup(loader, 'loader-logo-badge')}
      ${versionMarkup}
    </span>
  `;
}

function loaderInfoMarkup(loaderValue, loaderVersionValue) {
  const loader = normalizeLoader(loaderValue);
  const version = String(loaderVersionValue || '').trim();
  const title = escapeHtml(loaderDisplayLabel(loader, version));
  const nameMarkup = `<span class="loader-info-name">${escapeHtml(loaderLabel(loader))}</span>`;
  const versionMarkup = version && loader !== 'vanilla'
    ? `<span class="loader-info-ver">${escapeHtml(version)}</span>`
    : '';
  return `
    <span class="loader-inline" title="${title}">
      ${loaderLogoImgMarkup(loader, 'loader-logo-inline')}
      ${nameMarkup}
      ${versionMarkup}
    </span>
  `;
}

function cardIconMarkup(loaderValue, iconKey, fallbackIcon) {
  const src = loaderArtPath(loaderValue, iconKey);
  const fallback = fallbackIcon || loaderIcon(loaderValue);
  const label = escapeHtml(loaderLabel(loaderValue));
  if (!src) {
    return `<i data-lucide="${fallback}" width="32" height="32" style="color:var(--t2)"></i>`;
  }
  const imgClass = isOfficialLoaderLogoPath(src) ? 'card-icon-img loader-art-img' : 'card-icon-img';
  return `
    <img class="${imgClass}" src="${src}" alt="${label} icon" loading="lazy"
         onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='inline-block';">
    <i data-lucide="${fallback}" width="32" height="32" style="color:var(--t2);display:none"></i>
  `;
}

function detailIconMarkup(loaderValue, iconKey, fallbackIcon) {
  const src = loaderArtPath(loaderValue, iconKey);
  const fallback = fallbackIcon || loaderIcon(loaderValue);
  const label = escapeHtml(loaderLabel(loaderValue));
  if (!src) {
    return `<i data-lucide="${fallback}" width="22" height="22" style="color:var(--t2)"></i>`;
  }
  const imgClass = isOfficialLoaderLogoPath(src) ? 'detail-icon-img loader-art-img' : 'detail-icon-img';
  return `
    <img class="${imgClass}" src="${src}" alt="${label} icon" loading="lazy"
         onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='inline-block';">
    <i data-lucide="${fallback}" width="22" height="22" style="color:var(--t2);display:none"></i>
  `;
}

function playtimeText(totalMinutes) {
  const minutes = Number(totalMinutes || 0);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours <= 0) return mins + 'm';
  return hours + 'h ' + mins + 'm';
}

function formatMemoryMb(valueMb) {
  const value = Number(valueMb || 0);
  if (!Number.isFinite(value) || value <= 0) return '-';
  if (value % 1024 === 0) return (value / 1024) + ' GB';
  return value + ' MB';
}

function formatMemoryRange(minMb, maxMb) {
  const min = Number(minMb || 0);
  const max = Number(maxMb || 0);
  if (min > 0 && max > 0) {
    return formatMemoryMb(min) + ' - ' + formatMemoryMb(max);
  }
  if (max > 0) return formatMemoryMb(max);
  if (min > 0) return formatMemoryMb(min);
  return 'Auto';
}

function shortenMiddle(value, maxChars) {
  const text = String(value || '').trim();
  const limit = Number(maxChars || 0);
  if (!text || !Number.isFinite(limit) || limit < 8 || text.length <= limit) {
    return text;
  }
  const keep = limit - 3;
  const left = Math.ceil(keep * 0.6);
  const right = Math.max(2, keep - left);
  return text.slice(0, left) + '...' + text.slice(text.length - right);
}

function formatJavaInfoDisplay(javaVersion, javaPath) {
  const path = String(javaPath || '').trim();
  const version = String(javaVersion || '').trim();
  if (version) return version;
  const compactPath = shortenMiddle(path, 42);
  if (compactPath) return compactPath;
  return 'Auto';
}

function parseLastPlayedEpoch(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
    return Math.floor(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const lower = trimmed.toLowerCase();
    const now = Math.floor(Date.now() / 1000);
    if (lower === 'just now') return now;
    const rel = lower.match(/^(\d+)\s+(minute|hour|day|week)s?\s+ago$/);
    if (rel) {
      const amount = Number(rel[1]);
      const unit = rel[2];
      const unitSeconds = unit === 'minute' ? 60 : unit === 'hour' ? 3600 : unit === 'day' ? 86400 : 604800;
      return now - (amount * unitSeconds);
    }
    if (/^\d+$/.test(trimmed)) {
      const parsed = Number(trimmed);
      if (Number.isFinite(parsed) && parsed > 0) return Math.floor(parsed);
    }
    const parsedDate = Date.parse(trimmed);
    if (Number.isFinite(parsedDate) && parsedDate > 0) {
      return Math.floor(parsedDate / 1000);
    }
  }
  return null;
}

function formatLastPlayed(value) {
  const epoch = parseLastPlayedEpoch(value);
  if (!epoch) return 'Never';

  const now = Math.floor(Date.now() / 1000);
  let diff = now - epoch;
  if (!Number.isFinite(diff)) return 'Never';
  if (diff < 0) diff = 0;

  if (diff < 60) return 'Just now';

  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours === 1 ? '1 hour ago' : hours + ' hours ago';

  const days = Math.floor(hours / 24);
  if (days < 7) return days === 1 ? '1 day ago' : days + ' days ago';

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks === 1 ? '1 week ago' : weeks + ' weeks ago';

  return new Date(epoch * 1000).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatExitStatus(state, code, reason, atEpoch) {
  const normalized = String(state || '').trim().toLowerCase();
  if (!normalized) return '-';

  let label = 'Exited';
  if (normalized === 'killed') label = 'Killed';
  else if (normalized === 'crashed') label = 'Crashed';
  else if (normalized === 'error') label = 'Error';

  const parts = [];
  if (typeof code === 'number' && Number.isFinite(code)) {
    parts.push('code ' + code);
  }
  const lastAt = parseLastPlayedEpoch(atEpoch);
  if (lastAt) {
    parts.push(formatLastPlayed(lastAt));
  }
  if (normalized === 'error' && reason) {
    parts.push('check logs');
  }

  return parts.length > 0 ? label + ' - ' + parts.join(' - ') : label;
}

function instanceToDetailData(instance) {
  const loader = normalizeLoader(instance.loader);
  const loaderVersion = String(instance.loaderVersion || '').trim();
  const instanceName = String(instance.name || '').trim();
  const resolvedIconKey = normalizeIconKey(instance.iconKey) || resolveAutoInstanceIconKey(instanceName || loader || 'instance');
  const bannerKey = resolveInstanceBannerKey(instance.bannerKey, instanceName || 'banner');
  const label = loaderLabel(loader);
  const loaderDisplay = loaderDisplayLabel(loader, loaderVersion);
  const version = String(instance.version || '').trim();
  const lastPlayedEpoch = parseLastPlayedEpoch(instance.lastPlayed);
  const lastExitAtEpoch = parseLastPlayedEpoch(instance.lastExitAtEpoch);
  const lastExitState = instance.lastExitState || null;
  const lastExitCode = typeof instance.lastExitCode === 'number' ? instance.lastExitCode : null;
  const lastExitReason = instance.lastExitReason ? String(instance.lastExitReason) : null;
  const memoryMinMb = Number.isFinite(Number(instance.memoryMinMb)) ? Math.max(0, Math.round(Number(instance.memoryMinMb))) : 0;
  const memoryMaxMb = Number.isFinite(Number(instance.memoryMaxMb)) ? Math.max(0, Math.round(Number(instance.memoryMaxMb))) : 0;
  const sub = loader === 'vanilla'
    ? 'minecraft ' + version
    : 'minecraft ' + version + ' - ' + loaderDisplay;
  return {
    loaderKey: loader,
    icon: loaderIcon(loader),
    iconKey: resolvedIconKey,
    bannerKey,
    badge: label.toUpperCase(),
    loader: loaderDisplay,
    loaderVersion,
    version,
    java: 'Auto',
    memoryMinMb,
    memoryMaxMb,
    memory: formatMemoryRange(memoryMinMb, memoryMaxMb),
    mods: Number.isFinite(Number(instance.modsCount)) ? (Number(instance.modsCount) + ' installed') : '0 installed',
    worlds: Number.isFinite(Number(instance.worldsCount)) ? (Number(instance.worldsCount) + ' worlds') : '0 worlds',
    lastPlayedEpoch,
    last: formatLastPlayed(lastPlayedEpoch),
    lastExitState,
    lastExitCode,
    lastExitReason,
    lastExitAtEpoch,
    exitStatus: formatExitStatus(lastExitState, lastExitCode, lastExitReason, lastExitAtEpoch),
    playtime: playtimeText(instance.playtimeMinutes),
    sub,
    running: !!instance.running,
  };
}

function instanceCardMarkup(instance) {
  const name = instance.name || 'Instance';
  const loader = normalizeLoader(instance.loader);
  const iconKey = normalizeIconKey(instance.iconKey) || resolveAutoInstanceIconKey(name || loader || 'instance');
  const bannerKey = resolveInstanceBannerKey(instance.bannerKey, name);
  const bannerSrc = bannerImagePathByKey(bannerKey) || bannerImagePathBySeed(name);
  const loaderVersion = String(instance.loaderVersion || '').trim();
  const version = String(instance.version || '').trim();
  const running = !!instance.running;
  const icon = loaderIcon(loader);
  const playtimeHours = Math.floor(Number(instance.playtimeMinutes || 0) / 60);
  const last = formatLastPlayed(instance.lastPlayed);
  const safeName = name.replace(/'/g, '&#39;');
  const cornerLogoTitle = escapeHtml(loaderDisplayLabel(loader, loaderVersion));

  return `
    <div class="instance-card${running ? " running" : ""}"
         data-loader="${loader}" data-version="${version}" data-loader-version="${escapeHtml(loaderVersion)}" data-name="${safeName}" data-playtime="${playtimeHours}" data-banner-key="${escapeHtml(bannerKey)}"
         onclick="selectCard(this)"
         draggable="true"
         ondragstart="dragStart(event)"
         ondragover="dragOver(event)"
         ondrop="dropCard(event)"
         oncontextmenu="showCtxMenu(event,this)">
      <div class="card-thumb">
        <div class="card-thumb-bg"></div>
        <div class="card-banner" style="background-image:url('${bannerSrc}')"></div>
        <div class="card-loader-corner${running ? ' with-running' : ''}" title="${cornerLogoTitle}">
          ${loaderLogoImgMarkup(loader, 'loader-logo-corner-img')}
        </div>
        ${running ? '<div class="running-badge"><div class="running-pulse"></div>Running</div>' : ''}
        <div class="card-icon">${cardIconMarkup(loader, iconKey, icon)}</div>
        <button class="card-play" onclick="event.stopPropagation();selectCard(this.closest('.instance-card'));${running ? "killInstance()" : "launchSequence()"}">
          ${running
            ? '<svg viewBox="0 0 10 10" fill="currentColor" width="10" height="10"><rect x="2" y="2" width="6" height="6" rx="1"/></svg>'
            : '<svg viewBox="0 0 10 10" fill="currentColor" width="10" height="10"><path d="M2 1.5L8.5 5 2 8.5V1.5z"/></svg>'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-name">${name}</div>
        <div class="card-meta"><span>${version}</span><span class="card-meta-dot"></span><span>${last}</span></div>
        <div class="card-playtime"><i data-lucide="clock" width="9" height="9"></i>${playtimeText(instance.playtimeMinutes)} total</div>
      </div>
    </div>`;
}

function updateInstanceCountLabels(totalCount) {
  const totalLabel = formatInstanceCountLabel(totalCount);
  const countBadge = document.getElementById('instance-count-badge');
  if (countBadge) countBadge.textContent = totalLabel;

  const sidebarCount = document.getElementById('sb-instances-count');
  if (sidebarCount) sidebarCount.textContent = String(totalCount);

  const statusItems = Array.from(document.querySelectorAll('.statusbar .status-item'));
  const instanceStatus = statusItems.find((item) => /instance/i.test(item.textContent));
  if (instanceStatus) instanceStatus.textContent = totalLabel;
  document.querySelectorAll('#panel-content .group-header').forEach((header) => {
    const countEl = header.querySelector('.group-count');
    const grid = header.nextElementSibling;
    if (!countEl || !grid || !grid.classList.contains('instance-grid')) return;
    const count = grid.querySelectorAll('.instance-card').length;
    countEl.textContent = formatInstanceCountLabel(count);
  });
}

function createAddInstanceCard() {
  const card = document.createElement('div');
  card.className = 'add-card';
  card.onclick = () => openModal('add-instance');
  card.innerHTML = `
    <div class="add-card-icon"><i data-lucide="plus" width="13" height="13"></i></div>
    <span>Add Instance</span>
  `;
  return card;
}

function createInstanceGroupSection(panelContent, group, instances, options) {
  const settings = options || {};
  const header = document.createElement('div');
  header.className = 'group-header';
  header.dataset.groupId = group.id || '';
  header.addEventListener('click', () => toggleGroup(header));

  const dot = document.createElement('div');
  dot.className = 'group-dot';
  dot.style.background = group.color || '#3a3a3a';
  header.appendChild(dot);

  const label = document.createElement('span');
  label.className = 'group-label';
  label.textContent = group.name || 'No group';
  header.appendChild(label);

  const count = document.createElement('span');
  count.className = 'group-count';
  count.textContent = formatInstanceCountLabel(instances.length);
  header.appendChild(count);

  if (settings.allowAssign) {
    const actions = document.createElement('div');
    actions.className = 'group-header-actions';
    const addBtn = document.createElement('button');
    addBtn.className = 'group-icon-btn';
    addBtn.type = 'button';
    addBtn.title = 'Add instances';
    addBtn.innerHTML = '<i data-lucide="plus" width="11" height="11"></i>';
    addBtn.addEventListener('click', (event) => openGroupInstancePicker(event, group.id));
    actions.appendChild(addBtn);

    const menuBtn = document.createElement('button');
    menuBtn.className = 'group-icon-btn';
    menuBtn.type = 'button';
    menuBtn.title = 'Group options';
    menuBtn.innerHTML = '<i data-lucide="ellipsis-vertical" width="11" height="11"></i>';
    menuBtn.addEventListener('click', (event) => openGroupHeaderContextMenu(event, group.id));
    actions.appendChild(menuBtn);

    header.appendChild(actions);
  }

  const chevron = document.createElement('i');
  chevron.className = 'group-chevron';
  chevron.setAttribute('data-lucide', 'chevron-down');
  chevron.setAttribute('width', '12');
  chevron.setAttribute('height', '12');
  if (group.collapsed) chevron.classList.add('collapsed');
  header.appendChild(chevron);

  const grid = document.createElement('div');
  grid.className = 'instance-grid';
  grid.dataset.role = 'instance-grid';
  grid.dataset.groupId = group.id || '';
  if (group.collapsed) grid.style.display = 'none';

  instances.forEach((instance) => {
    grid.insertAdjacentHTML('beforeend', instanceCardMarkup(instance));
  });
  if (settings.includeAddCard) grid.appendChild(createAddInstanceCard());

  panelContent.appendChild(header);
  panelContent.appendChild(grid);
}

function resetDetailPanelEmptyState() {
  const detailName = document.getElementById('detail-name');
  const detailSub = document.getElementById('detail-sub');
  const detailBadge = document.getElementById('detail-badge');
  const detailIcon = document.getElementById('detail-icon');
  const runningBar = document.getElementById('detail-running-bar');
  const launchBtn = document.getElementById('launch-or-kill-btn');
  const lastPlayed = document.getElementById('di-last');
  const lastExit = document.getElementById('di-exit');
  const loader = document.getElementById('di-loader');
  const version = document.getElementById('di-version');
  const java = document.getElementById('di-java');
  const memory = document.getElementById('di-memory');
  const mods = document.getElementById('di-mods');
  const worlds = document.getElementById('di-worlds');
  const playtime = document.getElementById('di-playtime');
  const session = document.getElementById('detail-session');

  if (detailName) detailName.textContent = 'No instances';
  if (detailSub) detailSub.textContent = 'Create your first instance';
  if (detailBadge) detailBadge.textContent = 'EMPTY';
  if (detailIcon) detailIcon.innerHTML = '<i data-lucide="package" width="22" height="22" style="color:var(--t2)"></i>';
  setDetailBannerByKey('banner-empty', '');
  if (runningBar) runningBar.classList.remove('visible');
  if (launchBtn) {
    launchBtn.className = 'det-btn det-btn-secondary';
    launchBtn.onclick = () => openModal('add-instance');
    launchBtn.innerHTML = '<i data-lucide="plus" width="13" height="13"></i> Create Instance';
  }
  if (loader) loader.textContent = '-';
  if (version) version.textContent = '-';
  if (java) {
    java.textContent = '-';
    java.removeAttribute('title');
  }
  if (memory) memory.textContent = '-';
  if (mods) mods.textContent = '0 installed';
  if (worlds) worlds.textContent = '0 worlds';
  if (playtime) playtime.textContent = '0m';
  if (session) session.textContent = 'Session: -';
  if (lastPlayed) lastPlayed.textContent = 'Never';
  if (lastExit) {
    lastExit.textContent = '-';
    lastExit.removeAttribute('title');
  }
  renderWeeklyPlaytimeBars('');
  syncDetailLaunchProgress();
}

function renderInstancesFromBackend(instances, preserveSelection) {
  if (!Array.isArray(instances)) return;
  const previousInstanceData = INSTANCE_DATA && typeof INSTANCE_DATA === 'object' ? INSTANCE_DATA : {};
  ensureInstanceGroupsLoaded();
  syncInstanceGroupState(instances);
  INSTANCE_LIST_CACHE = instances.map((instance) => ({ ...instance }));
  const selectedName = preserveSelection ? getSelectedInstanceName() : null;
  const panelContent = document.getElementById('panel-content');
  if (!panelContent) return;
  panelContent.innerHTML = '';

  INSTANCE_DATA = {};
  INSTANCE_RUNTIME = {};
  const noGroupInstances = [];
  const customGroups = INSTANCE_GROUPS.map((group, index) => ({
    id: group.id,
    name: group.name,
    color: normalizeInstanceGroupColor(group.color, index),
    collapsed: !!group.collapsed,
  }));
  const groupedInstances = new Map(customGroups.map((group) => [group.id, []]));

  instances.forEach((instance) => {
    const details = instanceToDetailData(instance);
    INSTANCE_DATA[instance.name] = details;
    INSTANCE_RUNTIME[instance.name] = {
      executable: instance.executable || null,
      args: Array.isArray(instance.args) ? instance.args : [],
      workingDir: instance.workingDir || null,
    };

    const groupId = resolveInstanceGroupId(instance.name);
    if (groupId && groupedInstances.has(groupId)) {
      groupedInstances.get(groupId).push(instance);
    } else {
      noGroupInstances.push(instance);
    }
  });

  reconcileWeeklyPlaytimeTracker(previousInstanceData, INSTANCE_DATA);

  const showNoGroup = customGroups.length === 0 || noGroupInstances.length > 0;
  if (showNoGroup) {
    createInstanceGroupSection(
      panelContent,
      { id: '', name: 'No group', color: '#3a3a3a', collapsed: false },
      noGroupInstances,
      { includeAddCard: true, allowAssign: false }
    );
  }
  customGroups.forEach((group) => {
    createInstanceGroupSection(
      panelContent,
      group,
      groupedInstances.get(group.id) || [],
      { includeAddCard: false, allowAssign: true }
    );
  });

  if (!showNoGroup && customGroups.length > 0 && panelContent.querySelectorAll('.add-card').length === 0) {
    const firstGrid = panelContent.querySelector('.instance-grid[data-role="instance-grid"]');
    if (firstGrid) firstGrid.appendChild(createAddInstanceCard());
  }

  const grids = Array.from(panelContent.querySelectorAll('.instance-grid[data-role="instance-grid"]'));
  const hasCards = grids.some((grid) => grid.querySelector('.instance-card'));
  const hasVisibleCards = grids.some((grid) => {
    if (grid.style.display === 'none') return false;
    return !!grid.querySelector('.instance-card');
  });
  if (hasCards && !hasVisibleCards) {
    let expandedPersistedGroup = false;
    const firstWithCard = grids.find((grid) => grid.querySelector('.instance-card'));
    if (firstWithCard) {
      firstWithCard.style.display = '';
      const header = firstWithCard.previousElementSibling;
      const chevron = header && header.querySelector ? header.querySelector('.group-chevron') : null;
      if (chevron) chevron.classList.remove('collapsed');
      if (header && header.dataset && header.dataset.groupId) {
        const group = findInstanceGroupById(header.dataset.groupId);
        if (group && group.collapsed) {
          group.collapsed = false;
          expandedPersistedGroup = true;
        }
      }
    }
    if (expandedPersistedGroup) persistInstanceGroups();
  }

  updateInstanceCountLabels(instances.length);
  renderSidebarInstanceList(instances);

  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const preferred = selectedName ? cards.find((card) => card.dataset.name === selectedName) : null;
  const target = preferred || cards[0];
  if (target) {
    selectCard(target);
    syncSidebarInstanceActiveState(String(target.dataset.name || ''));
  } else {
    resetDetailPanelEmptyState();
    syncSidebarInstanceActiveState('');
  }

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect && sortSelect.value) {
    sortInstances(sortSelect.value, true);
  }
  applyInstanceVisibility();
  const renderedCards = Array.from(document.querySelectorAll('.instance-card'));
  const visibleCards = renderedCards.filter((card) => card.style.display !== 'none');
  if (renderedCards.length > 0 && visibleCards.length === 0 && !INSTANCE_SEARCH_QUERY) {
    INSTANCE_FILTER_TYPE = 'all';
    setActiveFilterChip('all');
    applyInstanceVisibility();
  }
  applyInstanceViewMode(INSTANCE_VIEW_MODE);
  lucide.createIcons();
}

async function refreshInstancesFromBackend(preserveSelection) {
  const keepSelection = preserveSelection !== false;
  const res = await invokeBackend('list_instances');
  if (res.ok && Array.isArray(res.data)) {
    INSTANCE_RUNTIME_POLL_SIGNATURE = buildInstanceRuntimePollSignature(res.data);
    renderInstancesFromBackend(res.data, keepSelection);
    return true;
  }
  return false;
}

async function refreshSelectedInstanceInfo(instanceName) {
  const name = String(instanceName || '').trim();
  if (!name) return;
  const requestId = ++ACTIVE_INSTANCE_INFO_REQUEST_ID;
  const res = await invokeBackend('get_instance_info', {
    request: { instanceName: name },
  });
  if (!res.ok) {
    if (isInstanceInfoNotFoundError(res.error, name)) {
      const selected = getSelectedInstanceName();
      if (selected && selected.toLowerCase() === name.toLowerCase()) {
        await refreshInstancesFromBackend(true);
      }
    }
    return;
  }
  if (!res.data || typeof res.data !== 'object') return;

  const selected = getSelectedInstanceName();
  if (requestId !== ACTIVE_INSTANCE_INFO_REQUEST_ID || selected !== name) return;

  const details = INSTANCE_DATA[name];
  if (!details) return;
  const info = res.data;
  const modsCount = Number(info.modsCount || 0);
  const worldsCount = Number(info.worldsCount || 0);
  const minMb = Number(info.memoryMinMb || 0);
  const maxMb = Number(info.memoryMaxMb || 0);
  const javaDisplay = formatJavaInfoDisplay(info.javaVersion, info.javaPath);
  const memoryDisplay = formatMemoryRange(minMb, maxMb);

  details.java = javaDisplay;
  details.memoryMinMb = minMb;
  details.memoryMaxMb = maxMb;
  details.memory = memoryDisplay;
  details.mods = modsCount + ' installed';
  details.worlds = worldsCount + ' worlds';

  const javaEl = document.getElementById('di-java');
  const memoryEl = document.getElementById('di-memory');
  const modsEl = document.getElementById('di-mods');
  const worldsEl = document.getElementById('di-worlds');

  if (javaEl) {
    javaEl.textContent = javaDisplay;
    if (info.javaPath) javaEl.title = String(info.javaPath);
    else javaEl.removeAttribute('title');
  }
  if (memoryEl) memoryEl.textContent = memoryDisplay;
  if (modsEl) modsEl.textContent = details.mods;
  if (worldsEl) worldsEl.textContent = details.worlds;
  refreshInstanceTrackedInstallSummary(name);
}

function selectCard(el) {
  document.querySelectorAll('.instance-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const name = el.dataset.name;
  syncSidebarInstanceActiveState(name);
  const d = INSTANCE_DATA[name];
  if (!d) return;
  const lastText = formatLastPlayed(d.lastPlayedEpoch || d.last || null);
  const exitText = formatExitStatus(d.lastExitState, d.lastExitCode, d.lastExitReason, d.lastExitAtEpoch);
  d.last = lastText;
  d.exitStatus = exitText;
  document.getElementById('detail-name').textContent  = name;
  document.getElementById('detail-sub').textContent   = d.sub;
  document.getElementById('detail-badge').innerHTML = loaderBadgeMarkup(d.loaderKey, d.loaderVersion);
  const detailIcon = document.getElementById('detail-icon');
  if (detailIcon) { detailIcon.innerHTML = detailIconMarkup(d.loaderKey, d.iconKey, d.icon); }
  setDetailBannerByKey(name, d.bannerKey);
  document.getElementById('di-loader').innerHTML      = loaderInfoMarkup(d.loaderKey, d.loaderVersion);
  document.getElementById('di-version').textContent   = d.version;
  const detailJava = document.getElementById('di-java');
  const detailMemory = document.getElementById('di-memory');
  const detailWorlds = document.getElementById('di-worlds');
  if (detailJava) {
    detailJava.textContent = d.java || 'Auto';
    detailJava.removeAttribute('title');
  }
  if (detailMemory) detailMemory.textContent = d.memory || 'Auto';
  document.getElementById('di-mods').textContent      = d.mods;
  if (detailWorlds) detailWorlds.textContent = d.worlds || '0 worlds';
  refreshInstanceTrackedInstallSummary(name);
  document.getElementById('di-last').textContent      = lastText;
  const detailExit = document.getElementById('di-exit');
  if (detailExit) {
    detailExit.textContent = exitText;
    if (d.lastExitReason) detailExit.title = d.lastExitReason;
    else detailExit.removeAttribute('title');
  }
  document.getElementById('di-playtime').textContent  = d.playtime;
  renderWeeklyPlaytimeBars(name);
  const rb = document.getElementById('detail-running-bar');
  const lb = document.getElementById('launch-or-kill-btn');
  if (d.running) {
    rb.classList.add('visible');
    lb.className = 'det-btn det-btn-running';
    lb.onclick   = killInstance;
    lb.innerHTML = '<i data-lucide="zap-off" width="13" height="13"></i> Kill Game';
  } else {
    rb.classList.remove('visible');
    lb.className = 'det-btn det-btn-primary';
    lb.onclick   = launchSequence;
    lb.innerHTML = '<i data-lucide="play" width="13" height="13"></i> Launch';
  }
  refreshSelectedSessionLabel();
  void refreshSelectedInstanceInfo(name);
  syncDetailLaunchProgress();
  lucide.createIcons();
}

function refreshLastPlayedLabels() {
  document.querySelectorAll('.instance-card').forEach((card) => {
    const name = card.dataset.name;
    const details = INSTANCE_DATA[name];
    if (!details) return;
    const lastText = formatLastPlayed(details.lastPlayedEpoch || details.last || null);
    details.last = lastText;
    const meta = card.querySelector('.card-meta');
    if (meta && meta.lastElementChild) {
      meta.lastElementChild.textContent = lastText;
    }
  });

  const selected = document.querySelector('.instance-card.selected');
  if (!selected) return;
  const selectedDetails = INSTANCE_DATA[selected.dataset.name];
  const detailLast = document.getElementById('di-last');
  const detailExit = document.getElementById('di-exit');
  if (selectedDetails && detailLast) {
    detailLast.textContent = formatLastPlayed(selectedDetails.lastPlayedEpoch || selectedDetails.last || null);
  }
  if (selectedDetails && detailExit) {
    const exitText = formatExitStatus(
      selectedDetails.lastExitState,
      selectedDetails.lastExitCode,
      selectedDetails.lastExitReason,
      selectedDetails.lastExitAtEpoch
    );
    selectedDetails.exitStatus = exitText;
    detailExit.textContent = exitText;
    if (selectedDetails.lastExitReason) detailExit.title = selectedDetails.lastExitReason;
    else detailExit.removeAttribute('title');
  }
}

initInstanceViewMode();

function updateClock() {
  const el = document.getElementById('statusbar-time');
  if (el) el.textContent = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}
updateClock();
setInterval(updateClock, 30000);
setInterval(refreshLastPlayedLabels, 60000);

// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
// SERVER WIZARD
// ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½.ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¿Ãƒâ€šÃ‚Â½
let srvCurrentStep = 1;
const SRV_TOTAL = 4;
const srvTypeDescs = {
  vanilla: 'Vanilla - Official Mojang server, no plugins or mods.',
  paper:   'Paper - High-performance fork with plugin support.',
  fabric:  'Fabric - Lightweight modding platform.',
  forge:   'Forge - The original modding API.',
};
let srvAddedPlugins = [];

function goSrvStep(n) { srvCurrentStep = n; renderSrvStep(); }
function srvNext()    { if (srvCurrentStep < SRV_TOTAL) { srvCurrentStep++; renderSrvStep(); } }
function srvPrev()    { if (srvCurrentStep > 1)         { srvCurrentStep--; renderSrvStep(); } }

function renderSrvStep() {
  for (let i = 1; i <= SRV_TOTAL; i++) {
    const el = document.getElementById('srv-step-' + i);
    if (el) el.style.display = i === srvCurrentStep ? '' : 'none';
  }
  const bar = document.getElementById('srv-prog-bar');
  if (bar) bar.style.width = (srvCurrentStep / SRV_TOTAL * 100) + '%';
  const sl = document.getElementById('srv-step-label');
  if (sl) sl.textContent = srvCurrentStep;
  const nb = document.getElementById('srv-next-btn');
  if (nb) {
    if (srvCurrentStep === SRV_TOTAL) { nb.style.display = 'none'; }
    else { nb.style.display = ''; nb.innerHTML = 'Next <i data-lucide="chevron-right" width="12" height="12"></i>'; }
  }
  for (let i = 1; i <= SRV_TOTAL; i++) {
    const navEl = document.getElementById('srv-nav-' + i);
    const numEl = document.getElementById('srv-num-' + i);
    if (!navEl || !numEl) continue;
    const done   = i < srvCurrentStep;
    const active = i === srvCurrentStep;
    navEl.style.background = active ? 'var(--s3)' : '';
    navEl.style.color      = active ? 'var(--t1)' : 'var(--t3)';
    numEl.style.background = done ? 'var(--green)' : active ? 'var(--t2)' : 'var(--s4)';
    numEl.style.borderColor= done ? 'var(--green)' : active ? 'var(--b4)' : 'var(--b2)';
    numEl.style.color      = (done || active) ? '#000' : 'var(--t4)';
    numEl.innerHTML        = done ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : i;
    const ps = document.getElementById('prev-step-' + i);
    if (ps) {
      const circle = ps.querySelector('div');
      const txt    = ps.querySelector('span');
      if (done)        { circle.style.background = 'var(--green)'; circle.style.borderColor = 'var(--green)'; circle.innerHTML = '<i data-lucide="check" width="8" height="8" style="color:#000"></i>'; txt.style.color = 'var(--t2)'; }
      else if (active) { circle.style.background = 'var(--t2)';   circle.style.borderColor = 'var(--t2)';    circle.innerHTML = ''; txt.style.color = 'var(--t1)'; }
      else             { circle.style.background = 'var(--s3)';   circle.style.borderColor = 'var(--b3)';   circle.innerHTML = ''; txt.style.color = 'var(--t4)'; }
    }
  }
  if (srvCurrentStep === 4) {
    const n = document.getElementById('srv-name');
    const v = document.getElementById('srv-version');
    const t = document.getElementById('srv-type');
    const r = document.getElementById('srv-ram');
    const sn = document.getElementById('sum-name'); if (sn && n) sn.textContent = n.value || '-';
    const sv = document.getElementById('sum-version'); if (sv && v) sv.textContent = v.value;
    const st = document.getElementById('sum-type'); if (st && t) st.textContent = t.options[t.selectedIndex].text;
    const sr = document.getElementById('sum-ram'); if (sr && r) sr.textContent = r.value + ' GB';
  }
  lucide.createIcons();
}

function updateSrvType(val) {
  const desc = document.getElementById('srv-type-desc');
  if (desc) desc.textContent = srvTypeDescs[val] || '';
  const v  = document.getElementById('srv-version');
  const pt = document.getElementById('prev-type');
  if (pt && v) pt.textContent = val.charAt(0).toUpperCase() + val.slice(1) + ' - ' + v.value;
}

function onSrvNameInput(val) {
  const pn = document.getElementById('prev-name');
  if (pn) pn.textContent = val || 'My Server';
}

function onSrvVersionChange(val) {
  const t  = document.getElementById('srv-type');
  const pt = document.getElementById('prev-type');
  if (pt && t) pt.textContent = t.options[t.selectedIndex].text + ' - ' + val;
}

function selectSrvIcon(el, iconName) {
  document.querySelectorAll('#srv-icon-grid .icon-cell').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const preview = document.getElementById('srv-icon-preview');
  if (preview) preview.innerHTML = `<i data-lucide="${iconName}" width="28" height="28" style="color:var(--t2)"></i>`;
  const prevIcon = document.getElementById('prev-icon');
  if (prevIcon) prevIcon.innerHTML = `<i data-lucide="${iconName}" width="32" height="32" style="color:var(--t2)"></i>`;
  lucide.createIcons();
}

function selectSrvHost(card) {
  document.querySelectorAll('.srv-host-card').forEach(c => {
    c.style.background  = 'var(--s2)';
    c.style.borderColor = 'var(--b2)';
    c.classList.remove('selected');
    const r = c.querySelector('.srv-radio');
    if (r) { r.innerHTML = ''; r.style.borderColor = 'var(--b3)'; }
  });
  card.style.background  = 'var(--s3)';
  card.style.borderColor = 'var(--b4)';
  card.classList.add('selected');
  const r = card.querySelector('.srv-radio');
  if (r) { r.style.borderColor = 'var(--t2)'; r.innerHTML = '<div style="width:6px;height:6px;border-radius:50%;background:var(--t2);"></div>'; }
  const sumHost = document.getElementById('sum-host');
  // FIX: use a more reliable selector for the host name text
  const hostName = card.querySelector('div > div:first-child');
  if (sumHost && hostName) sumHost.textContent = hostName.textContent.trim();
}

function checkEula() {
  const box = document.getElementById('eula-box');
  const btn = document.getElementById('srv-launch-btn');
  if (!btn) return;
  const checked = box && box.classList.contains('on');
  btn.disabled        = !checked;
  btn.style.background = checked ? 'var(--t1)' : 'var(--t4)';
  btn.style.cursor    = checked ? 'pointer' : 'not-allowed';
}

function onSrvIdleToggle() {
  const idleBox = document.getElementById('srv-idle-enabled');
  const idleInput = document.getElementById('srv-idle-minutes');
  if (!idleInput) return;
  const enabled = !!(idleBox && idleBox.classList.contains('on'));
  idleInput.disabled = !enabled;
  idleInput.style.opacity = enabled ? '1' : '0.5';
}

function formatServerTypeLabel(value) {
  const raw = String(value || '').trim();
  if (!raw) return 'Vanilla';
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function getSelectedServerDeployment() {
  if (!Array.isArray(SERVER_DEPLOYMENTS_CACHE) || SERVER_DEPLOYMENTS_CACHE.length === 0) return null;
  const selected = SERVER_DEPLOYMENTS_CACHE.find((row) => String(row && row.deploymentId || '') === String(SERVER_SELECTED_DEPLOYMENT_ID || ''));
  return selected || SERVER_DEPLOYMENTS_CACHE[0];
}

function syncServerConnectionFromSelected() {
  const selected = getSelectedServerDeployment();
  const joinEl = document.getElementById('srv-join-code');
  const localEl = document.getElementById('srv-conn-local');
  const lanEl = document.getElementById('srv-conn-lan');
  const publicEl = document.getElementById('srv-conn-public');
  if (!selected) {
    if (joinEl) joinEl.value = '------';
    if (localEl) localEl.textContent = '127.0.0.1:25565';
    if (lanEl) lanEl.textContent = '-';
    if (publicEl) publicEl.textContent = '-';
    return;
  }
  if (joinEl) joinEl.value = String(selected.joinCode || '------');
  if (localEl) localEl.textContent = String(selected.localAddress || '-');
  if (lanEl) lanEl.textContent = String(selected.lanAddress || '-');
  const publicText = selected.publicSubdomain
    ? String(selected.publicSubdomain)
    : (selected.publicAddress ? String(selected.publicAddress) : '-');
  if (publicEl) publicEl.textContent = publicText;
}

function playServerWarningSound() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  try {
    const ctx = new AudioCtor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 660;
    gain.gain.value = 0.03;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
    setTimeout(() => ctx.close().catch(() => {}), 320);
  } catch (_err) {
    // no-op
  }
}

function maybeShowServerShutdownWarning(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return;
  const warningRow = rows.find((row) => row && row.shutdownWarningActive);
  if (!warningRow) return;
  const now = Date.now();
  if (now - SERVER_WARNING_TOAST_AT < 8000) return;
  SERVER_WARNING_TOAST_AT = now;
  const seconds = Number(warningRow.shutdownWarningSecondsRemaining || 0);
  playServerWarningSound();
  showToast(
    '!',
    'Server will stop soon',
    String(warningRow.name || 'Server') + ' will stop in ' + seconds + 's (no players detected).',
    {
      label: 'Cancel shutdown',
      onClick: () => {
        void invokeBackend('cancel_deployment_shutdown', {
          request: { deploymentId: warningRow.deploymentId },
        }).then(() => refreshServerDeployments(warningRow.deploymentId));
      },
    }
  );
}

function renderServerManagerList(rows) {
  const listEl = document.getElementById('srv-manager-list');
  if (!listEl) return;
  const items = Array.isArray(rows) ? rows : [];
  if (items.length === 0) {
    listEl.innerHTML = '<div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);">No servers yet</div>';
    return;
  }
  listEl.innerHTML = items.map((row) => {
    const id = escapeHtml(String(row.deploymentId || ''));
    const name = escapeHtml(String(row.name || 'Server'));
    const typeVersion = escapeHtml(formatServerTypeLabel(row.serverType) + ' ' + String(row.version || ''));
    const running = !!row.running;
    const selected = String(row.deploymentId || '') === String(SERVER_SELECTED_DEPLOYMENT_ID || '');
    const statusText = running ? 'Running' : 'Stopped';
    const playerText = String(Number(row.playersOnline || 0)) + '/' + String(Number(row.maxPlayers || 0));
    const countdown = row.shutdownWarningActive
      ? ('Warning ' + String(Number(row.shutdownWarningSecondsRemaining || 0)) + 's')
      : (row.idleShutdownSecondsRemaining ? ('Idle in ' + String(Number(row.idleShutdownSecondsRemaining || 0)) + 's') : '');
    return `
      <div onclick="selectServerDeployment('${id}')" style="background:${selected ? 'var(--s3)' : 'var(--s2)'};border:1px solid ${selected ? 'var(--b4)' : 'var(--b2)'};border-radius:8px;padding:8px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px;">
          <div style="font-size:11.5px;font-weight:700;color:var(--t1);">${name}</div>
          <span style="font-size:9px;font-family:var(--mono);color:var(--t4);">${typeVersion}</span>
        </div>
        <div style="display:flex;justify-content:space-between;gap:8px;font-size:10px;font-family:var(--mono);color:var(--t3);margin-bottom:6px;">
          <span>${statusText}</span>
          <span>Players ${playerText}</span>
        </div>
        ${countdown ? `<div style="font-size:9.5px;font-family:var(--mono);color:#776600;margin-bottom:6px;">${escapeHtml(countdown)}</div>` : ''}
        <div style="display:flex;gap:4px;flex-wrap:wrap;">
          <button class="btn btn-ghost" style="height:22px;padding:0 6px;font-size:9.5px;" onclick="event.stopPropagation();serverStart('${id}')">Start</button>
          <button class="btn btn-ghost" style="height:22px;padding:0 6px;font-size:9.5px;" onclick="event.stopPropagation();serverStop('${id}')">Stop</button>
          <button class="btn btn-ghost" style="height:22px;padding:0 6px;font-size:9.5px;" onclick="event.stopPropagation();serverRestart('${id}')">Restart</button>
          <button class="btn btn-ghost" style="height:22px;padding:0 6px;font-size:9.5px;" onclick="event.stopPropagation();serverConsole('${id}')">Console</button>
          <button class="btn btn-ghost" style="height:22px;padding:0 6px;font-size:9.5px;" onclick="event.stopPropagation();serverOpenFolder('${id}')">Folder</button>
        </div>
      </div>
    `;
  }).join('');
}

function safeServerInputId(value) {
  return String(value || '').replace(/[^a-zA-Z0-9_-]/g, '_');
}

function updateServerCountBadges(count) {
  const total = Number(count || 0);
  const sidebarCount = document.getElementById('sb-my-servers-count');
  if (sidebarCount) sidebarCount.textContent = String(total);
  const pageCount = document.getElementById('my-servers-count');
  if (pageCount) pageCount.textContent = total + (total === 1 ? ' server' : ' servers');
}

async function copyServerValue(value, label) {
  const normalized = String(value || '').trim();
  if (!normalized) {
    showToast('!', 'Nothing to copy', String(label || 'Value') + ' is empty');
    return;
  }
  try {
    await navigator.clipboard.writeText(normalized);
    showToast('OK', 'Copied', String(label || 'Value') + ' copied');
  } catch (_err) {
    showToast('!', 'Copy failed', 'Clipboard access denied');
  }
}

async function regenerateServerJoinCode(deploymentId) {
  const res = await invokeBackend('regenerate_deployment_join_code', {
    request: { deploymentId },
  });
  if (!res.ok) {
    showToast('!', 'Generate failed', formatBackendError(res.error, 'Could not regenerate join code'));
    return;
  }
  showToast('OK', 'Join code updated', String(res.data && res.data.joinCode || ''));
  await refreshServerDeployments(deploymentId);
}

async function updateServerPlayers(deploymentId) {
  const input = document.getElementById('my-srv-players-' + safeServerInputId(deploymentId));
  if (!input) return;
  const value = Number(input.value || 0);
  if (!Number.isFinite(value) || value < 0) {
    showToast('!', 'Invalid players', 'Players must be 0 or higher');
    return;
  }
  const res = await invokeBackend('set_deployment_players', {
    request: { deploymentId, playersOnline: Math.floor(value) },
  });
  if (!res.ok) {
    showToast('!', 'Update failed', formatBackendError(res.error, 'Could not update players'));
    return;
  }
  await refreshServerDeployments(deploymentId);
}

function renderMyServersPage(rows) {
  const listEl = document.getElementById('my-servers-list');
  if (!listEl) return;
  const items = Array.isArray(rows) ? rows : [];
  updateServerCountBadges(items.length);
  if (items.length === 0) {
    listEl.innerHTML = `
      <div style="background:var(--s1);border:1px solid var(--b2);border-radius:10px;padding:20px;">
        <div style="font-size:14px;font-weight:700;color:var(--t1);margin-bottom:6px;">No servers yet</div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3);margin-bottom:10px;">Create your first local server from Create a Server page.</div>
        <button class="btn btn-primary" style="height:30px;" onclick="setPage('server', document.getElementById('sb-create-server'))">Create Server</button>
      </div>
    `;
    return;
  }
  listEl.innerHTML = items.map((row) => {
    const id = String(row.deploymentId || '');
    const safeId = safeServerInputId(id);
    const running = !!row.running;
    const status = running ? 'Running' : 'Stopped';
    const countdown = row.shutdownWarningActive
      ? ('Shutdown in ' + String(Number(row.shutdownWarningSecondsRemaining || 0)) + 's')
      : (row.idleShutdownSecondsRemaining ? ('Idle stop in ' + String(Number(row.idleShutdownSecondsRemaining || 0)) + 's') : 'No timer');
    const publicText = row.publicSubdomain ? String(row.publicSubdomain) : (row.publicAddress ? String(row.publicAddress) : '-');
    return `
      <div style="background:var(--s1);border:1px solid var(--b2);border-radius:10px;padding:12px;">
        <div style="display:flex;align-items:start;justify-content:space-between;gap:10px;margin-bottom:8px;">
          <div>
            <div style="font-size:14px;font-weight:800;color:var(--t1);">${escapeHtml(String(row.name || 'Server'))}</div>
            <div style="font-size:10.5px;font-family:var(--mono);color:var(--t3);margin-top:2px;">${escapeHtml(formatServerTypeLabel(row.serverType))} ${escapeHtml(String(row.version || ''))} | ${escapeHtml(status)} | Players ${Number(row.playersOnline || 0)}/${Number(row.maxPlayers || 0)}</div>
          </div>
          <div style="font-size:10px;font-family:var(--mono);color:${running ? 'var(--green)' : 'var(--t4)'};">${escapeHtml(String(row.status || '-'))}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">
          <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;padding:8px;">
            <div style="font-size:9px;font-family:var(--mono);color:var(--t4);margin-bottom:6px;">JOIN CODE</div>
            <div style="display:flex;gap:6px;align-items:center;">
              <input class="input" readonly value="${escapeHtml(String(row.joinCode || '------'))}" style="height:28px;font-family:var(--mono);font-size:12px;text-align:center;letter-spacing:1px;">
              <button class="btn btn-ghost" style="height:28px;padding:0 8px;font-size:10px;" onclick="copyServerValue('${escapeHtml(String(row.joinCode || ''))}','Join code')">Copy</button>
              <button class="btn btn-ghost" style="height:28px;padding:0 8px;font-size:10px;" onclick="regenerateServerJoinCode('${escapeHtml(id)}')">New</button>
            </div>
          </div>
          <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;padding:8px;">
            <div style="font-size:9px;font-family:var(--mono);color:var(--t4);margin-bottom:6px;">RUNTIME</div>
            <div style="font-size:10.5px;font-family:var(--mono);color:var(--t3);margin-bottom:4px;">${escapeHtml(String(row.runtimeMode === 'background' ? 'Run in background (24/7)' : 'Stop when launcher closes'))}</div>
            <div style="font-size:10px;font-family:var(--mono);color:${row.shutdownWarningActive ? '#776600' : 'var(--t4)'};">${escapeHtml(countdown)}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:8px;">
          <div class="info-row"><span class="info-key">Local</span><span class="info-val">${escapeHtml(String(row.localAddress || '-'))}</span></div>
          <div class="info-row"><span class="info-key">LAN</span><span class="info-val">${escapeHtml(String(row.lanAddress || '-'))}</span></div>
          <div class="info-row"><span class="info-key">Public</span><span class="info-val">${escapeHtml(publicText)}</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-ghost" style="height:28px;" onclick="serverStart('${escapeHtml(id)}')">Start</button>
          <button class="btn btn-ghost" style="height:28px;" onclick="serverStop('${escapeHtml(id)}')">Stop</button>
          <button class="btn btn-ghost" style="height:28px;" onclick="serverRestart('${escapeHtml(id)}')">Restart</button>
          <button class="btn btn-ghost" style="height:28px;" onclick="serverConsole('${escapeHtml(id)}')">Console</button>
          <button class="btn btn-ghost" style="height:28px;" onclick="serverOpenFolder('${escapeHtml(id)}')">Open Folder</button>
          <div style="margin-left:auto;display:flex;align-items:center;gap:6px;">
            <span style="font-size:10px;font-family:var(--mono);color:var(--t4);">Players</span>
            <input class="input" id="my-srv-players-${safeId}" type="number" min="0" max="${Number(row.maxPlayers || 0)}" value="${Number(row.playersOnline || 0)}" style="width:68px;height:28px;padding:0 8px;">
            <button class="btn btn-ghost" style="height:28px;padding:0 8px;font-size:10px;" onclick="updateServerPlayers('${escapeHtml(id)}')">Apply</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectServerDeployment(deploymentId) {
  SERVER_SELECTED_DEPLOYMENT_ID = String(deploymentId || '').trim();
  renderServerManagerList(SERVER_DEPLOYMENTS_CACHE);
  syncServerConnectionFromSelected();
}

async function refreshServerDeployments(preferredId) {
  const res = await invokeBackend('list_deployments');
  if (!res.ok) {
    return;
  }
  const rows = Array.isArray(res.data) ? res.data : [];
  SERVER_DEPLOYMENTS_CACHE = rows;
  if (preferredId) {
    SERVER_SELECTED_DEPLOYMENT_ID = String(preferredId);
  }
  if (!SERVER_SELECTED_DEPLOYMENT_ID && rows.length > 0) {
    SERVER_SELECTED_DEPLOYMENT_ID = String(rows[0].deploymentId || '');
  }
  if (SERVER_SELECTED_DEPLOYMENT_ID) {
    const exists = rows.some((row) => String(row.deploymentId || '') === String(SERVER_SELECTED_DEPLOYMENT_ID));
    if (!exists) SERVER_SELECTED_DEPLOYMENT_ID = rows.length ? String(rows[0].deploymentId || '') : '';
  }
  renderServerManagerList(rows);
  renderMyServersPage(rows);
  syncServerConnectionFromSelected();
  maybeShowServerShutdownWarning(rows);
}

function startServerManagerPolling() {
  if (SERVER_MANAGER_POLL) return;
  SERVER_MANAGER_POLL = setInterval(() => {
    void refreshServerDeployments();
  }, 2000);
}

async function stopStopOnCloseDeployments() {
  const res = await invokeBackend('list_deployments');
  if (!res.ok) return;
  const rows = Array.isArray(res.data) ? res.data : [];
  const targets = rows.filter((row) => row && row.running && String(row.runtimeMode || '') === 'stop_on_close');
  for (let i = 0; i < targets.length; i++) {
    const row = targets[i];
    // eslint-disable-next-line no-await-in-loop
    await invokeBackend('stop_deployment', { request: { deploymentId: row.deploymentId } });
  }
}

async function serverStart(deploymentId) {
  const res = await invokeBackend('start_deployment', { request: { deploymentId } });
  if (!res.ok) {
    showToast('!', 'Start failed', formatBackendError(res.error, 'Could not start server'));
    return;
  }
  showToast('OK', 'Server started', String(res.data && res.data.name || 'Server') + ' is running');
  await refreshServerDeployments(deploymentId);
}

async function serverStop(deploymentId) {
  const res = await invokeBackend('stop_deployment', { request: { deploymentId } });
  if (!res.ok) {
    showToast('!', 'Stop failed', formatBackendError(res.error, 'Could not stop server'));
    return;
  }
  showToast('OK', 'Server stopped', String(res.data && res.data.name || 'Server') + ' stopped');
  await refreshServerDeployments(deploymentId);
}

async function serverRestart(deploymentId) {
  const res = await invokeBackend('restart_deployment', { request: { deploymentId } });
  if (!res.ok) {
    showToast('!', 'Restart failed', formatBackendError(res.error, 'Could not restart server'));
    return;
  }
  showToast('OK', 'Server restarted', String(res.data && res.data.name || 'Server') + ' restarted');
  await refreshServerDeployments(deploymentId);
}

async function serverOpenFolder(deploymentId) {
  const res = await invokeBackend('open_deployment_directory', { request: { deploymentId } });
  if (!res.ok) {
    showToast('!', 'Open failed', formatBackendError(res.error, 'Could not open server folder'));
    return;
  }
  showToast('OK', 'Opened', 'Server folder opened');
}

async function serverConsole(deploymentId) {
  const res = await invokeBackend('open_deployment_terminal', { request: { deploymentId } });
  if (!res.ok) {
    showToast('!', 'Console failed', formatBackendError(res.error, 'Could not open server terminal'));
    return;
  }
  showToast('OK', 'Console opened', 'Server terminal opened');
}

async function copyCurrentServerJoinCode() {
  const selected = getSelectedServerDeployment();
  const code = selected ? String(selected.joinCode || '').trim() : '';
  if (!code) {
    showToast('!', 'No code', 'Deploy a server first');
    return;
  }
  try {
    await navigator.clipboard.writeText(code);
    showToast('OK', 'Copied', 'Join code copied');
  } catch (_err) {
    showToast('!', 'Copy failed', 'Clipboard access denied');
  }
}

async function regenerateCurrentServerJoinCode() {
  const selected = getSelectedServerDeployment();
  if (!selected || !selected.deploymentId) {
    showToast('!', 'No server', 'Deploy/select a server first');
    return;
  }
  await regenerateServerJoinCode(selected.deploymentId);
}

async function resolveJoinCodeFromInput() {
  const input = document.getElementById('join-code-input');
  const code = String(input && input.value ? input.value : '').trim().toUpperCase();
  if (!code) {
    showToast('!', 'Missing code', 'Enter a join code first');
    return;
  }
  const res = await invokeBackend('resolve_join_code', { request: { joinCode: code } });
  if (!res.ok) {
    showToast('!', 'Code not found', formatBackendError(res.error, 'Could not resolve this code'));
    return;
  }
  const row = res.data || {};
  const bestAddress = row.publicSubdomain || row.publicAddress || row.lanAddress || row.localAddress || '-';
  showToast('OK', 'Code resolved', String(row.name || 'Server') + ' -> ' + String(bestAddress));
}

function applyServerRecommendation(recommended) {
  if (!recommended || typeof recommended !== 'object') return;
  const typeEl = document.getElementById('srv-type');
  const ramEl = document.getElementById('srv-ram');
  const ramValEl = document.getElementById('srv-ram-val');
  if (typeEl && recommended.serverType) {
    typeEl.value = String(recommended.serverType);
    updateSrvType(typeEl.value);
  }
  if (ramEl && Number.isFinite(Number(recommended.ramGb))) {
    const value = Math.max(1, Math.min(16, Number(recommended.ramGb)));
    ramEl.value = String(value);
    if (ramValEl) ramValEl.textContent = value + ' GB';
  }
}

async function analyzeServerHost() {
  const resultEl = document.getElementById('srv-analyze-result');
  if (resultEl) {
    resultEl.style.display = '';
    resultEl.innerHTML = '<div style="font-size:10.5px;font-family:var(--mono);color:var(--t3);">Analyzing hardware...</div>';
  }
  const res = await invokeBackend('analyze_server_host');
  if (!res.ok) {
    if (resultEl) {
      resultEl.innerHTML = '<div style="font-size:10.5px;font-family:var(--mono);color:#774444;">Analyze failed</div>';
    }
    showToast('!', 'Analyze failed', formatBackendError(res.error, 'Could not analyze this PC'));
    return;
  }
  const data = res.data || {};
  if (resultEl) {
    const rec = data.recommended || {};
    resultEl.innerHTML = `
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:6px;">CPU ${Number(data.cpuCores || 0)} cores | RAM ${Number(data.totalRamGb || 0)} GB | Disk ${Number(data.diskFreeGb || 0)} GB free | Java ${data.javaDetected ? (escapeHtml(String(data.javaVersion || 'Detected'))) : 'Missing'}</div>
      <div style="font-size:11px;font-family:var(--mono);color:var(--t2);margin-bottom:6px;">
        Recommended: ${escapeHtml(formatServerTypeLabel(rec.serverType))}, ${Number(rec.ramGb || 0)}GB, players ${escapeHtml(String(rec.players || '-'))}, plugins ${escapeHtml(String(rec.plugins || '-'))}, mods ${escapeHtml(String(rec.mods || '-'))}
      </div>
      <button class="btn btn-ghost" style="height:26px;font-size:10.5px;" onclick='applyServerRecommendation(${JSON.stringify(data.recommended || {})})'>Apply Recommended Settings</button>
    `;
  }
  showToast('OK', 'Analysis complete', 'Recommended setup generated');
}

function toggleSrvAdd(btn, name) {
  const added = /\bAdded\b/i.test(btn.textContent || '');
  if (!added) {
    btn.textContent = 'Added';
    btn.style.borderColor = 'var(--b3)';
    btn.style.color = 'var(--t3)';
    srvAddedPlugins.push(name);
  } else {
    btn.textContent = '+ Add';
    btn.style.borderColor = 'var(--b2)';
    btn.style.color = 'var(--t2)';
    srvAddedPlugins = srvAddedPlugins.filter((p) => p !== name);
  }
  const pp = document.getElementById('prev-plugins');
  if (pp) {
    pp.innerHTML = srvAddedPlugins.length
      ? srvAddedPlugins.map((p) => '<div style="margin-bottom:3px;">- ' + p + '</div>').join('')
      : 'None yet';
  }
}

async function startServerDeploy() {
  const name = (document.getElementById('srv-name') || {}).value || 'My Server';
  const versionEl = document.getElementById('srv-version');
  const typeEl = document.getElementById('srv-type');
  const ramEl = document.getElementById('srv-ram');
  const portEl = document.getElementById('srv-port');
  const maxPlayersEl = document.getElementById('srv-max-players');
  const motdEl = document.getElementById('srv-motd');
  const runtimeModeEl = document.getElementById('srv-runtime-mode');
  const idleEnabledEl = document.getElementById('srv-idle-enabled');
  const idleMinutesEl = document.getElementById('srv-idle-minutes');
  const subdomainEl = document.getElementById('srv-public-subdomain');
  const deployBtn = document.getElementById('srv-launch-btn');
  const hostEl = document.querySelector('.srv-host-card.selected');
  const hostLabel = hostEl ? hostEl.querySelector('div > div:first-child') : null;
  const port = Number(portEl && portEl.value ? portEl.value : 25565);
  if (!Number.isFinite(port) || port < 1 || port > 65535) {
    showToast('!', 'Invalid port', 'Port must be between 1 and 65535');
    return;
  }
  const maxPlayers = Number(maxPlayersEl && maxPlayersEl.value ? maxPlayersEl.value : 20);
  const request = {
    name,
    version: versionEl ? versionEl.value : '1.21.4',
    serverType: typeEl ? typeEl.value : 'vanilla',
    ramGb: ramEl ? Number(ramEl.value) : 4,
    host: hostLabel ? hostLabel.textContent.trim() : 'This Computer',
    port,
    maxPlayers: Number.isFinite(maxPlayers) ? Math.max(1, Math.min(200, maxPlayers)) : 20,
    motd: motdEl ? String(motdEl.value || '').trim() : 'A Minecraft Server',
    runtimeMode: runtimeModeEl ? runtimeModeEl.value : 'stop_on_close',
    idleShutdownEnabled: !!(idleEnabledEl && idleEnabledEl.classList.contains('on')),
    idleShutdownMinutes: Number(idleMinutesEl && idleMinutesEl.value ? idleMinutesEl.value : 10),
    publicSubdomain: subdomainEl ? String(subdomainEl.value || '').trim() : '',
  };

  let statusEl = document.getElementById('srv-deploy-status');
  if (!statusEl && deployBtn && deployBtn.parentElement) {
    statusEl = document.createElement('div');
    statusEl.id = 'srv-deploy-status';
    statusEl.style.marginTop = '8px';
    statusEl.style.fontSize = '10px';
    statusEl.style.fontFamily = 'var(--mono)';
    statusEl.style.color = 'var(--t4)';
    statusEl.style.textAlign = 'center';
    deployBtn.parentElement.insertBefore(statusEl, deployBtn.nextSibling);
  }

  if (deployBtn) {
    deployBtn.disabled = true;
    deployBtn.style.background = 'var(--s4)';
    deployBtn.style.color = 'var(--t2)';
    deployBtn.style.cursor = 'default';
    deployBtn.innerHTML = '<i data-lucide="loader-circle" width="15" height="15"></i> Deploying... 0%';
  }
  if (statusEl) statusEl.textContent = 'Initializing deployment...';
  showToast('*', 'Deploy started', name + ' deployment started');
  const phases = [
    [20, 'Preparing local server files...'],
    [48, 'Applying runtime settings...'],
    [72, 'Generating join code and addresses...'],
  ];
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    if (deployBtn) {
      deployBtn.innerHTML = '<i data-lucide="loader-circle" width="15" height="15"></i> Deploying... ' + String(phase[0]) + '%';
    }
    if (statusEl) statusEl.textContent = String(phase[1]);
    lucide.createIcons();
    // eslint-disable-next-line no-await-in-loop
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  const res = await invokeBackend('deploy_server', { request });
  if (!res.ok) {
    if (deployBtn) {
      deployBtn.disabled = false;
      deployBtn.style.background = 'var(--t1)';
      deployBtn.style.color = '#000';
      deployBtn.style.cursor = 'pointer';
      deployBtn.innerHTML = '<i data-lucide="server" width="15" height="15"></i> Deploy Server';
    }
    if (statusEl) statusEl.textContent = formatBackendError(res.error, 'Deploy failed');
    showToast('!', 'Deploy failed', formatBackendError(res.error, 'Backend rejected server deploy'));
    lucide.createIcons();
    return;
  }

  const deployed = res.data || {};
  if (deployBtn) {
    deployBtn.disabled = false;
    deployBtn.style.background = 'var(--t1)';
    deployBtn.style.color = '#000';
    deployBtn.style.cursor = 'pointer';
    deployBtn.innerHTML = '<i data-lucide="server" width="15" height="15"></i> Deploy Again';
  }
  if (statusEl) statusEl.textContent = 'Server ready on ' + String(deployed.localAddress || ('127.0.0.1:' + String(port)));
  lucide.createIcons();
  showToast('OK', 'Server deployed', String(deployed.name || name) + ' is ready');
  await refreshServerDeployments(deployed.deploymentId || '');
}

