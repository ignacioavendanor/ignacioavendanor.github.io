import { createContext, useState, type ReactNode } from 'react'

interface NavigationContextType {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
  activeSection: string
}

export const NavigationContext = createContext<NavigationContextType>({
  isOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
  activeSection: '',
})

interface NavigationProviderProps {
  children: ReactNode
  activeSection: string
}

export function NavigationProvider({ children, activeSection }: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <NavigationContext.Provider value={{ isOpen, toggleMenu, closeMenu, activeSection }}>
      {children}
    </NavigationContext.Provider>
  )
}
