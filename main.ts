import { writeFileSync, mkdirSync } from "node:fs";

// Bounty: u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
// One Word for Your Wi-Fi
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Nebula");
