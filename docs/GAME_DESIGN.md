# Game Design Document — Highway Construction Simulation

## Overview

This simulation is based on the **Dam Construction Game V7.1** methodology developed at the University of Nottingham. The original game used a dam fill project; this version is adapted for a UK highway construction project — the Nottingham Eastern Relief Road.

---

## Learning Objectives

By playing this simulation, students will:

1. Experience the relationship between planning, resource allocation, and project outcomes
2. Understand how weather and equipment reliability create schedule and cost risk
3. Practice monitoring using Earned Value Management (EVM)
4. Appreciate the importance of construction sequence and dependencies
5. Compare different plant allocation strategies and their cost/time trade-offs

---

## Project Description

**Project:** Nottingham Eastern Relief Road  
**Client:** Nottingham City Council  
**Contract value:** £18,500,000  
**Contract duration:** 400 working days (~18 months)  
**Liquidated damages:** £5,000/day for late completion  
**Project start:** 1 March 2025

The project involves constructing approximately 4km of new dual carriageway from the A52 in the west to BCA Nottingham in the east, crossing the River Trent via a new bridge.

### Key structures

| Structure | Chainage | Notes |
|---|---|---|
| Railway Bridge | ch 210–230 | Requires temporary railway crossing first |
| Shelford Road Bridge | ch 920 | Medium complexity |
| River Trent Bridge | ch 1500–1600 | Critical path; requires dewatering pumps |
| Flood relief culverts | ch 1700–1850 | 4 × 1000mm diameter pipes |
| Carriageway drainage | Various | 1000mm pipes at ch15, 250, 690, 1470, 2060, 2400, 3060, 3640 |

---

## Decision Periods

The simulation runs in **decision periods** of 1–20 working days. Each period, the player:

1. Sets the **period length** (days)
2. Sets the **rainfall stop threshold** (mm/day — earthworks halt above this)
3. Chooses whether to **work weekends** (higher plant rates)
4. Allocates **plant and equipment** to the site
5. Clicks **Run Period**

The simulation then:
- Generates daily rainfall stochastically (Nottingham climate data)
- Applies equipment breakdown probability per plant type
- Advances work package progress based on resources allocated, weather, and randomness
- Calculates period cost (plant + materials + overhead)
- Reports back: progress, cost, EV, CPI, events

---

## Stochastic Effects

### Rainfall

Daily rainfall is drawn from a normal distribution based on Nottingham monthly means:

| Month | Mean (mm/day) |
|---|---|
| Jan–Feb | 1.4–1.9 |
| Mar–May | 1.5–1.7 |
| Jun–Jul | 1.8 |
| Aug–Oct | 2.0 |
| Nov–Dec | 1.9–2.0 |

If daily rainfall exceeds the player's set **stop threshold**, earthworks halt for that day. Bridge and carriageway works continue in all weathers.

### Equipment Breakdowns

Each plant item has a probability of breakdown per 5-day period:

| Equipment | Breakdown probability |
|---|---|
| Excavator | 5% |
| Dump truck | 6% |
| Dozer | 5% |
| Pile driver | 5% |
| Paver | 5% |

A breakdown costs 1 day of lost production for that machine.

### Productivity Variance

Each period, overall productivity varies ±15% randomly, simulating crew efficiency variation, material delivery delays, and other site factors.

---

## Earned Value Management

The simulation tracks three EVM metrics in real time:

| Metric | Formula | Target |
|---|---|---|
| **Planned Value (PV)** | Linear interpolation of contract value over 400 days | — |
| **Actual Cost (AC)** | Cumulative expenditure | Minimise |
| **Earned Value (EV)** | % complete × £18.5M | Maximise |
| **CPI** | EV ÷ AC | ≥ 1.00 |
| **SPI** | EV ÷ PV | ≥ 1.00 |

A CPI < 1.0 means the project is over-spending relative to progress.

---

## Work Package Dependencies

Work packages must be completed in the correct sequence:

```
TW01 (Site Setup)
├── TW02 (Temp Railway Crossing) → BR01 (Railway Bridge)
├── TW03 (Haul Road)
├── EW01–EW05 (Earthworks, parallel) → DR01 → DR02
│                                     → CW01 → CW02 → CW03 → CW04 → CW05 → CW06
│                                     → FN01, FN04
│                                                      → FN02, FN03
└── BR02 (Shelford Bridge, parallel)
└── BR03 (River Trent Bridge, parallel — CRITICAL PATH)
```

---

## Scoring

At the end of the simulation (when all work packages reach 100%), students are scored on:

1. **Final CPI** — cost efficiency (EV/AC)
2. **Schedule** — days early/late vs 400-day contract
3. **Liquidated damages** — £5,000/day for every day over 400
4. **Net profit** — Contract value − Total cost − LDs

---

## Comparison with Dam Construction Game

| Dam Game | Highway Game |
|---|---|
| Fill dam (rock + clay) | Complete 23 work packages |
| Excavators + lorries | Excavators, dump trucks, pile drivers, pavers |
| Haul road gradient decisions | Rainfall threshold decisions |
| Clay fill height / Rock fill height | % progress per work package |
| Rainfall stops scrapers | Rainfall stops earthworks (not bridges) |
| Plant breakdowns (stochastic) | Same |
| Decision period 1–20 days | Same |
| Head Office reports | Period reports with CPI/SPI |
