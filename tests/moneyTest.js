import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test suit: formatCurrency');

console.log('converting price into dollars');

if (formatCurrency(2095) === '20.95')
{
  console.log('pass');
}
else
{
  console.log('fail');
}


console.log('work with Zero');

if (formatCurrency(0) === '0.00') {
  console.log('pass');
}
else{
  console.log('fail');
}


console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {

  console.log('pass');
}
else{
  console.log('fail');

}