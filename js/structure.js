import immstruct from 'immstruct';

let data = immstruct({
  header: 'Welcome!',
  clock: String(new Date())
});

export default data;

// Tick the structures clock every second.
setInterval(
  () => data.cursor('clock').update(_ => String(new Date())),
  1000);
