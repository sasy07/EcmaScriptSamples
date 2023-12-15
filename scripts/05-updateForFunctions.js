// default parameter
function getSum(a, b, c = 's') {
    if (c === 's') return a + b;
    else if (c === 'm') return a * b;
  }
  
  const result1 = getSum(2, 6);
  console.log(result1);
  
  //////////////////////////
  
  //Rest Operator  Arguments
  
  function getMaxArguments(maxNumber) {
    let max = 0;
    //arguments[i] = maxNumber
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < maxNumber && arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  const result2 = getMaxArguments(70, 80, 60, 55, 88, 90);
  console.log(result2);
  ////////////////////////////////
  
  //Rest Operator ...numList
  function getMaxRest(maxNumber, ...numList) {
    let max = 0;
    numList.filter(function (number) {
      if (number < maxNumber && number > max) max = number;
    });
    return max;
  }
  const result3 = getMaxRest(70, 80, 60, 55, 88, 90);
  console.log(result3);
  