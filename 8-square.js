const size = process.argv[2];
let X = 'X';

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size.length; i++) {
    console.log(X.repeat(size));
  }
}
