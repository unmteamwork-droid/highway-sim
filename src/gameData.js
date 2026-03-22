// ============================================================
// HIGHWAY CONSTRUCTION SIMULATION - GAME DATA
// Nottingham Eastern Relief Road (~4km highway)
// Adapted from Dam Construction Game V7.1 logic
// ============================================================

export const PROJECT_INFO = {
  name: "Nottingham Eastern Relief Road",
  totalLength: 4000, // metres
  startDate: "2025-03-01",
  contractDuration: 400, // working days (~18 months)
  contractValue: 0, // to be calculated from BOQ
  liquidatedDamages: 5000, // £/day late
  description: "Construction of a new 4km dual carriageway relief road in Nottingham, including 3 bridges (Railway, Shelford Road, River Trent), earthworks, drainage and carriageway layers."
};

// ---- PLANT / EQUIPMENT RATES (£/working day, 10h shift) ----
export const PLANT_RATES = {
  excavator:       { weekday: 1358, weekend: 1414, label: "Excavator + operator" },
  backhoe:         { weekday: 1260, weekend: 1316, label: "Backhoe loader + operator" },
  dumpTruck:       { weekday: 1050, weekend: 1106, label: "Dump truck + driver" },
  tipperTruck:     { weekday: 672,  weekend: 728,  label: "Tipper truck + driver" },
  dozer:           { weekday: 1302, weekend: 1358, label: "Dozer + operator" },
  grader:          { weekday: 1260, weekend: 1316, label: "Motor grader + operator" },
  roller:          { weekday: 826,  weekend: 868,  label: "Vibrating roller + driver" },
  largeCrane:      { weekday: 2282, weekend: 2338, label: "Large crane + operator" },
  smallCrane:      { weekday: 1302, weekend: 1358, label: "Small crane + operator" },
  pileDriver:      { weekday: 1764, weekend: 1876, label: "Pile driver + crew" },
  paver:           { weekday: 2086, weekend: 2254, label: "Paver + crew" },
  sprayer:         { weekday: 952,  weekend: 994,  label: "Bitumen sprayer + driver" },
  flatbed:         { weekday: 350,  weekend: 350,  label: "Flatbed truck" },
  forklift:        { weekday: 196,  weekend: 196,  label: "Forklift" },
  concretePump:    { weekday: 1932, weekend: 1988, label: "Concrete pump + operator" },
  waterPump:       { weekday: 31,   weekend: 31,   label: "Water pump" },
  whiteliner:      { weekday: 938,  weekend: 1050, label: "White-liner + crew" },
  auger:           { weekday: 154,  weekend: 154,  label: "Fence post auger" },
  van:             { weekday: 70,   weekend: 70,   label: "Van (personnel)" },
  engineer:        { weekday: 322,  weekend: 385,  label: "Engineer" },
  foreman:         { weekday: 343,  weekend: 413,  label: "Foreman / skilled operative" },
  labourer:        { weekday: 210,  weekend: 252,  label: "General labourer" },
};

// ---- MATERIAL RATES (£/unit) ----
export const MATERIAL_RATES = {
  siteCompound:         { rate: 175000, unit: "item",   label: "Site compound (incl. construction)" },
  tempRailwayCrossing:  { rate: 280000, unit: "item",   label: "Temporary railway crossing" },
  fencing:              { rate: 20.72,  unit: "m",      label: "Fencing posts and bars" },
  suitableFill:         { rate: 7.14,   unit: "m³",     label: "Suitable fill (imported)" },
  capping:              { rate: 10.64,  unit: "m³",     label: "Capping material" },
  subBase:              { rate: 15.68,  unit: "m³",     label: "Sub-base" },
  cbgm:                 { rate: 60.20,  unit: "m³",     label: "Cement bound lower base (CBGM)" },
  asphaltUpperBase:     { rate: 107.80, unit: "m³",     label: "Asphalt upper base" },
  asphaltBinder:        { rate: 112.00, unit: "m³",     label: "Asphalt binder course" },
  asphaltSurface:       { rate: 124.60, unit: "m³",     label: "Asphalt surface course" },
  drainPipe300:         { rate: 13.30,  unit: "m",      label: "Porous drainage pipe 300mm" },
  drainPipe1000:        { rate: 33.60,  unit: "m",      label: "Concrete drainage pipe 1000mm" },
  peaGravel:            { rate: 30.80,  unit: "m³",     label: "Pea gravel" },
  crashBarrier:         { rate: 24.50,  unit: "m",      label: "Crash barrier + posts" },
  roadStuds:            { rate: 79800,  unit: "item",   label: "Road studs + adhesive" },
  roadSigns:            { rate: 32200,  unit: "item",   label: "Road signs" },
  sheetPile5m:          { rate: 281.40, unit: "m",      label: "Steel sheet piles 5m" },
  steelPile12m:         { rate: 1190,   unit: "no",     label: "Steel piles 12m" },
  blindingConcrete:     { rate: 49.00,  unit: "m³",     label: "Blinding concrete" },
  reinforcement:        { rate: 826.00, unit: "t",      label: "Reinforcement (pre-bent)" },
  formworkReusable:     { rate: 10.50,  unit: "m²",     label: "Formwork reusable (incl. falsework)" },
  formworkPermanent:    { rate: 8.54,   unit: "m²",     label: "Formwork permanent" },
  concreteC40:          { rate: 114.80, unit: "m³",     label: "Concrete C40/50" },
  bridgeBearings:       { rate: 490.00, unit: "no",     label: "Bridge bearings" },
  beamM2_17m:           { rate: 8750,   unit: "no",     label: "M2 concrete beams 17.5m" },
  beamM5_21m:           { rate: 11620,  unit: "no",     label: "M5 concrete beams 21.4m" },
  steelBeam50m:         { rate: 36400,  unit: "no",     label: "Steel bridge beams 50m" },
  waterproofing:        { rate: 23.80,  unit: "m²",     label: "Bridge deck waterproofing" },
  movementJoints:       { rate: 72.80,  unit: "m",      label: "Movement joints" },
  kerbs:                { rate: 6.30,   unit: "m",      label: "Kerbs" },
  parapet:              { rate: 184.80, unit: "m",      label: "Bridge parapet railing" },
  fillToStructures:     { rate: 13.30,  unit: "m³",     label: "Fill to structures" },
};

// ---- ACTIVITIES: production rates (m³/day or m/day per gang) ----
// "gang" = the standard resource set listed in costs spreadsheet
export const ACTIVITIES = {
  // --- EARTHWORKS ---
  topsoilStrip: {
    label: "Topsoil strip",
    unit: "m³", outputPerGangDay: 340,
    gang: { excavator: 1, dumpTruck: 1, van: 0.5, engineer: 0.5, foreman: 0.5 },
    weatherSensitive: true,
    category: "earthworks"
  },
  cut: {
    label: "Excavation (cut)",
    unit: "m³", outputPerGangDay: 840,
    gang: { excavator: 1, dumpTruck: 2, van: 0.5, engineer: 1, foreman: 0.5, labourer: 1 },
    weatherSensitive: true,
    category: "earthworks"
  },
  fill: {
    label: "Fill & compact",
    unit: "m³", outputPerGangDay: 840,
    gang: { dozer: 1, roller: 1, van: 0.5, engineer: 1, foreman: 0.5, labourer: 1 },
    weatherSensitive: true,
    category: "earthworks"
  },
  capping: {
    label: "Capping layer",
    unit: "m³", outputPerGangDay: 560,
    gang: { dozer: 1, grader: 1, roller: 1, van: 0.3, engineer: 0.5, labourer: 0.5 },
    weatherSensitive: true,
    category: "earthworks"
  },
  // --- CARRIAGEWAY ---
  subBase: {
    label: "Sub-base",
    unit: "m³", outputPerGangDay: 420,
    gang: { dozer: 1, grader: 1, roller: 1, van: 0.3, engineer: 0.5, labourer: 0.5 },
    weatherSensitive: false,
    category: "carriageway"
  },
  lowerBase: {
    label: "Lower base (CBGM)",
    unit: "m³", outputPerGangDay: 400,
    gang: { roller: 1, paver: 1, van: 0.5, engineer: 1, foreman: 0.5, labourer: 1 },
    weatherSensitive: false,
    category: "carriageway"
  },
  upperBase: {
    label: "Upper base (Asphalt)",
    unit: "m³", outputPerGangDay: 175,
    gang: { roller: 1, paver: 1, sprayer: 1, van: 0.5, engineer: 1, foreman: 0.5, labourer: 1 },
    weatherSensitive: false,
    category: "carriageway"
  },
  binderCourse: {
    label: "Binder course",
    unit: "m³", outputPerGangDay: 140,
    gang: { roller: 1, paver: 1, sprayer: 1, van: 0.5, engineer: 1, foreman: 0.5, labourer: 1 },
    weatherSensitive: false,
    category: "carriageway"
  },
  surfaceCourse: {
    label: "Surface course",
    unit: "m³", outputPerGangDay: 85,
    gang: { roller: 1, paver: 1, sprayer: 1, van: 0.5, engineer: 1.5, foreman: 0.5, labourer: 1 },
    weatherSensitive: false,
    category: "carriageway"
  },
  // --- DRAINAGE ---
  sideDrains: {
    label: "Side drains",
    unit: "m", outputPerGangDay: 70,
    gang: { backhoe: 1, flatbed: 0.5, van: 0.5, engineer: 0.5, foreman: 1, labourer: 4 },
    weatherSensitive: false,
    category: "drainage"
  },
  crossDrains: {
    label: "Cross drains (1000mm pipes)",
    unit: "m", outputPerGangDay: 15,
    gang: { backhoe: 1, flatbed: 0.5, van: 0.5, engineer: 0.5, foreman: 1, labourer: 4 },
    weatherSensitive: false,
    category: "drainage"
  },
  // --- STRUCTURES (per bridge) ---
  piling: {
    label: "Piling",
    unit: "piles", outputPerGangDay: 15,
    gang: { backhoe: 1, pileDriver: 1, flatbed: 1, forklift: 0.2, waterPump: 1, van: 0.5, engineer: 1, labourer: 1 },
    weatherSensitive: false,
    category: "structures"
  },
  excavationStructures: {
    label: "Excavation for structures",
    unit: "m³", outputPerGangDay: 200,
    gang: { excavator: 1, dumpTruck: 1, waterPump: 1, van: 0.5, engineer: 0.5, labourer: 0.5 },
    weatherSensitive: false,
    category: "structures"
  },
  concreting: {
    label: "Concreting",
    unit: "m³", outputPerGangDay: 200,
    gang: { smallCrane: 1, roller: 0, van: 1, engineer: 1, foreman: 1, labourer: 4 },
    weatherSensitive: false,
    category: "structures"
  },
  placeBeams: {
    label: "Place bridge beams",
    unit: "beams", outputPerGangDay: 20,
    gang: { largeCrane: 1, van: 1, engineer: 1, foreman: 1, labourer: 4 },
    weatherSensitive: false,
    category: "structures"
  },
  // --- FINISHING ---
  whitelining: {
    label: "White-lining",
    unit: "m", outputPerGangDay: 3000,
    gang: { whiteliner: 1, engineer: 0.3 },
    weatherSensitive: false,
    category: "finishing"
  },
  fencing: {
    label: "Fencing",
    unit: "m", outputPerGangDay: 400,
    gang: { backhoe: 1, flatbed: 0.5, forklift: 0.1, van: 0.5, auger: 1, engineer: 0.5, foreman: 0.5, labourer: 2 },
    weatherSensitive: false,
    category: "finishing"
  },
};

// ---- WORK PACKAGES (game tasks players schedule) ----
export const WORK_PACKAGES = [
  // Preliminary / Temporary Works
  { id: "TW01", label: "Site Setup & Compound",    category: "temp",      duration: 10,  dependsOn: [],              location: "All" },
  { id: "TW02", label: "Temp Railway Crossing",    category: "temp",      duration: 15,  dependsOn: ["TW01"],        location: "ch210" },
  { id: "TW03", label: "Haul Road (whole length)", category: "temp",      duration: 30,  dependsOn: ["TW01"],        location: "ch0-4000" },
  // Earthworks - 5 zones
  { id: "EW01", label: "Earthworks Zone 1 (ch0-800)",    category: "earthworks", duration: 40, dependsOn: ["TW01"],  location: "ch0-800" },
  { id: "EW02", label: "Earthworks Zone 2 (ch800-1500)", category: "earthworks", duration: 35, dependsOn: ["TW01"],  location: "ch800-1500" },
  { id: "EW03", label: "Earthworks Zone 3 (ch1500-2200)",category: "earthworks", duration: 30, dependsOn: ["EW02"],  location: "ch1500-2200" },
  { id: "EW04", label: "Earthworks Zone 4 (ch2200-3200)",category: "earthworks", duration: 40, dependsOn: ["TW01"],  location: "ch2200-3200" },
  { id: "EW05", label: "Earthworks Zone 5 (ch3200-4000)",category: "earthworks", duration: 35, dependsOn: ["EW04"],  location: "ch3200-4000" },
  // Drainage
  { id: "DR01", label: "Drainage - Side Drains",   category: "drainage",  duration: 25,  dependsOn: ["EW01","EW02","EW03","EW04","EW05"], location: "All" },
  { id: "DR02", label: "Drainage - 1000mm Pipes",  category: "drainage",  duration: 15,  dependsOn: ["DR01"],        location: "ch15,250,690" },
  // Bridges
  { id: "BR01", label: "Railway Bridge (ch210)",    category: "bridge",    duration: 90,  dependsOn: ["TW02"],        location: "ch210-230" },
  { id: "BR02", label: "Shelford Road Bridge (ch920)", category: "bridge", duration: 80,  dependsOn: ["TW01"],        location: "ch920" },
  { id: "BR03", label: "River Trent Bridge (ch1500)",  category: "bridge", duration: 120, dependsOn: ["TW01"],        location: "ch1500-1600" },
  // Carriageway
  { id: "CW01", label: "Capping Layer",             category: "carriageway", duration: 20, dependsOn: ["EW01","EW02","EW03","EW04","EW05"], location: "All" },
  { id: "CW02", label: "Sub-base",                  category: "carriageway", duration: 20, dependsOn: ["CW01"],        location: "All" },
  { id: "CW03", label: "Lower Base (CBGM)",         category: "carriageway", duration: 15, dependsOn: ["CW02"],        location: "All" },
  { id: "CW04", label: "Upper Base (Asphalt)",      category: "carriageway", duration: 15, dependsOn: ["CW03"],        location: "All" },
  { id: "CW05", label: "Binder Course",             category: "carriageway", duration: 12, dependsOn: ["CW04"],        location: "All" },
  { id: "CW06", label: "Surface Course",            category: "carriageway", duration: 10, dependsOn: ["CW05"],        location: "All" },
  // Finishing
  { id: "FN01", label: "Crash Barriers + Kerbs",   category: "finishing", duration: 15,  dependsOn: ["CW04"],        location: "All" },
  { id: "FN02", label: "White-lining & Road Studs",category: "finishing", duration: 5,   dependsOn: ["CW06","FN01"], location: "All" },
  { id: "FN03", label: "Road Signs",               category: "finishing", duration: 5,   dependsOn: ["CW06"],        location: "All" },
  { id: "FN04", label: "Fencing",                  category: "finishing", duration: 20,  dependsOn: ["EW01","EW02","EW03","EW04","EW05"], location: "All" },
];

// ---- RAINFALL DATA (Nottingham, monthly mean & std dev, mm) ----
// Adapted from similar UK midlands climate data
export const RAINFALL_DATA = {
  January:   { mean: 58.3,  stdDev: 22.0 },
  February:  { mean: 43.2,  stdDev: 18.5 },
  March:     { mean: 46.7,  stdDev: 20.0 },
  April:     { mean: 47.5,  stdDev: 19.5 },
  May:       { mean: 52.1,  stdDev: 21.0 },
  June:      { mean: 52.8,  stdDev: 20.0 },
  July:      { mean: 56.4,  stdDev: 22.5 },
  August:    { mean: 62.0,  stdDev: 25.0 },
  September: { mean: 56.3,  stdDev: 22.0 },
  October:   { mean: 63.2,  stdDev: 26.0 },
  November:  { mean: 60.8,  stdDev: 24.0 },
  December:  { mean: 60.5,  stdDev: 23.0 },
};

// ---- STOCHASTIC BREAKDOWN PROBABILITIES (% chance per day) ----
export const BREAKDOWN_PROB = {
  excavator:  0.05,  // 5% chance per day
  backhoe:    0.04,
  dumpTruck:  0.06,
  tipperTruck:0.06,
  dozer:      0.05,
  grader:     0.04,
  roller:     0.03,
  largeCrane: 0.04,
  smallCrane: 0.04,
  pileDriver: 0.05,
  paver:      0.05,
  sprayer:    0.03,
};

// ---- SIMULATION ENGINE CONSTANTS ----
export const ENGINE = {
  decisionPeriodMin: 1,   // min days per decision period
  decisionPeriodMax: 20,  // max days
  rainfallStopsEarthworks: true,  // earthworks stop if rainfall > threshold
  rainfallDoesNotStopStructures: true,
  defaultRainfallThreshold: 10,  // mm/day before earthworks stop
  productivityVariancePct: 0.15, // ±15% random productivity variation
  weatherProductivityFactor: {   // reduction when wet (earthworks only)
    light: 0.80,  // 5-10mm/day
    moderate: 0.50, // 10-25mm/day
    heavy: 0.0,   // >threshold: work stops
  },
  floodRiskChainages: [1500, 1550, 1600], // near River Trent
};
