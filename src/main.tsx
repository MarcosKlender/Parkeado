import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient()

import { Toaster } from 'sonner';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster richColors />

      {
        process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )
      }
    </QueryClientProvider>
  </StrictMode>,
)