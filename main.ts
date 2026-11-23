// news-image-20261123 entry (Node 22, standard library only).
// The image beside this file sums up Monday 23 November 2026's world news
// (COP31 ends with no deal, the Merkury sinking, the US House result, the
// Dymer strike, the Kospi sell-off, the Riemann proof certification).
// The program copies it to /output/entry.png. It runs with no network
// and writes identical bytes on every run (the same file, byte for byte).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
