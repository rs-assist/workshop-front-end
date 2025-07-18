import { PrismaClient, OperationPriority, Classification, IntelligenceSource, IntelligenceStatus, ThreatLevel } from '../../app/generated/prisma'

export const intelligenceSeeds = [
  {
    title: "Corporate Defense Patterns",
    location: "Neo-Tokyo",
    priority: OperationPriority.high,
    classification: Classification.top_secret,
    sources: 5,
    source: IntelligenceSource.SIGINT,
    date: "2025-07-15",
    status: IntelligenceStatus.verified,
    threat: ThreatLevel.high,
    summary: "Analysis of corporate network defense mechanisms and vulnerabilities",
    tags: JSON.stringify(["network", "corporate", "defense"]),
    displayId: "INT-001"
  },
  {
    title: "Network Vulnerability Report",
    location: "Night City",
    priority: OperationPriority.medium,
    classification: Classification.secret,
    sources: 3,
    source: IntelligenceSource.HUMINT,
    date: "2025-07-14",
    status: IntelligenceStatus.pending,
    threat: ThreatLevel.medium,
    summary: "Comprehensive report on network vulnerabilities in target infrastructure",
    tags: JSON.stringify(["vulnerability", "network", "infrastructure"]),
    displayId: "INT-002"
  },
  {
    title: "Financial Infrastructure Analysis",
    location: "Singapore",
    priority: OperationPriority.critical,
    classification: Classification.top_secret,
    sources: 8,
    source: IntelligenceSource.OSINT,
    date: "2025-07-13",
    status: IntelligenceStatus.verified,
    threat: ThreatLevel.critical,
    summary: "Deep analysis of financial sector infrastructure and security protocols",
    tags: JSON.stringify(["finance", "infrastructure", "security"]),
    displayId: "INT-003"
  },
  {
    title: "Communications Intercept Log",
    location: "Moscow",
    priority: OperationPriority.high,
    classification: Classification.classified,
    sources: 12,
    source: IntelligenceSource.HUMINT,
    date: "2025-07-12",
    status: IntelligenceStatus.active,
    threat: ThreatLevel.high,
    summary: "Intercepted communications revealing operational plans and targets",
    tags: JSON.stringify(["communications", "intercept", "operations"]),
    displayId: "INT-004"
  },
  {
    title: "Cybercrime Network Mapping",
    location: "Berlin",
    priority: OperationPriority.medium,
    classification: Classification.secret,
    sources: 6,
    source: IntelligenceSource.OSINT,
    date: "2025-07-11",
    status: IntelligenceStatus.verified,
    threat: ThreatLevel.medium,
    summary: "Mapping of cybercrime networks and their operational structures",
    tags: JSON.stringify(["cybercrime", "network", "mapping"]),
    displayId: "INT-005"
  },
  {
    title: "Government Database Schema",
    location: "Washington DC",
    priority: OperationPriority.critical,
    classification: Classification.top_secret,
    sources: 4,
    source: IntelligenceSource.HUMINT,
    date: "2025-07-10",
    status: IntelligenceStatus.verified,
    threat: ThreatLevel.critical,
    summary: "Complete database schema and access patterns for government systems",
    tags: JSON.stringify(["government", "database", "schema"]),
    displayId: "INT-006"
  },
  {
    title: "Industrial Espionage Activities",
    location: "Seoul",
    priority: OperationPriority.high,
    classification: Classification.classified,
    sources: 7,
    source: IntelligenceSource.DIPLOMATIC,
    date: "2025-07-09",
    status: IntelligenceStatus.active,
    threat: ThreatLevel.high,
    summary: "Evidence of ongoing industrial espionage targeting tech companies",
    tags: JSON.stringify(["espionage", "industrial", "technology"]),
    displayId: "INT-007"
  },
  {
    title: "Social Engineering Techniques",
    location: "London",
    priority: OperationPriority.low,
    classification: Classification.classified,
    sources: 2,
    source: IntelligenceSource.OSINT,
    date: "2025-07-08",
    status: IntelligenceStatus.pending,
    threat: ThreatLevel.low,
    summary: "Analysis of social engineering methods used in recent attacks",
    tags: JSON.stringify(["social", "engineering", "attacks"]),
    displayId: "INT-008"
  },
  {
    title: "Advanced Persistent Threat Analysis",
    location: "Tel Aviv",
    priority: OperationPriority.critical,
    classification: Classification.top_secret,
    sources: 15,
    source: IntelligenceSource.OSINT,
    date: "2025-07-07",
    status: IntelligenceStatus.verified,
    threat: ThreatLevel.critical,
    summary: "Comprehensive analysis of APT groups and their tactics",
    tags: JSON.stringify(["apt", "threat", "analysis"]),
    displayId: "INT-009"
  },
  {
    title: "Cryptocurrency Transaction Patterns",
    location: "Dubai",
    priority: OperationPriority.medium,
    classification: Classification.secret,
    sources: 9,
    source: IntelligenceSource.DIPLOMATIC,
    date: "2025-07-06",
    status: IntelligenceStatus.active,
    threat: ThreatLevel.medium,
    summary: "Analysis of cryptocurrency flows and money laundering patterns",
    tags: JSON.stringify(["cryptocurrency", "money laundering", "finance"]),
    displayId: "INT-010"
  }
]

export async function seedIntelligence(prisma: PrismaClient) {
  await prisma.intelligence.deleteMany()
  return prisma.intelligence.createMany({ data: intelligenceSeeds })
}
