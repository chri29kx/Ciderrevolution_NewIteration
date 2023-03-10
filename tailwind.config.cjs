module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(https://bertilserveau.dk/laesmere.svg) 0 0, pointer",
      },
      colors: {
        red600: "#874427",
        red500: "#9B4925",
        red400: "#D1541D",
        red300: "#D4764C",
        red200: "#E5CCC1",
        orange600: "#997120",
        orange500: "#CE9117",
        orange400: "#EEC167",
        orange300: "#EED9AF",
        orange200: "#EED9AF",
        beige600: "#E3C388",
        beige500: "#F1DCB5",
        beige400: "#FFF5E2",
        beige300: "#FFFCF6",
        hvid: "#FFFFFF",
        green600: "#2E3931",
        green500: "#38473C",
        green400: "#435A49",
        green300: "#4F7359",
        green200: "#64876E",
        green100: "#91A797",
        lilac600: "#695092",
        lilac500: "#9174C3",
        lilac400: "#B8A1DF",
        lilac300: "#CEC0E7",
        lilac200: "#E6DFF1",
        lilac100: "#F8F6FC",
        blue600: "#162B41",
        blue500: "#1D3A57",
        blue400: "#24486D",
        blue300: "#4B739C",
        blue200: "#7593B1",
        blue100: "#9BB7D2",
        grey600: "#3E4349",
        grey500: "#54595F",
        grey400: "#6D7680",
        grey300: "#9A9FA5",
        grey200: "#B9B9B9",
        grey100: "#D9D9D9",
        black600: "#1A1A1A",
        black500: "#333333",
      },
    },
    fontSize: {
      deskH1: ["4.209rem", { lineHeight: "125%" }],
      deskH2: ["3.158rem", { lineHeight: "125%" }],
      deskH3: ["2.369rem", { lineHeight: "125%" }],
      deskH4: ["1.125rem", { lineHeight: "125%" }],
      deskH5: ["1rem", { lineHeight: "125%" }],
      deskP: ["1rem", { lineHeight: "125%" }],
      xscopy: ["0.75rem", { lineHeight: "125%" }],
      deskButtonPrimary: ["2rem", { lineHeight: "2.063rem" }],
      deskButtonSecondary: ["1rem", { lineHeight: "100%" }],
      mobileH1: ["2rem", { lineHeight: "125%" }],
      mobileH2: ["1.75rem", { lineHeight: "125%" }],
      mobileH3: ["1.625rem", { lineHeight: "125%" }],
      mobileH4: ["1.25rem", { lineHeight: "125%" }],
      mobileH5: ["1.125rem", { lineHeight: "125%" }],
      mobileP: ["1.125rem", { lineHeight: "1.875rem" }],
      link: ["1rem", { lineHeight: "125%" }],
      mobileButtonPrimary: ["1.25rem", { lineHeight: "2.063rem" }],
    },
    spacing: {
      spaceMarginx: "6.25rem",
      spaceMarginTop: "5rem",
      space10: "0.625rem",
      space15: "0.9375rem",
      space20: "1.25rem",
      space25: "1.5rem",
      space30: "1.875rem",
      space40: "2.5rem",
      space50: "3.5rem",
      space80: "5rem",
      space90: "5.5rem",
      space160: "5rem",
    },
    fontFamily: {
      button: "Roboto",
      text: "Poppins, sans-serif",
      links: "Inter', sans-serif",
    },
    borderRadius: {
      cornerRound: "10px",
    },
  },
  plugins: [],
};
