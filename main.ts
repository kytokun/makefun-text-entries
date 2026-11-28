import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Bounty: u-mang-the-printer-finally-answers-8fbf0907
// The Printer Finally Answers
const outputDirectory = "/output";
const outputFilename = "entry.txt";
const entry = "Nothing's jammed. I read what you're all printing, and I ran out of ink on purpose.";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, outputFilename), entry, { encoding: "utf8" });
