"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function DaisySync() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const t = theme === "system" ? resolvedTheme : theme
    if (!t) return
    document.documentElement.setAttribute("data-theme", t)
  }, [theme, resolvedTheme])

  return null
}