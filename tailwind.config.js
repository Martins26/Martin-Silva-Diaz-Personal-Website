/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "1.2", fontWeight: "700" }],
        heading: ["var(--text-heading)", { lineHeight: "1.35", fontWeight: "600" }],
        subheading: ["var(--text-subheading)", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        caption: ["var(--text-caption)", { lineHeight: "1.5" }],
      },
    },
  },
};
