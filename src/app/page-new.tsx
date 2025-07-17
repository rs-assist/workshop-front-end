"use client";

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { SystemOverview } from '@/components/sections/SystemOverview';
import { AgentsOverview } from '@/components/sections/AgentsOverview';
import { Operations } from '@/components/sections/Operations';
import { Intelligence } from '@/components/sections/Intelligence';
import { useNavigation } from '@/hooks/useNavigation';
import { useSidebar } from '@/hooks/useSidebar';

export default function Dashboard() {
  const { activeSection, navigateToSection } = useNavigation();
  const { sidebarCollapsed, toggleSidebar } = useSidebar();

  const renderContent = () => {
    switch (activeSection) {
      case 'system-overview':
        return <SystemOverview />;
      case 'agents-overview':
        return <AgentsOverview />;
      case 'operations':
        return <Operations />;
      case 'intelligence':
        return <Intelligence />;
      default:
        return <SystemOverview />;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(6,182,212,0.03)_49%,_rgba(6,182,212,0.03)_51%,_transparent_52%)] bg-[length:20px_20px]" />
      
      <div className="relative flex h-full">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        </div>

        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out mt-16`}>
          <Sidebar 
            activeSection={activeSection} 
            navigateToSection={navigateToSection} 
            sidebarCollapsed={sidebarCollapsed} 
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-16">
          <MainContent sidebarCollapsed={sidebarCollapsed}>
            <div className="p-6">
              {renderContent()}
            </div>
          </MainContent>
        </div>
      </div>
    </div>
  );
}
