import R from 'ramda';

function quicksort(list) {
  if ( list.length <= 1 ) return list;
  let pivot = R.head(list);
  let rest  = R.tail(list);
  let lesser  = R.filter( e => e < pivot , rest );
  let greater = R.filter( e => e >= pivot, rest );
  return R.concat( quicksort(lesser), R.prepend( pivot, quicksort(greater) ) );
}

var sorted = quicksort([6,4,2,3,1]);
console.log(sorted);
