import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-swift-badger-44-one-word-for-the-boss-6b48c735
// One Word for the Boss
const outputDirectory = "/output";
const outputFilename = "entry.txt";
const entryPath = join(outputDirectory, outputFilename);
const bossWord = "Visionary";
const fileEncoding = "utf8";
const lineEnding = "";
const writeMode = "overwrite";

function prepareOutputDirectory(directory: string): void {
  mkdirSync(directory, { recursive: true });
}

function makeEntryPath(directory: string, filename: string): string {
  return join(directory, filename);
}

function writeBossDescription(path: string, word: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, word + lineEnding, { encoding: fileEncoding, flag: writeMode === "overwrite" ? "w" : "a" });
}

const finalEntryPath = makeEntryPath(outputDirectory, outputFilename);
writeBossDescription(finalEntryPath, bossWord);
