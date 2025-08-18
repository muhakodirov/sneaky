"use client"
import { createContext, useContext, ReactNode, useState } from 'react';

type ContextType = {
  isOpen: boolean,
  toggleIsOpen: () => void
}

const SidebarContext = createContext<ContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error(
      "useSidebar muss innerhalb eines <SidebarProvider> verwendet werden."
    );
  }
  return context;
}
