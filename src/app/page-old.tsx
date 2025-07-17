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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Set drawer to be hidden by default on smaller screens, visible on larger screens
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setDrawerOpen(true);
      } else {
        setDrawerOpen(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data
  const servers = [
    { id: 1, name: "Alpha-01", status: "online", cpu: 45, memory: 67, location: "New York" },
    { id: 2, name: "Beta-02", status: "online", cpu: 23, memory: 34, location: "London" },
    { id: 3, name: "Gamma-03", status: "maintenance", cpu: 0, memory: 0, location: "Tokyo" },
    { id: 4, name: "Delta-04", status: "online", cpu: 78, memory: 89, location: "Berlin" },
  ];

  const agents = [
    { id: 1, name: "Agent Shadow", location: "Moscow", mission: "Data Extraction", risk: "high", status: "active" },
    { id: 2, name: "Agent Cipher", location: "Hong Kong", mission: "Surveillance", risk: "medium", status: "standby" },
    { id: 3, name: "Agent Phoenix", location: "Dubai", mission: "Infiltration", risk: "critical", status: "active" },
    { id: 4, name: "Agent Viper", location: "São Paulo", mission: "Counter-Intel", risk: "low", status: "offline" },
  ];

  const operations = [
    { id: 1, name: "Operation Blackout", status: "active", priority: "high", progress: 75, description: "Cyber warfare operation targeting enemy infrastructure" },
    { id: 2, name: "Operation Phantom", status: "completed", priority: "medium", progress: 100, description: "Stealth reconnaissance mission in hostile territory" },
    { id: 3, name: "Operation Nexus", status: "planning", priority: "critical", progress: 15, description: "Major intelligence gathering operation" },
    { id: 4, name: "Operation Echo", status: "on-hold", priority: "low", progress: 60, description: "Communication disruption mission" },
  ];

  const intelligence = [
    { id: 1, title: "Threat Assessment Alpha", location: "Eastern Europe", priority: "high", classification: "top-secret", sources: 12 },
    { id: 2, title: "Economic Analysis Beta", location: "Asia-Pacific", priority: "medium", classification: "classified", sources: 8 },
    { id: 3, title: "Political Instability Report", location: "Middle East", priority: "critical", classification: "top-secret", sources: 25 },
    { id: 4, title: "Cyber Threat Landscape", location: "Global", priority: "high", classification: "secret", sources: 18 },
  ];

  const activityLog = [
    { time: "14:32", event: "Server Alpha-01 backup completed", type: "info" },
    { time: "14:28", event: "Agent Shadow reported in", type: "success" },
    { time: "14:15", event: "Operation Blackout progress updated", type: "info" },
    { time: "14:02", event: "Security breach detected on Gamma-03", type: "error" },
    { time: "13:45", event: "Intelligence report classified", type: "warning" },
  ];

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'low': return 'bg-green-400/15 text-green-400 border-green-400/30';
      case 'medium': return 'bg-yellow-400/15 text-yellow-400 border-yellow-400/30';
      case 'high': return 'bg-orange-400/15 text-orange-400 border-orange-400/30';
      case 'critical': return 'bg-red-400/15 text-red-400 border-red-400/30';
      default: return 'bg-gray-400/15 text-gray-400 border-gray-400/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': case 'active': case 'completed': return 'bg-green-400/15 text-green-400 border-green-400/30';
      case 'maintenance': case 'standby': case 'planning': return 'bg-yellow-400/15 text-yellow-400 border-yellow-400/30';
      case 'offline': case 'on-hold': return 'bg-gray-400/15 text-gray-400 border-gray-400/30';
      default: return 'bg-gray-400/15 text-gray-400 border-gray-400/30';
    }
  };

  const renderSystemOverview = () => (
    <div className="space-y-6">
      {/* Mission Chart - Statistics at top */}
      <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
            <TrendingUp className="w-5 h-5" />
            Mission Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-mono text-green-400 mb-2">47</div>
              <div className="text-cyan-400/70 font-mono text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-red-400 mb-2">3</div>
              <div className="text-cyan-400/70 font-mono text-sm">Failed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-yellow-400 mb-2">12</div>
              <div className="text-cyan-400/70 font-mono text-sm">In Progress</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Servers List */}
        <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
              <Server className="w-5 h-5" />
              Server Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {servers.map((server) => (
                <div key={server.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div>
                      <div className="text-cyan-400 font-mono text-sm">{server.name}</div>
                      <div className="text-cyan-400/50 text-xs font-mono">{server.location}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`font-mono ${getStatusColor(server.status)}`}>
                      {server.status}
                    </Badge>
                    <Badge className="font-mono bg-cyan-400/15 text-cyan-400 border-cyan-400/30">
                      {server.cpu}% CPU
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
              <Activity className="w-5 h-5" />
              Activity Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activityLog.map((log, index) => (
                <div key={index} className="flex items-start gap-3 p-2 bg-black/30 rounded">
                  <div className="text-cyan-400/70 font-mono text-xs mt-1 min-w-[40px]">
                    {log.time}
                  </div>
                  <div className={`text-sm font-mono ${
                    log.type === 'error' ? 'text-red-400' :
                    log.type === 'warning' ? 'text-yellow-400' :
                    log.type === 'success' ? 'text-green-400' : 'text-cyan-400'
                  }`}>
                    {log.event}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAgentsOverview = () => (
    <div className="space-y-6">
      {/* Agent Statistics at top */}
      <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
            <Users className="w-5 h-5" />
            Agent Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-mono text-green-400 mb-2">
                {agents.filter(a => a.status === 'active').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-yellow-400 mb-2">
                {agents.filter(a => a.status === 'standby').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Standby</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-gray-400 mb-2">
                {agents.filter(a => a.status === 'offline').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Offline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-red-400 mb-2">
                {agents.filter(a => a.risk === 'critical').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Critical Risk</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {agents.map((agent) => (
          <Card key={agent.id} className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyan-400 font-mono text-lg">{agent.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Location</span>
                  <Badge className="font-mono bg-cyan-400/15 text-cyan-400 border-cyan-400/30">
                    <MapPin className="w-3 h-3 mr-1" />
                    {agent.location}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Mission</span>
                  <span className="text-cyan-400 font-mono text-sm">{agent.mission}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Risk Level</span>
                  <Badge className={`font-mono ${getRiskColor(agent.risk)}`}>
                    {agent.risk.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Status</span>
                  <Badge className={`font-mono ${getStatusColor(agent.status)}`}>
                    {agent.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderOperations = () => (
    <div className="space-y-6">
      {/* Operations Statistics at top */}
      <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
            <Target className="w-5 h-5" />
            Operations Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-mono text-green-400 mb-2">
                {operations.filter(o => o.status === 'active').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-green-400 mb-2">
                {operations.filter(o => o.status === 'completed').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-yellow-400 mb-2">
                {operations.filter(o => o.status === 'planning').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-red-400 mb-2">
                {operations.filter(o => o.priority === 'critical').length}
              </div>
              <div className="text-cyan-400/70 font-mono text-sm">Critical Priority</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {operations.map((operation) => (
          <Dialog key={operation.id}>
            <DialogTrigger asChild>
              <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md cursor-pointer hover:bg-black/70 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-cyan-400 font-mono text-lg">{operation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400/70 font-mono">Status</span>
                      <Badge className={`font-mono ${getStatusColor(operation.status)}`}>
                        {operation.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400/70 font-mono">Priority</span>
                      <Badge className={`font-mono ${getRiskColor(operation.priority)}`}>
                        {operation.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400/70 font-mono">Progress</span>
                        <span className="text-cyan-400 font-mono text-sm">{operation.progress}%</span>
                      </div>
                      <Progress value={operation.progress} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-black/95 border-cyan-400/20 text-cyan-400">
              <DialogHeader>
                <DialogTitle className="text-cyan-400 font-mono text-xl">{operation.name}</DialogTitle>
                <DialogDescription className="text-cyan-400/70 font-mono">
                  {operation.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-cyan-400/70 font-mono text-sm">Status</span>
                    <Badge className={`font-mono ${getStatusColor(operation.status)} ml-2`}>
                      {operation.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-cyan-400/70 font-mono text-sm">Priority</span>
                    <Badge className={`font-mono ${getRiskColor(operation.priority)} ml-2`}>
                      {operation.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div>
                  <span className="text-cyan-400/70 font-mono text-sm">Progress: {operation.progress}%</span>
                  <Progress value={operation.progress} className="h-3 mt-2" />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );

  const renderIntelligence = () => (
    <div className="space-y-6">
      {/* Intelligence Stats at top */}
      <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono">
            <FileText className="w-5 h-5" />
            Intelligence Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-mono text-cyan-400 mb-2">247</div>
              <div className="text-cyan-400/70 font-mono text-sm">Total Documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-green-400 mb-2">63</div>
              <div className="text-cyan-400/70 font-mono text-sm">Active Sources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-yellow-400 mb-2">18</div>
              <div className="text-cyan-400/70 font-mono text-sm">Pending Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-red-400 mb-2">5</div>
              <div className="text-cyan-400/70 font-mono text-sm">High Priority</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {intelligence.map((report) => (
          <Card key={report.id} className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyan-400 font-mono text-lg">{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Location</span>
                  <Badge className="font-mono bg-cyan-400/15 text-cyan-400 border-cyan-400/30">
                    <Globe className="w-3 h-3 mr-1" />
                    {report.location}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Priority</span>
                  <Badge className={`font-mono ${getRiskColor(report.priority)}`}>
                    {report.priority.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Classification</span>
                  <Badge className="font-mono bg-red-400/15 text-red-400 border-red-400/30">
                    <Lock className="w-3 h-3 mr-1" />
                    {report.classification.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/70 font-mono">Sources</span>
                  <span className="text-cyan-400 font-mono text-sm">{report.sources}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'system-overview': return renderSystemOverview();
      case 'agents-overview': return renderAgentsOverview();
      case 'operations': return renderOperations();
      case 'intelligence': return renderIntelligence();
      default: return renderSystemOverview();
    }
  };
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,rgb(55,65,81)_0%,rgb(17,24,39)_50%,rgb(0,0,0)_100%)]">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Menu Button */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="hover:bg-black/20 border-cyan-400/10 lg:hidden"
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                <Menu className="w-5 h-5 text-cyan-400" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div className="text-2xl font-bold font-mono">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    NEURO
                  </span>
                  <span className="text-white">CORP</span>
                </div>
              </div>
            </div>

            {/* User Profile & Sign Out */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-cyan-400/30 text-cyan-400 hidden sm:block font-mono">
                <Zap className="w-3 h-3 mr-1" />
                ONLINE
              </Badge>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2 hover:bg-cyan-400/10 border-cyan-400/10">
                    <Avatar className="w-8 h-8 border-2 border-cyan-400/30">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/95 border-cyan-400/10 text-cyan-400" align="end">
                  <DropdownMenuLabel className="text-cyan-300 font-mono">
                    John Doe
                    <div className="text-xs text-cyan-400/70 font-normal font-mono">john.doe@neurocorp.com</div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-cyan-400/10" />
                  <DropdownMenuItem className="hover:bg-cyan-400/10 focus:bg-cyan-400/10">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-cyan-400/10 focus:bg-cyan-400/10">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-cyan-400/10" />
                  <DropdownMenuItem className="hover:bg-red-400/10 focus:bg-red-400/10 text-red-400">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className={`relative z-10 bg-black/60 border-r border-cyan-400/20 backdrop-blur-md transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-80'
        } ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } fixed lg:relative h-[calc(100vh-73px)] lg:h-auto`}>
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              {!sidebarCollapsed && (
                <div>
                  <h2 className="text-cyan-400 font-mono text-xl mb-2">Command Center</h2>
                  <p className="text-cyan-400/70 font-mono text-sm">Mission Control Dashboard</p>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-black/20 border-cyan-400/10 hidden lg:flex"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                ) : (
                  <ChevronLeft className="w-4 h-4 text-cyan-400" />
                )}
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Server Status Widget */}
              {!sidebarCollapsed && (
                <Card className="bg-black/60 border-cyan-400/20 backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-cyan-400 flex items-center gap-2 font-mono text-sm">
                      <Server className="w-4 h-4" />
                      Server Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400/70 font-mono text-xs">Online</span>
                        <Badge className="bg-green-400/15 text-green-400 border-green-400/30 font-mono text-xs">
                          {servers.filter(s => s.status === 'online').length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400/70 font-mono text-xs">Maintenance</span>
                        <Badge className="bg-yellow-400/15 text-yellow-400 border-yellow-400/30 font-mono text-xs">
                          {servers.filter(s => s.status === 'maintenance').length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400/70 font-mono text-xs">Avg CPU</span>
                        <span className="text-cyan-400 font-mono text-xs">
                          {Math.round(servers.reduce((acc, s) => acc + s.cpu, 0) / servers.length)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Menu */}
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start'} font-mono hover:bg-black/20 ${
                    activeSection === 'system-overview' ? 'bg-cyan-400/10 text-cyan-300' : 'text-cyan-400'
                  }`}
                  onClick={() => setActiveSection('system-overview')}
                  title={sidebarCollapsed ? 'System Overview' : ''}
                >
                  <Database className="w-4 h-4 mr-2" />
                  {!sidebarCollapsed && 'System Overview'}
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start'} font-mono hover:bg-black/20 ${
                    activeSection === 'agents-overview' ? 'bg-cyan-400/10 text-cyan-300' : 'text-cyan-400'
                  }`}
                  onClick={() => setActiveSection('agents-overview')}
                  title={sidebarCollapsed ? 'Agents Overview' : ''}
                >
                  <Users className="w-4 h-4 mr-2" />
                  {!sidebarCollapsed && 'Agents Overview'}
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start'} font-mono hover:bg-black/20 ${
                    activeSection === 'operations' ? 'bg-cyan-400/10 text-cyan-300' : 'text-cyan-400'
                  }`}
                  onClick={() => setActiveSection('operations')}
                  title={sidebarCollapsed ? 'Operations' : ''}
                >
                  <Target className="w-4 h-4 mr-2" />
                  {!sidebarCollapsed && 'Operations'}
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start'} font-mono hover:bg-black/20 ${
                    activeSection === 'intelligence' ? 'bg-cyan-400/10 text-cyan-300' : 'text-cyan-400'
                  }`}
                  onClick={() => setActiveSection('intelligence')}
                  title={sidebarCollapsed ? 'Intelligence Reports' : ''}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {!sidebarCollapsed && 'Intelligence Reports'}
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Dashboard Content */}
        <main className="relative z-10 flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">NEUROCORP</span> Dashboard
            </h1>
            <p className="text-cyan-400/70 text-lg font-mono">
              {activeSection === 'system-overview' && 'System Command Center - All systems operational'}
              {activeSection === 'agents-overview' && 'Agent Management - Field operatives monitoring'}
              {activeSection === 'operations' && 'Operations Command - Mission control center'}
              {activeSection === 'intelligence' && 'Intelligence Division - Classified reports analysis'}
            </p>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </main>
      </div>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-5 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
}
