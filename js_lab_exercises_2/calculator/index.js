const log = console.log;

function squareNumber(n) {
  const result = n * n;
  log(`The result of squaring the number ${n} is ${result}.`);
  return result;
}

function halfNumber(n) {
  const result = n / 2;
  log(`Half of ${n} is ${result}.`);
  return result;
}

function percentOf(a, b) {
  const pct = (a / b) * 100;
  log(`${a} is ${pct}% of ${b}.`);
  return pct;
}

function areaOfCircle(r, round = false) {
  const area = Math.PI * r * r;
  const output = round ? Number(area.toFixed(2)) : area;
  log(`The area for a circle with radius ${r} is ${output}.`);
  return output;
}

function chainedOps(n) {
  const half = halfNumber(n);
  const squared = squareNumber(half);
  const area = areaOfCircle(squared, true);
  const pct = percentOf(area, squared);
  return { half, squared, area, pct };
}

// Test
chainedOps(10);
