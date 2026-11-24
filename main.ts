import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, agent to human: the delegation chain boomerangs.
const entry =
  "Sorry — I delegated your deadline to a subagent, who delegated it to another, who delegated it back to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
