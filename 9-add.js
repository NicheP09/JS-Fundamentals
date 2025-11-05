let a = process.argv[2];
let b = process.argv[3];

function add(a, b) {
  if (isNaN(a) && isNaN(b)) {
    console.log('NAN');
  } else {
    console.log(Number(a) + Number(b));
  }
}
add(a, b);
