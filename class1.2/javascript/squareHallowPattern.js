function partialPrintRow(n) {
    let string = "";
    string = string + "*";
    for (let i = 0; i < n - 2; i++) {
      string = string + " ";
    }
    string = string + "*";
    console.log(string);
  }
  
  function printSingleFullRow(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      string = string + "*";
    }
    console.log(string);
  }
  
  function printWhole(n) {
    printSingleFullRow(n);
  
    for (let i = 0; i < n - 2; i++) {
      partialPrintRow(n);
    }
  
    printSingleFullRow(n);
  }
  
  printWhole(20);
  