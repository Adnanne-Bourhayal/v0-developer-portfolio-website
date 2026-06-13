"use client"

import { createContext, useContext, type ReactNode } from "react"
import { getTranslation } from "./i18n"

type LanguageContextType = {
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageContext.Provider value={{ t: getTranslation("en") }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
