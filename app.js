// version 0.5

// name army
const nameArmy = document.getElementById('nicname')
let name = '';
name = prompt('Назовите отряд:'); 
if ((name == '') || (name == null)) {
  if (name == null) {}
  for (;;) {
    alert('Нельзя называть отряд без имени');
    name = prompt('Назовите отряд');
    if (name != null && name != '') break;
  }
  nameArmy.innerHTML = 'Имя отряда: ' + name;
}
nameArmy.innerHTML = 'Имя отряда: ' + name;

// stop amountArmyOneSeT
let tOne;
function stopOne() {
  clearInterval(tOne);
}
// stop amountArmytwoSeT
let tTwo;
function stopTwo() {
  clearInterval(tTwo);
}
// stop amountArmyThereSeT
let tThere;
function stopThere() {
  clearInterval(tThere);
}
// smooth website launch
setTimeout(function(){
  document.body.classList.add('body_visible');
}, 50)

// my army variables
const amountArmy = document.getElementById('amount-army');
let warriors = 0;

// army one variables
const amountArmyOne = document.getElementById('power-one');
const btnAttackOne = document.getElementById('attack-one');
let warriorsOne = 0;

// army two variables
const amountArmyTwo = document.getElementById('power-two');
const btnAttackTwo = document.getElementById('attack-two');
let warriorsTwo = 0;

// army there variables
const amountArmyThere = document.getElementById('power-there');
const btnAttackThere = document.getElementById('attack-there');
let warriorsThere = 0;

// my army logick
function trainArmy() {
  // sound for train
  let audio = new Audio();
  audio.src = 'effect/traning.mp3';
  audio.autoplay = true;
  amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
  warriors++;
}
// army one logick
function amountArmyOneSet() {
  amountArmyOne.innerHTML = 'Количество Армии: ' + warriorsOne;
  warriorsOne++;
} 
tOne = setInterval(amountArmyOneSet, 650);
// army two logick
function amountArmyTwoSet() {
  amountArmyTwo.innerHTML = 'Количество Армии: ' + warriorsTwo;
  warriorsTwo++
}
tTwo = setInterval(amountArmyTwoSet, 600);
// army there logick
function amountArmyThereSet() {
  amountArmyThere.innerHTML = 'Количество Армии: ' + warriorsThere;
  warriorsThere++;
}
tThere = setInterval(amountArmyThereSet, 550)
// random number
let mth = Math.floor(Math.random() * 40);
// attack army one logick
// variables for the overall result
let resultArmy = 0;
let resultArmyOne = 0;
// call the function in index.html on line of code: 49
function attackEnemyOne() {
  // sound for attack
  let audioAttack = new Audio();
  audioAttack.src = 'effect/attack.mp3';
  audioAttack.autoplay = true;
  // result of two 'army'
  resultArmy = warriors - warriorsOne;
  resultArmyOne = warriorsOne - warriors;
  // chance of reducing the total number of "warriors"
  if ((mth == 2) || (mth == 10) || (mth == 3) || (mth == 12) || (mth == 30)) {
    alert('Войско ослабло, Потеря 20 войнов!');
    resultArmy = resultArmy - 20;
  }
  warriors = resultArmy;
  warriorsOne = resultArmyOne;
  if (resultArmyOne == 0) {
    warriorsOne = 0;
    resultArmyOne = 0;
  }
  amountArmy.innerHTML = 'Общие кол-во армии:' + ' ' + resultArmy;
  amountArmyOne.innerHTML = 'Количество Армии:' + ' ' + resultArmyOne;
  // Conditions for function attackEnemyOne()
  if (warriors < 0) {
    alert('Войско полностью погибло в результате нападения на "Кузнеца", Поражение !');
    let result = confirm('Открыть новую вкладку ?')
    if (result == true) {
      window.open("index.html");
    } if (result == false) {
      amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
      amountArmyThere.innerHTML = 'Вы проиграли';
      amountArmyOne.innerHTML = 'Отряд ' + name + ' повержен';
      amountArmyTwo.innerHTML = 'Вы проиграли';
      warriors = 0;
      amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
      stopThere();
      stopTwo();
      stopOne();
    }
  } else if (resultArmyOne < 0) {
    amountArmyOne.innerHTML = 'Враг повержен';
    stopOne();
    // code delete onlclick (off)
    btnAttackOne.removeAttribute('onclick');
  }
}
// attack army two logick
// variables for the overall result
let resultArmyTwo = 0;
// call the function in index.html on line of code: 43
function attackEnemyTwo() {
  // sound for attack
  let audioAttack = new Audio();
  audioAttack.src = 'effect/attack.mp3';
  audioAttack.autoplay = true;
  //result of two army
  resultArmy = warriors - warriorsTwo;
  resultArmyTwo = warriorsTwo - warriors;
  //chance of reducing the total numver of "warriors"
  if ((mth == 20) || (mth == 30) || (mth == 40) || (mth == 12) || (mth == 30)) {
    alert('Потеря 40 войнов!');
    resultArmy = resultArmy - 20;
  }
  warriors = resultArmy;
  warriorTwo = resultArmyTwo;
  if (resultArmyTwo == 0) {
    warriorsTwo = 0;
    resultArmyTwo = 0;
  }
  amountArmy.innerHTML = 'Общие кол-во армии:' + ' ' + resultArmy;
  amountArmyTwo.innerHTML = 'Количество Армии: ' + ' ' + resultArmyTwo;
  // Conditions for function attackEnemyOne()
  if (warriors < 0) {
    alert('Войско полностью погибло в результате нападения на "Повстанца", Поражение !');
    let result = confirm('Открыть новую вкладку ?')
    if (result == true) {
      window.open("index.html");
    } if (result == false) {
      amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
      amountArmyOne.innerHTML = 'Вы проиграли';
      amountArmyTwo.innerHTML = 'Отряд "' + name + '" повержен';
      amountArmyThere.innerHTML = 'Вы проиграли';
      warriors = 0;
      amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
      stopThere();
      stopTwo();
      stopOne();
    }
  } else if (resultArmyTwo < 0) {
    resultArmyTwo = 0;
    amountArmyTwo.innerHTML = 'Враг повержен';
    stopTwo();
    // code delete onlclick (off)
    btnAttackTwo.removeAttribute('onclick');
  }
}
// attack army there logick
// variables for the overall result
let resultArmyThere = 0;
// call the function in index.html on line of code: 43
function attackEnemyThere() {
  // sound for attack
  let audioAttack = new Audio();
  audioAttack.src = 'effect/attack.mp3';
  audioAttack.autoplay = true;
  //result of there army
  resultArmy = warriors - warriorsThere;
  resultArmyThere = warriorsThere - warriors;
  //chance of reducing the total number of "warriors"
  if ((mth == 20) || (mth == 30) || (mth == 40) || (mth == 12) || (mth == 30)) {
    alert('Потеря 20 войнов!');
    resultArmy = resultArmy - 40;
  }
  warriors = resultArmy;
  warriorThere = resultArmyThere;
  if (resultArmyThere == 0) {
    warriorsThere = 0;
    resultArmyThere = 0;
  }
  amountArmy.innerHTML = 'Общие кол-во армии:' + ' ' + resultArmy;
  amountArmyThere.innerHTML = 'Количество Армии: ' + ' ' + resultArmyThere;
  // Conditions for function attackEnemyOne()
  if (warriors < 0) {
    amountArmyOne.innerHTML = 'Количество Армии: ' + warriorsOne;
    warriorsOne = 0;
    alert('Войско полностью погибло в результате нападения на "Генерала", Поражение !');
    warriors = 0;
    amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
    let result = confirm('Открыть новую вкладку ?')
    if (result == true) {
      window.open("index.html");
    } if (result == false) {
      warriors = 0;
      amountArmy.innerHTML = 'Общие кол-во армии: ' + warriors;
      amountArmyThere.innerHTML = 'Отряд' + name + 'повержен';
      amountArmyTwo.innerHTML = 'Враг повержен';
      amountArmyOne.innerHTML = 'Враг повержен';
      stopThere();
      stopTwo();
      stopOne();
    }
  } else if (resultArmyThere < 0) {
      amountArmyThere.innerHTML = 'Враг повержен';
      stopThere();
    // code delete onlclick (off)
    btnAttackThere.removeAttribute('onclick');
  }
}
