/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        randomMove1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -20px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "75%": { transform: "translate(10px, -15px)" },
        },
        randomMove2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10px, 10px)  rotate(90deg)" },

          "50%": { transform: "translate(15px, -10px) rotate(-10deg)" },
          "75%": { transform: "translate(-20px, 5px) rotate(180deg)" },
        },
        randomMove3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(30px, 10px)" },
          "50%": { transform: "translate(-15px, -20px)" },
          "75%": { transform: "translate(10px, 20px)" },
        },
        "color-change": {
          "0%": { backgroundColor: "#FF6B6B" },
          "25%": { backgroundColor: "#4ECDC4" },
          "50%": { backgroundColor: "#45B7D1" },
          "75%": { backgroundColor: "#F7DC6F" },
          "100%": { backgroundColor: "#B39DDB" },
        },
        "text-color": {
          "0%": { color: "#FF5F7E" }, // Bright Coral Pink
          "20%": { color: "#FFC371" }, // Light Orange
          "40%": { color: "#9CECFB" }, // Soft Sky Blue
          "60%": { color: "#F3A683" }, // Light Peach
          "80%": { color: "#C4E538" }, // Bright Green
          "100%": { color: "#81ECEC" }, // Pastel Aqua
        },
      },
      animation: {
        random1: "randomMove1 3s infinite ease-in-out",
        random2: "randomMove2 7s infinite ease-in-out",
        random3: "randomMove3 10s infinite ease-in-out",
        color: "color-change 10s infinite",
        TextColor: "text-color 10s infinite ",
      },
    },
  },
  plugins: [],
};
