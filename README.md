# Highway Construction Management Simulation

A browser-based construction project management simulation game for the **Nottingham Eastern Relief Road** — a 4km dual carriageway including 3 bridges (Railway, Shelford Road, River Trent).

Adapted from the *Dam Construction Game V7.1* methodology by the University of Nottingham Department of Civil Engineering.

---

## 🎮 Live Demo

Deploy via GitHub Pages — see [Setup](#setup) below.

---

## 📋 Project Overview

Students take the role of **Project Manager** responsible for:

- Allocating plant and equipment each decision period
- Managing earthworks across 5 zones (ch0–4000m)
- Constructing 3 bridges on the critical path
- Laying carriageway layers (sub-base through surface course)
- Monitoring cost performance against a £18.5M contract

### Key Features

| Feature | Detail |
|---|---|
| **Decision periods** | 1–20 working days per turn |
| **Stochastic weather** | Nottingham rainfall data; stops earthworks above player-set threshold |
| **Equipment breakdowns** | Random per plant type per period |
| **Earned Value tracking** | CPI, cost vs progress S-curve |
| **Gantt programme** | 23 work packages with dependencies |
| **Site profile** | Real vertical profile data (ch0–4000, 201 points) |
| **Resource rates** | All rates from CIVE1011 Direct Cost Schedule |

---

## 🗂 Repository Structure

```
highway-sim/
├── public/
│   └── index.html          # Complete simulation (single-file app)
├── src/
│   └── gameData.js         # Game data module (plant rates, activities, work packages)
├── data/
│   └── project_data.json   # Extracted project data (profile, resources)
├── docs/
│   ├── GAME_DESIGN.md      # Simulation rules and mechanics
│   ├── CLAUDE_CODE_GUIDE.md # How to develop this further with Claude Code
│   └── screenshots/        # UI screenshots
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
├── .gitignore
└── README.md
```

---

## 🚀 Setup

### Play immediately (no install)

Just open `public/index.html` in any modern browser.

### GitHub Pages (recommended for classroom use)

1. Fork or clone this repo
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → /public**
4. Your simulation will be live at `https://[username].github.io/highway-sim/`

### Develop with Claude Code

```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Clone and enter the project
git clone https://github.com/[you]/highway-sim.git
cd highway-sim

# Launch Claude Code
claude
```

See [`docs/CLAUDE_CODE_GUIDE.md`](docs/CLAUDE_CODE_GUIDE.md) for a step-by-step development workflow.

---

## 🏗 Project Data Sources

| File | Content | Used for |
|---|---|---|
| `Bill_of_Quantities_CIVE1011.xlsx` | BOQ items | Work package structure |
| `Costs_rates_and_productivities_CIVE1011.xlsx` | Plant rates, productivity | Simulation engine costs |
| `Profiles.xlsx` | Vertical profile ch0–4000 | Site profile chart, cut/fill |
| `Drawing_01` | Overall plan | Work zone locations |
| `Drawing_02–05` | Bridge & highway details | Structure parameters |

---

## 🔧 Extending the Simulation

Areas for further development:

- [ ] **Multiplayer** — multiple students competing on the same project
- [ ] **Tutor/Umpire mode** — Head Office can send reports and requests mid-game
- [ ] **Earthwork volumes** — calculate actual m³ from profile data per zone
- [ ] **Programme editing** — drag Gantt bars to resequence activities
- [ ] **Export to Excel** — post-exercise analysis of decisions
- [ ] **Mobile responsive** — tablet-friendly layout for site visits
- [ ] **Save/load** — persist game state across sessions

---

## 📖 Simulation Rules

See [`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md) for full rules, scoring, and learning objectives.

---

## 📄 Licence

For educational use within the Civil Engineering Department at the University of Nottingham, Malaysia.  
Simulation methodology adapted from *Dam Construction Game V7.1*, Engineering Management Group.
