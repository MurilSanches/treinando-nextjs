'use client'

import React, { createContext, useContext, useState } from 'react'

type TSidebarContext = {
  isOpen: boolean
  toggleSidebar: () => void
}

const SidebarDefaultValues: TSidebarContext = {
  isOpen: true,
  toggleSidebar: () => {}
}

// Crie o contexto
const SidebarContext = createContext<TSidebarContext>(SidebarDefaultValues)

// Componente Provedor do contexto
export const SidebarProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const value = {
    isOpen,
    toggleSidebar
  }

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

// Hook personalizado para acessar o contexto
export const useSidebar = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar deve ser usado dentro de um SidebarProvider')
  }

  return context
}
