import type { Config } from "tailwindcss";

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // Áp dụng màu chủ đạo từ biến
        secondary: "var(--secondary-color)", // Áp dụng màu phụ từ biến
        background: "var(--background-color)", // Màu nền
        foreground: "var(--font-color)", // Màu chữ
        footer: "var(--footer-bg)", // Màu nền footer
      },
      borderRadius: {
        button: "var(--button-radius)", // Border radius cho button
      },
      padding: {
        button: "var(--button-padding)", // Padding cho button
      },
    },
  },
  plugins: [],
} satisfies Config;
