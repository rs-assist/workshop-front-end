# ⚡ Cyberpunk Company Dashboard Website – Full Markdown Structure

---

## 🌐 General Layout

### Sidebar Navigation (Drawer)
- Located on **left side**
- **Shown by default** on large screens
- **Toggle button** on small screens
- Contains:
  - Navigation links to all pages
  - Widget with overall server status (uptime, warnings, system count)

### Top Bar
- 🖖 Company Logo (clickable – returns to Main Page)
- 👤 Username and Profile Button (top right)
- Dark Color Theme with neon highlights

### Global UI Rules
- Key statistics (system, agents, uptime) at the **top of each page**
- Progress bars with readable colors
- Scrollable pages
- Sections scroll independently if content is long
- Responsive layout (mobile-friendly)

---

## 🏠 Main Page

### Sections:
- **Notifications** (agents & missions)
- **Active Missions**
  - Mission name
  - Progress details
  - Number of agents involved
- **Active Agents**
  - Bold agent name
  - Agent info: rank, mission, mission update

---

## 🧑‍💻 Agents Page

### Top Features:
- 🔍 Search Bar
- 🎯 Filter Options
- 📊 Stats:
  - Total agents
  - Agent Status: active, compromised, in training

### Agent Card Format:
| Agent ID | Codename | Status | Location | Active Mission | Rank | Mission Update |
|----------|----------|--------|----------|----------------|------|----------------|
| A-001    | Viper    | Active | Berlin   | Ghost Protocol | Elite| Infiltrating   |
| ...      | ...      | ...    | ...      | ...            | ...  | ...            |

- ➕ `Add Agent` Button: Opens form to input full agent details

---

## ⚔️ Operations Page

### Features:
- 📋 List of Operations (Card Layout)
  - Clicking card opens **modal** with full mission info

### Mission Status:
- 🔄 Active
- ✅ Completed
- ❌ Compromised

### Top Stats:
- Total Operations
- 📈 Success Rate Chart

---

## 🧠 Intelligence Reports Page

### Display:
- 🔍 Search Reports
- 🎯 Filter Reports
- 📋 List of Reports

### Report Details:
| Location | Priority | Secret Level | Source | Summary |
|----------|----------|--------------|--------|---------|
| Tokyo    | High     | Top Secret   | Agent K| ...     |
| ...      | ...      | ...          | ...    | ...     |

### Stats:
- 📄 Total Documents
- 🛰️ Active Sources
- 🚨 Critical Threats

---

## 💻 Systems Page

### Buttons:
- `System Scan`
- `Maintenance Mode`

### Stats Cards (top of page):
- 🌐 Online Systems
- ⚠️ Warnings
- ⏱️ Average Uptime
- 🔧 Number of Maintenances

### Systems Table:
| Name         | Type        | Status  | Health | CPU | Memory | Storage | Uptime | Location |
|--------------|-------------|---------|--------|-----|--------|---------|--------|----------|
| ExampleSys01 | AI Core     | Active  | 92%    | 67% | 54%    | 72%     | 120h   | Tokyo     |
| ...          | ...         | ...     | ...    | ... | ...    | ...     | ...    | ...       |

---

## 🧬 Visual Suggestions
- Neon accents, digital pixel textures
- Animated modals and transitions
- Hover tooltips on metrics and icons
- Notification bell 🔔 dropdown with recent alerts

---