process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinnerActions = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   '];
let timer = 100;

for (const action of spinnerActions) {
  setTimeout(() => {
    process.stdout.write(action);
  }, timer);
  timer += 200;
};