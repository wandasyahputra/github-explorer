import { useEffect } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const root = window.document.documentElement
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

  const themeListener = (newTheme: MediaQueryListEvent) => {
    root.classList.remove('light', 'dark')
    root.classList.add(newTheme.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    systemTheme.addEventListener('change', themeListener)
    root.classList.remove('light', 'dark')
    const currentTheme = systemTheme.matches ? 'dark' : 'light'
    root.classList.add(currentTheme)
    return () => {
      systemTheme.removeEventListener('change', themeListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export { ThemeProvider }
