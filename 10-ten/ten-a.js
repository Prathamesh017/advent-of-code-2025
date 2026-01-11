const buttons = [
[1,3] ,[2] ,[2,3] [0,2] ,[0,1] 
];

const target = [0,1,1,0];
const n = buttons.length;

let minPresses = Infinity;

for (let combo = 0; combo < (1 << n); combo++) {

  let lights = [0,0];
  let presses = 0;

  const binary = combo.toString(2).padStart(n, "0");

  for (let i = 0; i < n; i++) {
    if (binary[n - 1 - i] === "1") {
      presses++;

      for (let light of buttons[i]) {
        lights[light] ^= 1; // flip
      }
    }
  }

  if (lights.every((v, idx) => v === target[idx])) {
    minPresses = Math.min(minPresses, presses);
  }
}

console.log(minPresses);
