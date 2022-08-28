export interface Theme {
  title: string;
  colors: {
    aside: {
      header: {
        background: string;
      };
      footer: {
        background: string;
      };
      content: {
        background: string;
      };
    };

    header: {
      background: string;
    };

    progress: {
      progressBackground: string;
    };

    font: string;
    title: string;
    contrast: string;
    border: string;
    shadow: string;
    primaryBackground: string;
    secondaryBackground: string;
    black: string;
  };
}
