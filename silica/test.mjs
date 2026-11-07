// Checks the rules without a browser: node silica/test.mjs
import assert from "node:assert/strict";
import { Life, GOSPER_GUN, SandWorld, SAND, WATER, OIL, STONE, WOOD, FIRE, EMPTY, ACID } from "./sim.js";

// A blinker has period two, and a glider moves one cell diagonally in four generations.
let life = new Life(16, 16);
life.stamp(["OOO"], 8, 8);
const start = life.current.slice();
life.step();
assert.equal(life.get(8, 7) + life.get(8, 8) + life.get(8, 9), 3);
assert.equal(life.get(7, 8), 0);
life.step();
assert.deepEqual(life.current, start);

life = new Life(32, 32);
life.stamp([".O.", "..O", "OOO"], 5, 5);
const before = [...life.current.keys()].filter((i) => life.current[i]);
for (let i = 0; i < 4; i++) life.step();
const after = [...life.current.keys()].filter((i) => life.current[i]);
assert.deepEqual(after, before.map((i) => i + 33));

// The gun produces a new glider every 30 generations, so it grows by 5 cells each time.
life = new Life(120, 80);
life.stamp(GOSPER_GUN, 30, 20);
const first = life.population();
for (let i = 0; i < 30; i++) life.step();
assert.equal(life.population(), first + 5);

// Sand falls one cell a frame, not to the floor at once, and it stops on the floor.
let world = new SandWorld(8, 8);
world.paint(4, 0, SAND);
world.step();
assert.equal(world.typeAt(4, 1), SAND);
assert.equal(world.typeAt(4, 2), EMPTY);
for (let i = 0; i < 20; i++) world.step();
assert.equal(world.typeAt(4, 7), SAND);

// Matter is conserved, including through sand sinking in water and oil floating on it.
world = new SandWorld(32, 32);
world.brush(16, 6, 5, SAND);
world.brush(8, 10, 5, WATER);
world.brush(24, 10, 5, OIL);
const counts = [world.count(SAND), world.count(WATER), world.count(OIL)];
for (let i = 0; i < 600; i++) world.step();
assert.deepEqual([world.count(SAND), world.count(WATER), world.count(OIL)], counts);
const heights = (t) => {
  let total = 0, n = 0;
  for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) if (world.typeAt(x, y) === t) { total += y; n++; }
  return total / n;
};
assert.ok(heights(OIL) < heights(WATER), "oil floats on water");

// In water deeper than the pile, all the sand ends up below the water.
world = new SandWorld(32, 32);
for (let y = 12; y < 32; y++) for (let x = 0; x < 32; x++) world.paint(x, y, WATER);
world.brush(16, 5, 3, SAND);
const grains = world.count(SAND);
for (let i = 0; i < 800; i++) world.step();
assert.equal(world.count(SAND), grains);
assert.ok(heights(WATER) < heights(SAND), "sand sinks in water");

// Fire burns wood away and goes out, and stone is left alone.
world = new SandWorld(32, 32);
for (let x = 8; x < 24; x++) { world.paint(x, 20, WOOD); world.paint(x, 21, STONE); }
world.paint(16, 19, FIRE);
for (let i = 0; i < 2000; i++) world.step();
// Each spread is a matter of chance, so a piece can survive when the flames next to it die first.
assert.ok(world.count(WOOD) <= 4, `most of the wood burns, and ${world.count(WOOD)} is left`);
assert.equal(world.count(FIRE), 0);
assert.equal(world.count(STONE), 16);

// Acid eats through wood.
world = new SandWorld(16, 16);
for (let x = 0; x < 16; x++) world.paint(x, 10, WOOD);
world.brush(8, 4, 3, ACID);
const wood = world.count(WOOD);
for (let i = 0; i < 500; i++) world.step();
assert.ok(world.count(WOOD) < wood);

// Once everything has settled, regions go to sleep and a frame does almost nothing.
world = new SandWorld(96, 96);
world.brush(48, 10, 6, SAND);
for (let i = 0; i < 400; i++) world.step();
world.step();
assert.equal(world.chunksUpdated, 0, "a settled world does no work");
world.paint(10, 10, SAND);
world.step();
assert.ok(world.chunksUpdated > 0 && world.chunksUpdated < 12, "and a change wakes only what is near it");

console.log("all silica checks passed");
