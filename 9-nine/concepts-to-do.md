LEVEL 0 — Recursion fundamentals (no grids yet)

Goal: recursion should feel mechanical, not magical.

Concepts

Base case

Recursive step

Stack unwinding

Avoiding infinite recursion

Problems

Print numbers 1 to N (recursively)

Sum of array (recursively)

Factorial / Fibonacci (basic, but focus on base cases)

Reverse a string recursively

👉 Stop when recursion stops feeling scary.

LEVEL 1 — Grid basics (no recursion yet)

Goal: get comfortable with 2D grids as data.

Concepts

2D arrays

grid[row][col]

Bounds checking

Directions (up, down, left, right)

Problems

Count number of 1s in a matrix

Traverse a matrix row-wise and column-wise

Rotate matrix (90°)

Spiral matrix traversal

👉 This makes grids feel “normal”, not abstract.

LEVEL 2 — DFS / BFS on grids (core missing skill)

This is the most important level for your AoC problem.

Goal: understand reachability.

Concepts

Grid as graph

Visited array / marking

4-direction movement

Connected components

Problems (do in this order)

Flood Fill (LeetCode 733)

Number of Islands (LeetCode 200)

Max Area of Island (LeetCode 695)

Surrounded Regions (LeetCode 130)

👉 After these, inside vs outside will feel obvious.

LEVEL 3 — Boundary-based thinking (very relevant to your problem)

Goal: learn “outside first” logic.

Concepts

Start from borders

Blocked vs free cells

Reachability defines inside/outside

Problems

Surrounded Regions (revisit, understand deeply)

Number of Enclaves (LeetCode 1020)

Closed Islands (LeetCode 1254)

👉 These are direct precursors to your AoC Part Two.

LEVEL 4 — Rectangles inside grids (ties it together)

Goal: connect grids + area + validation.

Concepts

Rectangle enumeration

Area = height × width

Validating all cells inside a rectangle

Problems

Largest Rectangle in Histogram (LeetCode 84)

Maximal Rectangle (LeetCode 85)

Count Submatrices With All Ones (LeetCode 1504)

👉 After this, rectangle-checking will feel routine.

LEVEL 5 — Come back to your AoC problem

At this point:

flood fill = familiar

boundary = walls

interior = unreachable from outside

rectangles = just validation loops

Your original problem will no longer feel like “10 problems inside 1”.

It will feel like 5 known patterns composed together.