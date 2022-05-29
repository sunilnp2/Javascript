const absValue = (number) => {
    if (number < 0) {
      return -number;
    }
    return number;
  }

let a = absValue(5);
console.log(a);