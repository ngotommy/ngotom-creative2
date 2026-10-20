export type Flower = {
  emoji: string;
  x: number;
  y: number;
};

export const EMOJIS = ['🌸', '🌻', '🌷', '🌼', '🌹'];
export const FLOWER_SIZE = 50;

// Positions as percentages of the lawn (0 = left/top edge, 100 = right/bottom edge)
export const GRASS_SPOTS = [
  { x: 6, y: 4 },   { x: 38, y: 4 },  { x: 70, y: 4 },
  { x: 20, y: 18 }, { x: 54, y: 18 }, { x: 86, y: 18 },
  { x: 4, y: 32 },  { x: 36, y: 32 }, { x: 68, y: 32 },
  { x: 20, y: 46 }, { x: 52, y: 46 }, { x: 84, y: 46 },
  { x: 6, y: 60 },  { x: 38, y: 60 }, { x: 70, y: 60 },
  { x: 22, y: 74 }, { x: 54, y: 74 }, { x: 86, y: 74 },
  { x: 6, y: 88 },  { x: 38, y: 88 }, { x: 70, y: 88 },
];

export const MESSAGES = [
  'You are growing every day!',
  'Look at you go! 🌱',
  'Your garden is blooming beautifully!',
  'Small steps make big gardens.',
  'You make the world brighter!',
  'Keep going, you are doing great!',
  'Every flower counts, and so do you!',
  'Growth takes time, and you are worth it.',
];
