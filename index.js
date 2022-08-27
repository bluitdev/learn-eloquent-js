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
hashPrint(8);
