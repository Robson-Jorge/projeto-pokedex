import React from 'react';
import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/theme-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GoogleFontLoader from 'react-google-font-loader';

const queryClient = new QueryClient()

export function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GoogleFontLoader
            fonts={[
              {
                font: "Acme",
                weights: [400, "400i"],
              },
              {
                font: "Roboto",
                weights: [400, "400i"],
              },
              {
                font: "Gloock",
                weights: [400, 700],
              },
            ]}
            subsets={["cyrillic-ext", "greek"]}
          />
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
