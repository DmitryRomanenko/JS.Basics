// Завдання №1
// let admin;
// let name = 'Dima';
// admin = name;
// alert(admin);

// Завдання №2
// const BIRTHDAY = '18.04.1982'; можна
// const AGE = someCode(BIRTHDAY); можна

// Завдання №3
// let name = 'Ilya';
// alert(` hello ${1} `);       hello 1
// alert(` hello ${'name'} `);  hello name
// alert(` hello ${name} `);    hello Ilya

// Завдання №4
// '' + 1 + 0;    10
// '' - 1 + 0;    - 1
// true + false;  1
// 6 / '3';       2
// '2' * '3';     6
// 4 + 5 + 'px';  9px
// '$' + 4 + 5;   $45
// '4' - 2;       2
// '4px' - 2;     NaN
// 7 / 0;         Infinity
// ' – 9 ' + 5;    - 9 5
// ' – 9 ' - 5;   NaN
// null + 1;      1
// undefined + 1; NaN

// Завдання №5
// let a = 1;   2
// let b = 1;   2
// let c = ++a; 2
// let d = b++; 1

// Завдання №6
// let a = 2;
// let x = 1 + (a *= 2 );
// a === 4 x === 5

// Завдання №7
// 5 > 4                true
// "ананас" > "яблуко"  false
// "2" > "12"           true
// undefined == null    true
// undefined === null   false
// null == "\n0\n"      false
// null === +"\n0\n "   false

// Завдання №8
// let userName = prompt("ім'я");
// alert(userName);

// Завдання №9
// if ('0') {
//   alert(' Привіт');
// }
// так

// Завдання №10
// let question = prompt('Яка «офіційна» назва JavaScript ?');
// if (question === 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// Завдання №11
// let promptNum = prompt('Enter a num');
// if (promptNum > 0) {
//   alert(1);
// } else if (promptNum < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// Завдання №12
// let result;
// a + b < 4 ? 'Мало' : 'Багато';

// Завдання №13
// login == 'Співробітник'
//   ? (message = 'Привіт')
//   : login == 'Директор'
//   ? (message = ' Добрий день! ')
//   : login == ''
//   ? (message = 'Відсутній логін')
//   : (message = '');

// Завдання №14
// alert(null || 2 || undefined); 2

// Завдання №15
// alert(alert(1) || 2 || alert(3)); 1 2

// Завдання №16
// alert(1 && null && 2); null

// Завдання №17
// alert(alert(1) && alert(2)); 1 undefined

// Завдання №18
// alert(null || (2 && 3) || 4); 3

// Завдання №19
// if (age >= 14 && age <= 90)

// Завдання №20
// if (!age >= 14 || !age <= 90)
// if (age <= 14 || age >= 90)

// Завдання №21
// if (-1 || 0) alert('first');             'first'
// if (-1 && 0) alert('second');            не виконується
// if (null || (-1 && 1)) alert('third');  'third'

// Завдання №22
// let login = prompt('логін');
// if (login === 'Адмін') {
//   let password = prompt('password');
//   if (password === 'я головний') {
//     alert('Здрастуйте');
//   } else if (!password) {
//     alert('Скасовано');
//   } else {
//     alert('Невірний пароль');
//   }
// } else if (!login) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }

// Завдання №23
// if (browser === 'Edge') {
//   alert(" You've got the Edge! ");
// } else if (
//   browser === 'Chrome' ||
//   browser === 'Firefox' ||
//   browser === 'Safari' ||
//   browser === 'Opera'
// ) {
//   alert(' Okay we support these browsers too');
// } else {
//   alert(' We hope that this page looks ok!');
// }

// Завдання №24
// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }

// Завдання №25
// let num = 5;
// num > 0 ? num++ : num;
// alert(num);

// Завдання №26
// let num = -5;
// num > 0 ? num++ : (num = num - 2);
// alert(num);

// Завдання №27
// let num = 0;
// if (num > 0) {
//   num++;
// } else if (num < 0) {
//   num = num - 2;
// } else {
//   num = 10;
// }
// alert(num);

// Завдання №28
// let a = 4;
// let b = -2;
// let c = 1;
// let count = 0;
// a > 0 ? count++ : count;
// b > 0 ? count++ : count;
// c > 0 ? count++ : count;

// Завдання №29
// let a = 4;
// let b = -2;
// let c = 0;
// let count = 0;
// a > 0 || a < 0 ? count++ : count;
// b > 0 || b < 0 ? count++ : count;
// c > 0 || c < 0 ? count++ : count;

// Завдання №30
// let a = 5;
// let b = 2;
// let max = a > b ? a : b;

// Завдання №31
// let a = 5;
// let b = 2;
// let min = a < b ? a : b;

// Завдання №32
// let a = 5;
// let b = 2;
// let min = a < b ? a : b;
// let max = a > b ? a : b;
// alert(max);
// alert(min);

// Завдання №33
// let A = 5;
// let B = 2;
// if (A > B) {
//   let C = A;
//   A = B;
//   B = C;
//   alert(A);
//   alert(B);
// }

// Завдання №34
// let A = 4;
// let B = 5;
// if (A != B) {
//   let sum = A + B;
//   A = sum;
//   B = sum;
// } else {
//   A = 0;
//   B = 0;
// }
// alert(A);
// alert(B);

// Завдання №35
// let A = 4;
// let B = 5;
// if (A != B) {
//   let max = A > B ? A : B;
//   A = max;
//   B = max;
// } else {
//   A = 0;
//   B = 0;
// }
// alert(A);
// alert(B);

// Завдання №36
// let a = 5,
//   b = 10,
//   c = 45;
// let min = a < b ? (a < c ? a : c) : b < c ? b : c;
// alert(min);

// Завдання №37
// let a = 10;
// let b = 20;
// let c = 19;
// if (a > b && c > b) {
//   alert(b);
// } else if (b > c && a > c) {
//   alert(c);
// } else if (b > a && c > a) {
//   alert(a);
// }

// Завдання №38
// let a = 5,
//   b = 10,
//   c = 45;
// let max = a > b ? (a > c ? a : c) : b > c ? b : c;
// let min = a < b ? (a < c ? a : c) : b < c ? b : c;
// alert(min);
// alert(max);

// Завдання №39
// let a = 10;
// let b = 12;
// let c = 8;
// let sum;
// if (a > b && c > b) {
//   sum = a + c;
// } else if (b > a && c > a) {
//   sum = b + c;
// } else if (a > c && b > c) {
//   sum = a + b;
// }

// Завдання №40
// let a = 10;
// let b = 15;
// let c = 15;
// if (a === b) {
//   alert(c);
// } else if (b === c) {
//   alert(a);
// } else if (a === c) {
//   alert(b);
// }
