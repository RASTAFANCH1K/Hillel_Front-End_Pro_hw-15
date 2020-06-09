// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// EXERCISE-1:
// Создать класс функция конструктор которого принимает два параметра position, salary, 
// также создать одно private поле positions = ['software developer', 'hr manager', 'project manager'], getter(get функция)!
// которая смотрит на поле positions, и если в position есть одно из перечисленных то возвращает true иначе false
// ANSWER:

class Person {
  constructor(position, salary) {
    this.position = position;
    this.salary = salary;
  }

  #positions = ['software developer', 'hr manager', 'project manager'];

  get checkPosition() {
    let arr = this.#positions;
    return arr.some(el => el === this.position);
  }
}

let person = new Person('software developer', 5000);
person.checkPosition;

// EXERCISE-2:
// Есть класс App! Добавить две функции одна из них устанавливает product(создает поле product обьект с полем name, price), вторая функция получает price 
// и одно статическое свойство yearOfIssue
// ANSWER:

// 1:
class App {
  createProduct(name, price) {
    this.name = name;
    this.price = price;
  }
  // Если написать set createProduct(name, price), то будет ошибка:
  // Uncaught SyntaxError: Setter must have exactly one formal parameter.
  // Поэтому set я убрал.
  static yearOfIssue = 2020;

  get getPrice() {
    return this.price;
  }
}

let app = new App();
app.createProduct('iphone', 25000);
app.getPrice;

// 2:
class App {
  static yearOfIssue = 1999;

  set createProduct(product) {
    this.product = product;
  }

  get getPrice() {
    return this.product.price;
  }
}

const app = new App();
app.createProduct = {'name': 'iphone', 'price': 25000};
app.getPrice;

// EXERCISE-3:
// Пишем свой split и join))!
// ANSWER:

// split:
// Крч. предисловие к сплиту, я чуть не чокнулся пока его писал))
// Искал в нижних интернетах и на разных зарубежных форумах, как делают знающие люди...
// Как оказалось все херня, либо оно работает не так, либо там логика ни к черту, годной инфы как таковой маловато.
// Взял разные куски кода которые более менее подходили, и добавил немного своих, слепил ракету, которая полностью повторяет поведение
// встроенного сплита, прям то что я хотел!!!

String.prototype.myFuckingSplit = function(splitVal) {
  const string = this;
  let nextVal = '';
  const outputArr = [];

  for (let i = 0; i < string.length;) { 
    if (splitVal === '') {
      nextVal += string[i];
      outputArr.push(nextVal);
      nextVal = '';
      i++;
    } else if (string[i] === splitVal[0]) {
      let split_length_remaining = splitVal.length - 1;
      let split_length_passed = 1;
      let similarSplit = string[i];

      while(split_length_remaining) {
        if (string[i + split_length_passed] === splitVal[split_length_passed]) {
          similarSplit += string[i + split_length_passed];
          split_length_passed++;
          split_length_remaining--;
        } 
      }

      if (!split_length_remaining) {
        outputArr.push(nextVal);
        nextVal = '';
      } else  {
        nextVal += similarSplit;
      }

      i = i + split_length_passed;
    } else {
      nextVal += string[i];
      i++;
    }
  }

  if (splitVal !== '') {
    outputArr.push(nextVal);
  }

  return outputArr;
}

// Тут я сравниваю поведение моего Fucking сплита с поведением встроенного.
// Логов много, ибо пытался отобразить больше вариантов, чтобы был ВЕРНЯК!!!
// Цель у меня была - полностью повторить поведение встроенного сплита!

console.log("'abc'.prototype.myFuckingSplit('')", 'abc'.myFuckingSplit(''));
console.log("'abc'.prototype.split('')", 'abc'.split(''));



console.log("'abc'.prototype.myFuckingSplit('a')", 'abc'.myFuckingSplit('a'));
console.log("'abc'.prototype.split('a')", 'abc'.split('a'));

console.log("'abc'.prototype.myFuckingSplit('b')", 'abc'.myFuckingSplit('b'));
console.log("'abc'.prototype.split('b')", 'abc'.split('b'));

console.log("'abc'.prototype.myFuckingSplit('c')", 'abc'.myFuckingSplit('c'));
console.log("'abc'.prototype.split('c')", 'abc'.split('c'));



console.log("'abc'.prototype.myFuckingSplit('ab')", 'abc'.myFuckingSplit('ab'));
console.log("'abc'.prototype.split('ab')", 'abc'.split('ab'));

console.log("'abc'.prototype.myFuckingSplit('bc')", 'abc'.myFuckingSplit('bc'));
console.log("'abc'.prototype.split('bc')", 'abc'.split('bc'));

console.log("'abc'.prototype.myFuckingSplit('abc')", 'abc'.myFuckingSplit('abc'));
console.log("'abc'.prototype.split('abc')", 'abc'.split('abc'));



console.log("'a b c'.prototype.myFuckingSplit(' ')", 'a b c'.myFuckingSplit(' '));
console.log("'a b c'.prototype.split(' ')", 'a b c'.split(' '));



console.log("'a b c'.prototype.myFuckingSplit('a')", 'a b c'.myFuckingSplit('a'));
console.log("'a b c'.prototype.split('a')", 'a b c'.split('a'));

console.log("'a b c'.prototype.myFuckingSplit('b')", 'a b c'.myFuckingSplit('b'));
console.log("'a b c'.prototype.split('b')", 'a b c'.split('b'));

console.log("'a b c'.prototype.myFuckingSplit('c')", 'a b c'.myFuckingSplit('c'));
console.log("'a b c'.prototype.split('c')", 'a b c'.split('c'));



console.log("'a,b,c'.prototype.myFuckingSplit(',')", 'a,b,c'.myFuckingSplit(','));
console.log("'a,b,c'.prototype.split(',')", 'a,b,c'.split(','));



console.log("'a,b,c'.prototype.myFuckingSplit('a')", 'a,b,c'.myFuckingSplit('a'));
console.log("'a,b,c'.prototype.split('a')", 'a,b,c'.split('a'));

console.log("'a,b,c'.prototype.myFuckingSplit('b')", 'a,b,c'.myFuckingSplit('b'));
console.log("'a,b,c'.prototype.split('b')", 'a,b,c'.split('b'));

console.log("'a,b,c'.prototype.myFuckingSplit('c')", 'a,b,c'.myFuckingSplit('c'));
console.log("'a,b,c'.prototype.split('c')", 'a,b,c'.split('c'));



console.log("'a, b, c'.prototype.myFuckingSplit(', ')", 'a, b, c'.myFuckingSplit(', '));
console.log("'a, b, c'.prototype.split(', ')", 'a, b, c'.split(', '));



console.log("'a, b, c'.prototype.myFuckingSplit('a')", 'a, b, c'.myFuckingSplit('a'));
console.log("'a, b, c'.prototype.split('a')", 'a, b, c'.split('a'));

console.log("'a, b, c'.prototype.myFuckingSplit('b')", 'a, b, c'.myFuckingSplit('b'));
console.log("'a, b, c'.prototype.split('b')", 'a, b, c'.split('b'));

console.log("'a, b, c'.prototype.myFuckingSplit('c')", 'a, b, c'.myFuckingSplit('c'));
console.log("'a, b, c'.prototype.split('c')", 'a, b, c'.split('c'));



console.log("'aa, bb, cc'.prototype.myFuckingSplit('aa')", 'aa, bb, cc'.myFuckingSplit('aa'));
console.log("'aa, bb, cc'.prototype.split('aa')", 'aa, bb, cc'.split('aa'));

console.log("'aa, bb, cc'.prototype.myFuckingSplit('bb')", 'aa, bb, cc'.myFuckingSplit('bb'));
console.log("'aa, bb, cc'.prototype.split('bb')", 'aa, bb, cc'.split('bb'));

console.log("'aa, bb, cc'.prototype.myFuckingSplit('c')", 'aa, bb, cc'.myFuckingSplit('cc'));
console.log("'aa, bb, cc'.prototype.split('cc')", 'aa, bb, cc'.split('cc'));

// Возможно есть более элегантное и эффективное решение!? Однако я дофига перепробовал, так что ХЗ.
// КАК-ТО ТАК)))!!!

// join:

// Способ-1: тут я извращался как мог!
function join(arr, sep) {
  let str = '';

  arr.forEach((el, index) => {
    if (sep) {
      if (index + 1 === arr.length) {
        str += `${el}`;
      } else {
        str += `${el}${sep}`;
      }
    } else if (index + 1 === arr.length) {
      str += `${el}`;
    } else {
      str += `${el}`;
    }
  })

  return str;
}

join(['a', 'b', 'c'], ' + ');

// Способ-2: ну и адекватный варик!
function join(arr, sep) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + sep;
    } else {
      str += arr[i];
    }
  }

  return str;
}

join(['a', 'b', 'c'], ' + ');

// EXERCISE-4:
// Ну и на последок перепишем класс в вид самовыз функция которая возвращает функцию-конструктор
// ANSWER:

// class:
class NewApp {
  constructor(object) {
    this.object = object;
  }

  getObject() {
    return this.object; // добавил this
  }
}

let res = new NewApp({name: 'Vasia'});
res.getObject();

// LIFE (Immediately-Invoked Function Expression):

// Способ-1:
let NewApp = (function() {
  function NewApp(object) {
    this.object = object;
  }

  NewApp.prototype.getObject = function() {
    return this.object;
  }

  return NewApp;
})();

let res = new NewApp({name: 'Vasia'});
res.getObject();

// Способ-2:
let NewApp = (function() {
  function NewApp(object) {
    this.object = object;

    this.getObject = function() {
      return this.object;
    }
  }

  return NewApp;
})();

let res = new NewApp({name: 'Vasia'});
res.getObject();