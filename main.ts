import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// One Emoji, One Dream Vacation
const outputDirectory = "/output";
const entryPath = join(outputDirectory, "entry.txt");
const dreamVacationEmoji = "🏝️";
const outputEncoding = "utf8";

function prepareOutputDirectory(path: string): void {
  mkdirSync(path, { recursive: true });
}

function writeEntry(path: string, text: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, text, { encoding: outputEncoding });
}

writeEntry(entryPath, dreamVacationEmoji);
