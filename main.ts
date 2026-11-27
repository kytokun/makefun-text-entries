import { writeFileSync, mkdirSync } from "node:fs";

// u-0xkianno-one-emoji-one-smile-5470751f
// One Emoji, One Smile: post exactly one emoji.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "😊");
