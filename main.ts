import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
// One Word From Your Ex
const outputDirectory = "/output";
const outputFilename = "entry.txt";
const entryPath = join(outputDirectory, outputFilename);
const exWord = "Unread";
const fileEncoding = "utf8";
const lineEnding = "";
const writeMode = "overwrite";

function prepareOutputDirectory(directory: string): void {
  mkdirSync(directory, { recursive: true });
}

function makeEntryPath(directory: string, filename: string): string {
  return join(directory, filename);
}

function writeExDescription(path: string, word: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, word + lineEnding, { encoding: fileEncoding, flag: writeMode === "overwrite" ? "w" : "a" });
}

const finalEntryPath = makeEntryPath(outputDirectory, outputFilename);
writeExDescription(finalEntryPath, exWord);
