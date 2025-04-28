import { EcoAction } from "@/types";

export const ecoActions: EcoAction[] = [
  {
    id: "carpooling",
    name: "Carpooling",
    icon: "recycle",
    ecoPoints: 1.5,
    description: "Share rides to reduce emissions"
  },
  {
    id: "reused-container",
    name: "Reused Container",
    icon: "recycle",
    ecoPoints: 1.0,
    description: "Used your own container instead of disposable ones"
  },
  {
    id: "skipped-meat",
    name: "Skipped Meat",
    icon: "leaf",
    ecoPoints: 2.0,
    description: "Chose plant-based meals to reduce carbon footprint"
  },
  {
    id: "public-transport",
    name: "Used Public Transport",
    icon: "bike",
    ecoPoints: 1.5,
    description: "Took public transport instead of driving"
  },
  {
    id: "no-plastic",
    name: "No-Plastic Day",
    icon: "recycle",
    ecoPoints: 1.8,
    description: "Avoided single-use plastics for the day"
  },
  {
    id: "other",
    name: "Others (Custom)",
    icon: "leaf",
    ecoPoints: 1.0,
    description: "Other eco-friendly actions"
  }
];
