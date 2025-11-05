const int = process.argv[2];

function factorial(int) {
  if (isNaN(int)) {
    console.log(1);
  } else if (int < 0) {
    console.log('0');
  } else {
    let result = 1;

    for (let i = 1; i <= int; i++) {
      result *= i;
    }
    console.log(result);
  }
}
factorial(int);
