'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
          borderRadius: 'calc(var(--radius) - 2px)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          style: {
            background: 'var(--color-primary)',
            color: 'var(--color-primary-foreground)',
          },
          iconTheme: {
            primary: 'var(--color-accent)',
            secondary: 'var(--color-primary-foreground)',
          },
        },
        error: {
          style: {
            background: 'var(--color-destructive)',
            color: 'var(--color-destructive-foreground)',
          },
          iconTheme: {
            primary: 'var(--color-primary-foreground)',
            secondary: 'var(--color-destructive)',
          },
        },
      }}
    />
  )
}
