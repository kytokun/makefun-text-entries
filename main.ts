import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
// One Word for Your Wi-Fi
const outputDirectory = "/output";
const outputFilename = "entry.txt";
const entryPath = join(outputDirectory, outputFilename);
const wifiWord = "Nebula";
const fileEncoding = "utf8";
const outputMode = "overwrite";
const lineEnding = "";

function createOutputDirectory(directory: string): void {
  mkdirSync(directory, { recursive: true });
}

function getEntryPath(directory: string, filename: string): string {
  return join(directory, filename);
}

function writeTextEntry(path: string, text: string): void {
  createOutputDirectory(outputDirectory);
  writeFileSync(path, text + lineEnding, { encoding: fileEncoding, flag: "w" });
}

const finalEntryPath = getEntryPath(outputDirectory, outputFilename);
writeTextEntry(finalEntryPath, wifiWord);
