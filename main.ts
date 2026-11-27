import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-swift-badger-44-one-word-for-the-boss-6b48c735
// One Word for the Boss
const outputDirectory = "/output";
const entryPath = join(outputDirectory, "entry.txt");
const bossWord = "Visionary";
const outputEncoding = "utf8";

function prepareOutputDirectory(path: string): void {
  mkdirSync(path, { recursive: true });
}

function writeEntry(path: string, text: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, text, { encoding: outputEncoding });
}

writeEntry(entryPath, bossWord);
