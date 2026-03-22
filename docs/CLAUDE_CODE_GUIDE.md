# Developing with Claude Code

This guide explains how to use Claude Code to extend the highway construction simulation.

---

## What is Claude Code?

Claude Code is a command-line tool that runs Claude directly in your terminal, with access to your local files. Unlike chat, it can read, write, and run code autonomously — making it ideal for software development tasks.

---

## Initial Setup

```bash
# 1. Install Node.js (if not already installed)
# https://nodejs.org

# 2. Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# 3. Clone this repo
git clone https://github.com/[you]/highway-sim.git
cd highway-sim

# 4. Launch Claude Code
claude
```

Claude Code will read your project files automatically and understand the codebase.

---

## Recommended Workflow

### Step 1 — Understand the project first

Before making changes, ask Claude Code to summarise what exists:

```
Read the files in this project and give me a summary of how the simulation engine works.
What are the main data structures and how does runPeriod() calculate progress?
```

### Step 2 — Make one change at a time

Claude Code works best with focused, specific tasks:

```
# Good
"Add a Schedule Performance Index (SPI) metric card to the dashboard, 
calculated as EV/PV, displayed next to the CPI card."

# Too broad
"Make the simulation better"
```

### Step 3 — Test after each change

Ask Claude Code to verify its work:

```
"After adding the SPI metric, check that:
1. It appears on the dashboard
2. The formula is EV/PV
3. It shows green if >=1.0, amber if >=0.8, red otherwise"
```

---

## Key Extension Tasks

### Add real earthwork volumes

The `data/project_data.json` file contains 201 profile points with cut/fill depths.
Use these to calculate actual m³ per zone:

```
Read data/project_data.json. Calculate the total cut volume and fill volume for 
each of the 5 earthwork zones (EW01–EW05) using the trapezoidal rule.
Assume a road formation width of 13.5m. Add these volumes to the work package 
definitions in public/index.html so progress is tracked in m³ rather than %.
```

### Add multiplayer support

```
I want to add multiplayer so 2–4 students can each manage their own version of 
the project simultaneously. They should see each other's CPI on a leaderboard.
Use localStorage to save each player's state separately by player name.
```

### Add tutor/umpire mode

```
Add a hidden "Umpire" panel (accessible via a password) where the tutor can:
1. Send a message to all players (shown as a "Head Office communication")
2. Trigger a special weather event (e.g. 3-week flood affecting River Trent zone)
3. View all players' current CPI and progress side by side
```

### Export results to Excel

```
Add an "Export Report" button to the Reports screen that downloads an Excel file
containing: period-by-period cost, EV, CPI, SPI, and work package progress.
Use the SheetJS library (available from cdnjs.cloudflare.com).
```

### Make it mobile-friendly

```
The simulation currently requires a wide screen. Refactor the layout to work on 
a tablet (768px wide). On small screens:
- Stack the sidebar below the main content
- Make the Gantt chart horizontally scrollable
- Collapse the metric cards from 4-across to 2-across
```

---

## Working with the Data Files

The project data files are in `data/`. Claude Code can read these directly:

```
Read data/project_data.json and tell me:
- Which chainage sections have the deepest cut
- Where the maximum fill depth occurs  
- What the total estimated earthwork volume is (assuming 13.5m formation width)
```

---

## Git Workflow with Claude Code

Claude Code can also manage git for you:

```
# Ask Claude Code to commit your changes
"Commit the changes you just made with a descriptive commit message"

# Create a feature branch
"Create a new branch called 'feature/multiplayer' and switch to it"

# Push to GitHub  
"Push the current branch to origin"
```

---

## Prompting Tips

| Tip | Example |
|---|---|
| Reference specific functions | "In the `runPeriod()` function, add..." |
| Give context | "This is a teaching simulation for civil engineering students..." |
| Specify constraints | "Keep everything in a single HTML file (no npm build step)" |
| Ask for explanation | "Explain what you changed and why before you write the code" |
| Request tests | "After writing the function, test it with these inputs: ..." |
| Undo mistakes | Type `/undo` to revert the last change |

---

## File Structure Reference

```
public/index.html    — The complete simulation (all HTML/CSS/JS in one file)
src/gameData.js      — Standalone data module (for reference / future refactoring)
data/project_data.json — Extracted project data (profile, resources)
docs/GAME_DESIGN.md  — Simulation rules and mechanics
```

The simulation is intentionally kept as a **single HTML file** so it can be opened
directly in a browser without any build tools or server. When extending, maintain
this constraint unless you specifically want to introduce a build step.
