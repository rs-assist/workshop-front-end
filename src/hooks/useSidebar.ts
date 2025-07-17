import { useState } from 'react';

export function useSidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return {
    sidebarCollapsed,
    toggleSidebar,
  };
}
