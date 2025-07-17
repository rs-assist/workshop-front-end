# ⚡ Cyberpunk Company Dashboard Website – Full Markdown Structure

---

NAME: TACTICAL OPS

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










## Design System Principles
# Consistent Visual Language
Use the same typography, spacing, color palette, and interaction patterns across the entire app.

# Component Reusability
Components should be modular, reusable, and visually consistent.

# Minimalist Aesthetic
Prioritize clarity and remove unnecessary visual noise.

# Mobile-First Approach
Design should adapt gracefully to different screen sizes.

# Accessibility First
Designs must meet WCAG 2.1 AA minimum standards.

# Colors
- primary: #f97316
- secondary: #a3a3a3
- text: #ffffff
- background: #000000
- borders: #e5e7eb
- card-backgrounds: #171717
- critical: #ef4444
- warning: #f97316
- standby: #737373
- active: #ffffff

Other colors should be dark-themed.

# Fonts

- font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace

# Elements
Buttons should be primary colored if they are used for confirmation or different actions.
The sidebar buttons should be darker and primary-colored if they are the current page.

Elements that need scrolling should have it.

# Hovering

Small buttons should use the darker primary color on hover.
Larger buttons that are for confirmation or something related should be a darker primary colored.
Other buttons should be darker than their current color. 
Cards should be a gray-er version of the card-background.

# Text
xs text should be at font-size 8
sm text should be at font-size 10
md text should be at font-size 14
lg text should be at font-size 20
xl text should be at font-size 26
2xl text should be at font-size 32
3xl text should be at font-size 48
4xl text should be at font-size 64.

Text should be bold where there are important informations. There is no italic text.

# General layout
One sidebar on the left, containing the pages of the dashboard.
One header on top with user info (sign out, updates, notifications) and their profile.
The page itself. There is NO footer! The header is sticky!

# Icons
Use only icons from lucide-react. They should be consistent.

# Components
Button
Variants: Primary, Secondary, Tertiary
Sizes: Small, Medium, Large
Avoid introducing new button variants without approval

Card
Always include consistent padding and rounded corners
Use for grouping related content

Input Fields
Use consistent styling for text inputs, selects, and textareas
Show validation feedback consistently (red borders, messages)

Modals
Always center on screen, use backdrop
Include a clear title, body content, and primary/secondary actions

Tables & Lists
Consistent column padding
Use alternating row backgrounds only if necessary
Tables should adapt to small screens via horizontal scrolling

# Time & dates
Shrink the times, e.g. 2 min ago and the dates, e.g. Feb 28, 2025

# Important
The design should be responsive. Adjust the text based on the display resolution, make 1920x1080 use the medium layout. The design should be consistent across all pages!


SYSTEMS MONITOR page
In the left page, it should display the title bar (bold) with a short description underneath (with secondary color) and on the same row as the title & description, in the right side, there should be 2 buttons (primary colored) for System scan and Maintanance mode

Underneath, there should be a statistics section with systems online, warnings, avg uptime and the servers where maintanance is on. Use icons as well, on the right side of the cards.

On the content part, there will be multiple cards in a grid layout containing the title of the server, the role of the server (database, primary server, firewall, processing, storage, network, etc), its usage (cpu, memory, storage), the uptime and location. There should be a progress bar with the overall health. Also there should be displayed the current status (Online/Maintanance/Warning)

Operations tab
-> on the top this will have a title on left side -OPERATIONS CENTER- and exactly under -Mission planning and execution oversight- on right side 2 orange-500 buttons New Operation and Mission Brief. Under the buttons and title there will be displayed 4 stats: number of Active OPS, number of completed missions, the number of compromise ( here can use a red-500 color for text ) missions and the succes rate of missions
after that in a grade view can display the operations as example: for name - shadow protocol, mission code OP-OMEGA-001, on right a suggestive icon (use a consistent icon pack), operation staus, actice, critical, planning, completed, high, medium ( by status and dificulty ), a brief description, under will be location, number of agents asisgned, estimated time for completion and a progress bar fill color could be orange-500, each mission will be displayed individualy, on mission hover the outline will be orange-500, on mission press will appear a pop-up with the same description + operation objectives and start date
 
intelligence center tab
->on the top this will have a title on left side -INTELLIGENCE CENTER- and exactly under -Classified reports and threat analysis- on right side 2 orange-500 buttons New rEPORT and Filter.
Under will be a search bar ( if empty will be displayed Search Intelligence reports...) alongside the search bar will be the total of number reports, the number of critical threats( the text color for this will be red-500), the active sources. After that will be displyed (under) a list of Intelligence reports each report will contain name a code -INT_-2025-001, a brief description and some tags like cybercrime, international, and on right side of yhe report will be tags like topsecret, high, verified ( 3 for each ) colered suggestively, location,political status, diplomatic, humit, date, the hover and click actions will be the same as the list from operation tab






**COMMAND CENTER**
For the command center i want to be split in 3 squares on top part and 2 rectangular in the bottom
-first square i want to be with active agents information: i want to have 3 stat with numbers for the first line of the square, these 3 stats to be number of the active agents in missions, undercover agents for investigation and the number of agents in training. I want those numbers to have a font big enough to be chachy. Under those number stats i want to have name of the agent with a little text under with his rank. When i press on the agent name i want to see all information about agent (information which can be seen in agent network when you add a agent)
-second square i want to be an activity log which will show me updates about agent and operation where they are.I want the first information of the activity update to be date and time, little text, i want to be filter from the newest to oldest.Every updates i want to have 2 similar non color, 1 for the box where is an update from agent, and the other one for the mission update. I want the name of the agent or mission on the update text to be bold. I want the update to be like that "Agent/Mission NAME _ ACTION _ LOCATION _ ADITIONAL INFO", this square i want to have a vertical scroll bar.
-third square i want to have a chat, encrypted chat with a theme like a terminal, i want to have on the top part of the square a radar(like in submarine radar where you can see whit a dot from where are the messages send, but you can see the message that was send by pressing on the dot. The bottom part of the square i want to be the messages, and on the bottom bottom  i want to have a bar to send a message with a send botton on the right on the bar
-first rectangle i want be a graphical mission evolution, on the x axe i want to be a time line and on the y axe i want to be the procentage of the mission evolution, i want to be a line chart, when you go with the cursorn on the line to show you a liltle popup on the cursor the percent for that moment
-second rectangle i want to have mission information with a mission name bolted and under the information for that one, if it was succesfuly or not and a round percentage stat of the succesfuly and unsuccesfuly percentage missions
 
 
**AGENT NETWORK**
i want to have here the most infotmation of the agent, i want to find every agent as i can, 
i want to have on the top a bar split in 4, first one i want to have a search bar for the agents based on the name, id , mission. second one is with a numeric stats about active agents with a little text "active agent" and in middle of the box the number of active agent, more bigger and bold. third one to be the numer of compromise agents, with a bad felling vibe design, the last one i want to be the number of the agents in training with a training emoji on the left of the text. When you press on one of these boxes to show you a table with the agents counted in that number.
There should be a table with all of the agents information (agent id, codename, status, location, last seen, missions, risk, actions)
The status, location and last seen should all have an icon attached (dot, pin and timer)
The action icon should be colored related to the status (active - white, standby -gray, compromised - red, training - orange)

The actions column should just have an icon with 3 dots.