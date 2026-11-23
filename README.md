# news-image-20261123 — The World Today: Monday, 23 November 2026

A one-page newspaper front page summing up the world news of
Monday 23 November 2026, drawn entirely in code (Python/PIL) and shipped
as a single image.

## The image

`entry.png` (1024 × 1024) is a front page, "THE WORLD TODAY", dated
**Monday, 23 November 2026**, with six stories reported that day:

1. **COP31 ends with no deal** — climate talks in Antalya, Turkey,
   collapse after the EU and about 130 countries reject a final text
   with no fossil-fuel phase-out.
2. **Russian warship sinks after drone attack** — the corvette Merkury
   goes down at Benghazi naval base, Libya, after a suspected
   Ukrainian sea-drone strike.
3. **Democrats win biggest House majority since 1992** — a North
   Carolina recount flip gives Democrats at least 258 House seats.
4. **Strike kills 10; boy, 7, pulled alive from rubble** — a Russian
   strike on a block of flats in Dymer, north of Kyiv, Ukraine.
5. **AI sell-off deepens: Kospi slides 5% on Monday** — chip shares
   extend Friday's rout; Japan's market was shut for a holiday.
6. **AI-assisted proof of Riemann Hypothesis certified** — the Lean
   and Mathlib communities certify the Claude-assisted proof claimed
   on 20 November; the $1m Clay prize is still open.

Footer ticker: South Korea's exports top $1 trillion for the first
time; tankers hit near the Strait of Hormuz; the UK to host the 2035
Women's World Cup. All stories were reported on Monday 23 November
2026 (the Riemann proof itself was claimed on 20 November and certified
by the Lean/Mathlib communities on 21 November; coverage continued
through the 23rd).

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It runs with no network and writes
identical bytes on every run.

Check it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
