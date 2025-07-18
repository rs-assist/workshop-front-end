export interface Agent {
  id: string
  name: string
  status: string
  location: string
  lastSeen: string
  missions: number
  risk: string
}

// Mock data
export const agents: Agent[] = [
  {
    id: "G-078W",
    name: "VENGEFUL SPIRIT",
    status: "active",
    location: "Berlin",
    lastSeen: "2 min ago",
    missions: 47,
    risk: "high",
  },
  {
    id: "G-079X",
    name: "OBSIDIAN SENTINEL",
    status: "standby",
    location: "Tokyo",
    lastSeen: "15 min ago",
    missions: 32,
    risk: "medium",
  },
  {
    id: "G-080Y",
    name: "GHOSTLY FURY",
    status: "active",
    location: "Cairo",
    lastSeen: "1 min ago",
    missions: 63,
    risk: "high",
  },
  {
    id: "G-081Z",
    name: "CURSED REVENANT",
    status: "compromised",
    location: "Moscow",
    lastSeen: "3 hours ago",
    missions: 28,
    risk: "critical",
  },
]
