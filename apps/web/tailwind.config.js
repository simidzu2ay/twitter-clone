module.exports = {
  ...require("tailwindconfig/tailwind.config.cjs"),
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "node_modules/ui/**/*.{ts,tsx}",
  ],
};
