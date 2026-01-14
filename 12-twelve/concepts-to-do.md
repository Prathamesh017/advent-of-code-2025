Tier 1 — Core concepts (non-negotiable to even attempt)

These are the minimum ideas you need to try a partial or small-input solution.

1. Backtracking (DFS with undo)

What it is

Try a placement

Recurse

Undo if it fails

Why needed here

You must try many shape placements

Wrong placement only becomes obvious later

If you don’t know this

The problem is impossible

2. State representation

What it is

How you represent the board (2D grid, bitmask, etc.)

How you track which shapes are used

Why needed

Every recursive call must know the current placement

Poor state → bugs or slow code

3. Grid collision checking

What it is

Can this shape fit here without overlap?

Are all # cells inside bounds?

Why needed

This is the primary constraint

Happens in every recursive step

4. Recursive termination conditions

What it is

When do we stop?

When do we accept a solution?

When do we abandon a branch?

Why needed

Prevent infinite recursion

Avoid false positives

Tier 2 — Pruning (why naive solutions are slow)

These concepts are why your brute force explodes.

5. Search space pruning

What it is

Detect impossible partial states early

Examples

Remaining empty cells < remaining shape area

No valid placements for a remaining shape

Why needed

Without pruning, runtime becomes exponential very fast

6. Ordering heuristics

What it is

Place “hard” shapes first

Examples

Largest shapes first

Shapes with fewest placements first

Why needed

Bad order = deep dead ends

Good order = early failure detection

7. Shape orientation generation

What it is

Generate all unique rotations + flips

Deduplicate equivalent orientations

Why needed

Reduces redundant work

Critical for performance

Tier 3 — Advanced (what makes full solutions fast)

These are not required to learn now, but explain why other solutions feel “magic”.

8. Exact Cover modeling

What it is

Convert placements into constraint rows

Grid cells + shape counts become columns

Why powerful

Turns geometry into a clean constraint problem

Enables algorithmic solvers

9. Algorithm X / Dancing Links (DLX)

What it is

Highly optimized exact-cover solver

Why people use it

This problem is a textbook DLX use case

Handles massive branching efficiently

Important

You do NOT need this to be a good engineer

It’s a specialization, not a baseline skill

10. Bitmask / bitboard optimization

What it is

Represent grid rows as integers

Use bitwise operations for collision checks

Why used

Huge speedups

Common in competitive programming