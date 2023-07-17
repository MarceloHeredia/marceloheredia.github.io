import React, { createContext, type PropsWithChildren, useMemo, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({
  isDarkMode: true,
  toggleColorMode: () => {},
});

export default function ColorModeProvider(props: PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(useMediaQuery('(prefers-color-scheme: dark)'));

  const colorMode = useMemo(
    () => ({
      isDarkMode: isDarkMode,
      toggleColorMode: () => {
        setIsDarkMode((prevMode) => !prevMode);
      },
    }), [isDarkMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}