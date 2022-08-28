import { Theme } from "./interface";
import { colors } from "./colors";

export const whiteTheme: Theme = {
  title: "white",
  colors: {
    aside: {
      header: {
        background: colors.White,
      },
      footer: {
        background: colors.White,
      },
      content: {
        background: colors["Cultured 2"],
      },
    },

    header: {
      background: colors.White,
    },

    progress: {
      progressBackground: colors["Silver"],
    },

    font: colors["Davys Grey"],
    title: colors["Davys Grey 2"],
    contrast: colors.contrast["orange-red-crayola"],
    border: colors["Gainsboro"],
    shadow: colors["Davys Grey 2"],
    primaryBackground: colors.Cultured,
    secondaryBackground: colors.White,
    black: colors.Black,
  },
};

export const darkTheme: Theme = {
  title: "dark",
  colors: {
    aside: {
      header: {
        background: colors["raisin-black"][150],
      },
      footer: {
        background: colors["raisin-black"][150],
      },
      content: {
        background: colors["raisin-black"][200],
      },
    },

    header: {
      background: colors["raisin-black"][150],
    },

    progress: {
      progressBackground: colors["raisin-black"][50],
    },

    font: colors.Silver,
    title: colors.Cultured,
    contrast: colors.contrast["selective-yellow"],
    border: colors["raisin-black"][50],
    shadow: colors["raisin-black"][350],
    primaryBackground: colors["raisin-black"][250],
    secondaryBackground: colors["raisin-black"][200],
    black: colors.Black,
  },
};
