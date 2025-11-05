const myFun = 'C is fun';
let i = 0;
const times = process.argv[2];

if (!times || isNaN(times)) {
  console.log('Missing numbers of occurrences');
  process.exit(1);
} else {
  while (i < times) {
    console.log(myFun);
    i++;
  }
}
