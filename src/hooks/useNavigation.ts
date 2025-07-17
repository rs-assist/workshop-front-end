import { useState } from 'react';
import { ActiveSection } from '@/types';

export function useNavigation() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('system-overview');

  const navigateToSection = (section: ActiveSection) => {
    setActiveSection(section);
  };

  return {
    activeSection,
    navigateToSection,
  };
}
