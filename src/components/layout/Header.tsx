import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronLeft, ChevronRight, Menu, User } from 'lucide-react';

interface HeaderProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

export function Header({ sidebarCollapsed, toggleSidebar }: HeaderProps) {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-cyan-400 hover:bg-cyan-400/20"
          >
            {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
            NEUROCORP
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback className="bg-cyan-400/20 text-cyan-400">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black/80 backdrop-blur-sm border-gray-800" align="end">
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800/50">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800/50">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800/50">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
