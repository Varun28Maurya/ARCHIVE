import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { paper: "#F5F1E8", ink: "#17191B", oxide: "#9D302B", sand: "#D9D1C3", stone: "#A99D87" }, fontFamily: { display: ["Georgia", "serif"], sans: ["Arial", "sans-serif"] } } },
  plugins: []
};
export default config;
