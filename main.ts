// news-image-01 entry (Node 22, standard library only): a front-page poster
// summing up the world news of Friday 13 November 2026 — Nvidia chief Jensen
// Huang resigns, tankers hit in the Strait of Hormuz, US flights resume after
// the FAA ground stop, and Europe joins the Ukraine peace talks. The image is
// the entry.png beside this file; the program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png missing from repository');
if (statSync(src).size > 1048576) throw new Error('entry.png exceeds the 1 MiB gate');
copyFileSync(src, join(outDir, 'entry.png'));
