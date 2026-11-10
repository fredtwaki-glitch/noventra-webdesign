import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { navy: "#071426", blue: "#397BFF", violet: "#8B5CF6" } } }, plugins: [] };
export default config;
