import { createContext, useState, type ReactNode } from 'react'

interface NavigationContextType {
  isOpen: boolean
  setMenuOpen: (open: boolean) => void
  closeMenu: () => void
  activeSection: string
}

export const NavigationContext = createContext<NavigationContextType>({
  isOpen: false,
  setMenuOpen: () => {},
  closeMenu: () => {},
  activeSection: '',
})

interface NavigationProviderProps {
  children: ReactNode
  activeSection: string
}

export function NavigationProvider({ children, activeSection }: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const setMenuOpen = (open: boolean) => setIsOpen(open)
  const closeMenu = () => setIsOpen(false)

  return (
    <NavigationContext.Provider
      value={{ isOpen, setMenuOpen, closeMenu, activeSection }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
