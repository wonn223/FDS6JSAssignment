// #13. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 
// numberOfPrime 함수를 완성하라.

function gcdlcm(a, b) {
  // 약수를 넣을 변수 생성
  var max_a = [];
  var max_b = [];
  // 약수를 만족하는 값을 배열에 할당 
  for (var i = 1; i <= a; i++) {
    a % i ? max_a.push(i) : 0;
  }
  console.log(max_a);

  for (var i = 1; i <= b; i++) {
    b % i ? max_b.push(i) : 0;
  }
  console.log(max_b);
  // 
  var max_Number = [];
  for (var i = 0; i < max_a.length; i++) {
    for (var j = 0; j < max_b.length; j++) {
      if (max_a[i] === max_b[j]) {
        max_Number.push(max_a[i]);
      }
    }
  }
  console.log(max_Number);

  var divisor = max_Number.pop()
  var multiple = (a * b) / divisor

  var result = [divisor, multiple];
  return result;
}

console.log(gcdlcm(8, 12)); // [3, 12]


// #14. 피보나치 수
//   피보나치 수는 0 과 1 로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946...
//   2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라.예를 들어 n = 3 이라면 2 를 반환한다.

function fibonacci(n) {
  var arr = [0, 1];
  var sum = [];
  var i = 2
  while (i <= n) {
    sum = arr[i - 2] + arr[i - 1];
    arr = arr.concat(sum);
    i++;
  }
  return arr[n];
}
// console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

// 15. 하샤드 수
// 하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.예를들어 18 의 자릿수 합은 1 + 8 = 9 이고,
//   18 은 9 로 나누어 떨어지므로 18 은 하샤드 수이다.
// 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90,
// 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156,
// 162, 171, 180, 190, 192, 195, 198, 200
// Harshad함수는 양의 정수 n을 매개변수로 입력받는다.이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
// 예를들어 n이 10, 12, 18 이면 True를 리턴 11, 13 이면 False를 리턴한다.


function isHarshad(n) {
  var strtoNum = n.toString().split('');
  // console.log(strtoNum);
  var sum = 0;
  for (var i = 0; i < strtoNum.length; i++) {
    sum += Number.parseInt(strtoNum[i]);
  }
  var result = n % sum === 0 ? true : false;
  return result;
}
console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false