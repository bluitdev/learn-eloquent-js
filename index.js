// Import stylesheets
import './style.css';

// Write Javascript code!
// ex1 - p37 - Eloquent Javascript
function hashPrint(n) {
  let kq = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // document.write('# ');
      kq += '# ';
    }
    kq += '\n';
  }
  console.log(kq);
}
//hashPrint(8);

// ex2 - p38 - Eloquent Javascript
function fizzBuzzPrint(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) result += 'FizzBuzz ';
    else if (i % 3 == 0) result += 'Fizz ';
    else if (i % 5 == 0) result += 'Buzz ';
    else result += i;
    result += ' ';
  }
  console.log(result);
}
fizzBuzzPrint(100);
