/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haven: {
          navy: '#0F172A',
          slate: '#1E293B',
          gold: '#D4AF37',
          'gold-hover': '#B89628',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          text: '#475569',
          heading: '#0F172A',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'gold-glow': '0 10px 25px -5px rgba(212, 175, 55, 0.25)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
