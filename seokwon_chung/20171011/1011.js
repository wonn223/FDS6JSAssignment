// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다.
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y' 의 갯수를 비교해 같으면 true,
// 다르면 false를 리턴하도록 함수를 완성하라.
// 'p', 'y'모두 하나도 없는 경우는 항상 true를 리턴한다. 
// 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy' 라면 false를 리턴한다.

function numPY(s) {
  s = s ? s : '';
  var sUpperCase = s.toUpperCase();
  var regexr = /p/ig;
  var regexr2 = /y/ig;
  var numP = sUpperCase.match(regexr);
  var numY = sUpperCase.match(regexr2);
  return numP == null ? true : numP.length == numY.length
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true

// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 
// 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.
// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  var regexr = ' ';
  var split = s.split(regexr)
  var weirdChar = [];
  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < split[i].length; j++) {
      j % 2 === 0 ? console.log(weirdChar += split[i].charAt(j).toUpperCase()) :
        console.log(weirdChar += split[i].charAt(j).toLowerCase());
    }
    weirdChar += ' ';
  }
}
console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'