import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
// One Word From Your Ex
const outputDirectory = "/output";
const entryPath = join(outputDirectory, "entry.txt");
const exWord = "Unread";
const outputEncoding = "utf8";

function prepareOutputDirectory(path: string): void {
  mkdirSync(path, { recursive: true });
}

function writeEntry(path: string, text: string): void {
  prepareOutputDirectory(outputDirectory);
  writeFileSync(path, text, { encoding: outputEncoding });
}

writeEntry(entryPath, exWord);
