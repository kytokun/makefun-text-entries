import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// One Emoji, One Dream Vacation
const outputDirectory = "/output";
const outputFilename = "entry.txt";
const entryPath = join(outputDirectory, outputFilename);
const dreamVacationEmoji = "🏝️";
const fileEncoding = "utf8";
const lineEnding = "";
const overwriteExistingEntry = true;

function prepareOutputDirectory(directory: string): void {
  mkdirSync(directory, { recursive: true });
}

function makeEntryPath(directory: string, filename: string): string {
  return join(directory, filename);
}

function writeDreamVacation(path: string, emoji: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, emoji + lineEnding, { encoding: fileEncoding, flag: overwriteExistingEntry ? "w" : "a" });
}

const finalEntryPath = makeEntryPath(outputDirectory, outputFilename);
writeDreamVacation(finalEntryPath, dreamVacationEmoji);
