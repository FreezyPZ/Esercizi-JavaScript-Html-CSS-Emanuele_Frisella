function memoize(fn) {
  let cache = {};
  if (fn in cache){  
    console.log("Fetching from cache for",fn);
    console.log(cache);
    return cache;
  }
  else{
    console.log("Calculating result for", fn);
    factorial(fn);
    return factorial;

  }
    
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
