module.exports = {
  tailwindConfig: "./tailwind.config.cjs",
  plugins: [
    // Use a dynamic import for the prettier-plugin-tailwindcss
    (async () => {
      const prettierPluginTailwindcss = await import('prettier-plugin-tailwindcss/dist/index.mjs');
      return prettierPluginTailwindcss;
    })(),
  ],
};
