// Polyfill process and other globals
window.process = {
  env: {
    NODE_ENV: import.meta.env.MODE,
    PUBLIC_URL: import.meta.env.BASE_URL,
  },
};

// Add other CRA-specific globals if needed
window.global = window;
